import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const htmlFiles = readdirSync(root).filter((name) => extname(name) === '.html').sort();
const failures = [];

const fail = (file, message) => failures.push(`${file}: ${message}`);

const pageText = new Map(htmlFiles.map((file) => [file, readFileSync(join(root, file), 'utf8')]));
const pageIds = new Map();

for (const [file, html] of pageText) {
  if (!/<html\s+lang="en-AU">/i.test(html)) fail(file, 'missing lang="en-AU"');
  if (!/<meta\s+name="viewport"/i.test(html)) fail(file, 'missing viewport meta');
  if (!/<link\s+rel="icon"/i.test(html)) fail(file, 'missing favicon');
  if (!/<link\s+rel="apple-touch-icon"/i.test(html)) fail(file, 'missing Apple touch icon');
  if (!/<link\s+rel="manifest"/i.test(html)) fail(file, 'missing web app manifest');
  if (!/<main\s+id="main"/i.test(html)) fail(file, 'missing main landmark');
  if ((html.match(/<h1\b/gi) ?? []).length !== 1) fail(file, 'must contain exactly one h1');
  if ((html.match(/aria-current="page"/gi) ?? []).length < 1) fail(file, 'must mark the current page in navigation or breadcrumbs');
  if (/file:\/\/|localhost|C:\\Users\\/i.test(html)) fail(file, 'contains a local-only path or URL');

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) fail(file, `duplicate id(s): ${[...new Set(duplicates)].join(', ')}`);
  pageIds.set(file, new Set(ids));

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt="[^"]*"/i.test(match[0])) fail(file, 'image without alt text');
  }
}

const manifestFile = 'site.webmanifest';
try {
  const manifest = JSON.parse(readFileSync(join(root, manifestFile), 'utf8'));
  if (!manifest.name || !manifest.short_name) fail(manifestFile, 'missing name or short_name');
  if (!Array.isArray(manifest.icons) || manifest.icons.length < 2) fail(manifestFile, 'needs at least two icon sizes');
  for (const icon of manifest.icons ?? []) {
    if (!icon.src || !existsSync(resolve(root, icon.src))) fail(manifestFile, `missing icon file: ${icon.src ?? '(unset)'}`);
  }
} catch (error) {
  fail(manifestFile, `invalid JSON: ${error.message}`);
}

for (const [file, html] of pageText) {
  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(value)) continue;

    const [relativePath, fragment] = value.split('#');
    const targetPath = relativePath || file;
    const diskPath = resolve(root, targetPath);

    if (!existsSync(diskPath)) {
      fail(file, `missing linked file: ${targetPath}`);
      continue;
    }

    if (fragment && extname(targetPath || file) === '.html') {
      const targetFile = targetPath || file;
      if (!pageIds.get(targetFile)?.has(fragment)) fail(file, `missing anchor ${targetFile}#${fragment}`);
    }
  }
}

if (failures.length) {
  console.error(`Validation failed (${failures.length})`);
  failures.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages, links, anchors, images and landmarks.`);
