import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const errors = [];
const expectedPages = [
  "index.html",
  path.join("co-operative-paths", "index.html"),
  path.join("shared-wellbeing", "index.html"),
  path.join("aura-geode", "index.html"),
  path.join("your-digital-self", "index.html"),
  path.join("public-value", "index.html"),
  path.join("oceania", "index.html"),
  path.join("a-protopian-gambit", "index.html"),
  path.join("evidence", "index.html"),
  path.join("about", "index.html"),
  path.join("site-map", "index.html")
];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === ".git" || entry.name === "node_modules") return [];
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function stripMarkup(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ");
}

function count(text, pattern) {
  return (text.match(pattern) || []).length;
}

const files = walk(root);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const cssFiles = files.filter((file) => file.endsWith(".css"));
const scriptFiles = files.filter((file) => file.endsWith(".js"));
const heroImages = new Set();

expectedPages.forEach((relative) => {
  if (!fs.existsSync(path.join(root, relative))) errors.push("Missing expected page: " + relative);
});

if (htmlFiles.length !== expectedPages.length) {
  errors.push("Expected " + expectedPages.length + " HTML pages, found " + htmlFiles.length + ".");
}

htmlFiles.forEach((file) => {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  const visible = stripMarkup(html);

  if (count(html, /<title>[^<]+<\/title>/gi) !== 1) errors.push(relative + ": expected one page title.");
  if (count(html, /<h1(?:\s[^>]*)?>/gi) !== 1) errors.push(relative + ": expected one main heading.");
  if (!/<html\s+lang="en-AU">/i.test(html)) errors.push(relative + ": missing Australian English language tag.");
  if (!/<link\s+rel="canonical"\s+href="https:\/\/auraofintelligence\.github\.io\/Oceania-healthy-de-slop-co-ops\//i.test(html)) errors.push(relative + ": missing public canonical address.");
  if (!/<meta\s+property="og:image"\s+content="https:\/\/auraofintelligence\.github\.io\/Oceania-healthy-de-slop-co-ops\/assets\/images\/hero-[^"]+\.webp">/i.test(html)) errors.push(relative + ": missing page-specific social image.");
  if (!/<meta\s+name="twitter:card"\s+content="summary_large_image">/i.test(html)) errors.push(relative + ": missing large social-card metadata.");
  const iconLinks = [
    ["multi-size favicon", /<link rel="icon" href="(?:\.\.\/)?assets\/icons\/favicon\.ico\?v=20260831-connected-gems" type="image\/x-icon" sizes="16x16 32x32 48x48">/i],
    ["32px favicon", /<link rel="icon" href="(?:\.\.\/)?assets\/icons\/favicon-32x32\.png\?v=20260831-connected-gems" type="image\/png" sizes="32x32">/i],
    ["16px favicon", /<link rel="icon" href="(?:\.\.\/)?assets\/icons\/favicon-16x16\.png\?v=20260831-connected-gems" type="image\/png" sizes="16x16">/i],
    ["192px favicon", /<link rel="icon" href="(?:\.\.\/)?assets\/icons\/favicon-192\.png\?v=20260831-connected-gems" type="image\/png" sizes="192x192">/i],
    ["Apple touch icon", /<link rel="apple-touch-icon" href="(?:\.\.\/)?assets\/icons\/apple-touch-icon\.png\?v=20260831-connected-gems" type="image\/png" sizes="180x180">/i]
  ];
  iconLinks.forEach(([label, pattern]) => {
    if (!pattern.test(html)) errors.push(relative + ": missing or incomplete " + label + " link.");
  });
  if (!/<img class="brand-gem" src="(?:\.\.\/)?assets\/icons\/favicon-192\.png\?v=20260831-header-gems" alt="" width="54" height="54" decoding="async">/i.test(html)) {
    errors.push(relative + ": missing connected-gems header mark.");
  }
  if (/<span class="brand-gem"/i.test(html)) errors.push(relative + ": still contains the retired three-dot header mark.");
  if (/[\u2013\u2014]/.test(html)) errors.push(relative + ": contains an en dash or em dash.");
  if (/\.svg(?:["'#?])/i.test(html)) errors.push(relative + ": contains an SVG reference.");

  const discouraged = [
    /\bcan\b/i,
    /\bcannot\b/i,
    /smallest next step/i,
    /honest next move/i,
    /\bmandate\b/i,
    /\btruthfully\b/i
  ];
  discouraged.forEach((pattern) => {
    if (pattern.test(visible)) errors.push(relative + ": contains discouraged wording matching " + pattern + ".");
  });

  const ids = [...html.matchAll(/\sid="([^"]+)"/gi)].map((match) => match[1]);
  const repeatedIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (repeatedIds.length) errors.push(relative + ": duplicate IDs: " + [...new Set(repeatedIds)].join(", ") + ".");

  const imageTags = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
  imageTags.forEach((tag) => {
    if (!/\salt="[^"]*"/i.test(tag)) errors.push(relative + ": image without alt text.");
  });

  const heroMatch = html.match(/class="hero-image"\s+src="([^"]+)"/i);
  if (!heroMatch) {
    errors.push(relative + ": missing full-width hero image.");
  } else {
    const heroName = path.basename(heroMatch[1]);
    if (heroImages.has(heroName)) errors.push(relative + ": hero image is reused: " + heroName + ".");
    heroImages.add(heroName);
  }

  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/gi)].map((match) => match[1]);
  references.forEach((reference) => {
    if (/^(?:https?:|mailto:|tel:|data:|#)/i.test(reference)) return;
    const clean = decodeURIComponent(reference.split("#")[0].split("?")[0]);
    let target = path.resolve(path.dirname(file), clean);
    if (clean.endsWith("/")) target = path.join(target, "index.html");
    if (!fs.existsSync(target)) errors.push(relative + ": missing local file " + reference + ".");
  });

  const fragments = references.filter((reference) => reference.startsWith("#") && reference.length > 1);
  fragments.forEach((fragment) => {
    if (!ids.includes(fragment.slice(1))) errors.push(relative + ": missing local fragment " + fragment + ".");
  });

  const controls = [...html.matchAll(/aria-controls="([^"]+)"/gi)].map((match) => match[1]);
  controls.forEach((control) => {
    if (!ids.includes(control)) errors.push(relative + ": aria-controls target is missing: " + control + ".");
  });
});

const requiredAssets = [
  "assets/css/tokens.css",
  "assets/css/base.css",
  "assets/css/layout.css",
  "assets/css/components.css",
  "assets/css/pages.css",
  "assets/css/motion.css",
  "assets/js/site.js",
  "assets/icons/favicon.ico",
  "assets/icons/favicon-16x16.png",
  "assets/icons/favicon-32x32.png",
  "assets/icons/favicon-192.png",
  "assets/icons/apple-touch-icon.png",
  "assets/images/hero-home-v2.webp",
  "assets/images/hero-co-operative-paths.webp",
  "assets/images/hero-shared-wellbeing.webp",
  "assets/images/hero-aura-geode.webp",
  "assets/images/hero-your-digital-self.webp",
  "assets/images/hero-public-value.webp",
  "assets/images/hero-oceania.webp",
  "assets/images/hero-a-protopian-gambit.webp",
  "assets/images/hero-evidence.webp",
  "assets/images/hero-about.webp",
  "assets/images/hero-site-map.webp",
  "sitemap.xml",
  "robots.txt"
];

requiredAssets.forEach((relative) => {
  if (!fs.existsSync(path.join(root, relative))) errors.push("Missing required asset: " + relative + ".");
});

function readPngDimensions(relative) {
  const file = path.join(root, relative);
  if (!fs.existsSync(file)) return null;
  const data = fs.readFileSync(file);
  const signature = "89504e470d0a1a0a";
  if (data.length < 24 || data.subarray(0, 8).toString("hex") !== signature) return null;
  return [data.readUInt32BE(16), data.readUInt32BE(20)];
}

const pngDimensions = new Map([
  ["assets/icons/favicon-16x16.png", [16, 16]],
  ["assets/icons/favicon-32x32.png", [32, 32]],
  ["assets/icons/favicon-192.png", [192, 192]],
  ["assets/icons/apple-touch-icon.png", [180, 180]]
]);

pngDimensions.forEach((expected, relative) => {
  const actual = readPngDimensions(relative);
  if (!actual || actual[0] !== expected[0] || actual[1] !== expected[1]) {
    errors.push(relative + ": expected " + expected.join("x") + " PNG dimensions.");
  }
});

const icoPath = path.join(root, "assets/icons/favicon.ico");
if (fs.existsSync(icoPath)) {
  const ico = fs.readFileSync(icoPath);
  const count = ico.length >= 6 ? ico.readUInt16LE(4) : 0;
  const sizes = [];
  for (let index = 0; index < count; index += 1) {
    const offset = 6 + index * 16;
    if (offset + 16 > ico.length) break;
    sizes.push([ico[offset] || 256, ico[offset + 1] || 256]);
  }
  const expectedIcoSizes = [16, 32, 48];
  expectedIcoSizes.forEach((size) => {
    if (!sizes.some(([width, height]) => width === size && height === size)) {
      errors.push("assets/icons/favicon.ico: missing " + size + "x" + size + " frame.");
    }
  });
}

cssFiles.forEach((file) => {
  const css = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  if (count(css, /\{/g) !== count(css, /\}/g)) errors.push(relative + ": CSS braces are unbalanced.");
  if (count(css, /\(/g) !== count(css, /\)/g)) errors.push(relative + ": CSS parentheses are unbalanced.");
  if (/[\u2013\u2014]/.test(css)) errors.push(relative + ": contains an en dash or em dash.");
  if (/url\([^)]*\.svg/i.test(css)) errors.push(relative + ": contains an SVG reference.");
});

scriptFiles.forEach((file) => {
  try {
    execFileSync(process.execPath, ["--check", file], { stdio: "pipe" });
  } catch (error) {
    errors.push(path.relative(root, file) + ": JavaScript syntax check failed.");
  }
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Checked " + htmlFiles.length + " HTML pages, " + heroImages.size + " distinct heroes, " + cssFiles.length + " style layers and all local links.");
