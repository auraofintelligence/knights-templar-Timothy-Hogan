import { access, readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("../", import.meta.url);
const rootPath = decodeURIComponent(root.pathname.replace(/^\/(?:([A-Za-z]:))/, "$1"));
const entries = await readdir(rootPath, { withFileTypes: true });
const htmlFiles = entries
  .filter((entry) => entry.isFile() && extname(entry.name) === ".html")
  .map((entry) => entry.name)
  .sort();

const publicPages = [
  "index.html",
  "seven-mile.html",
  "sand-screen.html",
  "ballow-road.html",
  "mens-recovery.html",
  "women-children.html",
  "housing.html",
  "ageing-longevity.html",
  "claytons-road.html",
  "organisation-builder.html",
  "structure.html",
  "connections.html",
  "sources.html",
  "documents.html",
  "sitemap.html",
];

const mainNavigation = [
  ["index.html", "Home"],
  ["seven-mile.html", "7 Mile"],
  ["sand-screen.html", "Sand and Screen"],
  ["ballow-road.html", "9 Ballow Road"],
  ["mens-recovery.html", "Men's camp"],
  ["women-children.html", "Women and children"],
  ["housing.html", "Housing pathways"],
  ["ageing-longevity.html", "Aged care and longevity"],
  ["claytons-road.html", "82 Claytons Road"],
  ["organisation-builder.html", "Organisation builder"],
  ["structure.html", "Funding pathways"],
  ["connections.html", "Related public work"],
  ["sources.html", "Source trail"],
  ["sitemap.html", "Site map"],
];

const errors = [];

if (htmlFiles.includes("places.html")) errors.push("Retired duplicate page remains: places.html");

for (const page of publicPages) {
  if (!htmlFiles.includes(page)) errors.push(`Missing page: ${page}`);
}

for (const file of htmlFiles) {
  const source = await readFile(join(rootPath, file), "utf8");
  const navMatch = source.match(/<nav class="site-nav"[\s\S]*?<\/nav>/);

  if (!navMatch) {
    errors.push(`${file}: missing main navigation`);
  } else {
    let previousIndex = -1;
    for (const [page, label] of mainNavigation) {
      const needle = `href="${page}"`;
      const index = navMatch[0].indexOf(needle);
      if (index < 0) errors.push(`${file}: navigation is missing ${label}`);
      if (index >= 0 && !navMatch[0].includes(`>${label}</a>`)) errors.push(`${file}: navigation label is not ${label}`);
      if (index >= 0 && navMatch[0].indexOf(needle, index + needle.length) >= 0) errors.push(`${file}: navigation repeats ${label}`);
      if (index >= 0 && index < previousIndex) errors.push(`${file}: ${label} is out of navigation order`);
      if (index >= 0) previousIndex = index;
    }
  }

  const expectedCurrent = mainNavigation.some(([page]) => page === file) ? file : null;
  const currentLinks = navMatch ? [...navMatch[0].matchAll(/<a\b[^>]*href="([^"]+)"[^>]*aria-current="page"/g)].map((match) => match[1]) : [];
  if (expectedCurrent && (currentLinks.length !== 1 || currentLinks[0] !== expectedCurrent)) {
    errors.push(`${file}: current-page highlight does not match ${expectedCurrent}`);
  }
  if (!expectedCurrent && currentLinks.length) errors.push(`${file}: unexpected current-page highlight`);

  if (!source.includes('class="to-top"')) errors.push(`${file}: missing return-to-top control`);
  if (!source.includes('class="route-nav"')) errors.push(`${file}: missing previous/next navigation`);
  if (!source.includes('rel="icon"')) errors.push(`${file}: missing favicon link`);
  if (!source.includes('rel="apple-touch-icon"')) errors.push(`${file}: missing Apple touch icon link`);
  if (!source.includes('rel="manifest"')) errors.push(`${file}: missing web manifest link`);
  if (!source.includes('href="sitemap.html"')) errors.push(`${file}: missing human-readable site map link`);
  if (/Ready S\.E\.T\.(?! Co-op)/.test(source)) errors.push(`${file}: Ready S.E.T. must include Co-op`);
  if (/Noonucal|Nunukle|Noonuccul/i.test(source)) errors.push(`${file}: incorrect Noonuccal spelling`);
  if (/[\u2013\u2014]/.test(source)) errors.push(`${file}: contains an en dash or em dash`);
  if (/\bcan\b/i.test(source)) errors.push(`${file}: contains the authority-prone word can`);
  if (/status-pill|section-kicker/.test(source)) errors.push(`${file}: contains an eyebrow treatment`);
  if (/Minjerribah Sites and Services Workbench/.test(source)) errors.push(`${file}: contains the retired umbrella title`);
  if (/auraofintelligence\.github\.io\/aura-health-twin/.test(source)) errors.push(`${file}: links to the Aura Health Twin holding page as if it were finished`);
  if (/7 Mile is the (?:lead|heart)|7 Mile leads|first on-Country|grow around it/i.test(source)) {
    errors.push(`${file}: contains ranking or centre-of-network language`);
  }

  const externalLinks = [...source.matchAll(/<a\b([^>]*href="https?:\/\/[^\"]+"[^>]*)>/g)];
  for (const [, attributes] of externalLinks) {
    if (!/target="_blank"/.test(attributes) || !/rel="noopener noreferrer"/.test(attributes)) {
      errors.push(`${file}: external link missing secure new-tab attributes`);
    }
  }

  const localReferences = [...source.matchAll(/(?:href|src)="([^"#?]+)"/g)]
    .map((match) => match[1])
    .filter((reference) => !/^(?:https?:|mailto:|tel:|data:)/.test(reference));
  for (const reference of localReferences) {
    try {
      await access(join(rootPath, reference));
    } catch {
      errors.push(`${file}: missing local file ${reference}`);
    }
  }
}

const heroSources = new Map();
for (const page of publicPages) {
  const source = await readFile(join(rootPath, page), "utf8");
  const hero = source.match(/<img[^>]+class="hero-image"[^>]+src="([^"]+)"|<img[^>]+src="([^"]+)"[^>]+class="hero-image"/);
  if (!hero) {
    errors.push(`${page}: missing a hero image`);
    continue;
  }
  const heroSource = hero[1] || hero[2];
  if (heroSources.has(heroSource)) errors.push(`${page}: duplicates the hero used by ${heroSources.get(heroSource)}`);
  heroSources.set(heroSource, page);
}

for (const asset of [
  "assets/styles.css",
  "assets/site.js",
  "favicon.ico",
  "apple-touch-icon.png",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "site.webmanifest",
  "sitemap.xml",
]) {
  try {
    await access(join(rootPath, asset));
  } catch {
    errors.push(`Missing asset: ${asset}`);
  }
}

const manifest = JSON.parse(await readFile(join(rootPath, "site.webmanifest"), "utf8"));
if (manifest.name !== "Minjerribah Site and Service Ideas") errors.push("site.webmanifest: incorrect public name");
if (manifest.short_name !== "Site Ideas") errors.push("site.webmanifest: incorrect short name");
for (const icon of manifest.icons || []) {
  try {
    await access(join(rootPath, icon.src));
  } catch {
    errors.push(`Manifest icon is missing: ${icon.src}`);
  }
}

const css = await readFile(join(rootPath, "assets/styles.css"), "utf8");
if (!/html\s*\{[^}]*font-size:\s*18px/s.test(css)) errors.push("styles.css: desktop base text is not locked to 18px");
if (!/@media[^{}]*max-width:[^{]+\{[\s\S]*?html\s*\{[^}]*font-size:\s*17px/s.test(css)) {
  errors.push("styles.css: mobile base text is not locked to 17px");
}
if (!/@media\s*\(max-width:\s*720px\)[\s\S]*?h1\s*\{[^}]*font-size:\s*clamp\(3rem,11vw,4\.2rem\)[^}]*overflow-wrap:\s*anywhere/s.test(css)) {
  errors.push("styles.css: mobile hero titles are not protected from long-word overflow");
}
if (/font-size:\s*\.[0-9]+rem/.test(css)) errors.push("styles.css: contains text smaller than the base size");
if (/theme-ribbon|cursor-orb|network-canvas/.test(css)) errors.push("styles.css: contains a retired motion treatment");
if (/animation:[^;]*infinite/.test(css)) errors.push("styles.css: contains a perpetual animation");

const siteScript = await readFile(join(rootPath, "assets/site.js"), "utf8");
if (!siteScript.includes('document.documentElement.classList.add("js")')) errors.push("site.js: reveal motion is not progressively enhanced");
if (/\.menu-button/.test(siteScript.match(/querySelectorAll\([^\n]+/g)?.find((line) => line.includes("magnetic")) || "")) {
  errors.push("site.js: menu button should not use magnetic movement");
}

const sitemap = await readFile(join(rootPath, "sitemap.xml"), "utf8");
for (const page of publicPages) {
  const ending = page === "index.html" ? "/</loc>" : `/${page}</loc>`;
  if (!sitemap.includes(ending)) errors.push(`sitemap.xml: missing ${page}`);
}

const sandScreen = await readFile(join(rootPath, "sand-screen.html"), "utf8");
if (!sandScreen.includes("Dunwich, Amity and Point Lookout")) errors.push("sand-screen.html: missing the three-town location frame");
if (!sandScreen.includes("10 to 12 Ballow Road")) errors.push("sand-screen.html: missing the earlier Ballow Road location study");
if (!sandScreen.includes("quartz silica sand was loaded")) errors.push("sand-screen.html: missing the supplied newer location history");
if (!sandScreen.includes("https://auraofintelligence.github.io/ballow-road-sand-screen-hub/")) errors.push("sand-screen.html: missing the detailed research link");
if (/360|pannellum|site-360|evidence-map/i.test(sandScreen)) errors.push("sand-screen.html: includes the excluded 360 material");

const sevenMile = await readFile(join(rootPath, "seven-mile.html"), "utf8");
if (!sevenMile.includes("Gemini Flash guestimate")) errors.push("seven-mile.html: illustrative land budget is missing its guestimate label");
if (!sevenMile.includes("Vertical Tower Farm and Seedling Hub")) errors.push("seven-mile.html: missing the 1,000 square metre tower farm allocation");
if (!/about eight footy fields/i.test(sevenMile) || !sevenMile.includes("about 74 m² each") || !sevenMile.includes("about 65 m² each")) errors.push("seven-mile.html: missing the plain-language scale and per-place footprints");
if (/Hard Figures/i.test(sevenMile)) errors.push("seven-mile.html: presents the guestimate as hard figures");

const ageingLongevity = await readFile(join(rootPath, "ageing-longevity.html"), "utf8");
if (!ageingLongevity.includes("Aura Health Twin is an early local prototype")) errors.push("ageing-longevity.html: overstates the Aura Health Twin prototype status");
if (!ageingLongevity.includes("Software as a Medical Device plan exists, but the clinical software and regulatory pathway are not fully developed")) errors.push("ageing-longevity.html: missing the unfinished SaMD distinction");
if (!ageingLongevity.includes("60 two-hour sessions") || !ageingLongevity.includes("Hyperbaric therapy is the setting for the full sequence")) errors.push("ageing-longevity.html: misstates the proposed 60-session hyperbaric journey");
if (/Possible later study areas named in the source material include/.test(ageingLongevity) || /track first, treat with clinicians/i.test(ageingLongevity)) errors.push("ageing-longevity.html: contains superseded health research wording");

const organisationBuilder = await readFile(join(rootPath, "organisation-builder.html"), "utf8");
for (const requiredText of [
  "7 Mile commercial company",
  "7 Mile public-benefit body",
  "9 Ballow Road public doorway",
  "Sand and Screen programme",
  "Surf-side men's alcohol and drug free camp",
  "Safe place for women and children",
  "Housing and supported living",
  "Aged care and Elders services",
  "Longevity and rejuvenation research",
  "Aura Health Twin and specialist technology",
  "82 Claytons Road, Amity",
  "Ready S.E.T. Co-op",
  "Strange But True",
  "Community wealth and C-Hour",
]) {
  if (!organisationBuilder.includes(requiredText)) errors.push(`organisation-builder.html: missing component ${requiredText}`);
}
if (!organisationBuilder.includes("The 41 per cent, 39 per cent and 20 per cent split applies only to this proposed 7 Mile commercial vehicle")) errors.push("organisation-builder.html: does not scope the working split to 7 Mile");
if (!organisationBuilder.includes("Ready Sustainable Employment and Training Cooperative is proposed and not registered")) errors.push("organisation-builder.html: overstates Ready S.E.T. Co-op status");
if (!organisationBuilder.includes("Country, family rights, Noonuccal cultural authority")) errors.push("organisation-builder.html: missing the Country and cultural authority boundary");
if (!organisationBuilder.includes("Software as a Medical Device plan exists, but the clinical software and regulatory pathway are not fully developed")) errors.push("organisation-builder.html: overstates the Aura Health Twin pathway");
if (/Cyril|Josh|Tappy|Jappy/i.test(organisationBuilder)) errors.push("organisation-builder.html: includes a private individual");

const sourceDocuments = (await readdir(join(rootPath, "source-documents"), { withFileTypes: true })).filter((entry) => entry.isFile());
if (sourceDocuments.length !== 30) errors.push(`source-documents: expected 30 public source files, found ${sourceDocuments.length}`);
const documentsPage = await readFile(join(rootPath, "documents.html"), "utf8");
for (const entry of sourceDocuments) {
  if (!documentsPage.includes(`source-documents/${entry.name}`)) errors.push(`documents.html: missing source file link ${entry.name}`);
}

const readme = await readFile(join(rootPath, "README.md"), "utf8");
if (/DM Sans|pointer follower|Public status language|auraofintelligence\.github\.io\/aura-health-twin/.test(readme)) {
  errors.push("README.md: contains stale design or Aura Health Twin information");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files and ${publicPages.length} public pages.`);
console.log("Navigation, unique heroes, readable type, favicon, local files, wording and link boundaries passed.");
