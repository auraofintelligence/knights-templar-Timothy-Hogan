import { readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicFiles = readdirSync(root)
  .filter((name) => extname(name) === '.html' || name === 'README.md' || name === 'LICENSE.md')
  .sort();
const legalFiles = new Set(['licence.html', 'LICENSE.md']);

const failures = [];
const rules = [
  {
    label: 'permission-modal wording',
    pattern: /\b(?:can|cannot|must|may|should|could|would|only|permission|permitted|allowed|authorised|approved|required|requires|requirement|requirements|gate|gates|proceed|qualified|qualification)\b|\b(?:can't|mustn't|shouldn't|couldn't|wouldn't)\b/i,
  },
  {
    label: 'fixed inclusion wording',
    pattern: /\b(?:include|includes|included|including|exclude|excludes|excluded|excluding)\b/i,
  },
  {
    label: 'military target wording',
    pattern: /\btarget(?:s|ed|ing)?\b/i,
  },
  {
    label: 'closed-lane framing',
    pattern: /\b(?:ladder|lane|lanes|long-horizon)\b|\b(?:smallest useful|earned silicon)\b/i,
  },
  {
    label: 'non-AUD displayed currency',
    pattern: /\bUSD\b|US\$/i,
  },
];

const visibleText = (line, isHtml) => {
  const withoutTags = isHtml ? line.replace(/<[^>]*>/g, ' ') : line;
  return withoutTags
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;|&#34;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
};

for (const file of publicFiles) {
  const source = readFileSync(join(root, file), 'utf8');
  const isHtml = extname(file) === '.html';

  source.split(/\r?\n/).forEach((line, index) => {
    const text = visibleText(line, isHtml);
    if (!text) return;

    for (const rule of rules) {
      if (legalFiles.has(file) && (rule.label === 'permission-modal wording' || rule.label === 'fixed inclusion wording')) continue;
      const match = text.match(rule.pattern);
      if (match) failures.push(`${file}:${index + 1}: ${rule.label}: "${match[0]}"`);
    }
  });
}

for (const file of [...publicFiles, 'script.js']) {
  const source = readFileSync(join(root, file), 'utf8');
  if (source.includes('—')) failures.push(`${file}: em dash found`);
}

if (failures.length) {
  console.error(`Tone check failed (${failures.length})`);
  failures.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}

console.log(`Tone check passed for ${publicFiles.length} public content files, with licence language checked in its legal context.`);
