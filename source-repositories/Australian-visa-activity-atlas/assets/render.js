(function () {
  "use strict";

  const data = window.ATLAS_DATA;
  if (!data) return;

  const signalLabels = {
    low: "Lower setup",
    conditional: "Conditional",
    specialist: "Specialist route",
    confirm: "Clarify exact route",
    "not-fit": "Route still mapping"
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function signal(status) {
    const label = signalLabels[status] || "Check route";
    return `<span class="signal signal-${escapeHtml(status)}">${escapeHtml(label)}</span>`;
  }

  function claimRecord(country, key) {
    if (!country?.claimChecks) return null;
    return key.split(".").reduce(function (value, segment) { return value?.[segment]; }, country.claimChecks) || null;
  }

  function recordAttributes(claim) {
    if (!claim) return "";
    return `data-claim-id="${escapeHtml(claim.id)}" data-claim-checked="${escapeHtml(claim.checked)}"`;
  }

  function recordMeta(claim, label = "Claim") {
    if (!claim) return "";
    return `<span class="claim-meta" data-claim-id="${escapeHtml(claim.id)}" title="Claim ID: ${escapeHtml(claim.id)}">${escapeHtml(label)} checked ${escapeHtml(claim.checked)}</span>`;
  }

  function claimAttributes(country, key) {
    return recordAttributes(claimRecord(country, key));
  }

  function claimMeta(country, key, label = "Claim") {
    return recordMeta(claimRecord(country, key), label);
  }

  function activityClaimMeta(activity, key, label = "Definition") {
    return recordMeta(activity?.claimChecks?.[key], label);
  }

  function activityById(id) {
    return data.activities.find(function (activity) { return activity.id === id; });
  }

  function renderHomeCountries() {
    const target = document.querySelector("[data-country-cards]");
    if (!target) return;
    target.innerHTML = data.countries.map(function (country) {
      return `
        <article class="country-card" ${claimAttributes(country, "cardSummary")}>
          <p class="eyebrow">${escapeHtml(country.region)}</p>
          <h3>${escapeHtml(country.name)}</h3>
          <div class="event-signal" ${claimAttributes(country, "conferenceFit.label")}>
            <strong>Language and events</strong>
            <span>${escapeHtml(country.conferenceFit.label)}</span>
          </div>
          ${claimMeta(country, "conferenceFit.label", "Language/event signal")}
          <p class="entry-line" ${claimAttributes(country, "entrySnapshot")}><strong>Entry snapshot</strong>${escapeHtml(country.entrySnapshot)}${claimMeta(country, "entrySnapshot", "Entry")}</p>
          <p>${escapeHtml(country.cardSummary)}${claimMeta(country, "cardSummary", "Summary")}</p>
          <a class="button button-small" href="countries/${encodeURIComponent(country.id)}.html">Explore ${escapeHtml(country.name)}</a>
        </article>`;
    }).join("");
  }

  function opportunityOpen(opportunity) {
    const deadline = new Date(opportunity?.deadlineAt || `${opportunity?.deadlineISO || ""}T23:59:59`);
    return !Number.isNaN(deadline.getTime()) && deadline >= new Date();
  }

  function renderLiveOpportunities() {
    const section = document.querySelector("[data-live-opportunities-section]");
    const target = document.querySelector("[data-live-opportunities]");
    if (!section || !target) return;
    const openings = data.countries.flatMap(function (country) {
      return (country.opportunities || []).filter(opportunityOpen).map(function (opportunity) {
        return { country: country, opportunity: opportunity };
      });
    }).sort(function (left, right) {
      return left.opportunity.deadlineISO.localeCompare(right.opportunity.deadlineISO);
    });
    if (!openings.length) return;
    section.hidden = false;
    target.innerHTML = openings.map(function (item) {
      return `
        <article class="card" ${recordAttributes(item.opportunity)}>
          <p class="eyebrow">${escapeHtml(item.country.name)} · ${escapeHtml(item.opportunity.type)}</p>
          <h3>${escapeHtml(item.opportunity.title)}</h3>
          <p><strong>Open until ${escapeHtml(item.opportunity.deadline)}.</strong> ${escapeHtml(item.opportunity.compensation || "")}</p>
          <p>${escapeHtml(item.opportunity.detail)}</p>
          <a href="${escapeHtml(item.opportunity.url)}">View the official call →</a>
          ${recordMeta(item.opportunity, "Opportunity")}
        </article>`;
    }).join("");
  }

  function renderHomeActivities() {
    const target = document.querySelector("[data-activity-preview]");
    if (!target) return;
    target.innerHTML = data.activities.slice(0, 6).map(function (activity) {
      return `
        <article class="activity-card">
          <span class="activity-icon" aria-hidden="true">${escapeHtml(activity.icon)}</span>
          <div><h3>${escapeHtml(activity.name)}</h3><p>${escapeHtml(activity.short)}${activityClaimMeta(activity, "short", "Definition")}</p></div>
        </article>`;
    }).join("");
  }

  function renderAllActivities() {
    const target = document.querySelector("[data-all-activities]");
    if (!target) return;
    target.innerHTML = data.activities.map(function (activity) {
      return `
        <article class="activity-card" id="${escapeHtml(activity.id)}">
          <span class="activity-icon" aria-hidden="true">${escapeHtml(activity.icon)}</span>
          <div>
            <h3>${escapeHtml(activity.name)}</h3>
            <p>${escapeHtml(activity.description)}${activityClaimMeta(activity, "description", "Definition")}</p>
            <p><strong>Boundary to check:</strong> ${escapeHtml(activity.boundary)}${activityClaimMeta(activity, "boundary", "Boundary")}</p>
          </div>
        </article>`;
    }).join("");
  }

  function renderCompare() {
    const tableBody = document.querySelector("[data-compare-body]");
    const activitySelect = document.querySelector("[data-filter-activity]");
    const statusSelect = document.querySelector("[data-filter-status]");
    const queryInput = document.querySelector("[data-filter-query]");
    const clearButton = document.querySelector("[data-filter-clear]");
    const resultCount = document.querySelector("[data-result-count]");
    if (!tableBody || !activitySelect || !statusSelect || !queryInput) return;

    activitySelect.innerHTML = `<option value="all">All activities</option>` + data.activities.map(function (activity) {
      return `<option value="${escapeHtml(activity.id)}">${escapeHtml(activity.name)}</option>`;
    }).join("");

    function rows() {
      const activityFilter = activitySelect.value;
      const statusFilter = statusSelect.value;
      const query = queryInput.value.trim().toLowerCase();
      const matches = [];

      data.countries.forEach(function (country) {
        data.activities.forEach(function (activity) {
          if (activityFilter !== "all" && activity.id !== activityFilter) return;
          const route = country.pathways[activity.id];
          if (!route) return;
          if (statusFilter !== "all" && route.status !== statusFilter) return;
          const haystack = [country.name, activity.name, route.route, route.detail, country.conferenceFit.label].join(" ").toLowerCase();
          if (query && !haystack.includes(query)) return;
          matches.push({ country: country, activity: activity, route: route });
        });
      });

      tableBody.innerHTML = matches.length ? matches.map(function (item) {
        return `
          <tr ${claimAttributes(item.country, `pathways.${item.activity.id}.route`)}>
            <th scope="row" class="country-cell" data-label="Country"><strong>${escapeHtml(item.country.name)}</strong><a href="countries/${encodeURIComponent(item.country.id)}.html">Country guide</a></th>
            <td data-label="Activity"><strong>${escapeHtml(item.activity.icon)} ${escapeHtml(item.activity.name)}</strong><span class="source-meta">Language/event signal: ${escapeHtml(item.country.conferenceFit.label)}</span>${claimMeta(item.country, "conferenceFit.label", "Language/event signal")}</td>
            <td data-label="Signal">${signal(item.route.status)}${claimMeta(item.country, `pathways.${item.activity.id}.status`, "Signal")}</td>
            <td data-label="Route and boundary" class="table-note"><strong ${claimAttributes(item.country, `pathways.${item.activity.id}.route`)}>${escapeHtml(item.route.route)}</strong>${claimMeta(item.country, `pathways.${item.activity.id}.route`, "Route")}<span ${claimAttributes(item.country, `pathways.${item.activity.id}.detail`)}>${escapeHtml(item.route.detail)}</span>${claimMeta(item.country, `pathways.${item.activity.id}.detail`, "Boundary")}</td>
            <td data-label="Next check" class="table-note" ${claimAttributes(item.country, `pathways.${item.activity.id}.next`)}>${escapeHtml(item.route.next)}${claimMeta(item.country, `pathways.${item.activity.id}.next`, "Next check")}</td>
          </tr>`;
      }).join("") : `<tr><td colspan="5" class="empty-state">No pathways match those filters. Try clearing one filter.</td></tr>`;

      if (resultCount) resultCount.textContent = `${matches.length} pathway${matches.length === 1 ? "" : "s"} shown`;
    }

    [activitySelect, statusSelect, queryInput].forEach(function (control) {
      control.addEventListener(control === queryInput ? "input" : "change", rows);
    });
    if (clearButton) clearButton.addEventListener("click", function () {
      activitySelect.value = "all";
      statusSelect.value = "all";
      queryInput.value = "";
      rows();
    });
    rows();
  }

  renderHomeCountries();
  renderLiveOpportunities();
  renderHomeActivities();
  renderAllActivities();
  renderCompare();

  window.AtlasRender = {
    escapeHtml: escapeHtml,
    signal: signal,
    signalLabels: signalLabels,
    activityById: activityById,
    claimRecord: claimRecord,
    recordAttributes: recordAttributes,
    recordMeta: recordMeta,
    claimAttributes: claimAttributes,
    claimMeta: claimMeta,
    activityClaimMeta: activityClaimMeta,
    opportunityOpen: opportunityOpen
  };
})();
