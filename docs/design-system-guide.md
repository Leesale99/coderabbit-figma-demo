# Simple Design System - Tailwind Guide

This guide maps the Simple Design System (SDS) CSS variables in `design-tokens.css`
to Tailwind theme tokens and shows how to use them in the app.

## Overview

- Source of truth: `design-tokens.css` (generated from Figma).
- Light theme uses `:root`. Dark theme uses `[data-theme="dark"]`.
- Tailwind mappings live in `tailwind.config.js`.
- CSS variable names remain unchanged (prefixed with `--sds-`).

## Tailwind Mapping Philosophy

- Colors: expose both primitives (e.g. `brand-500`) and semantic tokens
  (e.g. `bg-brand`, `text-danger`, `border-warning-secondary`).
- Typography: expose semantic sizes (`text-body-md`) and scale primitives
  (`text-scale-03`).
- Spacing: map SDS spacing values to Tailwind's numeric scale
  (`p-4`, `gap-6`, etc).
- Radius, stroke, blur: mapped directly.

## Usage Examples

```tsx
<div className="bg-brand text-brand-on-brand px-4 py-2 rounded-md">
  Primary CTA
</div>
```

```tsx
<p className="text-body-md font-semibold text-default">
  Body text, strong
</p>
```

```tsx
<div className="border border-default rounded-sm p-3">
  Card with default border
</div>
```

```tsx
<div className="w-icon-md h-icon-md bg-utilities-measurement" />
```

## Color Palette Visualization Reference

Use this snippet in a Storybook or a local page to preview the palette:

```html
<div class="grid grid-cols-5 gap-4">
  <div class="h-10 bg-brand-100"></div>
  <div class="h-10 bg-brand-300"></div>
  <div class="h-10 bg-brand-500"></div>
  <div class="h-10 bg-brand-700"></div>
  <div class="h-10 bg-brand-900"></div>
</div>
```

## Mapping Tables

> Figma variable names are inferred from SDS naming. If the Figma labels differ,
> update the first column only (CSS and Tailwind references remain correct).

### Color Primitives

| Figma Variable | CSS Variable | Tailwind Class |
| --- | --- | --- |
| Color/Black/100 | `--sds-color-black-100` | `text-black-100` |
| Color/Black/200 | `--sds-color-black-200` | `text-black-200` |
| Color/Black/300 | `--sds-color-black-300` | `text-black-300` |
| Color/Black/400 | `--sds-color-black-400` | `text-black-400` |
| Color/Black/500 | `--sds-color-black-500` | `text-black-500` |
| Color/Black/600 | `--sds-color-black-600` | `text-black-600` |
| Color/Black/700 | `--sds-color-black-700` | `text-black-700` |
| Color/Black/800 | `--sds-color-black-800` | `text-black-800` |
| Color/Black/900 | `--sds-color-black-900` | `text-black-900` |
| Color/Black/1000 | `--sds-color-black-1000` | `text-black-1000` |
| Color/Brand/100 | `--sds-color-brand-100` | `text-brand-100` |
| Color/Brand/200 | `--sds-color-brand-200` | `text-brand-200` |
| Color/Brand/300 | `--sds-color-brand-300` | `text-brand-300` |
| Color/Brand/400 | `--sds-color-brand-400` | `text-brand-400` |
| Color/Brand/500 | `--sds-color-brand-500` | `text-brand-500` |
| Color/Brand/600 | `--sds-color-brand-600` | `text-brand-600` |
| Color/Brand/700 | `--sds-color-brand-700` | `text-brand-700` |
| Color/Brand/800 | `--sds-color-brand-800` | `text-brand-800` |
| Color/Brand/900 | `--sds-color-brand-900` | `text-brand-900` |
| Color/Brand/1000 | `--sds-color-brand-1000` | `text-brand-1000` |
| Color/Gray/100 | `--sds-color-gray-100` | `text-gray-100` |
| Color/Gray/200 | `--sds-color-gray-200` | `text-gray-200` |
| Color/Gray/300 | `--sds-color-gray-300` | `text-gray-300` |
| Color/Gray/400 | `--sds-color-gray-400` | `text-gray-400` |
| Color/Gray/500 | `--sds-color-gray-500` | `text-gray-500` |
| Color/Gray/600 | `--sds-color-gray-600` | `text-gray-600` |
| Color/Gray/700 | `--sds-color-gray-700` | `text-gray-700` |
| Color/Gray/800 | `--sds-color-gray-800` | `text-gray-800` |
| Color/Gray/900 | `--sds-color-gray-900` | `text-gray-900` |
| Color/Gray/1000 | `--sds-color-gray-1000` | `text-gray-1000` |
| Color/Green/100 | `--sds-color-green-100` | `text-green-100` |
| Color/Green/200 | `--sds-color-green-200` | `text-green-200` |
| Color/Green/300 | `--sds-color-green-300` | `text-green-300` |
| Color/Green/400 | `--sds-color-green-400` | `text-green-400` |
| Color/Green/500 | `--sds-color-green-500` | `text-green-500` |
| Color/Green/600 | `--sds-color-green-600` | `text-green-600` |
| Color/Green/700 | `--sds-color-green-700` | `text-green-700` |
| Color/Green/800 | `--sds-color-green-800` | `text-green-800` |
| Color/Green/900 | `--sds-color-green-900` | `text-green-900` |
| Color/Green/1000 | `--sds-color-green-1000` | `text-green-1000` |
| Color/Pink/100 | `--sds-color-pink-100` | `text-pink-100` |
| Color/Pink/200 | `--sds-color-pink-200` | `text-pink-200` |
| Color/Pink/300 | `--sds-color-pink-300` | `text-pink-300` |
| Color/Pink/400 | `--sds-color-pink-400` | `text-pink-400` |
| Color/Pink/500 | `--sds-color-pink-500` | `text-pink-500` |
| Color/Pink/600 | `--sds-color-pink-600` | `text-pink-600` |
| Color/Pink/700 | `--sds-color-pink-700` | `text-pink-700` |
| Color/Pink/800 | `--sds-color-pink-800` | `text-pink-800` |
| Color/Pink/900 | `--sds-color-pink-900` | `text-pink-900` |
| Color/Pink/1000 | `--sds-color-pink-1000` | `text-pink-1000` |
| Color/Red/100 | `--sds-color-red-100` | `text-red-100` |
| Color/Red/200 | `--sds-color-red-200` | `text-red-200` |
| Color/Red/300 | `--sds-color-red-300` | `text-red-300` |
| Color/Red/400 | `--sds-color-red-400` | `text-red-400` |
| Color/Red/500 | `--sds-color-red-500` | `text-red-500` |
| Color/Red/600 | `--sds-color-red-600` | `text-red-600` |
| Color/Red/700 | `--sds-color-red-700` | `text-red-700` |
| Color/Red/800 | `--sds-color-red-800` | `text-red-800` |
| Color/Red/900 | `--sds-color-red-900` | `text-red-900` |
| Color/Red/1000 | `--sds-color-red-1000` | `text-red-1000` |
| Color/Slate/100 | `--sds-color-slate-100` | `text-slate-100` |
| Color/Slate/200 | `--sds-color-slate-200` | `text-slate-200` |
| Color/Slate/300 | `--sds-color-slate-300` | `text-slate-300` |
| Color/Slate/400 | `--sds-color-slate-400` | `text-slate-400` |
| Color/Slate/500 | `--sds-color-slate-500` | `text-slate-500` |
| Color/Slate/600 | `--sds-color-slate-600` | `text-slate-600` |
| Color/Slate/700 | `--sds-color-slate-700` | `text-slate-700` |
| Color/Slate/800 | `--sds-color-slate-800` | `text-slate-800` |
| Color/Slate/900 | `--sds-color-slate-900` | `text-slate-900` |
| Color/Slate/1000 | `--sds-color-slate-1000` | `text-slate-1000` |
| Color/White/100 | `--sds-color-white-100` | `text-white-100` |
| Color/White/200 | `--sds-color-white-200` | `text-white-200` |
| Color/White/300 | `--sds-color-white-300` | `text-white-300` |
| Color/White/400 | `--sds-color-white-400` | `text-white-400` |
| Color/White/500 | `--sds-color-white-500` | `text-white-500` |
| Color/White/600 | `--sds-color-white-600` | `text-white-600` |
| Color/White/700 | `--sds-color-white-700` | `text-white-700` |
| Color/White/800 | `--sds-color-white-800` | `text-white-800` |
| Color/White/900 | `--sds-color-white-900` | `text-white-900` |
| Color/White/1000 | `--sds-color-white-1000` | `text-white-1000` |
| Color/Yellow/100 | `--sds-color-yellow-100` | `text-yellow-100` |
| Color/Yellow/200 | `--sds-color-yellow-200` | `text-yellow-200` |
| Color/Yellow/300 | `--sds-color-yellow-300` | `text-yellow-300` |
| Color/Yellow/400 | `--sds-color-yellow-400` | `text-yellow-400` |
| Color/Yellow/500 | `--sds-color-yellow-500` | `text-yellow-500` |
| Color/Yellow/600 | `--sds-color-yellow-600` | `text-yellow-600` |
| Color/Yellow/700 | `--sds-color-yellow-700` | `text-yellow-700` |
| Color/Yellow/800 | `--sds-color-yellow-800` | `text-yellow-800` |
| Color/Yellow/900 | `--sds-color-yellow-900` | `text-yellow-900` |
| Color/Yellow/1000 | `--sds-color-yellow-1000` | `text-yellow-1000` |

### Semantic Colors - Background

| Figma Variable | CSS Variable | Tailwind Class |
| --- | --- | --- |
| Color/Background/Brand/Default | `--sds-color-background-brand-default` | `bg-brand` |
| Color/Background/Brand/Hover | `--sds-color-background-brand-hover` | `bg-brand-hover` |
| Color/Background/Brand/Secondary | `--sds-color-background-brand-secondary` | `bg-brand-secondary` |
| Color/Background/Brand/Secondary Hover | `--sds-color-background-brand-secondary-hover` | `bg-brand-secondary-hover` |
| Color/Background/Brand/Tertiary | `--sds-color-background-brand-tertiary` | `bg-brand-tertiary` |
| Color/Background/Brand/Tertiary Hover | `--sds-color-background-brand-tertiary-hover` | `bg-brand-tertiary-hover` |
| Color/Background/Danger/Default | `--sds-color-background-danger-default` | `bg-danger` |
| Color/Background/Danger/Hover | `--sds-color-background-danger-hover` | `bg-danger-hover` |
| Color/Background/Danger/Secondary | `--sds-color-background-danger-secondary` | `bg-danger-secondary` |
| Color/Background/Danger/Secondary Hover | `--sds-color-background-danger-secondary-hover` | `bg-danger-secondary-hover` |
| Color/Background/Danger/Tertiary | `--sds-color-background-danger-tertiary` | `bg-danger-tertiary` |
| Color/Background/Danger/Tertiary Hover | `--sds-color-background-danger-tertiary-hover` | `bg-danger-tertiary-hover` |
| Color/Background/Default/Default | `--sds-color-background-default-default` | `bg-default` |
| Color/Background/Default/Default Hover | `--sds-color-background-default-default-hover` | `bg-default-hover` |
| Color/Background/Default/Secondary | `--sds-color-background-default-secondary` | `bg-default-secondary` |
| Color/Background/Default/Secondary Hover | `--sds-color-background-default-secondary-hover` | `bg-default-secondary-hover` |
| Color/Background/Default/Tertiary | `--sds-color-background-default-tertiary` | `bg-default-tertiary` |
| Color/Background/Default/Tertiary Hover | `--sds-color-background-default-tertiary-hover` | `bg-default-tertiary-hover` |
| Color/Background/Disabled/Default | `--sds-color-background-disabled-default` | `bg-disabled` |
| Color/Background/Neutral/Default | `--sds-color-background-neutral-default` | `bg-neutral` |
| Color/Background/Neutral/Hover | `--sds-color-background-neutral-hover` | `bg-neutral-hover` |
| Color/Background/Neutral/Secondary | `--sds-color-background-neutral-secondary` | `bg-neutral-secondary` |
| Color/Background/Neutral/Secondary Hover | `--sds-color-background-neutral-secondary-hover` | `bg-neutral-secondary-hover` |
| Color/Background/Neutral/Tertiary | `--sds-color-background-neutral-tertiary` | `bg-neutral-tertiary` |
| Color/Background/Neutral/Tertiary Hover | `--sds-color-background-neutral-tertiary-hover` | `bg-neutral-tertiary-hover` |
| Color/Background/Positive/Default | `--sds-color-background-positive-default` | `bg-positive` |
| Color/Background/Positive/Hover | `--sds-color-background-positive-hover` | `bg-positive-hover` |
| Color/Background/Positive/Secondary | `--sds-color-background-positive-secondary` | `bg-positive-secondary` |
| Color/Background/Positive/Secondary Hover | `--sds-color-background-positive-secondary-hover` | `bg-positive-secondary-hover` |
| Color/Background/Positive/Tertiary | `--sds-color-background-positive-tertiary` | `bg-positive-tertiary` |
| Color/Background/Positive/Tertiary Hover | `--sds-color-background-positive-tertiary-hover` | `bg-positive-tertiary-hover` |
| Color/Background/Utilities/Blanket | `--sds-color-background-utilities-blanket` | `bg-utilities-blanket` |
| Color/Background/Utilities/Measurement | `--sds-color-background-utilities-measurement` | `bg-utilities-measurement` |
| Color/Background/Utilities/Overlay | `--sds-color-background-utilities-overlay` | `bg-utilities-overlay` |
| Color/Background/Utilities/Scrim | `--sds-color-background-utilities-scrim` | `bg-utilities-scrim` |
| Color/Background/Warning/Default | `--sds-color-background-warning-default` | `bg-warning` |
| Color/Background/Warning/Hover | `--sds-color-background-warning-hover` | `bg-warning-hover` |
| Color/Background/Warning/Secondary | `--sds-color-background-warning-secondary` | `bg-warning-secondary` |
| Color/Background/Warning/Secondary Hover | `--sds-color-background-warning-secondary-hover` | `bg-warning-secondary-hover` |
| Color/Background/Warning/Tertiary | `--sds-color-background-warning-tertiary` | `bg-warning-tertiary` |
| Color/Background/Warning/Tertiary Hover | `--sds-color-background-warning-tertiary-hover` | `bg-warning-tertiary-hover` |

### Semantic Colors - Border

| Figma Variable | CSS Variable | Tailwind Class |
| --- | --- | --- |
| Color/Border/Brand/Default | `--sds-color-border-brand-default` | `border-brand` |
| Color/Border/Brand/Secondary | `--sds-color-border-brand-secondary` | `border-brand-secondary` |
| Color/Border/Brand/Tertiary | `--sds-color-border-brand-tertiary` | `border-brand-tertiary` |
| Color/Border/Danger/Default | `--sds-color-border-danger-default` | `border-danger` |
| Color/Border/Danger/Secondary | `--sds-color-border-danger-secondary` | `border-danger-secondary` |
| Color/Border/Danger/Tertiary | `--sds-color-border-danger-tertiary` | `border-danger-tertiary` |
| Color/Border/Default/Default | `--sds-color-border-default-default` | `border-default` |
| Color/Border/Default/Secondary | `--sds-color-border-default-secondary` | `border-default-secondary` |
| Color/Border/Default/Tertiary | `--sds-color-border-default-tertiary` | `border-default-tertiary` |
| Color/Border/Disabled/Default | `--sds-color-border-disabled-default` | `border-disabled` |
| Color/Border/Neutral/Default | `--sds-color-border-neutral-default` | `border-neutral` |
| Color/Border/Neutral/Secondary | `--sds-color-border-neutral-secondary` | `border-neutral-secondary` |
| Color/Border/Neutral/Tertiary | `--sds-color-border-neutral-tertiary` | `border-neutral-tertiary` |
| Color/Border/Positive/Default | `--sds-color-border-positive-default` | `border-positive` |
| Color/Border/Positive/Secondary | `--sds-color-border-positive-secondary` | `border-positive-secondary` |
| Color/Border/Positive/Tertiary | `--sds-color-border-positive-tertiary` | `border-positive-tertiary` |
| Color/Border/Utilities/Measurement | `--sds-color-border-utilities-measurement` | `border-utilities-measurement` |
| Color/Border/Utilities/Swatch | `--sds-color-border-utilities-swatch` | `border-utilities-swatch` |
| Color/Border/Warning/Default | `--sds-color-border-warning-default` | `border-warning` |
| Color/Border/Warning/Secondary | `--sds-color-border-warning-secondary` | `border-warning-secondary` |
| Color/Border/Warning/Tertiary | `--sds-color-border-warning-tertiary` | `border-warning-tertiary` |

### Semantic Colors - Text

| Figma Variable | CSS Variable | Tailwind Class |
| --- | --- | --- |
| Color/Text/Brand/Default | `--sds-color-text-brand-default` | `text-brand` |
| Color/Text/Brand/Secondary | `--sds-color-text-brand-secondary` | `text-brand-secondary` |
| Color/Text/Brand/Tertiary | `--sds-color-text-brand-tertiary` | `text-brand-tertiary` |
| Color/Text/Brand/On Brand | `--sds-color-text-brand-on-brand` | `text-brand-on-brand` |
| Color/Text/Brand/On Brand Secondary | `--sds-color-text-brand-on-brand-secondary` | `text-brand-on-brand-secondary` |
| Color/Text/Brand/On Brand Tertiary | `--sds-color-text-brand-on-brand-tertiary` | `text-brand-on-brand-tertiary` |
| Color/Text/Danger/Default | `--sds-color-text-danger-default` | `text-danger` |
| Color/Text/Danger/Secondary | `--sds-color-text-danger-secondary` | `text-danger-secondary` |
| Color/Text/Danger/Tertiary | `--sds-color-text-danger-tertiary` | `text-danger-tertiary` |
| Color/Text/Danger/On Danger | `--sds-color-text-danger-on-danger` | `text-danger-on-danger` |
| Color/Text/Danger/On Danger Secondary | `--sds-color-text-danger-on-danger-secondary` | `text-danger-on-danger-secondary` |
| Color/Text/Danger/On Danger Tertiary | `--sds-color-text-danger-on-danger-tertiary` | `text-danger-on-danger-tertiary` |
| Color/Text/Default/Default | `--sds-color-text-default-default` | `text-default` |
| Color/Text/Default/Secondary | `--sds-color-text-default-secondary` | `text-default-secondary` |
| Color/Text/Default/Tertiary | `--sds-color-text-default-tertiary` | `text-default-tertiary` |
| Color/Text/Disabled/Default | `--sds-color-text-disabled-default` | `text-disabled` |
| Color/Text/Disabled/On Disabled | `--sds-color-text-disabled-on-disabled` | `text-disabled-on-disabled` |
| Color/Text/Neutral/Default | `--sds-color-text-neutral-default` | `text-neutral` |
| Color/Text/Neutral/Secondary | `--sds-color-text-neutral-secondary` | `text-neutral-secondary` |
| Color/Text/Neutral/Tertiary | `--sds-color-text-neutral-tertiary` | `text-neutral-tertiary` |
| Color/Text/Neutral/On Neutral | `--sds-color-text-neutral-on-neutral` | `text-neutral-on-neutral` |
| Color/Text/Neutral/On Neutral Secondary | `--sds-color-text-neutral-on-neutral-secondary` | `text-neutral-on-neutral-secondary` |
| Color/Text/Neutral/On Neutral Tertiary | `--sds-color-text-neutral-on-neutral-tertiary` | `text-neutral-on-neutral-tertiary` |
| Color/Text/Positive/Default | `--sds-color-text-positive-default` | `text-positive` |
| Color/Text/Positive/Secondary | `--sds-color-text-positive-secondary` | `text-positive-secondary` |
| Color/Text/Positive/Tertiary | `--sds-color-text-positive-tertiary` | `text-positive-tertiary` |
| Color/Text/Positive/On Positive | `--sds-color-text-positive-on-positive` | `text-positive-on-positive` |
| Color/Text/Positive/On Positive Secondary | `--sds-color-text-positive-on-positive-secondary` | `text-positive-on-positive-secondary` |
| Color/Text/Positive/On Positive Tertiary | `--sds-color-text-positive-on-positive-tertiary` | `text-positive-on-positive-tertiary` |
| Color/Text/Utilities/Text on Measurement | `--sds-color-text-utilities-text-on-measurement` | `text-utilities-text-on-measurement` |
| Color/Text/Utilities/Text on Overlay | `--sds-color-text-utilities-text-on-overlay` | `text-utilities-text-on-overlay` |
| Color/Text/Warning/Default | `--sds-color-text-warning-default` | `text-warning` |
| Color/Text/Warning/Secondary | `--sds-color-text-warning-secondary` | `text-warning-secondary` |
| Color/Text/Warning/Tertiary | `--sds-color-text-warning-tertiary` | `text-warning-tertiary` |
| Color/Text/Warning/On Warning | `--sds-color-text-warning-on-warning` | `text-warning-on-warning` |
| Color/Text/Warning/On Warning Secondary | `--sds-color-text-warning-on-warning-secondary` | `text-warning-on-warning-secondary` |
| Color/Text/Warning/On Warning Tertiary | `--sds-color-text-warning-on-warning-tertiary` | `text-warning-on-warning-tertiary` |

### Semantic Colors - Icon

| Figma Variable | CSS Variable | Tailwind Class |
| --- | --- | --- |
| Color/Icon/Brand/Default | `--sds-color-icon-brand-default` | `text-icon-brand` |
| Color/Icon/Brand/Secondary | `--sds-color-icon-brand-secondary` | `text-icon-brand-secondary` |
| Color/Icon/Brand/Tertiary | `--sds-color-icon-brand-tertiary` | `text-icon-brand-tertiary` |
| Color/Icon/Brand/On Brand | `--sds-color-icon-brand-on-brand` | `text-icon-brand-on-brand` |
| Color/Icon/Brand/On Brand Secondary | `--sds-color-icon-brand-on-brand-secondary` | `text-icon-brand-on-brand-secondary` |
| Color/Icon/Brand/On Brand Tertiary | `--sds-color-icon-brand-on-brand-tertiary` | `text-icon-brand-on-brand-tertiary` |
| Color/Icon/Danger/Default | `--sds-color-icon-danger-default` | `text-icon-danger` |
| Color/Icon/Danger/Secondary | `--sds-color-icon-danger-secondary` | `text-icon-danger-secondary` |
| Color/Icon/Danger/Tertiary | `--sds-color-icon-danger-tertiary` | `text-icon-danger-tertiary` |
| Color/Icon/Danger/On Danger | `--sds-color-icon-danger-on-danger` | `text-icon-danger-on-danger` |
| Color/Icon/Danger/On Danger Secondary | `--sds-color-icon-danger-on-danger-secondary` | `text-icon-danger-on-danger-secondary` |
| Color/Icon/Danger/On Danger Tertiary | `--sds-color-icon-danger-on-danger-tertiary` | `text-icon-danger-on-danger-tertiary` |
| Color/Icon/Default/Default | `--sds-color-icon-default-default` | `text-icon-default` |
| Color/Icon/Default/Secondary | `--sds-color-icon-default-secondary` | `text-icon-default-secondary` |
| Color/Icon/Default/Tertiary | `--sds-color-icon-default-tertiary` | `text-icon-default-tertiary` |
| Color/Icon/Disabled/Default | `--sds-color-icon-disabled-default` | `text-icon-disabled` |
| Color/Icon/Disabled/On Disabled | `--sds-color-icon-disabled-on-disabled` | `text-icon-disabled-on-disabled` |
| Color/Icon/Neutral/Default | `--sds-color-icon-neutral-default` | `text-icon-neutral` |
| Color/Icon/Neutral/Secondary | `--sds-color-icon-neutral-secondary` | `text-icon-neutral-secondary` |
| Color/Icon/Neutral/Tertiary | `--sds-color-icon-neutral-tertiary` | `text-icon-neutral-tertiary` |
| Color/Icon/Neutral/On Neutral | `--sds-color-icon-neutral-on-neutral` | `text-icon-neutral-on-neutral` |
| Color/Icon/Neutral/On Neutral Secondary | `--sds-color-icon-neutral-on-neutral-secondary` | `text-icon-neutral-on-neutral-secondary` |
| Color/Icon/Neutral/On Neutral Tertiary | `--sds-color-icon-neutral-on-neutral-tertiary` | `text-icon-neutral-on-neutral-tertiary` |
| Color/Icon/Positive/Default | `--sds-color-icon-positive-default` | `text-icon-positive` |
| Color/Icon/Positive/Secondary | `--sds-color-icon-positive-secondary` | `text-icon-positive-secondary` |
| Color/Icon/Positive/Tertiary | `--sds-color-icon-positive-tertiary` | `text-icon-positive-tertiary` |
| Color/Icon/Positive/On Positive | `--sds-color-icon-positive-on-positive` | `text-icon-positive-on-positive` |
| Color/Icon/Positive/On Positive Secondary | `--sds-color-icon-positive-on-positive-secondary` | `text-icon-positive-on-positive-secondary` |
| Color/Icon/Positive/On Positive Tertiary | `--sds-color-icon-positive-on-positive-tertiary` | `text-icon-positive-on-positive-tertiary` |
| Color/Icon/Utilities/Icon | `--sds-color-icon-utilities-icon` | `text-icon-utilities-icon` |
| Color/Icon/Utilities/Icon on Measurement | `--sds-color-icon-utilities-icon-on-measurement` | `text-icon-utilities-icon-on-measurement` |
| Color/Icon/Warning/Default | `--sds-color-icon-warning-default` | `text-icon-warning` |
| Color/Icon/Warning/Secondary | `--sds-color-icon-warning-secondary` | `text-icon-warning-secondary` |
| Color/Icon/Warning/Tertiary | `--sds-color-icon-warning-tertiary` | `text-icon-warning-tertiary` |
| Color/Icon/Warning/On Warning | `--sds-color-icon-warning-on-warning` | `text-icon-warning-on-warning` |
| Color/Icon/Warning/On Warning Secondary | `--sds-color-icon-warning-on-warning-secondary` | `text-icon-warning-on-warning-secondary` |
| Color/Icon/Warning/On Warning Tertiary | `--sds-color-icon-warning-on-warning-tertiary` | `text-icon-warning-on-warning-tertiary` |

### Typography - Font Family

| Figma Variable | CSS Variable | Tailwind Class |
| --- | --- | --- |
| Typography/Body/Font Family | `--sds-typography-body-font-family` | `font-sans` |
| Typography/Heading/Font Family | `--sds-typography-heading-font-family` | `font-heading` |
| Typography/Subheading/Font Family | `--sds-typography-subheading-font-family` | `font-subheading` |
| Typography/Subtitle/Font Family | `--sds-typography-subtitle-font-family` | `font-subtitle` |
| Typography/Title Hero/Font Family | `--sds-typography-title-hero-font-family` | `font-title-hero` |
| Typography/Title Page/Font Family | `--sds-typography-title-page-font-family` | `font-title-page` |
| Typography/Family/Serif | `--sds-typography-family-serif` | `font-serif` |
| Typography/Code/Font Family | `--sds-typography-code-font-family` | `font-mono` |

### Typography - Font Size (Scale)

| Figma Variable | CSS Variable | Tailwind Class |
| --- | --- | --- |
| Typography/Scale/01 | `--sds-typography-scale-01` | `text-scale-01` |
| Typography/Scale/02 | `--sds-typography-scale-02` | `text-scale-02` |
| Typography/Scale/03 | `--sds-typography-scale-03` | `text-scale-03` |
| Typography/Scale/04 | `--sds-typography-scale-04` | `text-scale-04` |
| Typography/Scale/05 | `--sds-typography-scale-05` | `text-scale-05` |
| Typography/Scale/06 | `--sds-typography-scale-06` | `text-scale-06` |
| Typography/Scale/07 | `--sds-typography-scale-07` | `text-scale-07` |
| Typography/Scale/08 | `--sds-typography-scale-08` | `text-scale-08` |
| Typography/Scale/09 | `--sds-typography-scale-09` | `text-scale-09` |
| Typography/Scale/10 | `--sds-typography-scale-10` | `text-scale-10` |

### Typography - Font Size (Semantic)

| Figma Variable | CSS Variable | Tailwind Class |
| --- | --- | --- |
| Typography/Body/Small | `--sds-typography-body-size-small` | `text-body-sm` |
| Typography/Body/Medium | `--sds-typography-body-size-medium` | `text-body-md` |
| Typography/Body/Large | `--sds-typography-body-size-large` | `text-body-lg` |
| Typography/Code/Small | `--sds-typography-code-size-small` | `text-code-sm` |
| Typography/Code/Base | `--sds-typography-code-size-base` | `text-code-md` |
| Typography/Code/Large | `--sds-typography-code-size-large` | `text-code-lg` |
| Typography/Heading/Small | `--sds-typography-heading-size-small` | `text-heading-sm` |
| Typography/Heading/Base | `--sds-typography-heading-size-base` | `text-heading-md` |
| Typography/Heading/Large | `--sds-typography-heading-size-large` | `text-heading-lg` |
| Typography/Subheading/Small | `--sds-typography-subheading-size-small` | `text-subheading-sm` |
| Typography/Subheading/Medium | `--sds-typography-subheading-size-medium` | `text-subheading-md` |
| Typography/Subheading/Large | `--sds-typography-subheading-size-large` | `text-subheading-lg` |
| Typography/Subtitle/Small | `--sds-typography-subtitle-size-small` | `text-subtitle-sm` |
| Typography/Subtitle/Base | `--sds-typography-subtitle-size-base` | `text-subtitle-md` |
| Typography/Subtitle/Large | `--sds-typography-subtitle-size-large` | `text-subtitle-lg` |
| Typography/Title Page/Small | `--sds-typography-title-page-size-small` | `text-title-page-sm` |
| Typography/Title Page/Base | `--sds-typography-title-page-size-base` | `text-title-page-md` |
| Typography/Title Page/Large | `--sds-typography-title-page-size-large` | `text-title-page-lg` |
| Typography/Title Hero | `--sds-typography-title-hero-size` | `text-title-hero` |

### Typography - Font Weight

| Figma Variable | CSS Variable | Tailwind Class |
| --- | --- | --- |
| Typography/Weight/Thin | `--sds-typography-weight-thin` | `font-thin` |
| Typography/Weight/Extra Light | `--sds-typography-weight-extra-light` | `font-extralight` |
| Typography/Weight/Light | `--sds-typography-weight-light` | `font-light` |
| Typography/Weight/Regular | `--sds-typography-weight-regular` | `font-normal` |
| Typography/Weight/Medium | `--sds-typography-weight-medium` | `font-medium` |
| Typography/Weight/Semibold | `--sds-typography-weight-semibold` | `font-semibold` |
| Typography/Weight/Bold | `--sds-typography-weight-bold` | `font-bold` |
| Typography/Weight/Extra Bold | `--sds-typography-weight-extra-bold` | `font-extrabold` |
| Typography/Weight/Black | `--sds-typography-weight-black` | `font-black` |
| Typography/Body/Font Weight Strong | `--sds-typography-body-font-weight-strong` | `font-body-strong` |

### Spacing and Sizing

| Figma Variable | CSS Variable | Tailwind Class |
| --- | --- | --- |
| Size/Space/0 | `--sds-size-space-0` | `p-0` |
| Size/Space/050 | `--sds-size-space-050` | `p-0.5` |
| Size/Space/100 | `--sds-size-space-100` | `p-1` |
| Size/Space/150 | `--sds-size-space-150` | `p-1.5` |
| Size/Space/200 | `--sds-size-space-200` | `p-2` |
| Size/Space/300 | `--sds-size-space-300` | `p-3` |
| Size/Space/400 | `--sds-size-space-400` | `p-4` |
| Size/Space/600 | `--sds-size-space-600` | `p-6` |
| Size/Space/800 | `--sds-size-space-800` | `p-8` |
| Size/Space/1200 | `--sds-size-space-1200` | `p-12` |
| Size/Space/1600 | `--sds-size-space-1600` | `p-16` |
| Size/Space/2400 | `--sds-size-space-2400` | `p-24` |
| Size/Space/4000 | `--sds-size-space-4000` | `p-40` |
| Size/Space/Negative/100 | `--sds-size-space-negative-100` | `m-neg-1` |
| Size/Space/Negative/200 | `--sds-size-space-negative-200` | `m-neg-2` |
| Size/Space/Negative/300 | `--sds-size-space-negative-300` | `m-neg-3` |
| Size/Space/Negative/400 | `--sds-size-space-negative-400` | `m-neg-4` |
| Size/Space/Negative/600 | `--sds-size-space-negative-600` | `m-neg-6` |
| Size/Icon/Small | `--sds-size-icon-small` | `w-icon-sm` |
| Size/Icon/Medium | `--sds-size-icon-medium` | `w-icon-md` |
| Size/Icon/Large | `--sds-size-icon-large` | `w-icon-lg` |

### Radius, Stroke, and Blur

| Figma Variable | CSS Variable | Tailwind Class |
| --- | --- | --- |
| Size/Radius/100 | `--sds-size-radius-100` | `rounded-sm` |
| Size/Radius/200 | `--sds-size-radius-200` | `rounded-md` |
| Size/Radius/400 | `--sds-size-radius-400` | `rounded-lg` |
| Size/Radius/Full | `--sds-size-radius-full` | `rounded-full` |
| Size/Stroke/Border | `--sds-size-stroke-border` | `border` |
| Size/Stroke/Focus Ring | `--sds-size-stroke-focus-ring` | `border-2` |
| Size/Blur/100 | `--sds-size-blur-100` | `blur-100` |

## Validation

### Extracted Variables (Full List)

```
--sds-color-black-100
--sds-color-black-200
--sds-color-black-300
--sds-color-black-400
--sds-color-black-500
--sds-color-black-600
--sds-color-black-700
--sds-color-black-800
--sds-color-black-900
--sds-color-black-1000
--sds-color-brand-100
--sds-color-brand-200
--sds-color-brand-300
--sds-color-brand-400
--sds-color-brand-500
--sds-color-brand-600
--sds-color-brand-700
--sds-color-brand-800
--sds-color-brand-900
--sds-color-brand-1000
--sds-color-gray-100
--sds-color-gray-200
--sds-color-gray-300
--sds-color-gray-400
--sds-color-gray-500
--sds-color-gray-600
--sds-color-gray-700
--sds-color-gray-800
--sds-color-gray-900
--sds-color-gray-1000
--sds-color-green-100
--sds-color-green-200
--sds-color-green-300
--sds-color-green-400
--sds-color-green-500
--sds-color-green-600
--sds-color-green-700
--sds-color-green-800
--sds-color-green-900
--sds-color-green-1000
--sds-color-pink-100
--sds-color-pink-200
--sds-color-pink-300
--sds-color-pink-400
--sds-color-pink-500
--sds-color-pink-600
--sds-color-pink-700
--sds-color-pink-800
--sds-color-pink-900
--sds-color-pink-1000
--sds-color-red-100
--sds-color-red-200
--sds-color-red-300
--sds-color-red-400
--sds-color-red-500
--sds-color-red-600
--sds-color-red-700
--sds-color-red-800
--sds-color-red-900
--sds-color-red-1000
--sds-color-slate-100
--sds-color-slate-200
--sds-color-slate-300
--sds-color-slate-400
--sds-color-slate-500
--sds-color-slate-600
--sds-color-slate-700
--sds-color-slate-800
--sds-color-slate-900
--sds-color-slate-1000
--sds-color-white-100
--sds-color-white-200
--sds-color-white-300
--sds-color-white-400
--sds-color-white-500
--sds-color-white-600
--sds-color-white-700
--sds-color-white-800
--sds-color-white-900
--sds-color-white-1000
--sds-color-yellow-100
--sds-color-yellow-200
--sds-color-yellow-300
--sds-color-yellow-400
--sds-color-yellow-500
--sds-color-yellow-600
--sds-color-yellow-700
--sds-color-yellow-800
--sds-color-yellow-900
--sds-color-yellow-1000
--sds-color-background-brand-default
--sds-color-background-brand-hover
--sds-color-background-brand-secondary
--sds-color-background-brand-secondary-hover
--sds-color-background-brand-tertiary
--sds-color-background-brand-tertiary-hover
--sds-color-background-danger-default
--sds-color-background-danger-hover
--sds-color-background-danger-secondary
--sds-color-background-danger-secondary-hover
--sds-color-background-danger-tertiary
--sds-color-background-danger-tertiary-hover
--sds-color-background-default-default
--sds-color-background-default-default-hover
--sds-color-background-default-secondary
--sds-color-background-default-secondary-hover
--sds-color-background-default-tertiary
--sds-color-background-default-tertiary-hover
--sds-color-background-disabled-default
--sds-color-background-neutral-default
--sds-color-background-neutral-hover
--sds-color-background-neutral-secondary
--sds-color-background-neutral-secondary-hover
--sds-color-background-neutral-tertiary
--sds-color-background-neutral-tertiary-hover
--sds-color-background-positive-default
--sds-color-background-positive-hover
--sds-color-background-positive-secondary
--sds-color-background-positive-secondary-hover
--sds-color-background-positive-tertiary
--sds-color-background-positive-tertiary-hover
--sds-color-background-utilities-blanket
--sds-color-background-utilities-measurement
--sds-color-background-utilities-overlay
--sds-color-background-utilities-scrim
--sds-color-background-warning-default
--sds-color-background-warning-hover
--sds-color-background-warning-secondary
--sds-color-background-warning-secondary-hover
--sds-color-background-warning-tertiary
--sds-color-background-warning-tertiary-hover
--sds-color-border-brand-default
--sds-color-border-brand-secondary
--sds-color-border-brand-tertiary
--sds-color-border-danger-default
--sds-color-border-danger-secondary
--sds-color-border-danger-tertiary
--sds-color-border-default-default
--sds-color-border-default-secondary
--sds-color-border-default-tertiary
--sds-color-border-disabled-default
--sds-color-border-neutral-default
--sds-color-border-neutral-secondary
--sds-color-border-neutral-tertiary
--sds-color-border-positive-default
--sds-color-border-positive-secondary
--sds-color-border-positive-tertiary
--sds-color-border-utilities-measurement
--sds-color-border-utilities-swatch
--sds-color-border-warning-default
--sds-color-border-warning-secondary
--sds-color-border-warning-tertiary
--sds-color-text-brand-default
--sds-color-text-brand-on-brand
--sds-color-text-brand-on-brand-secondary
--sds-color-text-brand-on-brand-tertiary
--sds-color-text-brand-secondary
--sds-color-text-brand-tertiary
--sds-color-text-danger-default
--sds-color-text-danger-on-danger
--sds-color-text-danger-on-danger-secondary
--sds-color-text-danger-on-danger-tertiary
--sds-color-text-danger-secondary
--sds-color-text-danger-tertiary
--sds-color-text-default-default
--sds-color-text-default-secondary
--sds-color-text-default-tertiary
--sds-color-text-disabled-default
--sds-color-text-disabled-on-disabled
--sds-color-text-neutral-default
--sds-color-text-neutral-on-neutral
--sds-color-text-neutral-on-neutral-secondary
--sds-color-text-neutral-on-neutral-tertiary
--sds-color-text-neutral-secondary
--sds-color-text-neutral-tertiary
--sds-color-text-positive-default
--sds-color-text-positive-on-positive
--sds-color-text-positive-on-positive-secondary
--sds-color-text-positive-on-positive-tertiary
--sds-color-text-positive-secondary
--sds-color-text-positive-tertiary
--sds-color-text-utilities-text-on-measurement
--sds-color-text-utilities-text-on-overlay
--sds-color-text-warning-default
--sds-color-text-warning-on-warning
--sds-color-text-warning-on-warning-secondary
--sds-color-text-warning-on-warning-tertiary
--sds-color-text-warning-secondary
--sds-color-text-warning-tertiary
--sds-color-icon-brand-default
--sds-color-icon-brand-on-brand
--sds-color-icon-brand-on-brand-secondary
--sds-color-icon-brand-on-brand-tertiary
--sds-color-icon-brand-secondary
--sds-color-icon-brand-tertiary
--sds-color-icon-danger-default
--sds-color-icon-danger-on-danger
--sds-color-icon-danger-on-danger-secondary
--sds-color-icon-danger-on-danger-tertiary
--sds-color-icon-danger-secondary
--sds-color-icon-danger-tertiary
--sds-color-icon-default-default
--sds-color-icon-default-secondary
--sds-color-icon-default-tertiary
--sds-color-icon-disabled-default
--sds-color-icon-disabled-on-disabled
--sds-color-icon-neutral-default
--sds-color-icon-neutral-on-neutral
--sds-color-icon-neutral-on-neutral-secondary
--sds-color-icon-neutral-on-neutral-tertiary
--sds-color-icon-neutral-secondary
--sds-color-icon-neutral-tertiary
--sds-color-icon-positive-default
--sds-color-icon-positive-on-positive
--sds-color-icon-positive-on-positive-secondary
--sds-color-icon-positive-on-positive-tertiary
--sds-color-icon-positive-secondary
--sds-color-icon-positive-tertiary
--sds-color-icon-utilities-icon
--sds-color-icon-utilities-icon-on-measurement
--sds-color-icon-warning-default
--sds-color-icon-warning-on-warning
--sds-color-icon-warning-on-warning-secondary
--sds-color-icon-warning-on-warning-tertiary
--sds-color-icon-warning-secondary
--sds-color-icon-warning-tertiary
--sds-typography-family-mono
--sds-typography-family-sans
--sds-typography-family-serif
--sds-typography-scale-01
--sds-typography-scale-02
--sds-typography-scale-03
--sds-typography-scale-04
--sds-typography-scale-05
--sds-typography-scale-06
--sds-typography-scale-07
--sds-typography-scale-08
--sds-typography-scale-09
--sds-typography-scale-10
--sds-typography-weight-black
--sds-typography-weight-black-italic
--sds-typography-weight-bold
--sds-typography-weight-bold-italic
--sds-typography-weight-extra-bold
--sds-typography-weight-extra-bold-italic
--sds-typography-weight-extra-light
--sds-typography-weight-extralight-italic
--sds-typography-weight-light
--sds-typography-weight-light-italic
--sds-typography-weight-medium
--sds-typography-weight-medium-italic
--sds-typography-weight-regular
--sds-typography-weight-regular-italic
--sds-typography-weight-semibold
--sds-typography-weight-semibold-italic
--sds-typography-weight-thin
--sds-typography-weight-thin-italic
--sds-typography-body-font-family
--sds-typography-body-font-style-italic
--sds-typography-body-font-weight-regular
--sds-typography-body-font-weight-strong
--sds-typography-body-size-large
--sds-typography-body-size-medium
--sds-typography-body-size-small
--sds-typography-code-font-family
--sds-typography-code-font-weight
--sds-typography-code-size-base
--sds-typography-code-size-large
--sds-typography-code-size-small
--sds-typography-heading-font-family
--sds-typography-heading-font-weight
--sds-typography-heading-size-base
--sds-typography-heading-size-large
--sds-typography-heading-size-small
--sds-typography-subheading-font-family
--sds-typography-subheading-font-weight
--sds-typography-subheading-size-large
--sds-typography-subheading-size-medium
--sds-typography-subheading-size-small
--sds-typography-subtitle-font-family
--sds-typography-subtitle-font-weight
--sds-typography-subtitle-size-base
--sds-typography-subtitle-size-large
--sds-typography-subtitle-size-small
--sds-typography-title-hero-font-family
--sds-typography-title-hero-font-weight
--sds-typography-title-hero-size
--sds-typography-title-page-font-family
--sds-typography-title-page-font-weight
--sds-typography-title-page-size-base
--sds-typography-title-page-size-large
--sds-typography-title-page-size-small
--sds-size-space-0
--sds-size-space-050
--sds-size-space-100
--sds-size-space-1200
--sds-size-space-150
--sds-size-space-1600
--sds-size-space-200
--sds-size-space-2400
--sds-size-space-300
--sds-size-space-400
--sds-size-space-4000
--sds-size-space-600
--sds-size-space-800
--sds-size-space-negative-100
--sds-size-space-negative-200
--sds-size-space-negative-300
--sds-size-space-negative-400
--sds-size-space-negative-600
--sds-size-radius-100
--sds-size-radius-200
--sds-size-radius-400
--sds-size-radius-full
--sds-size-blur-100
--sds-size-depth-0
--sds-size-depth-025
--sds-size-depth-100
--sds-size-depth-1200
--sds-size-depth-200
--sds-size-depth-400
--sds-size-depth-800
--sds-size-depth-negative-025
--sds-size-depth-negative-100
--sds-size-depth-negative-1200
--sds-size-depth-negative-200
--sds-size-depth-negative-400
--sds-size-depth-negative-800
--sds-size-stroke-border
--sds-size-stroke-focus-ring
--sds-size-icon-large
--sds-size-icon-medium
--sds-size-icon-small
--sds-responsive-device
--sds-responsive-device-width
--sds-responsive-root-font-size
--sds-responsive-scale
```

### Naming Consistency Check

- All tokens use the `--sds-` prefix and kebab-case naming.
- Categories are consistent: `color-*`, `typography-*`, `size-*`, `responsive-*`.

### Example Tailwind Classes Available

- Colors: `bg-brand`, `text-default`, `border-default`
- Primitives: `text-brand-500`, `bg-slate-100`, `border-gray-300`
- Typography: `font-sans`, `font-semibold`, `text-body-md`, `text-title-hero`
- Spacing: `p-4`, `px-6`, `gap-8`, `w-icon-md`, `m-neg-2`
- Radius/stroke/blur: `rounded-md`, `border-2`, `blur-100`

### Additional Tokens (Theme-Only)

Some SDS values are exposed under `theme.extend.sds` for reference in CSS or
custom utilities (not standard Tailwind classes):

- Responsive: `theme("sds.responsive.device-width")`
- Depth: `theme("sds.depth.100")`
- Italic style tokens: `theme("sds.typography.weight-bold-italic")`

## Notes

- Negative spacing tokens are available as `m-neg-*` classes (for example,
  `m-neg-2`). Tailwind's `-m-2` using positive spacing also remains valid.
- Depth tokens are listed but not mapped to a Tailwind utility because they
  require full shadow definitions (offset, blur, spread, color).
