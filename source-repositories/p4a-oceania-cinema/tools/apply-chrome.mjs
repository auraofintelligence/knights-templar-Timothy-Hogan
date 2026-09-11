/*
 * One-shot chrome migration for the 2026 cinematic rebuild.
 * Replaces the legacy 10-link header with the compact header + Index toggle,
 * adds the site-nav.js include, and bumps cache-busting versions.
 * Safe to re-run. Run from the repo root:  node tools/apply-chrome.mjs
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const VERSION = '20260707-atlasfix2';

const htmlFiles = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules') continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (name.endsWith('.html')) htmlFiles.push(full);
  }
};
walk(ROOT);

const headerTemplate = (p) => `<header class="site-header">
  <a class="brand" href="${p}index.html" aria-label="P4A Oceania home"><span class="brand-mark">P4O</span><span class="brand-text"><strong>P4A Oceania</strong><span>Expansion Lab</span></span></a>
  <nav class="site-nav" data-nav aria-label="Primary">
    <a href="${p}pages/gen-xyza.html">Gen XYZA</a>
    <a href="${p}pages/oceania-map.html">Atlas</a>
    <a href="${p}pages/shared-currents.html">Currents</a>
    <a href="${p}pages/c-hours.html">C-Hours</a>
    <a href="${p}pages/surge.html">Surge</a>
    <a href="${p}pages/compliance.html">Trust</a>
  </nav>
  <button class="index-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-index"><span class="index-toggle-lines" aria-hidden="true"><i></i><i></i><i></i></span><span class="index-toggle-label">Index</span></button>
</header>`;

let updated = 0;
for (const file of htmlFiles) {
  const rel = relative(ROOT, file);
  if (rel === 'index.html') continue; // rebuilt by hand
  const depth = rel.split(sep).length - 1;
  const p = '../'.repeat(depth);

  let html = readFileSync(file, 'utf8');
  const before = html;

  html = html.replace(/<header class="site-header">[\s\S]*?<\/header>/, headerTemplate(p));
  html = html.replace(/styles\.css(\?v=[^"']*)?"/g, `styles.css?v=${VERSION}"`);
  html = html.replace(/script\.js(\?v=[^"']*)?"/g, `script.js?v=${VERSION}"`);

  if (!html.includes('assets/site-nav.js')) {
    html = html.replace('</body>', `<script src="${p}assets/site-nav.js?v=${VERSION}"></script>\n</body>`);
  } else {
    html = html.replace(/assets\/site-nav\.js(\?v=[^"']*)?"/g, `assets/site-nav.js?v=${VERSION}"`);
  }

  if (html !== before) {
    writeFileSync(file, html);
    updated += 1;
  }
}
console.log(`Updated ${updated} of ${htmlFiles.length} HTML files.`);
