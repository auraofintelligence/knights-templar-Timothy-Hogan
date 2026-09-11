import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicOrigin = "https://auraofintelligence.github.io/Oceania-healthy-de-slop-co-ops/";

const worlds = [
  ["home", "Home", ""],
  ["co-operative-paths", "Co-operative Paths", "co-operative-paths"],
  ["shared-wellbeing", "Shared Wellbeing", "shared-wellbeing"],
  ["aura-geode", "Aura Geode", "aura-geode"],
  ["your-digital-self", "Your Digital Self", "your-digital-self"],
  ["public-value", "Public Value", "public-value"],
  ["oceania", "Many Places", "oceania"],
  ["a-protopian-gambit", "A Protopian Gambit", "a-protopian-gambit"],
  ["evidence", "Evidence", "evidence"],
  ["about", "About", "about"],
  ["site-map", "Site Map", "site-map"]
];

const pages = [
  {
    slug: "",
    key: "home",
    title: "Oceania Healthy De-Slop Co-ops",
    shortTitle: "Home",
    description: "A radiant regional world for community-shaped wellbeing, personal reflection and self-sovereign digital life across Oceania.",
    heading: "You arrive radiant.<br><span>Your world begins with you.</span>",
    lead: "In this regional project, self-sovereign means the person remains at the centre of their own body, story, data and digital reflection. Shared infrastructure gathers around that dignity.",
    hero: "hero-home-v2.webp",
    heroAlt: "Concept artwork of a radiant person overlooking equal jewel-like community spaces across an Oceania archipelago at dawn.",
    theme: "home",
    primaryHref: "co-operative-paths/",
    primaryLabel: "Co-operative paths",
    secondaryHref: "shared-wellbeing/",
    secondaryLabel: "Shared wellbeing",
    body: `
      <section class="world-section sovereign-intro" id="sovereign-centre">
        <div class="wrap editorial-split">
          <div class="section-title reveal">
            <h2>The sovereign centre</h2>
          </div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">Every person arrives with an inner world that deserves beauty, privacy and room to grow. The co-operative idea begins there, then asks what becomes possible when communities share the expensive parts without swallowing the individual.</p>
            <p>Self-sovereign is not isolation. It is relationship by agreement. A digital twin here means a growing reflection of a person's records, memories, choices and patterns, held first on hardware that person chooses.</p>
          </div>
        </div>
        <div class="wrap sovereign-orbit reveal" data-sovereign-orbit>
          <div class="orbit-core"><span>You</span><small>whole from the beginning</small></div>
          <button type="button" class="orbit-facet facet-body" data-orbit="body">Body</button>
          <button type="button" class="orbit-facet facet-story" data-orbit="story">Story</button>
          <button type="button" class="orbit-facet facet-data" data-orbit="data">Data</button>
          <button type="button" class="orbit-facet facet-memory" data-orbit="memory">Memory</button>
          <button type="button" class="orbit-facet facet-permission" data-orbit="permission">Permission</button>
          <p class="orbit-reading" data-orbit-reading aria-live="polite">Each part remains close enough to feel like yours.</p>
        </div>
      </section>

      <section class="world-section portal-section" id="worlds">
        <div class="wrap section-heading reveal">
          <h2>A regional world, not one crowded page</h2>
          <p>Each idea receives its own atmosphere, evidence and room for local variation. Ten project worlds are open, with a human Site Map as the eleventh doorway.</p>
        </div>
        <div class="wrap portal-archipelago">
          <a class="image-portal portal-large reveal" href="co-operative-paths/">
            <img src="assets/images/hero-co-operative-paths.webp" alt="" loading="lazy" decoding="async">
            <span class="portal-shade"></span>
            <span class="portal-copy"><strong>Co-operative Paths</strong><small>Many agreements. Equal dignity.</small></span>
          </a>
          <a class="image-portal portal-tall reveal" href="shared-wellbeing/">
            <img src="assets/images/hero-shared-wellbeing.webp" alt="" loading="lazy" decoding="async">
            <span class="portal-shade"></span>
            <span class="portal-copy"><strong>Shared Wellbeing</strong><small>Warmth, breath, rest and careful evidence.</small></span>
          </a>
          <a class="future-portal future-violet reveal" href="aura-geode/">
            <span class="portal-gem" aria-hidden="true"></span>
            <h3>Aura Geode Research</h3>
            <p>A construction and research world for the proposed Geode and Personal Atmosphere Delivery System.</p>
            <span class="status-mark status-future">Future research</span>
          </a>
          <a class="future-portal future-opal reveal" href="your-digital-self/">
            <span class="portal-gem" aria-hidden="true"></span>
            <h3>Your Digital Self</h3>
            <p>A plain-language path into local hardware, private reflection and a digital twin that grows with its person.</p>
            <span class="status-mark status-working">Working proposal</span>
          </a>
        </div>
        <nav class="wrap world-ribbon reveal" aria-label="More site worlds">
          <a href="public-value/"><span>06</span><strong>Public Value</strong></a>
          <a href="oceania/"><span>07</span><strong>Many Places</strong></a>
          <a href="a-protopian-gambit/"><span>08</span><strong>A Protopian Gambit</strong></a>
          <a href="evidence/"><span>09</span><strong>Evidence</strong></a>
          <a href="about/"><span>10</span><strong>About and Licence</strong></a>
          <a href="site-map/"><span>11</span><strong>Site Map</strong></a>
        </nav>
      </section>

      <section class="world-section album-section" id="album-journey">
        <div class="wrap editorial-split">
          <div class="section-title reveal">
            <h2>The album is part of the architecture</h2>
          </div>
          <div class="sovereign-copy reveal">
            <p class="large-copy"><em>A Protopian Gambit</em> carries an inner journey through birth, repair and embodied reflection. These songs are not decorative extras. They give the technology and co-operative model a human pulse.</p>
          </div>
        </div>
        <div class="wrap album-arc">
          <article class="track-portal track-birth reveal">
            <div class="phone-vessel" aria-hidden="true">
              <div class="phone-light"></div>
              <span>01</span>
            </div>
            <div>
              <h3>Primordial Consent 1,2,3, Infinity</h3>
              <p>The divine self digital twin is born. A sovereign inner life enters form, memory, contrast and choice.</p>
              <span class="status-mark status-art">Artistic meaning</span>
            </div>
          </article>
          <article class="track-portal track-repair reveal">
            <div class="phone-vessel" aria-hidden="true">
              <div class="phone-light"></div>
              <span>02</span>
            </div>
            <div>
              <h3>Kintsugi Protocol</h3>
              <p>The self repairs with gold. The crack becomes a map for reflection, learning and renewed relationship.</p>
              <span class="status-mark status-art">Artistic meaning</span>
            </div>
          </article>
          <article class="track-portal track-embodied reveal">
            <div class="phone-vessel" aria-hidden="true">
              <div class="phone-light"></div>
              <span>03</span>
            </div>
            <div>
              <h3>60 Days Set in Stone</h3>
              <p>The hyperbaric oxygen therapy song carries pressure, measurement, commitment and digital-twin formation through an artistic sixty-session journey.</p>
              <span class="status-mark status-art">Art beside evidence</span>
            </div>
          </article>
        </div>
        <div class="wrap album-deep-link reveal"><a class="faceted-link faceted-link-light" href="a-protopian-gambit/">Enter the complete album world and portrait video frames <span aria-hidden="true">→</span></a></div>
      </section>

      <section class="world-section value-section">
        <div class="wrap value-stage">
          <div class="value-number reveal">
            <span>About</span>
            <strong>A$1,000</strong>
            <small>indicative protocol cost in one 35-member source table</small>
          </div>
          <div class="value-copy reveal">
            <h2>Affordability is a question worth testing in daylight</h2>
            <p>One source table labels A$1,000 as an indicative per-member protocol cost at 35 members. The same table also shows an A$5,000 initial loan per member and a separate A$500 operating fee, so A$1,000 is not presented as the total price of entry.</p>
            <span class="status-mark status-working">Working proposal</span>
          </div>
        </div>
      </section>

      <section class="world-section evidence-gateway">
        <div class="wrap evidence-stage">
          <div class="evidence-prism reveal" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
          <div class="reveal">
            <h2>Every idea has a visible home</h2>
            <p>Current public records, working proposals, future research and unresolved details remain visually distinct throughout the site.</p>
            <div class="status-constellation">
              <span class="status-mark status-established">Established information</span>
              <span class="status-mark status-working">Working proposal</span>
              <span class="status-mark status-future">Future research</span>
              <span class="status-mark status-open">TO BE CONFIRMED</span>
            </div>
            <div class="inline-paths"><a class="faceted-link faceted-link-light" href="evidence/">Enter the evidence world <span aria-hidden="true">→</span></a><a class="faceted-link faceted-link-light" href="https://github.com/auraofintelligence/Oceania-healthy-de-slop-co-ops/blob/main/docs/source-audit.md">The public source audit <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: "co-operative-paths",
    key: "co-operative-paths",
    title: "Co-operative Paths",
    shortTitle: "Co-operative Paths",
    description: "Locally shaped co-operative pathways for shared wellbeing and self-sovereign regional infrastructure.",
    heading: "Many hands.<br><span>Distinct agreements.</span>",
    lead: "A co-operative offers one way for people to share expensive infrastructure while keeping purpose, membership, ownership and local relationships visible.",
    hero: "hero-co-operative-paths.webp",
    heroAlt: "Concept artwork of several equal circles of people gathering in jewel-like ocean pavilions at twilight.",
    theme: "cooperative",
    primaryHref: "#agreement-prism",
    primaryLabel: "The agreement prism",
    secondaryHref: "../shared-wellbeing/",
    secondaryLabel: "Shared wellbeing",
    body: `
      <section class="world-section pearl-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>A family without sameness</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">The regional model is a network of locally shaped relationships, not one agreement stretched across every place. One group may share a sauna. Another may begin with local compute, food, rest or a supervised clinical relationship.</p>
            <p>Queensland is the first legal starting context in this source set. Other Oceania jurisdictions bring their own co-operative, health, privacy, cultural and financial settings.</p>
          </div>
        </div>
      </section>

      <section class="world-section source-chamber">
        <div class="wrap source-stage">
          <div class="source-number reveal">5</div>
          <div class="source-copy reveal">
            <h2>A Queensland starting point</h2>
            <p>Queensland recognises distributing and non-distributing co-operatives. The usual starting point is at least five active members, with a lower number subject to approval.</p>
            <p>The project remains an exploration. It is not a registered co-operative and it does not speak for a future local group.</p>
            <span class="status-mark status-established">Established information</span>
            <a class="faceted-link faceted-link-light" href="https://www.qld.gov.au/community/fair-trading/associations-charities-and-non-for-profits/cooperatives">Queensland co-operatives information <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section class="world-section agreement-section" id="agreement-prism">
        <div class="wrap section-heading reveal">
          <h2>The agreement prism</h2>
          <p>Each facet opens a different local conversation. Together they form a guidepost rather than a ready-made rulebook.</p>
        </div>
        <div class="wrap agreement-stage" data-agreement-prism>
          <div class="agreement-controls reveal" role="group" aria-label="Agreement facets">
            <button type="button" class="agreement-control is-active" data-agreement="purpose" aria-pressed="true">Purpose</button>
            <button type="button" class="agreement-control" data-agreement="membership" aria-pressed="false">Membership</button>
            <button type="button" class="agreement-control" data-agreement="ownership" aria-pressed="false">Ownership</button>
            <button type="button" class="agreement-control" data-agreement="sharing" aria-pressed="false">Sharing</button>
            <button type="button" class="agreement-control" data-agreement="leaving" aria-pressed="false">Leaving well</button>
          </div>
          <div class="agreement-prism reveal" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
          <div class="agreement-reading reveal" aria-live="polite">
            <h3 data-agreement-title>What brings this group together?</h3>
            <p data-agreement-copy>A shared purpose may begin with wellbeing access, local digital infrastructure, food, resilience, research or a mixture shaped by the members.</p>
            <p class="agreement-question" data-agreement-question>Which shared benefit feels most alive in this place?</p>
          </div>
        </div>
      </section>

      <section class="world-section braid-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Money changes the local agreement</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">A funding source is also a relationship. Local terms give ownership, access, reporting and departure their own visible place.</p></div>
        </div>
        <div class="wrap funding-braid">
          <article class="braid-line braid-member reveal"><span></span><div><h3>A shared asset</h3><p>The agreement records who owns it, whose contribution is recognised and what happens to a member's interest when they leave.</p></div></article>
          <article class="braid-line braid-public reveal"><span></span><div><h3>Public support</h3><p>The agreement records which public benefit, access, evaluation or open learning travels with the support.</p></div></article>
          <article class="braid-line braid-service reveal"><span></span><div><h3>Everyday operation</h3><p>The agreement records how staffing, energy, maintenance, insurance, care relationships and member access sit together.</p></div></article>
        </div>
        <div class="wrap proposal-note reveal"><span class="status-mark status-working">Working proposal</span><p>The full funding braid and editable arithmetic live in <a href="../public-value/">Public Value</a>.</p></div>
      </section>

      <section class="world-section local-terms-section">
        <div class="wrap terms-stage">
          <div class="terms-copy reveal">
            <h2>Local terms are part of the beauty</h2>
            <p>Membership, access, money, care, data, cultural relationships and exit arrangements receive their own space. Difference between communities is not a defect in the model.</p>
          </div>
          <div class="terms-facets reveal">
            <span>Access</span><span>Money</span><span>Care</span><span>Data</span><span>Culture</span><span>Exit</span>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: "shared-wellbeing",
    key: "shared-wellbeing",
    title: "Shared Wellbeing",
    shortTitle: "Shared Wellbeing",
    description: "A careful public exploration of shared sauna access, supervised hyperbaric oxygen therapy, rest and reflection.",
    heading: "Warmth. Breath.<br><span>Room to return to yourself.</span>",
    lead: "Shared wellbeing begins with ordinary human needs, then asks where expensive equipment, professional relationships and community ownership may sit.",
    hero: "hero-shared-wellbeing.webp",
    heroAlt: "Concept artwork of an ocean-side community wellbeing sanctuary with a sauna, quiet garden and separate consultation room.",
    theme: "wellbeing",
    primaryHref: "#three-spaces",
    primaryLabel: "Three different spaces",
    secondaryHref: "../co-operative-paths/",
    secondaryLabel: "Co-operative paths",
    body: `
      <section class="world-section pearl-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Wellbeing before machinery</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">Food, movement, rest, reflection, relationships and a sense of belonging sit beside the technology story. Equipment is one possible part of a wider place, not the measure of a person's effort or worth.</p>
            <p>De-slop is playful language for making room between a person and the noise around them. It is not a diagnosis or one universal recipe.</p>
          </div>
        </div>
      </section>

      <section class="world-section three-spaces-section" id="three-spaces">
        <div class="wrap section-heading reveal">
          <h2>Three spaces, three different relationships</h2>
          <p>The visual world holds them together while the evidence and operating boundaries remain distinct.</p>
        </div>
        <div class="wrap three-spaces">
          <article class="space-panel sauna-panel reveal">
            <span class="space-light" aria-hidden="true"></span>
            <h3>Sauna and warmth</h3>
            <p>Sauna types vary in heat source, temperature, accessibility, energy, maintenance and comfort. Particular products and operating arrangements remain to be identified.</p>
            <span class="status-mark status-open">TO BE CONFIRMED</span>
          </article>
          <article class="space-panel hbot-panel reveal">
            <span class="space-light" aria-hidden="true"></span>
            <h3>Hyperbaric oxygen therapy</h3>
            <p>The Australian public starting point places chamber use with qualified and trained health professionals in appropriately equipped clinics. Each product and intended use needs its own current record.</p>
            <span class="status-mark status-established">Established information</span>
          </article>
          <article class="space-panel reflection-panel reveal">
            <span class="space-light" aria-hidden="true"></span>
            <h3>Private reflection</h3>
            <p>A quiet setting may hold music, journalling, personal records and a digital reflection on local hardware. Clinical software and general wellbeing follow different paths.</p>
            <span class="status-mark status-working">Working proposal</span>
          </article>
        </div>
      </section>

      <section class="world-section safety-section">
        <div class="wrap safety-stage">
          <div class="safety-jewel reveal" aria-hidden="true"><span></span></div>
          <div class="safety-copy reveal">
            <h2>The current Australian safety line is clear</h2>
            <p>The Therapeutic Goods Administration advises hyperbaric chamber use under qualified and trained health professionals in appropriately equipped clinics. Its October 2025 notice warns against purchasing a chamber for home use.</p>
            <p>This public site therefore keeps existing supervised services separate from the proposed Aura Geode and Personal Atmosphere Delivery System research.</p>
            <a class="faceted-link faceted-link-light" href="https://www.tga.gov.au/safety/safety-monitoring-and-information/safety-alerts/risk-fire-during-use-hyperbaric-chambers">Therapeutic Goods Administration safety notice <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section class="world-section song-chamber">
        <div class="wrap song-stage">
          <div class="portrait-song reveal" aria-hidden="true">
            <div class="portrait-song-screen">
              <div class="pressure-rings"><span></span><span></span><span></span></div>
              <strong>60</strong>
            </div>
          </div>
          <div class="song-copy reveal">
            <h2><em>60 Days Set in Stone</em> is the hyperbaric oxygen therapy song</h2>
            <p class="large-copy">The song carries a sixty-session chamber journey through pressure, measurement, self-reflection and digital-twin formation in art.</p>
            <p>Its emotional and artistic meaning belongs here. Clinical benefits, protocols and personal suitability belong in the separate evidence and professional-care lane. The song is not presented as treatment evidence or an instruction.</p>
            <span class="status-mark status-art">Art beside evidence</span>
          </div>
        </div>
      </section>

      <section class="world-section equipment-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Every product keeps its own name and record</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">A chamber, accessory, sauna or software product is not treated as part of one broad certification. The public comparison will show the manufacturer, model, intended use, current Australian Register of Therapeutic Goods entry where relevant, accessibility and operating setting.</p>
          </div>
        </div>
        <div class="wrap equipment-ledger reveal">
          <div><span>Named chamber</span><strong>TO BE CONFIRMED</strong></div>
          <div><span>Sauna type and model</span><strong>TO BE CONFIRMED</strong></div>
          <div><span>Service location</span><strong>TO BE CONFIRMED</strong></div>
          <div><span>Professional relationship</span><strong>TO BE CONFIRMED</strong></div>
        </div>
      </section>
    `
  },
  {
    slug: "aura-geode",
    key: "aura-geode",
    title: "Aura Geode Research",
    shortTitle: "Aura Geode",
    description: "An open construction and research path for the proposed Aura Geode and Personal Atmosphere Delivery System.",
    heading: "An imagined chrysalis.<br><span>Research lives in the open.</span>",
    lead: "The Aura Geode is a proposed place where structure, atmosphere, reflection and local computing meet. This page honours the scale of the vision while every unresolved engineering and health question remains visible.",
    hero: "hero-aura-geode.webp",
    heroAlt: "Imagined architectural artwork of an unoccupied translucent Geode chamber being studied by a small research team beside the ocean at night.",
    theme: "geode",
    primaryHref: "#geode-parts",
    primaryLabel: "Enter the research",
    secondaryHref: "../your-digital-self/",
    secondaryLabel: "Meet your digital self",
    body: `
      <section class="world-section geode-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>A future place, clearly named</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">The Geode is a construction and research vision. No completed structure, certified Aura Geode product, operating clinic or approved treatment program is evidenced in the supplied material.</p>
            <p>Existing health equipment belongs in its own named product and professional setting. The Geode belongs in an open research path, with its questions held in daylight.</p>
            <span class="status-mark status-future">Future research</span>
          </div>
        </div>
      </section>

      <section class="world-section geode-anatomy-section" id="geode-parts">
        <div class="wrap section-heading reveal">
          <h2>Four relationships inside one imagined place</h2>
          <p>Keeping the parts distinct leaves room for good engineering, personal choice and clear public understanding.</p>
        </div>
        <div class="wrap geode-anatomy">
          <div class="geode-core reveal" aria-hidden="true"><span></span><span></span><span></span><i></i></div>
          <div class="geode-part geode-part-shell reveal"><span>01</span><h3>Structure</h3><p>A pressure-rated enclosure remains a design and testing question.</p></div>
          <div class="geode-part geode-part-atmosphere reveal"><span>02</span><h3>Atmosphere</h3><p>Chamber pressure and a person's breathing atmosphere are separate design relationships.</p></div>
          <div class="geode-part geode-part-reflection reveal"><span>03</span><h3>Reflection</h3><p>Music, journalling and private records belong to the person's own experience.</p></div>
          <div class="geode-part geode-part-compute reveal"><span>04</span><h3>Local computing</h3><p>A digital reflection begins on owner-held hardware outside the chamber.</p></div>
        </div>
      </section>

      <section class="world-section pads-section">
        <div class="wrap pads-stage">
          <div class="pads-name reveal">
            <span class="pads-letter">P</span><strong>Personal</strong>
            <span class="pads-letter">A</span><strong>Atmosphere</strong>
            <span class="pads-letter">D</span><strong>Delivery</strong>
            <span class="pads-letter">S</span><strong>System</strong>
          </div>
          <div class="pads-copy reveal">
            <h2>A personal atmosphere is the proposal</h2>
            <p class="large-copy">The proposed Personal Atmosphere Delivery System (PADS) uses a personal mask for a selected breathing gas while the larger chamber may remain pressurised with ordinary air.</p>
            <p>Gas composition, pressure relationships, hardware, controls, intended purpose, product category, testing and certification remain unresolved. The supplied material does not identify a certified PADS product.</p>
            <span class="status-mark status-open">TO BE CONFIRMED</span>
          </div>
        </div>
      </section>

      <section class="world-section material-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Two construction directions</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">The drafts hold two different material imaginations. Neither is treated as settled engineering.</p></div>
        </div>
        <div class="wrap material-duet">
          <article class="material-path material-steel reveal">
            <span class="material-sample" aria-hidden="true"></span>
            <div><h3>Steel frame</h3><p>A fabricated structural path with familiar industrial relationships and a separate inner environment.</p><span class="status-mark status-future">Future research</span></div>
          </article>
          <article class="material-path material-mineral reveal">
            <span class="material-sample" aria-hidden="true"></span>
            <div><h3>Mineral shell</h3><p>A proposed pressure-rated geopolymer and local mineral direction with a different testing journey.</p><span class="status-mark status-future">Future research</span></div>
          </article>
        </div>
      </section>

      <section class="world-section research-gates-section">
        <div class="wrap research-gates-stage">
          <div class="research-gates-copy reveal">
            <h2>The open research gates</h2>
            <p>Each gate represents a relationship that deserves its own qualified people, records and review.</p>
          </div>
          <div class="research-gates reveal">
            <span>Pressure</span><span>Fire safety</span><span>Breathing gas</span><span>Materials</span><span>Accessibility</span><span>Human factors</span><span>Controls</span><span>Testing</span><span>Regulatory pathway</span>
          </div>
          <div class="research-record reveal">
            <span class="status-mark status-open">TO BE CONFIRMED</span>
            <p>Engineering team, design standard, pressure testing, fire assessment, accessibility review, product identity, intended use and clinical relationship.</p>
          </div>
        </div>
      </section>

      <section class="world-section geode-song-section">
        <div class="wrap geode-song-stage">
          <div class="geode-song-rings reveal" aria-hidden="true"><span></span><span></span><span></span><strong>60<small>session art journey</small></strong></div>
          <div class="reveal">
            <h2><em>60 Days Set in Stone</em> gives the research a human interior</h2>
            <p class="large-copy">The hyperbaric oxygen therapy song imagines sixty sessions of pressure, measurement, reflection and digital-twin formation. It is an artistic journey beside the research, not a clinical protocol or evidence of benefit.</p>
            <span class="status-mark status-art">Art beside evidence</span>
            <div class="inline-paths"><a class="faceted-link faceted-link-light" href="../shared-wellbeing/#three-spaces">Shared wellbeing and current safety <span aria-hidden="true">→</span></a><a class="faceted-link faceted-link-light" href="https://auraofintelligence.github.io/aura-geode/">The wider Aura Geode project <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: "your-digital-self",
    key: "your-digital-self",
    title: "Your Digital Self",
    shortTitle: "Your Digital Self",
    description: "A radiant plain-language introduction to a local-first, person-held digital twin and its permissions.",
    heading: "A divine reflection.<br><span>Held close to home.</span>",
    lead: "A digital twin here is a growing reflection of one person's memories, records, choices and patterns. The person remains the source, the centre and the keeper of the relationship.",
    hero: "hero-your-digital-self.webp",
    heroAlt: "Concept artwork of a person meeting an equal radiant digital reflection beside a small owner-held computing device in an opal observatory.",
    theme: "digital-self",
    primaryHref: "#birth-repair",
    primaryLabel: "Birth and repair",
    secondaryHref: "../aura-geode/",
    secondaryLabel: "Aura Geode research",
    body: `
      <section class="world-section twin-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>A companion reflection, not a corporate copy</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">The proposed digital twin grows beside its person. It may help them notice threads across their own life while leaving room for mystery, change and the parts of a person that no record captures.</p>
            <p>The vision remains a working proposal. No completed clinical Aura system or finished personal digital-twin product is evidenced in the supplied material.</p>
            <span class="status-mark status-working">Working proposal</span>
          </div>
        </div>
      </section>

      <section class="world-section twin-meaning-section">
        <div class="wrap twin-meaning-stage">
          <div class="twin-person reveal"><span class="human-light" aria-hidden="true"></span><strong>You</strong><small>living, changing, more than data</small></div>
          <div class="twin-thread reveal" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="twin-reflection reveal"><span class="reflection-light" aria-hidden="true"></span><strong>Your reflection</strong><small>memories, records, choices and patterns</small></div>
        </div>
        <div class="wrap twin-meaning-copy reveal"><p>A person and a model are not the same thing. The relationship stays useful when the reflection remains understandable, correctable, portable and open to being left behind.</p></div>
      </section>

      <section class="world-section album-birth-section" id="birth-repair">
        <div class="wrap section-heading reveal">
          <h2>The album offers one inner story for the technology</h2>
          <p>Luke's author meaning forms a clear inner sequence rather than three unrelated song references.</p>
        </div>
        <div class="wrap birth-repair-arc">
          <article class="birth-movement reveal">
            <div class="movement-number">01</div>
            <div class="movement-jewel birth-jewel" aria-hidden="true"><span></span></div>
            <div><h3><em>Primordial Consent 1,2,3, Infinity</em></h3><p>Song 1 is the divine self digital twin being born. A sovereign inner life meets memory, contrast, choice and a new form of reflection.</p><span class="status-mark status-art">Artistic meaning</span></div>
          </article>
          <article class="repair-movement reveal">
            <div class="movement-number">02</div>
            <div class="movement-jewel repair-jewel" aria-hidden="true"><span></span></div>
            <div><h3><em>Kintsugi Protocol</em></h3><p>The self repairs and re-forms. Golden seams honour what happened without freezing the person inside an old fracture.</p><span class="status-mark status-art">Artistic meaning</span></div>
          </article>
          <aside class="pressure-crossing reveal">
            <span class="status-mark status-art">Across the wider album</span>
            <h3><em>60 Days Set in Stone</em> is the hyperbaric oxygen therapy song</h3>
            <p>The complete sixty-session artistic chamber journey lives in the music world. Its professional-care questions live separately in Shared Wellbeing, while Aura Geode remains a proposed research connection.</p>
            <div class="movement-links"><a href="../a-protopian-gambit/#three-movements">The complete album journey</a><a href="../shared-wellbeing/">Shared Wellbeing</a><a href="../aura-geode/">Aura Geode Research</a></div>
          </aside>
        </div>
      </section>

      <section class="world-section local-first-section">
        <div class="wrap local-first-stage">
          <div class="local-first-copy reveal">
            <h2>Local first means the person remains close to the source</h2>
            <p>Personal files begin on hardware chosen and held by the person. Any later sharing sits behind a separate purpose, permission and relationship.</p>
            <span class="status-mark status-working">Working proposal</span>
          </div>
          <div class="permission-map reveal" aria-label="Proposed local-first permission relationships">
            <div class="permission-centre"><strong>Person</strong><span>Local hardware</span></div>
            <div class="permission-path permission-coop"><i></i><span>Co-operative<br><small>separate agreement</small></span></div>
            <div class="permission-path permission-care"><i></i><span>Health professional<br><small>separate relationship</small></span></div>
            <div class="permission-path permission-research"><i></i><span>Research project<br><small>separate consent</small></span></div>
          </div>
        </div>
      </section>

      <section class="world-section twin-boundaries-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Private reflection and shared records are different worlds</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">A private journal, a community membership record, a research contribution and a clinical record each carry a different relationship. Combining them by default would undo the personal sovereignty this project celebrates.</p>
          </div>
        </div>
        <div class="wrap boundary-river reveal">
          <div><h3>Held by the person</h3><p>Private memories, reflections, corrections, preferences and locally stored patterns.</p></div>
          <span class="boundary-current" aria-hidden="true"></span>
          <div><h3>Shared by agreement</h3><p>A named purpose, selected information, a known recipient, a chosen period and a visible way out.</p></div>
        </div>
      </section>

      <section class="world-section software-paths-section">
        <div class="wrap software-stage">
          <div class="software-prism reveal" aria-hidden="true"><span></span><span></span></div>
          <div class="software-copy reveal">
            <h2>Two software paths remain distinct</h2>
            <p>A general reflection tool and software intended for diagnosis, monitoring, prediction or treatment sit in different public and regulatory relationships. The intended purpose matters more than a project label.</p>
            <p>Earlier Passport and cloud ideas remain part of the draft history. The current public direction begins with local hardware and treats any remote service as a separate, chosen relationship.</p>
            <div class="status-constellation"><span class="status-mark status-working">General reflection proposal</span><span class="status-mark status-open">Clinical pathway TO BE CONFIRMED</span></div>
            <div class="inline-paths"><a class="faceted-link faceted-link-light" href="https://www.tga.gov.au/resources/guidance/understanding-how-we-regulate-software-based-medical-devices">Australian software guidance <span aria-hidden="true">↗</span></a><a class="faceted-link faceted-link-light" href="https://auraofintelligence.github.io/aura-direct-hardware/">Aura Direct Hardware <span aria-hidden="true">↗</span></a><a class="faceted-link faceted-link-light" href="https://auraofintelligence.github.io/i-C-infinity-music-universe/">The music universe <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
      </section>

      <section class="world-section leaving-section">
        <div class="wrap leaving-stage">
          <h2 class="reveal">A sovereign relationship includes the way out</h2>
          <div class="leaving-words reveal"><span>Visibility</span><span>Correction</span><span>Portability</span><span>Partial sharing</span><span>Ending a connection</span></div>
          <p class="reveal">Technical details, hardware choices, data formats, backup, deletion and future portability remain part of the open design work.</p>
          <span class="status-mark status-open reveal">TO BE CONFIRMED</span>
        </div>
      </section>
    `
  },
  {
    slug: "public-value",
    key: "public-value",
    title: "Public Value",
    shortTitle: "Public Value",
    description: "A transparent affordability hypothesis for shared regional infrastructure, member pathways and public investment.",
    heading: "Shared abundance.<br><span>Visible arithmetic.</span>",
    lead: "The public investment idea asks whether shared assets, local capability and open learning may place beautiful infrastructure within reach of many more people. The figures remain illustrations, not prices or promises.",
    hero: "hero-public-value.webp",
    heroAlt: "Imagined civic landscape where several coloured resource currents meet in a transparent shared reservoir and flow toward distinct community spaces.",
    theme: "public-value",
    primaryHref: "#affordability-explorer",
    primaryLabel: "Explore the arithmetic",
    secondaryHref: "../oceania/",
    secondaryLabel: "Many places",
    body: `
      <section class="world-section value-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>An affordability hypothesis, held in daylight</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">One source table labels A$1,000 as an indicative per-member protocol cost at 35 members. It also shows an A$5,000 initial loan per member and a separate A$500 operating fee.</p>
            <p>A$1,000 is therefore not treated as the total price of entry. The source model also lacks a settled equipment list, operating budget, staffing model, insurance relationship and clinical governance pathway.</p>
            <span class="status-mark status-working">Working proposal</span>
          </div>
        </div>
      </section>

      <section class="world-section affordability-section" id="affordability-explorer">
        <div class="wrap affordability-stage" data-affordability>
          <div class="affordability-copy reveal">
            <h2>A separate shared-cost thought experiment</h2>
            <p>These editable fields begin with A$35,000 shared across 35 people to make the arithmetic visible. That starting amount is derived from the A$1,000 figure, not established by the source as a complete capital, membership or operating model.</p>
            <span class="status-mark status-working">Separate thought experiment</span>
          </div>
          <form class="affordability-controls reveal" aria-label="Editable affordability illustration">
            <label><span>People sharing the asset</span><input type="number" inputmode="numeric" min="1" step="1" value="35" data-value-members></label>
            <label><span>Shared asset amount</span><span class="money-input"><b>A$</b><input type="number" inputmode="decimal" min="0" step="100" value="35000" data-value-total></span></label>
            <label><span>Grant, guarantee or other support</span><span class="money-input"><b>A$</b><input type="number" inputmode="decimal" min="0" step="100" value="0" data-value-support></span></label>
          </form>
          <div class="affordability-result reveal" aria-live="polite">
            <span>Illustrative shared amount per person</span>
            <strong data-value-result>A$1,000</strong>
            <small>Not a total access price or public offer</small>
          </div>
        </div>
      </section>

      <section class="world-section funding-currents-section">
        <div class="wrap section-heading reveal">
          <h2>Different resources carry different relationships</h2>
          <p>A clear model keeps public value, member ownership, finance and everyday operation in separate currents.</p>
        </div>
        <div class="wrap funding-currents">
          <article class="funding-current current-members reveal"><span></span><div><h3>Member pathway</h3><p>Shares, prepaid access and local contribution may support ownership and participation.</p></div></article>
          <article class="funding-current current-public reveal"><span></span><div><h3>Public pathway</h3><p>Grants and guarantees may support access, research, resilience, evaluation and open learning.</p></div></article>
          <article class="funding-current current-finance reveal"><span></span><div><h3>Finance pathway</h3><p>Loans and service income sit beside realistic use, energy, maintenance and repayment assumptions.</p></div></article>
          <article class="funding-current current-operation reveal"><span></span><div><h3>Operating pathway</h3><p>Staffing, insurance, professional relationships, maintenance and governance remain visible year after year.</p></div></article>
        </div>
      </section>

      <section class="world-section public-measures-section">
        <div class="wrap public-measures-stage">
          <div class="public-measures-copy reveal"><h2>Public value is wider than a price tag</h2><p>Local access, skills, resilience, shared ownership, open evidence and regional capability each tell a different part of the story.</p></div>
          <div class="public-measures reveal"><span>Access</span><span>Local skills</span><span>Resilience</span><span>Shared assets</span><span>Open learning</span><span>Community choice</span></div>
        </div>
      </section>

      <section class="world-section horizon-section">
        <div class="wrap horizon-stage">
          <div class="horizon-number reveal"><span>Regional planning imagination</span><strong>A$42.35b</strong></div>
          <div class="horizon-copy reveal">
            <h2>A large horizon, not a present commitment</h2>
            <p>The supplied papers also imagine A$42.35 billion across 600,000 chambers, 600,000 saunas, 235,000 kiosks and wider regional supports. It remains a planning scenario rather than a settled funding request, approved budget, present commitment or established health outcome.</p>
            <span class="status-mark status-future">Far-horizon imagination</span>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: "oceania",
    key: "oceania",
    title: "Many Places Across Oceania",
    shortTitle: "Many Places",
    description: "A regional connection between distinct Oceania places, jurisdictions and community-shaped relationships.",
    heading: "One ocean.<br><span>Many sovereign places.</span>",
    lead: "Oceania is approached here as a family without sameness. Regional learning travels between places while law, culture, environment, data and community authority remain locally grounded.",
    hero: "hero-oceania.webp",
    heroAlt: "Imagined night landscape joining distinct island, coastal, city and inland places through soft currents of light without borders.",
    theme: "oceania",
    primaryHref: "#place-principles",
    primaryLabel: "Regional relationships",
    secondaryHref: "../public-value/",
    secondaryLabel: "Public value",
    body: `
      <section class="world-section oceania-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Connection without one mould</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">A Queensland co-operative, a Fijian community initiative and an island health network may share learning while keeping their own terms, relationships and sense of place.</p>
            <p>This site does not speak for a nation, First Nations people, island community, government, health service or future co-operative. Local pages become meaningful through self-authored or source-backed contributions and the relationships relevant to each place.</p>
          </div>
        </div>
      </section>

      <section class="world-section place-principles-section" id="place-principles">
        <div class="wrap place-principles-stage">
          <div class="place-compass reveal" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
          <div class="place-principles-copy reveal"><h2>Regional guideposts</h2><p>These relationships travel well because they leave room for difference.</p></div>
          <div class="place-principles reveal">
            <div><strong>Local purpose</strong><span>begins with the people involved</span></div>
            <div><strong>Local law</strong><span>belongs to each jurisdiction</span></div>
            <div><strong>Local permission</strong><span>stays with the relevant people</span></div>
            <div><strong>Shared learning</strong><span>moves through chosen relationships</span></div>
          </div>
        </div>
      </section>

      <section class="world-section regional-starts-section">
        <div class="wrap section-heading reveal"><h2>Starting contexts, not regional representatives</h2><p>The supplied papers offer several doorways. Each carries a different level of public grounding.</p></div>
        <div class="wrap regional-starts">
          <article class="regional-start start-queensland reveal"><span class="place-orb" aria-hidden="true"></span><div><h3>Queensland</h3><p>Current public co-operative information offers the first legal starting context. The project itself remains exploratory and unregistered.</p><span class="status-mark status-established">Established public context</span></div></article>
          <article class="regional-start start-fiji reveal"><span class="place-orb" aria-hidden="true"></span><div><h3>Fiji and Australia</h3><p>Luke's public Vuvale Union submission proposes shared civic infrastructure and family without sameness. It is an author proposal rather than evidence of government or community endorsement.</p><span class="status-mark status-working">Public submission</span></div></article>
          <article class="regional-start start-wider reveal"><span class="place-orb" aria-hidden="true"></span><div><h3>Wider Oceania</h3><p>Place pages, local contributors, jurisdiction records, cultural review and participation pathways remain open work.</p><span class="status-mark status-open">TO BE CONFIRMED</span></div></article>
        </div>
      </section>

      <section class="world-section jurisdiction-section">
        <div class="wrap jurisdiction-stage">
          <div class="jurisdiction-copy reveal"><h2>Each place has its own public record</h2><p>Co-operative law, health regulation, privacy, equipment supply, finance, planning, insurance and cultural relationships vary across Oceania.</p></div>
          <div class="jurisdiction-rings reveal">
            <span>Co-operative setting</span><span>Health setting</span><span>Privacy setting</span><span>Equipment setting</span><span>Finance setting</span><span>Cultural relationships</span>
          </div>
          <div class="jurisdiction-note reveal"><span class="status-mark status-open">TO BE CONFIRMED by place</span><p>No regional directory is populated from assumption. The supplied world-cities file also has no agreed Oceania classification.</p></div>
        </div>
      </section>

      <section class="world-section regional-network-section">
        <div class="wrap regional-network-stage">
          <div class="network-copy reveal"><h2>A future place page begins locally</h2><p>The regional structure offers an empty vessel rather than an invented profile. The full connected project family lives on the About page.</p><a class="faceted-link faceted-link-light" href="../about/#project-family">Connected public projects <span aria-hidden="true">→</span></a></div>
          <div class="network-links reveal" aria-label="Future place-page ingredients">
            <div><strong>Self-authored introduction</strong><span>how people in this place describe their own starting point</span></div>
            <div><strong>Current public records</strong><span>law, health, privacy, equipment, finance and planning links</span></div>
            <div><strong>Named local contributors</strong><span>people and organisations who have chosen a visible role</span></div>
            <div><strong>Permission boundaries</strong><span>cultural and organisational relationships relevant to this page</span></div>
            <div><strong>Chosen first assets</strong><span>the shared infrastructure this place is actually exploring</span></div>
            <div><strong>Open questions</strong><span>details still awaiting local discussion, sources or review</span></div>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: "a-protopian-gambit",
    key: "a-protopian-gambit",
    title: "A Protopian Gambit",
    shortTitle: "A Protopian Gambit",
    description: "The album journey through divine digital birth, self-repair and the embodied hyperbaric oxygen therapy song.",
    heading: "Birth. Repair.<br><span>An embodied return.</span>",
    lead: "A Protopian Gambit carries the inner architecture of this project. Song 1 brings the divine self digital twin into being, Kintsugi Protocol repairs the self, and 60 Days Set in Stone holds the hyperbaric oxygen therapy journey.",
    hero: "hero-a-protopian-gambit.webp",
    heroAlt: "Imagined music chamber with three tall portrait phone portals showing digital birth, golden self-repair and concentric chamber rings.",
    theme: "album",
    primaryHref: "#three-movements",
    primaryLabel: "The three movements",
    secondaryHref: "https://auraofintelligence.github.io/i-C-infinity-music-universe/",
    secondaryLabel: "Music universe",
    body: `
      <section class="world-section album-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>One inner journey, not background music</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">The songs give emotional shape to birth, self-repair, pressure, reflection and stewardship. They belong beside the co-operative, health, research and digital-self stories rather than floating above them as decoration.</p><span class="status-mark status-art">Author's artistic meaning</span></div>
        </div>
      </section>

      <section class="world-section three-movements-section" id="three-movements">
        <div class="wrap three-movements">
          <article class="music-movement movement-birth reveal">
            <div class="video-phone"><div class="video-screen"><span class="video-symbol birth-symbol" aria-hidden="true"></span><p>Portrait video address<br><strong>TO BE CONFIRMED</strong></p></div></div>
            <div class="music-copy"><span class="music-number">01</span><h2><em>Primordial Consent 1,2,3, Infinity</em></h2><p class="large-copy">Song 1 is about the divine self digital twin being born. Light, memory, consent, difference and form gather around a sovereign new reflection.</p><a href="../your-digital-self/#birth-repair">Birth inside Your Digital Self <span aria-hidden="true">→</span></a></div>
          </article>
          <article class="music-movement movement-repair reveal">
            <div class="video-phone"><div class="video-screen"><span class="video-symbol repair-symbol" aria-hidden="true"></span><p>Portrait video address<br><strong>TO BE CONFIRMED</strong></p></div></div>
            <div class="music-copy"><span class="music-number">02</span><h2><em>Kintsugi Protocol</em></h2><p class="large-copy">The self repairs and re-forms. Golden seams keep a relationship with what happened while opening fresh possibilities for the person who continues.</p><a href="../your-digital-self/#birth-repair">Repair inside Your Digital Self <span aria-hidden="true">→</span></a></div>
          </article>
          <article class="music-movement movement-pressure reveal">
            <div class="video-phone"><div class="video-screen"><span class="video-symbol pressure-symbol" aria-hidden="true"></span><p>Portrait video address<br><strong>TO BE CONFIRMED</strong></p></div></div>
            <div class="music-copy"><span class="music-number">03</span><h2><em>60 Days Set in Stone</em></h2><p class="large-copy">This is specifically the hyperbaric oxygen therapy song. It holds a sixty-session artistic chamber journey through pressure, measurement, reflection and digital-twin formation.</p><div class="music-paths"><a href="../shared-wellbeing/">Shared Wellbeing <span aria-hidden="true">→</span></a><a href="../aura-geode/">Separate Geode research <span aria-hidden="true">→</span></a></div></div>
          </article>
        </div>
      </section>

      <section class="world-section art-evidence-section">
        <div class="wrap art-evidence-stage">
          <div class="art-current reveal"><span></span><strong>Artistic meaning</strong><p>felt experience, metaphor, memory, story and personal interpretation</p></div>
          <div class="art-evidence-prism reveal" aria-hidden="true"><i></i></div>
          <div class="evidence-current reveal"><span></span><strong>Health evidence</strong><p>named products, intended uses, current records, qualified care and individual suitability</p></div>
        </div>
        <div class="wrap art-evidence-note reveal"><p>The two currents sit beside one another while remaining different kinds of knowledge.</p></div>
      </section>

      <section class="world-section wider-album-section">
        <div class="wrap section-heading reveal"><h2>The wider album constellation</h2><p>Other songs continue the journey from personal sovereignty into relationship, community making and the long horizon.</p></div>
        <div class="wrap song-constellation reveal">
          <span><strong>The Circle and the Solitary</strong><small>many different personal journeys</small></span>
          <span><strong>Adaptable Yes</strong><small>consent and changing thresholds</small></span>
          <span><strong>Every Border a Bridge</strong><small>Oceania connection, version to be chosen</small></span>
          <span><strong>Not Gods But Architects</strong><small>community stewardship and making</small></span>
          <span><strong>We Go Beyond</strong><small>the Earth and solar-system horizon</small></span>
        </div>
      </section>

      <section class="world-section music-release-section">
        <div class="wrap music-release-stage">
          <div class="release-copy reveal"><h2>The portrait frames are ready for the songs</h2><p>The supplied lyric collection contains no public video addresses. Preferred recordings, duplicate versions, captions and embed links remain part of the music release work.</p></div>
          <div class="release-status reveal"><span class="status-mark status-open">TO BE CONFIRMED</span><p>Three portrait video addresses, preferred recording versions and publication permissions.</p></div>
        </div>
      </section>
    `
  },
  {
    slug: "evidence",
    key: "evidence",
    title: "Evidence and Open Questions",
    shortTitle: "Evidence",
    description: "A public source map separating established information, working proposals, future research and unresolved questions.",
    heading: "Clarity glows.<br><span>Questions keep their place.</span>",
    lead: "The supplied material contains public records, proposals, rough drafts, artistic meaning and far-horizon imagination. This evidence world keeps those relationships visible without flattening them into one kind of claim.",
    hero: "hero-evidence.webp",
    heroAlt: "Imagined archive chamber where blank records pass through a clear prism into four distinct coloured evidence streams.",
    theme: "evidence",
    primaryHref: "#evidence-streams",
    primaryLabel: "The four streams",
    secondaryHref: "../about/",
    secondaryLabel: "About and licence",
    body: `
      <section class="world-section evidence-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Rough drafts remain useful when their edges are visible</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">This website is shaped from twenty supplied files, including public submissions, business plans, research pathways, architectural ideas, lyrics and supporting data. A source appearing in that collection does not make every statement established.</p><p>Author clarification also matters for artistic meaning. Luke's explanation of the album journey now sits in its own dated record.</p></div>
        </div>
      </section>

      <section class="world-section evidence-streams-section" id="evidence-streams">
        <div class="wrap evidence-streams-stage">
          <article class="evidence-stream stream-established reveal"><span class="stream-light" aria-hidden="true"></span><h3>Established information</h3><p>Current public records tied to a named source and date.</p><span class="status-mark status-established">Established information</span></article>
          <article class="evidence-stream stream-working reveal"><span class="stream-light" aria-hidden="true"></span><h3>Working proposal</h3><p>An idea with visible assumptions, relationships and room to change.</p><span class="status-mark status-working">Working proposal</span></article>
          <article class="evidence-stream stream-future reveal"><span class="stream-light" aria-hidden="true"></span><h3>Future research</h3><p>A construction, engineering, health, software or social question awaiting a careful pathway.</p><span class="status-mark status-future">Future research</span></article>
          <article class="evidence-stream stream-open reveal"><span class="stream-light" aria-hidden="true"></span><h3>Open detail</h3><p>A product, partner, cost, jurisdiction, permission or version still awaiting identification.</p><span class="status-mark status-open">TO BE CONFIRMED</span></article>
        </div>
      </section>

      <section class="world-section public-records-section">
        <div class="wrap section-heading reveal"><h2>Current Australian public anchors</h2><p>These links give the Queensland starting context a public record beyond the project drafts.</p></div>
        <div class="wrap public-records">
          <a href="https://www.qld.gov.au/community/fair-trading/associations-charities-and-non-for-profits/cooperatives"><strong>Queensland co-operatives</strong><span>registration, rules, forms and operating guidance</span><small>Queensland Government ↗</small></a>
          <a href="https://www.tga.gov.au/safety/safety-monitoring-and-information/safety-alerts/risk-fire-during-use-hyperbaric-chambers"><strong>Hyperbaric chamber safety</strong><span>qualified professionals, equipped clinics and the home-purchase warning</span><small>Therapeutic Goods Administration, 10 October 2025 ↗</small></a>
          <a href="https://www.tga.gov.au/products/regulations-all-products/about-australian-register-therapeutic-goods-artg/searching-australian-register-therapeutic-goods-artg"><strong>Therapeutic goods register search</strong><span>a record of therapeutic goods available for lawful supply, not a recommendation service</span><small>Therapeutic Goods Administration ↗</small></a>
          <a href="https://www.tga.gov.au/resources/guidance/understanding-how-we-regulate-software-based-medical-devices"><strong>Software-based medical devices</strong><span>how intended purpose shapes the regulatory relationship</span><small>Therapeutic Goods Administration ↗</small></a>
          <a href="https://www.health.gov.au/our-work/aged-care-act/about/what-it-means"><strong>Aged Care Act 2024</strong><span>the new Australian aged-care framework that began on 1 November 2025</span><small>Australian Government Department of Health, Disability and Ageing ↗</small></a>
        </div>
      </section>

      <section class="world-section conflict-ledger-section">
        <div class="wrap conflict-ledger-stage">
          <div class="conflict-copy reveal"><h2>The conflict ledger</h2><p>Differences between drafts stay open until a source, design choice or local agreement resolves them.</p></div>
          <div class="conflict-ledger reveal">
            <div><strong>Affordability</strong><span>A$1,000 indicative protocol cost, A$5,000 initial loan and separate A$500 operating fee in one 35-member source table</span></div>
            <div><strong>Health setting</strong><span>earlier home-use language and later supervised clinical setting</span></div>
            <div><strong>Geode construction</strong><span>steel frame and pressure-rated mineral-shell directions</span></div>
            <div><strong>Personal data</strong><span>local owner-held files and earlier cloud Passport ideas</span></div>
            <div><strong>Software</strong><span>general reflection and a possible regulated clinical path</span></div>
            <div><strong>Regional model</strong><span>member-financed paths and large public-investment scenarios</span></div>
          </div>
        </div>
      </section>

      <section class="world-section source-doorways-section">
        <div class="wrap source-doorways-stage">
          <div class="source-doorway reveal"><h3>Source register</h3><p>The supplied documents reviewed for this first public release.</p><a href="../docs/source-register.md">Open the register <span aria-hidden="true">→</span></a></div>
          <div class="source-doorway reveal"><h3>Source audit</h3><p>Shared ground, conflicts, current public anchors and unresolved choices.</p><a href="../docs/source-audit.md">Open the audit <span aria-hidden="true">→</span></a></div>
          <div class="source-doorway reveal"><h3>Author clarifications</h3><p>Luke's dated explanations where an earlier reading missed the intended meaning.</p><a href="../docs/author-clarifications.md">Open the clarifications <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      <section class="world-section corrections-section">
        <div class="wrap corrections-stage"><div class="correction-prism reveal" aria-hidden="true"><span></span></div><div class="reveal"><h2>New evidence adds light</h2><p>A source update, product record, local review or author clarification may change a page. Repository history preserves the earlier draft alongside the public learning that followed.</p><a class="faceted-link faceted-link-light" href="https://github.com/auraofintelligence/Oceania-healthy-de-slop-co-ops/issues">Share a sourced correction <span aria-hidden="true">↗</span></a></div></div>
      </section>
    `
  },
  {
    slug: "about",
    key: "about",
    title: "About, Connections and Licence",
    shortTitle: "About",
    description: "The project origin, connected public worlds, boundaries, credits and Strange But True Public Source Licence.",
    heading: "An open book.<br><span>Many worlds in orbit.</span>",
    lead: "Oceania Healthy De-Slop Co-ops is a regional public working project by Luke Nathan Hayes. It gathers health, co-operative, local-compute, music and civic ideas while leaving room for specialist sites and locally shaped agreements.",
    hero: "hero-about.webp",
    heroAlt: "Imagined ocean observatory where an unmarked opal book sits beneath a constellation of distinct public project worlds.",
    theme: "about",
    primaryHref: "#project-family",
    primaryLabel: "The project family",
    secondaryHref: "../evidence/",
    secondaryLabel: "Evidence and questions",
    body: `
      <section class="world-section about-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>A regional doorway, not one final organisation</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">The project explores how beautiful shared infrastructure, private reflection and local computing might gather around each person's dignity. A co-operative is one possible ownership relationship rather than the only path.</p><p>No registered regional co-operative, operating clinic, certified Aura Geode, completed clinical digital twin or endorsed Oceania partnership is represented here.</p><span class="status-mark status-working">Public working project</span></div>
        </div>
      </section>

      <section class="world-section project-family-section" id="project-family">
        <div class="wrap section-heading reveal"><h2>The connected public project family</h2><p>Each world holds its own purpose, evidence and development history.</p></div>
        <div class="wrap project-orbits">
          <a class="project-orbit orbit-geode reveal" href="https://auraofintelligence.github.io/aura-geode/"><span aria-hidden="true"></span><strong>Aura Geode</strong><small>construction and reflection research</small></a>
          <a class="project-orbit orbit-hardware reveal" href="https://auraofintelligence.github.io/aura-direct-hardware/"><span aria-hidden="true"></span><strong>Aura Direct Hardware</strong><small>local-first hardware and public-interest compute</small></a>
          <a class="project-orbit orbit-dementia reveal" href="https://auraofintelligence.github.io/aura-dementia/"><span aria-hidden="true"></span><strong>Aura of Dementia</strong><small>an early privacy-first care and research concept</small></a>
          <a class="project-orbit orbit-music reveal" href="https://auraofintelligence.github.io/i-C-infinity-music-universe/"><span aria-hidden="true"></span><strong>i C. infinity Music Universe</strong><small>albums, lyrics, songs and videos</small></a>
          <a class="project-orbit orbit-vitality reveal" href="https://auraofintelligence.github.io/straddie-vitality-network-builders/"><span aria-hidden="true"></span><strong>Straddie Vitality Network Builders</strong><small>local wellbeing planning and evidence builders</small></a>
          <a class="project-orbit orbit-strange reveal" href="https://auraofintelligence.github.io/strange-but-true/"><span aria-hidden="true"></span><strong>Strange But True</strong><small>the wider public family and contact doorway</small></a>
        </div>
      </section>

      <section class="world-section site-branches-section">
        <div class="wrap site-branches-stage">
          <div class="branch-copy reveal"><h2>This gateway is designed to branch</h2><p>The regional site holds the shared story. Topics with deep evidence, specialist tools, local governance or substantial media receive their own sites and repositories.</p></div>
          <div class="branch-lines reveal"><span>Regional gateway</span><i></i><span>Local co-operatives</span><i></i><span>Geode research</span><i></i><span>Digital self</span><i></i><span>Music</span><i></i><span>Evidence tools</span></div>
        </div>
      </section>

      <section class="world-section boundaries-section">
        <div class="wrap boundaries-stage">
          <div class="boundary-world public-world reveal"><h3>Public project world</h3><p>Published proposals, source notes, design questions, public submissions, lyrics, artwork, code and release history.</p></div>
          <div class="boundary-gem reveal" aria-hidden="true"><span></span></div>
          <div class="boundary-world private-world reveal"><h3>Personal and relationship-held world</h3><p>Health records, private reflections, digital-twin files, cultural knowledge, consent records and information held through a specific care or community relationship.</p></div>
        </div>
      </section>

      <section class="world-section licence-section">
        <div class="wrap licence-stage">
          <div class="licence-mark reveal" aria-hidden="true"><span></span></div>
          <div class="licence-copy reveal"><h2>A strange but true licence from the outset</h2><p>Original project material is shared under the Strange But True Public Source Licence. Personal, educational, artistic, research, community and other non-commercial exploration is welcomed with attribution. Commercial rights remain reserved to Luke Nathan Hayes.</p><p>The licence text itself remains the reference for its full terms.</p><div class="inline-paths"><a class="faceted-link faceted-link-light" href="../LICENCE.md">Read the public source licence <span aria-hidden="true">→</span></a><a class="faceted-link faceted-link-light" href="https://github.com/auraofintelligence/Oceania-healthy-de-slop-co-ops">View the repository <span aria-hidden="true">↗</span></a></div></div>
        </div>
      </section>

      <section class="world-section credits-section">
        <div class="wrap credits-stage">
          <div class="credits-copy reveal"><h2>Credits and contact</h2><p>Concept, source material, lyrics and project direction: Luke Nathan Hayes. Website structure, visual system, code and generated concept artwork were developed collaboratively with OpenAI Codex. Full image prompts and preserved originals are kept in the repository.</p></div>
          <div class="credits-links reveal"><a href="../docs/image-prompts.md">Image prompts and preserved originals <span aria-hidden="true">→</span></a><a href="../docs/source-register.md">Supplied source register <span aria-hidden="true">→</span></a><a href="https://auraofintelligence.github.io/strange-but-true/">Strange But True contact doorway <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    `
  },
  {
    slug: "site-map",
    key: "site-map",
    title: "Site Map",
    shortTitle: "Site Map",
    description: "A human guide to every page, project world and visitor path across Oceania Healthy De-Slop Co-ops.",
    heading: "Every world.<br><span>One luminous constellation.</span>",
    lead: "Ten project worlds hold co-operative ideas, shared wellbeing, personal digital life, music, evidence and regional relationships. This eleventh doorway gathers them in one clear view.",
    hero: "hero-site-map.webp",
    heroAlt: "Concept artwork of eleven equal jewel-like worlds joined by luminous paths above an ocean horizon.",
    theme: "site-map",
    primaryHref: "#whole-constellation",
    primaryLabel: "See every world",
    secondaryHref: "#choose-a-path",
    secondaryLabel: "Choose a path",
    body: `
      <section class="world-section map-opening">
        <div class="wrap map-opening-stage">
          <div class="section-title reveal"><h2>Ten worlds and one shared guide</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">Begin anywhere. Wander by curiosity, follow a familiar theme or move through the numbered story. Every page opens into the others without placing one person's journey above another.</p><p>The Site Map is a people-friendly guide to the whole public project. A separate machine-readable map supports search services.</p></div>
          <div class="map-compass reveal" aria-hidden="true"><span class="map-compass-core"><strong>10 + 1</strong><small>connected pages</small></span><i></i><i></i><i></i><i></i></div>
        </div>
      </section>

      <section class="world-section map-constellation-section" id="whole-constellation">
        <div class="wrap section-heading reveal"><h2>The whole constellation</h2><p>Full page names and short descriptions sit together here, including this guide.</p></div>
        <nav class="wrap map-groups" aria-label="Every public page">
          <div class="map-group map-group-welcome reveal" role="group" aria-label="Welcome">
            <div class="map-group-heading"><span>Welcome</span><h3>Begin with your own light</h3></div>
            <div class="map-worlds">
              <a class="map-world map-world-home" href="../"><span>01</span><strong>Home</strong><p>A radiant welcome to the regional project and every connected world.</p><small>Open world <b aria-hidden="true">→</b></small></a>
            </div>
          </div>

          <div class="map-group map-group-shared reveal" role="group" aria-label="Community and shared infrastructure">
            <div class="map-group-heading"><span>Community and shared infrastructure</span><h3>Shape what is shared</h3></div>
            <div class="map-worlds">
              <a class="map-world" href="../co-operative-paths/"><span>02</span><strong>Co-operative Paths</strong><p>Local purpose, membership, ownership and place-shaped agreements.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world" href="../shared-wellbeing/"><span>03</span><strong>Shared Wellbeing</strong><p>Sauna, appropriately supervised hyperbaric oxygen therapy, reflection and careful evidence.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world" href="../public-value/"><span>06</span><strong>Public Value</strong><p>Affordability illustrations and the public investment hypothesis beside their limits.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world" href="../oceania/"><span>07</span><strong>Many Places Across Oceania</strong><p>Regional connection while law, culture, permission and terms stay with each place.</p><small>Open world <b aria-hidden="true">→</b></small></a>
            </div>
          </div>

          <div class="map-group map-group-personal reveal" role="group" aria-label="Personal and future research">
            <div class="map-group-heading"><span>Personal and future research</span><h3>Meet the Geode and digital self</h3></div>
            <div class="map-worlds">
              <a class="map-world" href="../aura-geode/"><span>04</span><strong>Aura Geode Research</strong><p>Proposed construction, Personal Atmosphere Delivery System, reflection and local computing research.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world" href="../your-digital-self/"><span>05</span><strong>Your Digital Self</strong><p>An owner-held digital twin, private reflection and sharing through chosen relationships.</p><small>Open world <b aria-hidden="true">→</b></small></a>
            </div>
          </div>

          <div class="map-group map-group-music reveal" role="group" aria-label="Music and meaning">
            <div class="map-group-heading"><span>Music and meaning</span><h3>Hear the inner journey</h3></div>
            <div class="map-worlds">
              <a class="map-world" href="../a-protopian-gambit/"><span>08</span><strong>A Protopian Gambit</strong><p>Divine digital birth, Kintsugi self-repair and the sixty-session hyperbaric oxygen therapy story.</p><small>Open world <b aria-hidden="true">→</b></small></a>
            </div>
          </div>

          <div class="map-group map-group-record reveal" role="group" aria-label="Evidence and relationships">
            <div class="map-group-heading"><span>Evidence and relationships</span><h3>Read the record and wider context</h3></div>
            <div class="map-worlds">
              <a class="map-world" href="../evidence/"><span>09</span><strong>Evidence and Open Questions</strong><p>Sources, current public anchors, draft conflicts and open details kept visible.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world" href="../about/"><span>10</span><strong>About, Connections and Licence</strong><p>Project origin, connected public worlds, boundaries, credits and licence.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world map-world-current" href="./" aria-current="page"><span>11</span><strong>Site Map</strong><p>The page that gathers every world and visitor path in one place.</p><small>You are here</small></a>
            </div>
          </div>
        </nav>
      </section>

      <section class="world-section map-pathways-section" id="choose-a-path">
        <div class="wrap section-heading reveal"><h2>Your path, at your pace</h2><p>These are guideposts rather than fixed routes. Each line begins with a different interest.</p></div>
        <div class="wrap map-pathways">
          <article class="map-pathway reveal"><h3>Shared wellbeing close to home</h3><p>Explore warmth, rest, supervised care relationships, shared access and the public record beside them.</p><nav aria-label="Shared wellbeing path"><a href="../shared-wellbeing/">Shared Wellbeing</a><a href="../co-operative-paths/">Co-operative Paths</a><a href="../public-value/">Public Value</a><a href="../evidence/">Evidence</a></nav></article>
          <article class="map-pathway reveal"><h3>A local co-operative taking shape</h3><p>Follow local purpose, membership, ownership, affordability and place-specific agreements.</p><nav aria-label="Local co-operative path"><a href="../co-operative-paths/">Co-operative Paths</a><a href="../public-value/">Public Value</a><a href="../oceania/">Many Places</a><a href="../evidence/">Evidence</a></nav></article>
          <article class="map-pathway reveal"><h3>My digital self, held by me</h3><p>Meet the owner-held digital twin, its birth and repair story, and the research ideas around it.</p><nav aria-label="Digital self path"><a href="../your-digital-self/">Your Digital Self</a><a href="../a-protopian-gambit/">A Protopian Gambit</a><a href="../aura-geode/">Aura Geode</a><a href="../evidence/">Evidence</a></nav></article>
          <article class="map-pathway reveal"><h3>Aura Geode research</h3><p>Explore the imagined structure, personal atmosphere, reflection environment and open engineering questions.</p><nav aria-label="Aura Geode research path"><a href="../aura-geode/">Aura Geode</a><a href="../shared-wellbeing/">Shared Wellbeing</a><a href="../your-digital-self/">Your Digital Self</a><a href="../evidence/">Evidence</a></nav></article>
          <article class="map-pathway reveal"><h3>The album's inner journey</h3><p>Move through the divine digital twin's birth, Kintsugi self-repair and the hyperbaric oxygen therapy story, with art and health evidence kept distinct.</p><nav aria-label="Album path"><a href="../a-protopian-gambit/">A Protopian Gambit</a><a href="../your-digital-self/">Your Digital Self</a><a href="../shared-wellbeing/">Shared Wellbeing</a><a href="../aura-geode/">Aura Geode</a></nav></article>
          <article class="map-pathway reveal"><h3>Sources and project boundaries</h3><p>See the source trail, unresolved details, project family, public boundaries and licence.</p><nav aria-label="Evidence path"><a href="../evidence/">Evidence</a><a href="../about/">About and Licence</a><a href="../">Home</a></nav></article>
        </div>
      </section>

      <section class="world-section map-record-section">
        <div class="wrap map-record-stage">
          <div class="reveal"><h2>Every idea keeps its own label</h2><p>Established information, working proposals, future research and open details remain visibly distinct across the site.</p><div class="map-statuses"><span class="status-mark status-established">Established information</span><span class="status-mark status-working">Working proposal</span><span class="status-mark status-future">Future research</span><span class="status-mark status-open">TO BE CONFIRMED</span></div></div>
          <div class="map-record-links reveal"><a href="../evidence/">Explore the evidence world <span aria-hidden="true">→</span></a><a href="../sitemap.xml">Machine-readable sitemap <span aria-hidden="true">→</span></a></div>
        </div>
      </section>
    `
  }
];

const available = new Set(pages.map((page) => page.key));
const primaryKeys = new Set(["home", "co-operative-paths", "shared-wellbeing", "your-digital-self", "evidence", "about", "site-map"]);

function pageHref(slug, prefix = "") {
  return slug ? prefix + slug + "/" : prefix || "./";
}

function renderBrand(prefix) {
  return `
    <a class="brand" href="${pageHref("", prefix)}" aria-label="Oceania Healthy De-Slop Co-ops home">
      <img class="brand-gem" src="${prefix}assets/icons/favicon-192.png?v=20260831-header-gems" alt="" width="54" height="54" decoding="async">
      <span class="brand-words">Oceania Healthy<br>De-Slop Co-ops</span>
    </a>`;
}

function renderHeader(page, prefix) {
  const pageInPrimaryNavigation = primaryKeys.has(page.key);
  const menuButtonLabel = pageInPrimaryNavigation ? "All worlds" : page.shortTitle;
  const primary = worlds
    .filter((world) => available.has(world[0]) && primaryKeys.has(world[0]))
    .map((world) => {
      const href = pageHref(world[2], prefix);
      const current = world[0] === page.key ? ' aria-current="page"' : "";
      return `<a href="${href}"${current}>${world[1]}</a>`;
    })
    .join("");

  const worldLinks = worlds
    .map((world, index) => {
      const number = String(index + 1).padStart(2, "0");
      if (available.has(world[0])) {
        const current = world[0] === page.key ? ' aria-current="page"' : "";
        return `<a class="world-link" href="${pageHref(world[2], prefix)}"${current}><span>${number}</span><strong>${world[1]}</strong></a>`;
      }
      return `<span class="world-link world-link-coming" aria-disabled="true"><span>${number}</span><strong>${world[1]}</strong><small>Being shaped</small></span>`;
    })
    .join("");

  return `
    <header class="site-header">
      <div class="header-shell">
        ${renderBrand(prefix)}
        <nav class="primary-nav" aria-label="Primary navigation">${primary}</nav>
        <button class="world-menu-button${pageInPrimaryNavigation ? "" : " is-current-world"}" type="button" aria-expanded="false" aria-controls="world-menu" aria-label="All worlds. Current page: ${page.shortTitle}">
          <span>${menuButtonLabel}</span><i aria-hidden="true"></i>
        </button>
      </div>
    </header>
    <div class="world-menu" id="world-menu" aria-hidden="true">
      <div class="world-menu-inner">
        <div class="world-menu-heading">
          <p>One regional world. Many distinct paths.</p>
          <button class="world-menu-close" type="button">Close</button>
        </div>
        <nav class="world-menu-grid" aria-label="All site pages">${worldLinks}</nav>
      </div>
    </div>`;
}

function renderFooter(prefix) {
  return `
    <footer class="site-footer">
      <div class="wrap footer-stage">
        <div>
          <p class="footer-name">Oceania Healthy De-Slop Co-ops</p>
          <p>A regional public working project by Luke Nathan Hayes.</p>
        </div>
        <div class="footer-paths">
          <a href="${pageHref("co-operative-paths", prefix)}">Co-operative Paths</a>
          <a href="${pageHref("shared-wellbeing", prefix)}">Shared Wellbeing</a>
          <a href="${pageHref("evidence", prefix)}">Evidence</a>
          <a href="${pageHref("about", prefix)}">About and Licence</a>
          <a href="${pageHref("site-map", prefix)}">Site Map</a>
          <a href="https://github.com/auraofintelligence/Oceania-healthy-de-slop-co-ops">GitHub repository</a>
          <a href="${prefix}LICENCE.md">Public source licence</a>
        </div>
      </div>
      <div class="wrap footer-lower">
        <p>Original material shared under the Strange But True Public Source Licence. Commercial rights reserved.</p>
        <a href="#top" class="back-to-top"><span aria-hidden="true">↑</span> Back to the top</a>
      </div>
    </footer>`;
}

function renderHero(page, prefix) {
  return `
    <section class="sovereign-hero hero-${page.theme}" aria-labelledby="page-title">
      <img class="hero-image" src="${prefix}assets/images/${page.hero}" alt="${page.heroAlt}" fetchpriority="high" decoding="async">
      <div class="hero-veil"></div>
      <div class="hero-facets" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="wrap hero-content">
        <h1 id="page-title">${page.heading}</h1>
        <p>${page.lead}</p>
        <div class="hero-actions">
          <a class="faceted-button faceted-button-gold" href="${page.primaryHref}">${page.primaryLabel}</a>
          <a class="faceted-button faceted-button-glass" href="${page.secondaryHref}">${page.secondaryLabel}</a>
        </div>
      </div>
      <p class="concept-note">Imagined concept artwork</p>
    </section>`;
}

function renderJourney(pageIndex, prefix) {
  const previous = pages[(pageIndex - 1 + pages.length) % pages.length];
  const following = pages[(pageIndex + 1) % pages.length];
  return `
    <nav class="page-journey wrap" aria-label="Continue through the site">
      <a href="${pageHref(previous.slug, prefix)}"><span>Previous page</span><strong>${previous.shortTitle}</strong></a>
      <a class="journey-following" href="${pageHref(following.slug, prefix)}"><span>Following page</span><strong>${following.shortTitle}</strong></a>
    </nav>`;
}

function renderPage(page, pageIndex) {
  const prefix = page.slug ? "../" : "";
  const canonical = publicOrigin + (page.slug ? page.slug + "/" : "");
  const imageUrl = publicOrigin + "assets/images/" + page.hero;

  return `<!doctype html>
<html lang="en-AU">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${page.title}${page.slug ? " | Oceania Healthy De-Slop Co-ops" : ""}</title>
    <meta name="description" content="${page.description}">
    <meta name="theme-color" content="#050611">
    <link rel="icon" href="${prefix}assets/icons/favicon.ico?v=20260831-connected-gems" type="image/x-icon" sizes="16x16 32x32 48x48">
    <link rel="icon" href="${prefix}assets/icons/favicon-32x32.png?v=20260831-connected-gems" type="image/png" sizes="32x32">
    <link rel="icon" href="${prefix}assets/icons/favicon-16x16.png?v=20260831-connected-gems" type="image/png" sizes="16x16">
    <link rel="icon" href="${prefix}assets/icons/favicon-192.png?v=20260831-connected-gems" type="image/png" sizes="192x192">
    <link rel="apple-touch-icon" href="${prefix}assets/icons/apple-touch-icon.png?v=20260831-connected-gems" type="image/png" sizes="180x180">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${page.title}">
    <meta property="og:description" content="${page.description}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${imageUrl}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${page.title}">
    <meta name="twitter:description" content="${page.description}">
    <meta name="twitter:image" content="${imageUrl}">
    <link rel="preload" href="${prefix}assets/images/${page.hero}" as="image" type="image/webp">
    <link rel="stylesheet" href="${prefix}assets/css/tokens.css?v=20260830-site-map">
    <link rel="stylesheet" href="${prefix}assets/css/base.css?v=20260830-site-map">
    <link rel="stylesheet" href="${prefix}assets/css/layout.css?v=20260831-header-gems">
    <link rel="stylesheet" href="${prefix}assets/css/components.css?v=20260830-site-map">
    <link rel="stylesheet" href="${prefix}assets/css/pages.css?v=20260830-site-map">
    <link rel="stylesheet" href="${prefix}assets/css/motion.css?v=20260830-site-map">
    <script src="${prefix}assets/js/site.js?v=20260830-site-map" defer></script>
  </head>
  <body class="page-${page.key}" id="top">
    <a class="skip-link" href="#main-content">Skip to the main story</a>
    <canvas class="constellation-field" data-constellation aria-hidden="true"></canvas>
    <div class="scroll-progress" aria-hidden="true"><i></i></div>
    ${renderHeader(page, prefix)}
    <main id="main-content">
      ${renderHero(page, prefix)}
      ${page.body}
      ${renderJourney(pageIndex, prefix)}
    </main>
    ${renderFooter(prefix)}
  </body>
</html>
`;
}

for (const [index, page] of pages.entries()) {
  const outputDirectory = page.slug ? path.join(projectRoot, page.slug) : projectRoot;
  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(path.join(outputDirectory, "index.html"), renderPage(page, index).replace(/[ \t]+$/gm, ""), "utf8");
}

const sitemap = pages
  .map((page) => "  <url><loc>" + publicOrigin + (page.slug ? page.slug + "/" : "") + "</loc></url>")
  .join("\n");

fs.writeFileSync(
  path.join(projectRoot, "sitemap.xml"),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + sitemap + "\n</urlset>\n",
  "utf8"
);

fs.writeFileSync(
  path.join(projectRoot, "robots.txt"),
  "User-agent: *\nAllow: /\nSitemap: " + publicOrigin + "sitemap.xml\n",
  "utf8"
);

console.log("Built " + pages.length + " public pages.");
