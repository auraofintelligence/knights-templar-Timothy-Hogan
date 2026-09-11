(function () {
  "use strict";

  const reviewed = "21 August 2026";
  const modes = {
    all: "Everything",
    always: "Always ready",
    tonight: "Invited tonight",
    "72h": "Flying in 72 hours",
    long: "Long-lead upkeep",
    return: "Arrival and return"
  };

  const items = [
    ["PREP-ID-01", "Identity and entry", ["always", "72h"], "Passport runway", "Check passport validity, condition and blank-page needs against the destination and every transit point."],
    ["PREP-ID-02", "Identity and entry", ["always", "tonight"], "Encrypted document vault", "Keep secure offline copies of identity pages and essential approvals, with a separate recovery method."],
    ["PREP-ID-03", "Identity and entry", ["tonight", "72h"], "Entry and transit route", "Recheck the visa, exemption, transit and arrival-form path against current official sources."],
    ["PREP-ID-04", "Identity and entry", ["72h"], "Arrival forms and evidence", "Complete time-sensitive entry forms and carry the issued approval, onward travel and accommodation evidence."],
    ["PREP-ID-05", "Identity and entry", ["always", "long"], "Replacement pathway", "Know where a lost passport can be replaced and how to reach the nearest Australian mission."],

    ["PREP-ACT-01", "Activity and host", ["always", "tonight"], "One-paragraph activity brief", "Describe the dates, every activity, audience, host, payments, benefits and anything sold locally."],
    ["PREP-ACT-02", "Activity and host", ["tonight", "72h"], "Host invitation", "Get the legal host, venue, role, dates, audience and payment arrangement in writing."],
    ["PREP-ACT-03", "Activity and host", ["tonight", "72h"], "Activity permission", "Confirm permission to speak, teach, sell, perform or work—not merely permission to enter."],
    ["PREP-ACT-04", "Activity and host", ["tonight", "long"], "Permit responsibility", "Record who lodges work, event, cultural, labour, tax or sponsor paperwork and the lead time."],
    ["PREP-ACT-05", "Activity and host", ["tonight", "72h"], "Money and merchandise split", "Separate fees, royalties, expenses, ticket shares, book stock, equipment and local sales."],

    ["PREP-HEALTH-01", "Health and recovery", ["always", "long"], "Health summary", "Keep a concise private medical and allergy summary that can travel offline without being published."],
    ["PREP-HEALTH-02", "Health and recovery", ["always", "72h"], "Medication runway", "Check supply, original packaging, prescription evidence and destination restrictions."],
    ["PREP-HEALTH-03", "Health and recovery", ["long", "72h"], "Vaccination and health entry", "Check destination, transit and event requirements through current health authorities."],
    ["PREP-HEALTH-04", "Health and recovery", ["always", "72h"], "Insurance fit", "Check medical, evacuation, activity, equipment and advisory-level exclusions for this exact trip."],
    ["PREP-HEALTH-05", "Health and recovery", ["always", "return"], "Recovery space", "Leave room for sleep, illness, decompression and a return-to-base reset between intense legs."],

    ["PREP-MONEY-01", "Money and payments", ["always", "72h"], "Payment redundancy", "Carry two independent payment methods and keep them in separate places."],
    ["PREP-MONEY-02", "Money and payments", ["always", "72h"], "Emergency reserve", "Keep a private reserve for an exit, replacement accommodation, health care or a missed connection."],
    ["PREP-MONEY-03", "Money and payments", ["72h"], "Access and fees", "Check card notices, cash access, exchange costs, payment blocks and local acceptance."],
    ["PREP-MONEY-04", "Money and payments", ["tonight", "72h"], "Proof of funds and payment terms", "Carry only the evidence the route requires and keep contracts, invoices and expense terms together."],

    ["PREP-DATA-01", "Devices, data and communications", ["always", "72h"], "Phone and connectivity", "Prepare eSIM or SIM options, roaming, key numbers and a plan for arrival without mobile data."],
    ["PREP-DATA-02", "Devices, data and communications", ["always", "72h"], "Power kit", "Match plugs, voltage, chargers, power bank rules and the equipment actually travelling."],
    ["PREP-DATA-03", "Devices, data and communications", ["always"], "Account recovery", "Keep 2FA recovery methods that still work if the main phone, number or laptop disappears."],
    ["PREP-DATA-04", "Devices, data and communications", ["always", "return"], "Encrypted backups", "Back up essential work before departure and copy new material again after each major leg."],
    ["PREP-DATA-05", "Devices, data and communications", ["72h"], "Offline layer", "Download maps, tickets, approvals, translations, host details and emergency contacts."],
    ["PREP-DATA-06", "Devices, data and communications", ["long", "72h"], "Backup communications", "Choose a second communications path where remoteness, disaster or network shutdown makes it useful."],

    ["PREP-JOURNEY-01", "Journey and logistics", ["tonight", "72h"], "Reversible bookings", "Prefer changeable transport and accommodation until the entry and activity routes are confirmed."],
    ["PREP-JOURNEY-02", "Journey and logistics", ["72h"], "Onward and fallback route", "Know the intended exit plus one realistic alternative if transport, weather or borders change."],
    ["PREP-JOURNEY-03", "Journey and logistics", ["tonight", "72h"], "First-night landing", "Confirm the first sleep, airport or port transfer, check-in window and a late-arrival fallback."],
    ["PREP-JOURNEY-04", "Journey and logistics", ["72h"], "Live disruption check", "Review weather, strikes, major events, closures and transport changes without treating them as automatic vetoes."],
    ["PREP-JOURNEY-05", "Journey and logistics", ["always", "tonight"], "Modular go-bag", "Keep a small reusable kit that can support an unplanned short trip while specialist items remain optional."],

    ["PREP-WORK-01", "Speaking, books and creative work", ["always", "tonight"], "Public biography and portraits", "Keep a short and long biography, current portraits and contact links ready without private identity documents."],
    ["PREP-WORK-02", "Speaking, books and creative work", ["always", "tonight"], "Talk and workshop menu", "Maintain adaptable abstracts, audience outcomes, lengths, formats and equipment needs."],
    ["PREP-WORK-03", "Speaking, books and creative work", ["always", "tonight"], "Author pack", "Prepare book summaries, covers, rights contacts, launch formats and a local-seller option for physical stock."],
    ["PREP-WORK-04", "Speaking, books and creative work", ["always", "tonight"], "Teaching evidence", "Keep relevant qualifications, experience, sample sessions and host-ready learning outcomes."],
    ["PREP-WORK-05", "Speaking, books and creative work", ["always", "72h"], "Media and equipment list", "List every microphone, camera, instrument, computer and sale item crossing the border."],
    ["PREP-WORK-06", "Speaking, books and creative work", ["tonight", "72h"], "Contract and cancellation", "Put scope, fee, expenses, tax, recording, rights, cancellation and permit responsibilities in writing."],

    ["PREP-LONG-01", "Long-lead evidence", ["long"], "Police and background evidence", "Check whether the exact route needs a current certificate and how the destination defines validity."],
    ["PREP-LONG-02", "Long-lead evidence", ["long"], "Qualifications and references", "Keep certified academic, professional and experience evidence ready for work, teaching or talent routes."],
    ["PREP-LONG-03", "Long-lead evidence", ["long"], "Notarisation, apostille or authentication", "Confirm the destination-specific legalisation chain before paying for it."],
    ["PREP-LONG-04", "Long-lead evidence", ["long"], "Certified translations", "Translate only the documents and languages required by the actual route, using an accepted translator."],
    ["PREP-LONG-05", "Long-lead evidence", ["long"], "Founder or investor evidence", "Keep venture, ownership, funding and source-of-funds material separate from permission to work in the venture."],

    ["PREP-GUEST-01", "Arrive as a guest", ["tonight", "72h", "return"], "Language and etiquette", "Learn useful phrases, hosting customs, sensitive topics and the local rhythm before arriving."],
    ["PREP-GUEST-02", "Arrive as a guest", ["tonight", "return"], "Explicit consent", "Ask before recording, photographing, publishing or reusing another person's story; consent stays revocable."],
    ["PREP-GUEST-03", "Arrive as a guest", ["tonight", "return"], "Cultural and community authority", "Do not infer permission to speak for a community, culture or Indigenous group; find the responsible local authority."],
    ["PREP-GUEST-04", "Arrive as a guest", ["return"], "Reciprocal contribution", "Listen first, ask what is useful, contribute without promising more than the visit can deliver, then reflect."],

    ["PREP-LEARN-01", "Learn and refresh", ["return"], "Keep the receipts", "Retain entry evidence, permits, official replies and what the host actually lodged."],
    ["PREP-LEARN-02", "Learn and refresh", ["return"], "Record the real outcome", "Note what the border or authority accepted, actual processing time, surprises and the fallback used."],
    ["PREP-LEARN-03", "Learn and refresh", ["return"], "Update only affected claims", "Refresh the changed claim IDs and dates without pretending every country or pathway was rechecked."],
    ["PREP-LEARN-04", "Learn and refresh", ["return", "always"], "Recover and recalibrate", "Back up material, rest, renew documents and let new invitations reweight the next move." ]
  ].map(function ([id, category, horizons, title, detail]) {
    return { id, category, horizons, title, detail, checked: reviewed };
  });

  window.PREPARE_DATA = { reviewed: reviewed, modes: modes, items: items };
  if (typeof document === "undefined") return;

  const storageKey = "australian-visa-activity-atlas.prepare-status.v1";
  const target = document.querySelector("[data-prepare-items]");
  const modeSelect = document.querySelector("[data-prepare-mode]");
  const categorySelect = document.querySelector("[data-prepare-category]");
  const queryInput = document.querySelector("[data-prepare-query]");
  const count = document.querySelector("[data-prepare-count]");
  const readyCount = document.querySelector("[data-ready-count]");
  const progress = document.querySelector("[data-ready-progress]");
  const reset = document.querySelector("[data-prepare-reset]");
  if (!target || !modeSelect || !categorySelect || !queryInput) return;

  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch { saved = {}; }

  modeSelect.innerHTML = Object.entries(modes).map(function ([value, label]) {
    return `<option value="${value}">${label}</option>`;
  }).join("");
  const categories = [...new Set(items.map(function (item) { return item.category; }))];
  categorySelect.innerHTML = `<option value="all">All preparation areas</option>` + categories.map(function (category) {
    return `<option value="${category}">${category}</option>`;
  }).join("");

  function escapeHtml(value) {
    return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }

  function save() { localStorage.setItem(storageKey, JSON.stringify(saved)); }

  function statusOptions(value) {
    return [["not-started", "Not started"], ["in-progress", "In progress"], ["ready", "Ready"], ["not-needed", "Not needed"]].map(function ([id, label]) {
      return `<option value="${id}"${id === value ? " selected" : ""}>${label}</option>`;
    }).join("");
  }

  function updateSummary() {
    const ready = items.filter(function (item) { return saved[item.id] === "ready" || saved[item.id] === "not-needed"; }).length;
    if (readyCount) readyCount.textContent = `${ready} of ${items.length} ready or not needed`;
    if (progress) {
      progress.max = items.length;
      progress.value = ready;
      progress.setAttribute("aria-label", `${ready} of ${items.length} preparation items ready or not needed`);
    }
  }

  function render() {
    const mode = modeSelect.value;
    const category = categorySelect.value;
    const query = queryInput.value.trim().toLowerCase();
    const matches = items.filter(function (item) {
      if (mode !== "all" && !item.horizons.includes(mode)) return false;
      if (category !== "all" && item.category !== category) return false;
      return !query || [item.title, item.detail, item.category].join(" ").toLowerCase().includes(query);
    });
    const grouped = new Map();
    matches.forEach(function (item) {
      if (!grouped.has(item.category)) grouped.set(item.category, []);
      grouped.get(item.category).push(item);
    });
    target.innerHTML = matches.length ? [...grouped.entries()].map(function ([categoryName, categoryItems]) {
      return `<section class="prep-group"><div class="section-heading compact-heading"><div><p class="eyebrow">Preparation area</p><h2>${escapeHtml(categoryName)}</h2></div><span class="group-count">${categoryItems.length} item${categoryItems.length === 1 ? "" : "s"}</span></div><div class="prep-grid">${categoryItems.map(function (item) {
        const status = saved[item.id] || "not-started";
        return `<article class="prep-card" data-claim-id="${escapeHtml(item.id)}" data-claim-checked="${escapeHtml(item.checked)}">
          <div class="tag-row">${item.horizons.map(function (horizon) { return `<span class="chip">${escapeHtml(modes[horizon])}</span>`; }).join("")}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.detail)}</p>
          <label class="status-field">My status<select data-prepare-status="${escapeHtml(item.id)}">${statusOptions(status)}</select></label>
          <span class="claim-meta" title="Preparation item ID: ${escapeHtml(item.id)}">Reviewed ${escapeHtml(item.checked)}</span>
        </article>`;
      }).join("")}</div></section>`;
    }).join("") : `<div class="empty-state">No preparation items match those filters.</div>`;
    if (count) count.textContent = `${matches.length} of ${items.length} preparation items shown`;
    updateSummary();
  }

  target.addEventListener("change", function (event) {
    const id = event.target.getAttribute("data-prepare-status");
    if (!id) return;
    saved[id] = event.target.value;
    save();
    updateSummary();
  });
  [modeSelect, categorySelect].forEach(function (control) { control.addEventListener("change", render); });
  queryInput.addEventListener("input", render);
  if (reset) reset.addEventListener("click", function () {
    if (!window.confirm("Clear the preparation statuses saved in this browser?")) return;
    saved = {};
    localStorage.removeItem(storageKey);
    render();
  });
  render();
})();
