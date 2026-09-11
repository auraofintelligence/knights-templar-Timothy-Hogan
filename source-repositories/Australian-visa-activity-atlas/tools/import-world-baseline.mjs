import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const toolDirectory = path.dirname(fileURLToPath(import.meta.url));
const repoDirectory = path.resolve(toolDirectory, "..");
const sourceFile = path.resolve(repoDirectory, "..", "Australian-world-travel", "index.html");
const outputFile = path.resolve(repoDirectory, "assets", "world-baseline.js");

const source = fs.readFileSync(sourceFile, "utf8");
const match = source.match(/const countryData\s*=\s*(\[[\s\S]*?\n\s*\]);/);
if (!match) throw new Error("Could not find countryData in Australian-world-travel/index.html");

const original = vm.runInNewContext(`(${match[1]})`, Object.create(null), { timeout: 1000 });

function claimSlug(value) {
  return value.normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const baseline = original.map((country) => {
  const slug = claimSlug(country.name);
  return {
    name: country.name,
    cities: Array.isArray(country.cities) ? country.cities.map((city) => city.name) : [],
    entrySummary: country.requirements,
    entryClaimId: `WORLD-${slug}-ENTRY`,
    estimatedCostAud: country.cost,
    costClaimId: `WORLD-${slug}-COST`,
    costReviewed: "16 August 2025",
    legacySimplicity: country.simplicity,
    frictionClaimId: `WORLD-${slug}-FRICTION`,
    frictionReviewed: "16 August 2025",
    advisory: country.warning,
    advisoryClaimId: `WORLD-${slug}-ADVISORY`,
    advisoryLevel: country.level,
    distanceFromBrisbaneKm: country.distance,
    baselineVisaReviewed: "16 August 2025",
    advisoryReviewed: "19 May 2026"
  };
});

const entryOnlyRevisions = new Map([
  ["Afghanistan", "Visa required. Extremely difficult to obtain."],
  ["Haiti", "Visa-free for 90 days."]
]);

for (const record of baseline) {
  if (entryOnlyRevisions.has(record.name)) record.entrySummary = entryOnlyRevisions.get(record.name);
}

const additionalTravelJurisdictions = [
  {
    name: "Cook Islands",
    cities: ["Rarotonga"],
    entrySummary: "31-day visitor permit on arrival for Australian passport holders; extensions are available.",
    estimatedCostAud: "Free on arrival",
    legacySimplicity: "Easy",
    advisory: "Exercise normal safety precautions",
    advisoryLevel: 1,
    entrySourceTitle: "Cook Islands immigration policy",
    entrySourceUrl: "https://mfai.gov.ck/sites/default/files/2024-02/Immigration%20policy%20changes%2024%20January%202024.pdf"
  },
  {
    name: "Côte d’Ivoire",
    cities: ["Abidjan", "Yamoussoukro"],
    entrySummary: "Visa required. Apply through the Ivorian Embassy or the official eVisa route before arrival.",
    estimatedCostAud: "Official fee applies",
    legacySimplicity: "Medium",
    advisory: "Exercise a high degree of caution; higher levels apply in some areas",
    advisoryLevel: 2,
    entrySourceTitle: "Embassy of Côte d’Ivoire in Australia visa guidance",
    entrySourceUrl: "https://www.australie.diplomatie.gouv.ci/visa.php?lang=en&num=1"
  },
  {
    name: "Hong Kong SAR",
    cities: ["Hong Kong"],
    entrySummary: "Visa-free visit for Australian passport holders for up to 90 days.",
    estimatedCostAud: "Free",
    legacySimplicity: "Easy",
    advisory: "Exercise a high degree of caution",
    advisoryLevel: 2,
    entrySourceTitle: "Hong Kong Immigration Department visit requirements",
    entrySourceUrl: "https://www.immd.gov.hk/eng/services/visas/visit-transit/visit-visa-entry-permit.html"
  },
  {
    name: "Kosovo",
    cities: ["Pristina"],
    entrySummary: "Visa-free for Australian passport holders for up to 90 days in a six-month period.",
    estimatedCostAud: "Free",
    legacySimplicity: "Easy",
    advisory: "Exercise a high degree of caution; higher levels apply in some areas",
    advisoryLevel: 2,
    entrySourceTitle: "Kosovo Ministry of Foreign Affairs visa list",
    entrySourceUrl: "https://arkivi.mfa-ks.net/en/sherbimet_konsullore/503/kush-ka-nevoj-pr-viza-t-kosovs/503.html"
  },
  {
    name: "Macao SAR",
    cities: ["Macao"],
    entrySummary: "Visa and entry-permit exemption for Australian passport holders; normally up to 30 days.",
    estimatedCostAud: "Free",
    legacySimplicity: "Easy",
    advisory: "Exercise a high degree of caution",
    advisoryLevel: 2,
    entrySourceTitle: "Macao SAR immigration clearance",
    entrySourceUrl: "https://www.gov.mo/en/services/ps-1474/ps-1474b/"
  },
  {
    name: "Niue",
    cities: ["Alofi"],
    entrySummary: "Australian passport holders can receive a 30-day visitor permit on arrival; longer stays need advance permission.",
    estimatedCostAud: "Free on arrival",
    legacySimplicity: "Easy",
    advisory: "Exercise normal safety precautions",
    advisoryLevel: 1,
    entrySourceTitle: "Niue entry and visa requirements",
    entrySourceUrl: "https://www.niueisland.com/discover-niue/travelling-to-niue"
  },
  {
    name: "State of Palestine",
    cities: ["Ramallah", "Bethlehem", "Gaza City"],
    entrySummary: "No single Palestinian tourist visa. West Bank access normally runs through Israeli-controlled entry and ETA-IL or a route-specific permit; Gaza is a separate access system.",
    estimatedCostAud: "25 NIS ETA-IL; route-dependent permits",
    legacySimplicity: "Very Hard",
    advisory: "Do not travel to Gaza or the West Bank excluding Jerusalem",
    advisoryLevel: 4,
    entrySourceTitle: "Israel ETA-IL and official entry procedures",
    entrySourceUrl: "https://israel-entry.piba.gov.il/"
  },
  {
    name: "Western Sahara",
    cities: ["Laayoune", "Dakhla"],
    entrySummary: "Moroccan-administered areas use Moroccan entry rules; Australians are visa-exempt for tourism up to three months. Access east or south of the Berm is a separate route.",
    estimatedCostAud: "Free under Moroccan visa exemption",
    legacySimplicity: "Medium",
    advisory: "Exercise a high degree of caution in Moroccan-controlled areas; do not travel near or beyond the Berm",
    advisoryLevel: 2,
    entrySourceTitle: "Moroccan visa-exemption list",
    entrySourceUrl: "https://www.consulat.ma/fr/liste-des-pays-dont-les-ressortissants-sont-dispenses-du-visa-dentree-au-maroc"
  }
];

for (const jurisdiction of additionalTravelJurisdictions) {
  if (baseline.some((record) => record.name === jurisdiction.name)) continue;
  const slug = claimSlug(jurisdiction.name);
  baseline.push({
    ...jurisdiction,
    entryClaimId: `WORLD-${slug}-ENTRY`,
    costClaimId: `WORLD-${slug}-COST`,
    costReviewed: "20 August 2026",
    frictionClaimId: `WORLD-${slug}-FRICTION`,
    frictionReviewed: "20 August 2026",
    advisoryClaimId: `WORLD-${slug}-ADVISORY`,
    distanceFromBrisbaneKm: null,
    baselineVisaReviewed: "20 August 2026",
    advisoryReviewed: "20 August 2026"
  });
}

baseline.sort((left, right) => left.name.localeCompare(right.name, "en-AU"));

const banner = `// Generated by tools/import-world-baseline.mjs from ../Australian-world-travel/index.html.\n// Keep the source dates visible: this is a triage baseline, not the deep activity review.\n`;
fs.writeFileSync(outputFile, `${banner}window.WORLD_BASELINE = ${JSON.stringify(baseline, null, 2)};\n`, "utf8");
console.log(`Wrote ${baseline.length} country, territory and special-jurisdiction records to ${outputFile}`);
