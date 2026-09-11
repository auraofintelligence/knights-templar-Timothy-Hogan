import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const toolDirectory = path.dirname(fileURLToPath(import.meta.url));
const repoDirectory = path.resolve(toolDirectory, "..");
const failures = [];
const claimIds = new Set();
const allowedPathwayStatuses = new Set(["low", "conditional", "specialist", "confirm", "not-fit"]);
let claimCount = 0;

function fail(message) { failures.push(message); }

function validCheckedDate(value) {
  return /^\d{1,2} [A-Z][a-z]+ \d{4}$/.test(value || "") && !Number.isNaN(Date.parse(value));
}

function validateClaim(claim, location) {
  if (!claim || typeof claim !== "object") { fail(`${location}: claim metadata missing`); return; }
  if (!/^[A-Z0-9-]+$/.test(claim.id || "")) fail(`${location}: invalid claim id`);
  if (!validCheckedDate(claim.checked)) fail(`${location}: invalid checked date`);
  if (claimIds.has(claim.id)) fail(`${location}: duplicate claim id ${claim.id}`);
  if (claim.id) claimIds.add(claim.id);
  claimCount += 1;
}

function filesBelow(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? filesBelow(target) : [target];
  });
}

const files = filesBelow(repoDirectory).filter((file) => !file.includes(`${path.sep}.git${path.sep}`));
const htmlFiles = files.filter((file) => file.endsWith(".html"));

for (const htmlFile of htmlFiles) {
  const relative = path.relative(repoDirectory, htmlFile);
  const html = fs.readFileSync(htmlFile, "utf8");
  if (!/<html lang="en-AU">/.test(html)) fail(`${relative}: missing lang=en-AU`);
  if (!/<meta name="viewport"/.test(html)) fail(`${relative}: missing viewport metadata`);
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`${relative}: missing title`);
  if (!/class="skip-link"/.test(html)) fail(`${relative}: missing skip link`);
  if (!/<main id="main"/.test(html)) fail(`${relative}: missing main landmark`);

  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(?:https?:|mailto:|tel:|#|data:)/.test(reference)) continue;
    const clean = reference.split(/[?#]/)[0];
    if (!clean) continue;
    const target = path.resolve(path.dirname(htmlFile), clean);
    if (!fs.existsSync(target)) fail(`${relative}: missing local reference ${reference}`);
  }
}

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(repoDirectory, "assets", "data.js"), "utf8"), sandbox);
vm.runInContext(fs.readFileSync(path.join(repoDirectory, "assets", "world-baseline.js"), "utf8"), sandbox);
vm.runInContext(fs.readFileSync(path.join(repoDirectory, "assets", "prepare.js"), "utf8"), sandbox);

const atlas = sandbox.window.ATLAS_DATA;
const world = sandbox.window.WORLD_BASELINE;
const preparation = sandbox.window.PREPARE_DATA;
if (!atlas || !Array.isArray(atlas.countries)) fail("assets/data.js: ATLAS_DATA missing");
if (!Array.isArray(world) || world.length !== 201) fail(`assets/world-baseline.js: expected 201 records, found ${world?.length}`);

const requiredCountries = [
  "thailand", "vietnam", "china", "philippines", "india", "new-zealand",
  "singapore", "united-states", "canada", "united-kingdom", "ireland",
  "germany", "italy", "spain", "uruguay", "japan", "south-korea",
  "malaysia", "indonesia", "united-arab-emirates", "saudi-arabia",
  "qatar", "kenya", "palau", "france", "netherlands", "belgium",
  "switzerland", "austria", "portugal", "greece", "mexico", "brazil",
  "argentina", "south-africa", "turkiye"
];
const currentBatchCountries = new Set([
  "germany", "italy", "spain", "uruguay", "japan", "south-korea",
  "malaysia", "indonesia", "united-arab-emirates", "saudi-arabia",
  "qatar", "kenya", "palau", "france", "netherlands", "belgium",
  "switzerland", "austria", "portugal", "greece", "mexico", "brazil",
  "argentina", "south-africa", "turkiye"
]);
if (atlas.countries.length !== requiredCountries.length) fail(`assets/data.js: expected ${requiredCountries.length} deep countries, found ${atlas.countries.length}`);
const countryIds = atlas.countries.map((country) => country.id);
if (new Set(countryIds).size !== countryIds.length) fail("assets/data.js: duplicate country id");
for (const id of requiredCountries) {
  if (!atlas.countries.find((item) => item.id === id)) fail(`assets/data.js: missing ${id}`);
}
for (const country of atlas.countries) {
  const id = country.id;
  if (!id) { fail("assets/data.js: country id missing"); continue; }
  if (!country.name || !country.flag || !country.region) fail(`${id}: incomplete country identity`);
  if (!validCheckedDate(country.reviewed)) fail(`${id}: invalid country review date`);
  if (currentBatchCountries.has(id) && country.reviewed !== "21 August 2026") fail(`${id}: current batch must be reviewed 21 August 2026`);
  for (const key of ["entrySnapshot", "ageNote", "cardSummary", "summary", "steps", "cautions"]) {
    validateClaim(country.claimChecks?.[key], `${id}.${key}`);
  }
  for (const key of ["entrySnapshot", "ageNote", "cardSummary", "summary"]) {
    if (!country[key] || typeof country[key] !== "string") fail(`${id}: missing ${key}`);
  }
  if (!Array.isArray(country.steps) || !country.steps.length) fail(`${id}: missing route-builder steps`);
  if (!Array.isArray(country.cautions) || !country.cautions.length) fail(`${id}: missing route-edge cautions`);
  for (const key of ["fastestEntry", "beforeDeparture", "usefulStay", "hostUnlock", "quickPacket"]) {
    validateClaim(country.claimChecks?.launch?.[key], `${id}.launch.${key}`);
  }
  for (const key of ["fastestEntry", "beforeDeparture", "usefulStay", "hostUnlock"]) {
    if (!country.launch?.[key] || typeof country.launch[key] !== "string") fail(`${id}: missing launch.${key}`);
  }
  if (!Array.isArray(country.launch?.quickPacket) || !country.launch.quickPacket.length) fail(`${id}: missing launch.quickPacket`);
  for (const key of ["label", "detail", "themes"]) {
    validateClaim(country.claimChecks?.conferenceFit?.[key], `${id}.conferenceFit.${key}`);
  }
  if (!country.conferenceFit?.label || !country.conferenceFit?.detail || !Array.isArray(country.conferenceFit?.themes) || !country.conferenceFit.themes.length) fail(`${id}: incomplete language/event signal`);
  for (const activity of atlas.activities) {
    if (!country.pathways[activity.id]) fail(`${id}: missing pathway ${activity.id}`);
    if (!allowedPathwayStatuses.has(country.pathways[activity.id]?.status)) fail(`${id}: invalid pathway status for ${activity.id}`);
    for (const key of ["route", "detail", "next"]) {
      if (!country.pathways[activity.id]?.[key] || typeof country.pathways[activity.id][key] !== "string") fail(`${id}: missing ${activity.id}.${key}`);
    }
    for (const key of ["status", "route", "detail", "next"]) {
      validateClaim(country.claimChecks?.pathways?.[activity.id]?.[key], `${id}.pathways.${activity.id}.${key}`);
    }
  }
  if (!country.sources?.length) fail(`${id}: no sources`);
  for (const source of country.sources || []) {
    if (!/^https:\/\//.test(source.url)) fail(`${id}: non-HTTPS source ${source.url}`);
    if (!source.title || !source.authority || !source.supports || !validCheckedDate(source.checked)) fail(`${id}: incomplete source metadata for ${source.title || "untitled source"}`);
    if (currentBatchCountries.has(id) && source.checked !== "21 August 2026") fail(`${id}: current-batch source is not checked 21 August 2026 for ${source.title || "untitled source"}`);
  }
  for (const opportunity of country.opportunities || []) {
    validateClaim(opportunity, `${id}.opportunities.${opportunity.id || "missing-id"}`);
    if (!opportunity.title || !opportunity.type || !opportunity.detail || !opportunity.deadline || !/^\d{4}-\d{2}-\d{2}$/.test(opportunity.deadlineISO || "")) fail(`${id}: incomplete opportunity ${opportunity.title || "untitled"}`);
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/.test(opportunity.deadlineAt || "") || Number.isNaN(Date.parse(opportunity.deadlineAt))) fail(`${id}: missing or invalid opportunity timestamp ${opportunity.deadlineAt || "missing"}`);
    if (!/^https:\/\//.test(opportunity.url || "")) fail(`${id}: non-HTTPS opportunity source ${opportunity.url || "missing"}`);
    const opportunitySource = country.sources?.find((source) => source.url === opportunity.url);
    if (!opportunitySource || opportunitySource.kind !== "opportunity") fail(`${id}: opportunity source is missing explicit kind metadata for ${opportunity.title || "untitled"}`);
  }
  const page = path.join(repoDirectory, "countries", `${id}.html`);
  if (!fs.existsSync(page)) fail(`${id}: country page missing`);
}

const expectedEntryFirstPasses = ["Cook Islands", "Côte d’Ivoire", "Hong Kong SAR", "Kosovo", "Macao SAR", "Niue", "State of Palestine", "Western Sahara"];
for (const name of expectedEntryFirstPasses) {
  const record = world.find((item) => item.name === name);
  if (!record) { fail(`world baseline: missing ${name}`); continue; }
  if (!validCheckedDate(record.baselineVisaReviewed)) fail(`${name}: entry first pass has invalid review date`);
  if (!record.entrySummary || /queued|not yet reviewed/i.test(record.entrySummary)) fail(`${name}: entry first pass is still a placeholder`);
  if (!/^https:\/\//.test(record.entrySourceUrl || "")) fail(`${name}: official entry source missing`);
}

for (const activity of atlas.activities) {
  for (const key of ["short", "description", "boundary"]) {
    validateClaim(activity.claimChecks?.[key], `activities.${activity.id}.${key}`);
  }
}

for (const record of world) {
  const worldClaims = [
    [record.entryClaimId, record.baselineVisaReviewed, "entry"],
    [record.costClaimId, record.costReviewed, "cost"],
    [record.frictionClaimId, record.frictionReviewed, "friction"],
    [record.advisoryClaimId, record.advisoryReviewed, "advisory"]
  ];
  for (const [id, checked, key] of worldClaims) validateClaim({ id, checked }, `world.${record.name}.${key}`);
}

if (!preparation || !Array.isArray(preparation.items) || preparation.items.length < 40) {
  fail("assets/prepare.js: preparation dataset is missing or unexpectedly small");
} else {
  const allowedModes = new Set(Object.keys(preparation.modes || {}));
  for (const item of preparation.items) {
    validateClaim({ id: item.id, checked: item.checked }, `preparation.${item.id}`);
    if (!item.title || !item.detail || !item.category) fail(`preparation.${item.id}: incomplete preparation item`);
    if (!item.horizons?.length || item.horizons.some((mode) => !allowedModes.has(mode))) fail(`preparation.${item.id}: invalid readiness horizon`);
  }
}

if (new Set(atlas.activities.map((item) => item.id)).size !== atlas.activities.length) fail("Duplicate activity ids");
if (new Set(world.map((item) => item.name)).size !== world.length) fail("Duplicate world place names");

const textFiles = files.filter((file) => /\.(?:html|js|md|css)$/.test(file));
for (const file of textFiles) {
  const text = fs.readFileSync(file, "utf8");
  if (/\b(?:TODO|TBD|FIXME)\b/.test(text)) fail(`${path.relative(repoDirectory, file)}: unresolved placeholder marker`);
  if (/C:\\Users\\lukec|C:\/Users\/lukec/i.test(text)) fail(`${path.relative(repoDirectory, file)}: local path leak`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages, ${atlas.countries.length} deep country guides, ${atlas.activities.length} activity types, ${world.length} world records, ${preparation?.items?.length || 0} preparation items and ${claimCount} dated claims.`);
