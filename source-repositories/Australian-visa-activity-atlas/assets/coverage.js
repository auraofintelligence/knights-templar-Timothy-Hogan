(function () {
  "use strict";

  const baseline = window.WORLD_BASELINE || [];
  const deepData = window.ATLAS_DATA || { countries: [] };
  const deepByName = new Map(deepData.countries.map(function (country) { return [country.name.toLowerCase(), country]; }));
  const aliases = new Map([["philippines", "philippines"]]);

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function deepRecord(name) {
    const key = aliases.get(name.toLowerCase()) || name.toLowerCase();
    return deepByName.get(key);
  }

  const body = document.querySelector("[data-coverage-body]");
  const query = document.querySelector("[data-coverage-query]");
  const depth = document.querySelector("[data-coverage-depth]");
  const friction = document.querySelector("[data-coverage-friction]");
  const count = document.querySelector("[data-coverage-count]");
  const clear = document.querySelector("[data-coverage-clear]");
  if (!body || !query || !depth || !friction) return;

  function render() {
    const queryValue = query.value.trim().toLowerCase();
    const depthValue = depth.value;
    const frictionValue = friction.value;
    const matches = baseline.filter(function (record) {
      const deep = deepRecord(record.name);
      const detailed = Boolean(deep);
      if (depthValue === "detailed" && !detailed) return false;
      if (depthValue === "baseline" && detailed) return false;
      if (frictionValue !== "all" && !String(record.legacySimplicity).toLowerCase().startsWith(frictionValue)) return false;
      const haystack = [record.name, record.cities.join(" "), deep?.entrySnapshot || record.entrySummary, record.advisory].join(" ").toLowerCase();
      return !queryValue || haystack.includes(queryValue);
    });

    body.innerHTML = matches.length ? matches.map(function (record) {
      const detailed = deepRecord(record.name);
      const hasFreshEntryPass = !detailed && record.baselineVisaReviewed === deepData.meta.reviewed && record.entrySourceUrl;
      const depthLabel = detailed ? "Deep activity guide" : hasFreshEntryPass ? "Entry first pass" : "World baseline";
      const entrySummary = detailed ? detailed.entrySnapshot : record.entrySummary;
      const entryClaim = detailed ? detailed.claimChecks.entrySnapshot : { id: record.entryClaimId, checked: record.baselineVisaReviewed };
      const entrySource = !detailed && record.entrySourceUrl
        ? `<span class="source-meta"><a href="${escapeHtml(record.entrySourceUrl)}">${escapeHtml(record.entrySourceTitle || "Official entry source")}</a></span>`
        : "";
      const action = detailed
        ? `<a class="button button-small" href="countries/${encodeURIComponent(detailed.id)}.html">Open guide</a>`
        : `<span class="queued-note">Deep review queued</span>`;
      return `<tr>
        <th scope="row" class="country-cell" data-label="Place"><strong>${escapeHtml(record.name)}</strong><span class="source-meta">${escapeHtml(record.cities.slice(0, 3).join(" · "))}</span></th>
        <td data-label="Readiness depth"><span class="chip">${escapeHtml(depthLabel)}</span><span class="source-meta" data-claim-id="${escapeHtml(record.frictionClaimId)}" data-claim-checked="${escapeHtml(record.frictionReviewed)}">Legacy entry signal: ${escapeHtml(record.legacySimplicity)} · ${escapeHtml(record.frictionReviewed)}</span></td>
        <td data-label="Entry snapshot" class="table-note" data-claim-id="${escapeHtml(entryClaim.id)}" data-claim-checked="${escapeHtml(entryClaim.checked)}"><strong>${escapeHtml(entrySummary)}</strong><span class="claim-meta" title="Claim ID: ${escapeHtml(entryClaim.id)}">Entry checked ${escapeHtml(entryClaim.checked)}</span>${entrySource}</td>
        <td data-label="Advisory context" class="table-note" data-claim-id="${escapeHtml(record.advisoryClaimId)}" data-claim-checked="${escapeHtml(record.advisoryReviewed)}">${escapeHtml(record.advisory)}<span class="claim-meta" title="Claim ID: ${escapeHtml(record.advisoryClaimId)}">Recorded ${escapeHtml(record.advisoryReviewed)} · context, not an exclusion</span></td>
        <td data-label="Route map" class="route-action">${action}</td>
      </tr>`;
    }).join("") : `<tr><td colspan="5" class="empty-state">No places match those filters.</td></tr>`;
    if (count) count.textContent = `${matches.length} of ${baseline.length} places shown`;
  }

  [query, depth, friction].forEach(function (control) {
    control.addEventListener(control === query ? "input" : "change", render);
  });
  if (clear) clear.addEventListener("click", function () {
    query.value = "";
    depth.value = "all";
    friction.value = "all";
    render();
  });
  render();
})();
