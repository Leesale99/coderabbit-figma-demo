#!/usr/bin/env node
/**
 * Verify that all SDS CSS variables in :root are referenced in tailwind.config.js.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, "..");
const TOKENS_CSS = path.join(ROOT_DIR, "design-tokens.css");
const TAILWIND_CONFIG = path.join(ROOT_DIR, "tailwind.config.js");

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function extractRootVars(cssText) {
  const rootMatch = cssText.match(/:root\s*\{([\s\S]*?)\}\n\n\[data-theme="dark"\]/);
  const block = rootMatch ? rootMatch[1] : cssText;
  return new Set(block.match(/--sds-[a-z0-9-]+/g) || []);
}

function extractConfigVars(configText) {
  const matches = configText.match(/var\(--sds-[a-z0-9-]+\)/g) || [];
  return new Set(matches.map((v) => v.slice(4, -1)));
}

function main() {
  const cssText = readFile(TOKENS_CSS);
  const configText = readFile(TAILWIND_CONFIG);

  const varsInCss = extractRootVars(cssText);
  const varsInConfig = extractConfigVars(configText);

  const missing = [...varsInCss].filter((v) => !varsInConfig.has(v)).sort();
  const extra = [...varsInConfig].filter((v) => !varsInCss.has(v)).sort();

  console.log(`CSS vars in :root: ${varsInCss.size}`);
  console.log(`Vars referenced in tailwind.config.js: ${varsInConfig.size}`);
  console.log(`Missing in tailwind.config.js: ${missing.length}`);
  console.log(`Extra in tailwind.config.js: ${extra.length}`);

  if (missing.length) {
    console.log("\nMissing vars (first 50):");
    missing.slice(0, 50).forEach((v) => console.log(`  ${v}`));
  }

  if (extra.length) {
    console.log("\nExtra vars (first 50):");
    extra.slice(0, 50).forEach((v) => console.log(`  ${v}`));
  }

  if (missing.length || extra.length) {
    process.exitCode = 1;
  }
}

main();
