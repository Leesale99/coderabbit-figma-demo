#!/usr/bin/env node
/**
 * Generate design-tokens.css from Figma exported token JSON files.
 *
 * Reads tokens from design-tokens/ folder and outputs a CSS file with:
 * - :root containing base tokens + light theme semantic colors (grouped by collection)
 * - [data-theme="dark"] override block for dark theme colors
 * - @media queries for responsive token overrides (tablet/mobile)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOKENS_DIR = path.join(__dirname, '..', 'design-tokens');
const OUTPUT_FILE = path.join(__dirname, '..', 'design-tokens.css');

// Base font size for rem calculations
const BASE_FONT_SIZE = 16;

// Token files to load
const TOKEN_FILES = {
  // Base/primitive tokens
  default: path.join(TOKENS_DIR, 'Default.tokens.json'),
  typographyPrimitives: path.join(TOKENS_DIR, 'Default.tokens 2.json'),
  typography: path.join(TOKENS_DIR, 'Mode 1.tokens.json'),
  colorPrimitives: path.join(TOKENS_DIR, 'Value.tokens.json'),
  // Semantic color tokens
  lightTheme: path.join(TOKENS_DIR, 'Color', 'SDS Light.tokens.json'),
  darkTheme: path.join(TOKENS_DIR, 'Color', 'SDS Dark.tokens.json'),
  // Responsive tokens
  desktop: path.join(TOKENS_DIR, 'Responsive', 'Desktop.tokens.json'),
  tablet: path.join(TOKENS_DIR, 'Responsive', 'Tablet.tokens.json'),
  mobile: path.join(TOKENS_DIR, 'Responsive', 'Mobile.tokens.json'),
};

// Patterns that should use rem units (typography, spacing)
const REM_PATTERNS = [
  /-space-(?!negative)/,  // spacing (positive only, negative handled separately)
  /-space-negative-/,     // negative spacing
  /-typography-.*-size/,  // font sizes
  /-scale-\d/,            // typography scale
  /-padding-/,            // padding
  /-radius-(?!full)/,     // border radius (except full which is 9999)
];

// Patterns that should stay as px (fixed pixel values)
const PX_PATTERNS = [
  /-depth-/,              // shadow depth
  /-stroke-/,             // stroke width
  /-icon-/,               // icon sizes
  /-blur-/,               // blur values
  /-width$/,              // explicit widths
  /-height$/,             // explicit heights
  /-radius-full$/,        // full radius (9999px)
];

// Scopes that indicate dimensional values
const DIMENSIONAL_SCOPES = [
  'FONT_SIZE',
  'WIDTH_HEIGHT',
  'GAP',
  'CORNER_RADIUS',
  'EFFECT_FLOAT',
];

// Collection groupings for organizing CSS output
const COLLECTIONS = [
  { name: 'Color Primitives', pattern: /^--sds-color-(brand|black|white|gray|slate|green|red|yellow|pink|blue)-\d/ },
  { name: 'Semantic Colors - Background', pattern: /^--sds-color-background-/ },
  { name: 'Semantic Colors - Border', pattern: /^--sds-color-border-/ },
  { name: 'Semantic Colors - Text', pattern: /^--sds-color-text-/ },
  { name: 'Semantic Colors - Icon', pattern: /^--sds-color-icon-/ },
  { name: 'Typography Primitives', pattern: /^--sds-typography-(family-|scale-|weight-)/ },
  { name: 'Typography Semantic', pattern: /^--sds-typography-/ },
  { name: 'Spacing', pattern: /^--sds-size-space-/ },
  { name: 'Border Radius', pattern: /^--sds-size-radius-/ },
  { name: 'Shadows & Depth', pattern: /^--sds-size-(depth|blur)-/ },
  { name: 'Stroke', pattern: /^--sds-size-stroke-/ },
  { name: 'Icons', pattern: /^--sds-size-icon-/ },
  { name: 'Responsive', pattern: /^--sds-responsive-/ },
  { name: 'Other', pattern: /.*/ }, // Catch-all for remaining tokens
];

/**
 * Convert alias name (e.g., "White/1000", "Gray/100") to CSS variable name
 */
function aliasNameToCssVar(aliasName, collectionName) {
  if (!aliasName) return null;
  
  // Handle color primitives: "White/1000" -> "--sds-color-white-1000"
  if (collectionName === 'Color Primitives') {
    const parts = aliasName.split('/');
    if (parts.length === 2) {
      const [colorName, shade] = parts;
      return `--sds-color-${colorName.toLowerCase()}-${shade}`;
    }
  }
  
  // Handle size primitives: "Space/400" -> "--sds-size-space-400"
  if (collectionName === 'Size') {
    const parts = aliasName.split('/');
    if (parts.length >= 2) {
      return `--sds-size-${parts.map(p => p.toLowerCase().replace(/\s+/g, '-')).join('-')}`;
    }
  }
  
  // Handle typography primitives
  if (collectionName === 'Typography Primitives') {
    // "Scale 03" -> "--sds-typography-scale-03"
    // "Family Sans" -> "--sds-typography-family-sans"
    // "Weight Bold" -> "--sds-typography-weight-bold"
    const normalized = aliasName.toLowerCase().replace(/\s+/g, '-');
    return `--sds-typography-${normalized}`;
  }
  
  return null;
}

/**
 * Recursively traverse a token object and extract CSS variables
 */
function extractTokens(obj, tokens = {}, options = {}) {
  if (!obj || typeof obj !== 'object') return tokens;

  // Check if this is a token leaf node (has $value and codeSyntax)
  if (obj.$value !== undefined && obj.$extensions?.['com.figma.codeSyntax']?.WEB) {
    const varName = obj.$extensions['com.figma.codeSyntax'].WEB;
    // Extract the variable name from var(--name)
    const match = varName.match(/var\(([^)]+)\)/);
    if (match) {
      const cssVarName = match[1];
      const scopes = obj.$extensions['com.figma.scopes'] || [];
      const aliasData = obj.$extensions['com.figma.aliasData'];
      
      let aliasRef = null;
      if (aliasData && aliasData.targetVariableName && aliasData.targetVariableSetName) {
        aliasRef = aliasNameToCssVar(aliasData.targetVariableName, aliasData.targetVariableSetName);
      }
      
      tokens[cssVarName] = {
        value: obj.$value,
        type: obj.$type,
        scopes,
        aliasRef,
        isPrimitive: options.isPrimitive || false,
      };
    }
    return tokens;
  }

  // Recurse into child properties
  for (const key of Object.keys(obj)) {
    if (key.startsWith('$')) continue; // Skip meta properties
    extractTokens(obj[key], tokens, options);
  }

  return tokens;
}

/**
 * Convert px to rem
 */
function pxToRem(px) {
  const rem = px / BASE_FONT_SIZE;
  // Round to 4 decimal places to avoid floating point issues
  return `${Math.round(rem * 10000) / 10000}rem`;
}

/**
 * Serialize a token value to CSS
 */
function serializeValue(varName, token, primitiveVars = null) {
  const { value, type, scopes, aliasRef, isPrimitive } = token;

  // If this token references a primitive and we have the primitives map, use var()
  if (!isPrimitive && aliasRef && primitiveVars && primitiveVars.has(aliasRef)) {
    return `var(${aliasRef})`;
  }

  // Handle color type
  if (type === 'color' && typeof value === 'object') {
    if (value.alpha !== undefined && value.alpha < 1) {
      // Use rgba for semi-transparent colors
      const [r, g, b] = value.components.map((c) => Math.round(c * 255));
      const a = Math.round(value.alpha * 100) / 100;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    return value.hex;
  }

  // Handle number type
  if (type === 'number' && typeof value === 'number') {
    // Special cases: unitless values
    if (
      varName.includes('-weight') ||
      varName.includes('-font-weight') ||
      varName.includes('-responsive-scale') ||
      varName.includes('-alpha')
    ) {
      return String(value);
    }

    // Check if this should use rem (typography, spacing)
    const needsRem = REM_PATTERNS.some((pattern) => pattern.test(varName));
    
    // Check if this should stay as px
    const needsPx = PX_PATTERNS.some((pattern) => pattern.test(varName)) ||
      scopes.some((scope) => DIMENSIONAL_SCOPES.includes(scope) && !needsRem);

    // Font sizes from scopes should use rem
    if (scopes.includes('FONT_SIZE')) {
      return pxToRem(value);
    }

    // Gap/spacing should use rem
    if (scopes.includes('GAP') && value !== 0) {
      return pxToRem(value);
    }

    // Corner radius uses rem (except full)
    if (scopes.includes('CORNER_RADIUS') && value < 9000) {
      return pxToRem(value);
    }

    if (needsRem && value !== 0) {
      return pxToRem(value);
    }

    if (needsPx) {
      return `${value}px`;
    }

    // Zero values don't need units
    if (value === 0) {
      return '0';
    }

    return String(value);
  }

  // Handle string type
  if (type === 'string' && typeof value === 'string') {
    // Quote strings with spaces
    if (value.includes(' ')) {
      return `"${value}"`;
    }
    return value;
  }

  // Fallback: return raw value
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}

/**
 * Group tokens by collection
 */
function groupTokensByCollection(tokens) {
  const groups = {};
  const usedTokens = new Set();

  for (const collection of COLLECTIONS) {
    groups[collection.name] = {};
  }

  const sortedNames = Object.keys(tokens).sort();

  for (const varName of sortedNames) {
    if (usedTokens.has(varName)) continue;

    for (const collection of COLLECTIONS) {
      if (collection.pattern.test(varName)) {
        groups[collection.name][varName] = tokens[varName];
        usedTokens.add(varName);
        break;
      }
    }
  }

  return groups;
}

/**
 * Generate CSS block from tokens map (ungrouped, for overrides)
 */
function generateCSSBlockSimple(tokens, indent = '  ', primitiveVars = null) {
  const sortedNames = Object.keys(tokens).sort();
  const lines = sortedNames.map((varName) => {
    const cssValue = serializeValue(varName, tokens[varName], primitiveVars);
    return `${indent}${varName}: ${cssValue};`;
  });
  return lines.join('\n');
}

/**
 * Generate CSS block from tokens map, grouped by collection
 */
function generateCSSBlock(tokens, indent = '  ', grouped = true, primitiveVars = null) {
  if (!grouped) {
    return generateCSSBlockSimple(tokens, indent, primitiveVars);
  }

  const groups = groupTokensByCollection(tokens);
  const sections = [];

  for (const collection of COLLECTIONS) {
    const collectionTokens = groups[collection.name];
    const tokenNames = Object.keys(collectionTokens);
    
    if (tokenNames.length === 0) continue;

    const lines = [`${indent}/* ${collection.name} */`];
    for (const varName of tokenNames.sort()) {
      const cssValue = serializeValue(varName, collectionTokens[varName], primitiveVars);
      lines.push(`${indent}${varName}: ${cssValue};`);
    }
    sections.push(lines.join('\n'));
  }

  return sections.join('\n\n');
}

/**
 * Load and parse a token file
 */
function loadTokenFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (err) {
    console.warn(`Warning: Could not load ${filePath}: ${err.message}`);
    return {};
  }
}

/**
 * Main generation function
 */
function generateCSS() {
  console.log('Loading token files...');

  // Load all token files
  const defaultTokens = loadTokenFile(TOKEN_FILES.default);
  const typoPrimTokens = loadTokenFile(TOKEN_FILES.typographyPrimitives);
  const typoTokens = loadTokenFile(TOKEN_FILES.typography);
  const colorPrimTokens = loadTokenFile(TOKEN_FILES.colorPrimitives);
  const lightTokens = loadTokenFile(TOKEN_FILES.lightTheme);
  const darkTokens = loadTokenFile(TOKEN_FILES.darkTheme);
  const desktopTokens = loadTokenFile(TOKEN_FILES.desktop);
  const tabletTokens = loadTokenFile(TOKEN_FILES.tablet);
  const mobileTokens = loadTokenFile(TOKEN_FILES.mobile);

  console.log('Extracting tokens...');

  // Extract CSS variables from each source
  // Primitives are marked so they output raw values
  const baseTokensMap = {};
  extractTokens(defaultTokens, baseTokensMap, { isPrimitive: true });  // Size primitives
  extractTokens(typoPrimTokens, baseTokensMap, { isPrimitive: true }); // Typography primitives
  extractTokens(typoTokens, baseTokensMap);                            // Typography semantic
  extractTokens(colorPrimTokens, baseTokensMap, { isPrimitive: true }); // Color primitives

  const lightTokensMap = {};
  extractTokens(lightTokens, lightTokensMap); // Semantic colors (not primitives)

  const darkTokensMap = {};
  extractTokens(darkTokens, darkTokensMap); // Semantic colors (not primitives)

  const desktopTokensMap = {};
  extractTokens(desktopTokens, desktopTokensMap, { isPrimitive: true });

  const tabletTokensMap = {};
  extractTokens(tabletTokens, tabletTokensMap, { isPrimitive: true });

  const mobileTokensMap = {};
  extractTokens(mobileTokens, mobileTokensMap, { isPrimitive: true });
  
  // Build a set of all primitive variable names for reference resolution
  const primitiveVars = new Set();
  for (const [varName, token] of Object.entries(baseTokensMap)) {
    if (token.isPrimitive) {
      primitiveVars.add(varName);
    }
  }
  // Also add light theme semantic colors to primitives set since dark theme might reference them
  for (const varName of Object.keys(lightTokensMap)) {
    primitiveVars.add(varName);
  }

  console.log(`Found ${Object.keys(baseTokensMap).length} base tokens`);
  console.log(`Found ${Object.keys(lightTokensMap).length} light theme tokens`);
  console.log(`Found ${Object.keys(darkTokensMap).length} dark theme tokens`);
  console.log(`Found ${Object.keys(desktopTokensMap).length} desktop tokens`);
  console.log(`Found ${Object.keys(tabletTokensMap).length} tablet tokens`);
  console.log(`Found ${Object.keys(mobileTokensMap).length} mobile tokens`);

  // Build the CSS output
  const cssBlocks = [];

  // Header comment
  cssBlocks.push(`/**
 * Design Tokens CSS
 * Auto-generated from Figma design tokens
 * 
 * Usage:
 * - Default theme (light) is applied to :root
 * - Add data-theme="dark" to switch to dark mode
 * - Responsive tokens auto-adjust via media queries
 * 
 * Units:
 * - Typography and spacing use rem (base: ${BASE_FONT_SIZE}px)
 * - Fixed dimensions (icons, strokes, shadows) use px
 */`);

  // :root block with base + light theme tokens (merged, light overrides base)
  const rootTokens = { ...baseTokensMap, ...desktopTokensMap, ...lightTokensMap };
  cssBlocks.push(`:root {\n${generateCSSBlock(rootTokens, '  ', true, primitiveVars)}\n}`);

  // Dark theme override block - only include tokens that differ from light
  const darkOverrides = {};
  for (const [varName, token] of Object.entries(darkTokensMap)) {
    const lightToken = lightTokensMap[varName];
    if (lightToken) {
      const lightValue = serializeValue(varName, lightToken, primitiveVars);
      const darkValue = serializeValue(varName, token, primitiveVars);
      if (lightValue !== darkValue) {
        darkOverrides[varName] = token;
      }
    } else {
      // Token only exists in dark theme
      darkOverrides[varName] = token;
    }
  }

  if (Object.keys(darkOverrides).length > 0) {
    cssBlocks.push(`[data-theme="dark"] {\n${generateCSSBlock(darkOverrides, '  ', false, primitiveVars)}\n}`);
  }

  // Tablet media query (max-width based on desktop width)
  const tabletWidth = tabletTokensMap['--sds-responsive-device-width']?.value || 768;
  const tabletOverrides = {};
  for (const [varName, token] of Object.entries(tabletTokensMap)) {
    const desktopToken = desktopTokensMap[varName];
    if (desktopToken) {
      const desktopValue = serializeValue(varName, desktopToken, primitiveVars);
      const tabletValue = serializeValue(varName, token, primitiveVars);
      if (desktopValue !== tabletValue) {
        tabletOverrides[varName] = token;
      }
    } else {
      tabletOverrides[varName] = token;
    }
  }

  if (Object.keys(tabletOverrides).length > 0) {
    cssBlocks.push(`@media (max-width: ${tabletWidth}px) {\n  :root {\n${generateCSSBlock(tabletOverrides, '    ', false, primitiveVars)}\n  }\n}`);
  }

  // Mobile media query
  const mobileWidth = mobileTokensMap['--sds-responsive-device-width']?.value || 375;
  const mobileOverrides = {};
  for (const [varName, token] of Object.entries(mobileTokensMap)) {
    const desktopToken = desktopTokensMap[varName];
    if (desktopToken) {
      const desktopValue = serializeValue(varName, desktopToken, primitiveVars);
      const mobileValue = serializeValue(varName, token, primitiveVars);
      if (desktopValue !== mobileValue) {
        mobileOverrides[varName] = token;
      }
    } else {
      mobileOverrides[varName] = token;
    }
  }

  if (Object.keys(mobileOverrides).length > 0) {
    cssBlocks.push(`@media (max-width: ${mobileWidth}px) {\n  :root {\n${generateCSSBlock(mobileOverrides, '    ', false, primitiveVars)}\n  }\n}`);
  }

  // Write output file
  const cssContent = cssBlocks.join('\n\n') + '\n';
  fs.writeFileSync(OUTPUT_FILE, cssContent, 'utf8');

  console.log(`\nGenerated ${OUTPUT_FILE}`);
  console.log(`Total CSS size: ${(cssContent.length / 1024).toFixed(2)} KB`);
}

// Run
generateCSS();
