(function () {
  "use strict";

  const data = window.ATLAS_DATA;
  const helpers = window.AtlasRender;
  const id = document.body.dataset.country;
  if (!data || !helpers || !id) return;
  const country = data.countries.find(function (item) { return item.id === id; });
  if (!country) return;
  const escapeHtml = helpers.escapeHtml;
  const claimMeta = helpers.claimMeta;
  const claimAttributes = helpers.claimAttributes;
  const recordMeta = helpers.recordMeta;
  const recordAttributes = helpers.recordAttributes;

  document.title = `${country.name} pathways | Australian Visa & Activity Atlas`;
  document.querySelectorAll("[data-country-name]").forEach(function (node) { node.textContent = country.name; });
  document.querySelectorAll("[data-country-flag]").forEach(function (node) { node.textContent = country.flag; });
  document.querySelectorAll("[data-reviewed]").forEach(function (node) { node.textContent = country.reviewed; });
  document.querySelectorAll("[data-country-summary]").forEach(function (node) {
    node.innerHTML = `${escapeHtml(country.summary)}${claimMeta(country, "summary", "Overview")}`;
  });

  const meta = document.querySelector("[data-country-meta]");
  if (meta) {
    meta.innerHTML = `
      <div class="meta-item" ${claimAttributes(country, "entrySnapshot")}><span>Australian entry snapshot</span>${escapeHtml(country.entrySnapshot)}${claimMeta(country, "entrySnapshot", "Entry")}</div>
      <div class="meta-item" ${claimAttributes(country, "conferenceFit.label")}><span>Language and event signal</span>${escapeHtml(country.conferenceFit.label)}${claimMeta(country, "conferenceFit.label", "Language/event signal")}</div>
      <div class="meta-item" ${claimAttributes(country, "ageNote")}><span>Age 43</span>${escapeHtml(country.ageNote)}${claimMeta(country, "ageNote", "Age check")}</div>
      <div class="meta-item"><span>Evidence reviewed</span>${escapeHtml(country.reviewed)}</div>`;
  }

  const opportunity = document.querySelector("[data-conference-fit]");
  if (opportunity) {
    opportunity.innerHTML = `
      <p class="eyebrow">Opportunity layer</p>
      <h2>Language and event signal: ${escapeHtml(country.conferenceFit.label)}</h2>
      <p ${claimAttributes(country, "conferenceFit.detail")}>${escapeHtml(country.conferenceFit.detail)}${claimMeta(country, "conferenceFit.detail", "Signal detail")}</p>
      <p ${claimAttributes(country, "conferenceFit.themes")}><strong>Useful themes:</strong> ${escapeHtml(country.conferenceFit.themes.join(", "))}.${claimMeta(country, "conferenceFit.themes", "Themes")}</p>
      <p class="notice notice-info"><strong>Batching clue only:</strong> This signal can help choose what to research next. It does not rank countries, exclude local-language rooms or decide the purpose of a trip.</p>`;
  }

  const opportunitySection = document.querySelector("[data-country-opportunities-section]");
  const opportunityList = document.querySelector("[data-country-opportunities]");
  const liveOpportunities = (country.opportunities || []).filter(helpers.opportunityOpen).sort(function (left, right) {
    return left.deadlineISO.localeCompare(right.deadlineISO);
  });
  if (opportunitySection && opportunityList && liveOpportunities.length) {
    opportunitySection.hidden = false;
    opportunityList.innerHTML = liveOpportunities.map(function (item) {
      return `
        <article class="card" ${recordAttributes(item)}>
          <p class="eyebrow">${escapeHtml(item.type)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p><strong>Open until ${escapeHtml(item.deadline)}.</strong> ${escapeHtml(item.compensation || "")}</p>
          <p>${escapeHtml(item.detail)}</p>
          <a href="${escapeHtml(item.url)}">View the official call →</a>
          ${recordMeta(item, "Opportunity")}
        </article>`;
    }).join("");
  }

  const launchCard = document.querySelector("[data-launch-card]");
  if (launchCard) {
    launchCard.innerHTML = `
      <h3 ${claimAttributes(country, "launch.fastestEntry")}>${escapeHtml(country.launch.fastestEntry)}${claimMeta(country, "launch.fastestEntry", "Entry route")}</h3>
      <p ${claimAttributes(country, "launch.beforeDeparture")}><strong>Before departure:</strong> ${escapeHtml(country.launch.beforeDeparture)}${claimMeta(country, "launch.beforeDeparture", "Departure check")}</p>
      <p ${claimAttributes(country, "launch.usefulStay")}><strong>Useful stay:</strong> ${escapeHtml(country.launch.usefulStay)}${claimMeta(country, "launch.usefulStay", "Stay")}</p>
      <p ${claimAttributes(country, "launch.hostUnlock")}><strong>Host unlock:</strong> ${escapeHtml(country.launch.hostUnlock)}${claimMeta(country, "launch.hostUnlock", "Host route")}</p>`;
  }

  const quickPacket = document.querySelector("[data-quick-packet]");
  if (quickPacket) {
    quickPacket.innerHTML = country.launch.quickPacket.map(function (item) { return `<li>${escapeHtml(item)}</li>`; }).join("");
    quickPacket.setAttribute("data-claim-id", helpers.claimRecord(country, "launch.quickPacket").id);
    quickPacket.insertAdjacentHTML("afterend", claimMeta(country, "launch.quickPacket", "Packet"));
  }

  const pathwayList = document.querySelector("[data-pathways]");
  if (pathwayList) {
    pathwayList.innerHTML = data.activities.map(function (activity) {
      const route = country.pathways[activity.id];
      if (!route) return "";
      return `
        <article class="pathway" id="${escapeHtml(activity.id)}" ${claimAttributes(country, `pathways.${activity.id}.route`)}>
          <div class="pathway-head">
            <div>
              <h3>${escapeHtml(activity.icon)} ${escapeHtml(activity.name)}</h3>
              <p class="route" ${claimAttributes(country, `pathways.${activity.id}.route`)}>${escapeHtml(route.route)}${claimMeta(country, `pathways.${activity.id}.route`, "Route")}</p>
            </div>
            <div>${helpers.signal(route.status)}${claimMeta(country, `pathways.${activity.id}.status`, "Signal")}</div>
          </div>
          <p class="detail" ${claimAttributes(country, `pathways.${activity.id}.detail`)}>${escapeHtml(route.detail)}${claimMeta(country, `pathways.${activity.id}.detail`, "Boundary")}</p>
          <p class="detail" ${claimAttributes(country, `pathways.${activity.id}.next`)}><strong>Before booking:</strong> ${escapeHtml(route.next)}${claimMeta(country, `pathways.${activity.id}.next`, "Next check")}</p>
        </article>`;
    }).join("");
  }

  const steps = document.querySelector("[data-country-steps]");
  if (steps) {
    steps.innerHTML = country.steps.map(function (step) { return `<li>${escapeHtml(step)}</li>`; }).join("");
    steps.setAttribute("data-claim-id", helpers.claimRecord(country, "steps").id);
    steps.insertAdjacentHTML("afterend", claimMeta(country, "steps", "Route builder"));
  }

  const cautions = document.querySelector("[data-country-cautions]");
  if (cautions) {
    cautions.innerHTML = country.cautions.map(function (item) { return `<li>${escapeHtml(item)}</li>`; }).join("");
    cautions.setAttribute("data-claim-id", helpers.claimRecord(country, "cautions").id);
    cautions.insertAdjacentHTML("afterend", claimMeta(country, "cautions", "Route edges"));
  }

  const sources = document.querySelector("[data-country-sources]");
  if (sources) {
    sources.innerHTML = country.sources.map(function (source, index) {
      const sourceMarker = [source.type, source.authority, source.supports].filter(Boolean).join(" ");
      const kind = source.kind === "opportunity" || /organi[sz]er|conference[- ]signal|opportunity|open (?:speaker |lightning-talk )?call|call for (?:speakers?|participation|proposals?|presentations?)/i.test(sourceMarker) ? "Opportunity signal" : "Route evidence";
      const sourceClaimId = `${country.id}.source.${index + 1}`;
      return `<li data-claim-id="${escapeHtml(sourceClaimId)}" data-claim-checked="${escapeHtml(source.checked)}"><span class="chip">${kind}</span><a href="${escapeHtml(source.url)}">${escapeHtml(source.title)}</a><span class="source-meta">${escapeHtml(source.authority)} · checked ${escapeHtml(source.checked)} · supports: ${escapeHtml(source.supports)}</span></li>`;
    }).join("");
  }

  const previous = document.querySelector("[data-previous-country]");
  const next = document.querySelector("[data-next-country]");
  const currentIndex = data.countries.findIndex(function (item) { return item.id === id; });
  const previousCountry = data.countries[(currentIndex - 1 + data.countries.length) % data.countries.length];
  const nextCountry = data.countries[(currentIndex + 1) % data.countries.length];
  if (previous) {
    previous.href = `${encodeURIComponent(previousCountry.id)}.html`;
    previous.textContent = `← ${previousCountry.name}`;
  }
  if (next) {
    next.href = `${encodeURIComponent(nextCountry.id)}.html`;
    next.textContent = `${nextCountry.name} →`;
  }
})();
