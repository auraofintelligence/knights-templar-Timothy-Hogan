import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Luke rejected this generated ring-torus image on 11 September 2026.
// Aura uses the source-defined horn torus, R = r, with its infinity point.
// Keep historical source repositories intact; check only new site inputs.
const root = fileURLToPath(new URL('../', import.meta.url));
const rejected = [
  'media/heroes/aura.webp',
  'media/heroes/aura-mobile.webp',
  'media-originals/generated/aura.png',
  'exec-6c6ec70e-e448-468f-9d98-df11f498f787.png',
];
const failures = [];

async function walk(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, item.name);
    if (item.isDirectory()) await walk(file);
    else {
      const relative = path.relative(root, file).replaceAll('\\', '/');
      if (rejected.some(token => relative.includes(token))) failures.push(relative);
      if (/\.(astro|js|mjs|ts|json|css|html|md|txt)$/i.test(file)) {
        const text = await readFile(file, 'utf8');
        if (rejected.some(token => text.includes(token))) failures.push(relative);
      }
    }
  }
}

for (const directory of ['src', 'public']) await walk(path.join(root, directory));
const provenance = JSON.parse(await readFile(path.join(root, 'docs/image-provenance.json'), 'utf8'));
if (provenance.some(item => rejected.includes(item.original))) failures.push('docs/image-provenance.json');

// Originals may remain locally for provenance, but must be excluded from Git.
const ignore = await readFile(path.join(root, '.gitignore'), 'utf8');
if (!ignore.split(/\r?\n/).includes('media-originals/generated/aura.png')) {
  failures.push('Missing Git exclusion for the rejected original');
}

if (failures.length) {
  console.error('Rejected torus artwork found in website inputs:', [...new Set(failures)].join(', '));
  process.exitCode = 1;
} else console.log('Imagery check passed: rejected ring-torus artwork is excluded.');
