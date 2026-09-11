import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const toolDirectory = path.dirname(fileURLToPath(import.meta.url));
const repoDirectory = path.resolve(toolDirectory, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(repoDirectory, "assets", "data.js"), "utf8"), sandbox);
vm.runInContext(fs.readFileSync(path.join(repoDirectory, "assets", "world-baseline.js"), "utf8"), sandbox);

const sources = sandbox.window.ATLAS_DATA.countries.flatMap((country) =>
  country.sources.map((source) => ({ country: country.name, ...source }))
).concat(sandbox.window.WORLD_BASELINE.filter((record) => record.entrySourceUrl).map((record) => ({
  country: record.name,
  title: record.entrySourceTitle,
  url: record.entrySourceUrl,
  checked: record.baselineVisaReviewed,
  supports: "entry first pass"
})));

const results = [];
let cursor = 0;

async function check(source) {
  const options = {
    method: "GET",
    redirect: "follow",
    signal: AbortSignal.timeout(30000),
    headers: { "user-agent": "Australian-Visa-Activity-Atlas-Link-Check/1.0" }
  };
  try {
    const response = await fetch(source.url, options);
    await response.body?.cancel();
    return { ...source, status: response.status, finalUrl: response.url, ok: response.status < 400 || [401, 403].includes(response.status) };
  } catch (error) {
    return { ...source, status: "ERROR", finalUrl: source.url, ok: false, error: error.message };
  }
}

async function worker() {
  while (cursor < sources.length) {
    const index = cursor++;
    results[index] = await check(sources[index]);
  }
}

await Promise.all(Array.from({ length: 6 }, worker));

for (const result of results) {
  console.log(`${String(result.status).padEnd(5)} ${result.country.padEnd(12)} ${result.url}${result.error ? ` — ${result.error}` : ""}`);
}

const hardFailures = results.filter((result) => [404, 410].includes(result.status));
const uncertain = results.filter((result) => !result.ok && !hardFailures.includes(result));
console.log(`Checked ${results.length} source links: ${hardFailures.length} not found, ${uncertain.length} blocked or timed out.`);
if (hardFailures.length) process.exit(1);
