(function () {
  const projects = [
    {
      title: "Grain by Grain",
      repo: "grain-by-grain",
      ring: "core",
      act: "Acts 1-7",
      posture: "Physical and narrative spine",
      role: "The sequence from Gumpi corridor and tunnel spoil through materials, threats and the civilisation horizon.",
      use: "Use its threats, corridor, tunnels, alchemy, capital and screen lanes to connect the whole film rather than treating them as separate ideas.",
      publicUrl: "https://auraofintelligence.github.io/grain-by-grain/",
      repoUrl: "https://github.com/auraofintelligence/grain-by-grain"
    },
    {
      title: "Micronova and Geomagnetic Excursions",
      repo: "micronova-and-excursions",
      ring: "core",
      act: "Acts 1, 2, 6, 7",
      posture: "Frontier case and test programme",
      role: "The long-form case that catastrophe is a serious design condition and micronova remains a testable frontier hypothesis.",
      use: "Use its calm, evidence, build, test and earthquake-prediction pages to present the strongest case, the open disputes and a fundable shared-data test.",
      publicUrl: "https://auraofintelligence.github.io/micronova-and-excursions/",
      repoUrl: "https://github.com/auraofintelligence/micronova-and-excursions"
    },
    {
      title: "Sandworm Subterranean Systems",
      repo: "Sandworm-subterranean-systems",
      ring: "core",
      act: "Acts 3-6",
      posture: "Question-led systems proposition",
      role: "The Gumpi park-and-ride loop, town connections, service corridors, shelter, material flows and surface-care questions.",
      use: "Use Gumpi as the first practical move, then show how transport and services can grow towards subterranean industry without pretending a route is approved.",
      publicUrl: "",
      repoUrl: "https://github.com/auraofintelligence/Sandworm-subterranean-systems"
    },
    {
      title: "Civilisation of Sand",
      repo: "civilisation-of-sand",
      ring: "core",
      act: "Acts 5, 6",
      posture: "Simulation-first city laboratory",
      role: "The serious systems model and story world for a vast subterranean civilisation able to thrive through extreme threats.",
      use: "Use its systems, simulations, concept images and story missions to make the generation city understandable while keeping proposals, models and fiction labelled.",
      publicUrl: "https://auraofintelligence.github.io/civilisation-of-sand/",
      repoUrl: "https://github.com/auraofintelligence/civilisation-of-sand"
    },
    {
      title: "GAJRA Earth",
      repo: "GAJRA-earth-infinity",
      ring: "core",
      act: "Acts 1, 6, 7",
      posture: "Civilisation purpose and values",
      role: "The joyful, responsible and abundant reason for building beyond short-term survival.",
      use: "Use as the cultural win condition: longer, healthier life with more time, beauty, play, care, learning and choice while leaving abundance behind.",
      publicUrl: "https://auraofintelligence.github.io/GAJRA-earth-infinity/",
      repoUrl: "https://github.com/auraofintelligence/GAJRA-earth-infinity"
    },
    {
      title: "Community Ledger",
      repo: "strange-but-true/community-ledger.html",
      ring: "core",
      act: "Acts 2, 5, 7",
      posture: "Public project doorway",
      role: "The bridge between the large ideas and local project pages people can inspect.",
      use: "Use the card wall as the visual reveal that a practical quest network already exists.",
      publicUrl: "https://auraofintelligence.github.io/strange-but-true/community-ledger.html",
      repoUrl: "https://github.com/auraofintelligence/strange-but-true"
    },
    {
      title: "Minjerribah Resilience",
      repo: "Minjerribah-Resilience",
      ring: "core",
      act: "Acts 1, 3, 5",
      posture: "Concept lineage",
      role: "An early source for the gamification-of-life and all-hazards resilience framing.",
      use: "Use as history of the idea. Restate its claims through newer source work before narration.",
      publicUrl: "https://auraofintelligence.github.io/Minjerribah-Resilience/",
      repoUrl: "https://github.com/auraofintelligence/Minjerribah-Resilience"
    },
    {
      title: "Gumpi Ferry Open Data Lab",
      repo: "dunwich-gumpi-ferry-terminal-open-data-lab",
      ring: "core",
      act: "Acts 3, 7",
      posture: "Evidence and simulation lab",
      role: "The grounded evidence layer for movement, parking, dependence and the island gateway.",
      use: "Use ferry arrivals and local movement to test the need and shape of the first Dunwich loop, with receipts kept beside the concept.",
      publicUrl: "https://auraofintelligence.github.io/dunwich-gumpi-ferry-terminal-open-data-lab/",
      repoUrl: "https://github.com/auraofintelligence/dunwich-gumpi-ferry-terminal-open-data-lab"
    },
    {
      title: "Disaster Kiosks",
      repo: "straddie-disaster-kiosks",
      ring: "core",
      act: "Acts 3, 5",
      posture: "Public concept",
      role: "Everyday community screens that could remain useful when normal communications are strained.",
      use: "Film the ordinary uses first, then reveal the resilience layer during the weather act.",
      publicUrl: "https://auraofintelligence.github.io/straddie-disaster-kiosks/",
      repoUrl: "https://github.com/auraofintelligence/straddie-disaster-kiosks"
    },
    {
      title: "Shared Table Initiative",
      repo: "shared-table-initiative",
      ring: "core",
      act: "Acts 3, 5",
      posture: "Public community concept",
      role: "A humane food-resilience story about growing, rescue, sharing, safety and trust.",
      use: "Use a meal and a pantry audit to turn supply-chain risk into a warm, filmable practice.",
      publicUrl: "https://auraofintelligence.github.io/shared-table-initiative/",
      repoUrl: "https://github.com/auraofintelligence/shared-table-initiative"
    },
    {
      title: "Clean Energy Superpower",
      repo: "straddie-clean-energy-superpower",
      ring: "core",
      act: "Acts 3, 5",
      posture: "Question-led energy atlas",
      role: "A broad shelf of rooftop, storage, water, marine, reef and community-wealth questions.",
      use: "Choose one near-term energy scene and one future-facing question; leave the larger atlas in the background.",
      publicUrl: "https://auraofintelligence.github.io/straddie-clean-energy-superpower/",
      repoUrl: "https://github.com/auraofintelligence/straddie-clean-energy-superpower"
    },
    {
      title: "Film Club Documentary Builders",
      repo: "film-club-documentary-builders",
      ring: "core",
      act: "Production",
      posture: "Public builder toolkit",
      role: "The practical workbench for research angles, source trails, interviews, scene analysis and run sheets.",
      use: "Use it throughout development; export one note per scene or research question instead of making one giant document.",
      publicUrl: "https://auraofintelligence.github.io/film-club-documentary-builders/",
      repoUrl: "https://github.com/auraofintelligence/film-club-documentary-builders"
    },
    {
      title: "Maker-Space Lab",
      repo: "straddie-makerspace-lab",
      ring: "action",
      act: "Acts 4, 5",
      posture: "Public proposal",
      role: "Repair, reuse, tools, materials and practical skill-building.",
      use: "Use hands-on repair as the antidote to abstract supply-chain anxiety.",
      publicUrl: "https://auraofintelligence.github.io/straddie-makerspace-lab/",
      repoUrl: "https://github.com/auraofintelligence/straddie-makerspace-lab"
    },
    {
      title: "Tip Loop Lab",
      repo: "straddie-tip-loop-lab",
      ring: "action",
      act: "Acts 4, 5",
      posture: "Question-led pilot concept",
      role: "Material streams, lawful recovery, microfactory tools and repair stock.",
      use: "Use one object travelling from waste toward repair to show local material sovereignty without grand claims.",
      publicUrl: "https://auraofintelligence.github.io/straddie-tip-loop-lab/",
      repoUrl: "https://github.com/auraofintelligence/straddie-tip-loop-lab"
    },
    {
      title: "Noticeboard Network",
      repo: "straddie-noticeboard-network",
      ring: "action",
      act: "Acts 3, 5",
      posture: "Public prototype",
      role: "A local publishing pattern where groups keep their own voice while useful notices can travel.",
      use: "Use as the calm-times information layer beside the disaster-kiosk scene.",
      publicUrl: "https://auraofintelligence.github.io/straddie-noticeboard-network/",
      repoUrl: "https://github.com/auraofintelligence/straddie-noticeboard-network"
    },
    {
      title: "Ready S.E.T. Co-op Trust Hub",
      repo: "ready-set-co-op-trust-hub",
      ring: "action",
      act: "Acts 5, 7",
      posture: "Proposed pathway",
      role: "Trust-building, shared assets, local work and voluntary entry points.",
      use: "Use the idea that people can enter through the door matching their trust and appetite.",
      publicUrl: "https://auraofintelligence.github.io/ready-set-co-op-trust-hub/",
      repoUrl: "https://github.com/auraofintelligence/ready-set-co-op-trust-hub"
    },
    {
      title: "Wildlife Rescue Minjerribah",
      repo: "wildlife-rescue-minjerribah",
      ring: "action",
      act: "Acts 2, 5",
      posture: "Safety-led prototype",
      role: "A reminder that resilience includes other living beings and protected location data.",
      use: "Use as an ecological counterpoint to human infrastructure and as a lesson in privacy by design.",
      publicUrl: "",
      repoUrl: "https://github.com/auraofintelligence/wildlife-rescue-minjerribah"
    },
    {
      title: "Community Wealth and Mutuals",
      repo: "moreton-bay-community-wealth-and-mutuals",
      ring: "action",
      act: "Acts 4, 5",
      posture: "Public civic concept",
      role: "A bridge from self and household to street, island and region.",
      use: "Use its shared-water-tank metaphor to discuss risk and wealth without turning the film into finance instruction.",
      publicUrl: "https://auraofintelligence.github.io/moreton-bay-community-wealth-and-mutuals/",
      repoUrl: "https://github.com/auraofintelligence/moreton-bay-community-wealth-and-mutuals"
    },
    {
      title: "AI Trust Index",
      repo: "strange-but-true-ai-trust-index",
      ring: "action",
      act: "Act 4",
      posture: "Public comparison guide",
      role: "A grounded AI lens covering privacy, cost, lock-in, laws, power and public record.",
      use: "Use the checklist to anchor the AI act in choices people face now before discussing long-term risk.",
      publicUrl: "https://auraofintelligence.github.io/strange-but-true-ai-trust-index/",
      repoUrl: "https://github.com/auraofintelligence/strange-but-true-ai-trust-index"
    },
    {
      title: "P4A Civic Lab",
      repo: "p4a_xyz",
      ring: "action",
      act: "Act 4",
      posture: "Open civic prototype",
      role: "A local-to-national architecture for democratic experiments, records and human review.",
      use: "Use as a visual bridge to Australian scale, not as an endorsement or a claim of public authority.",
      publicUrl: "https://auraofintelligence.github.io/p4a_xyz/",
      repoUrl: "https://github.com/auraofintelligence/p4a_xyz"
    },
    {
      title: "Cosmic Nexus",
      repo: "strange-but-true-cosmic-nexus",
      ring: "imagination",
      act: "Act 6",
      posture: "Mystery and source-trail atlas",
      role: "A bridge between mystery, mythology, films, governance habits and source trails.",
      use: "Use its field-trip tone to explore the unknown without making foggy claims sound settled.",
      publicUrl: "https://auraofintelligence.github.io/strange-but-true-cosmic-nexus/",
      repoUrl: "https://github.com/auraofintelligence/strange-but-true-cosmic-nexus"
    },
    {
      title: "Strange Intelligence Index",
      repo: "strange-intelligence-index",
      ring: "imagination",
      act: "Act 6",
      posture: "Hypothesis shelf",
      role: "A visible collection of contact, intelligence and consciousness possibilities.",
      use: "Use a small selection as story questions, with disputed and speculative status kept on screen.",
      publicUrl: "",
      repoUrl: "https://github.com/auraofintelligence/strange-intelligence-index"
    },
    {
      title: "Mineral Moonshots",
      repo: "mineral-moonshots",
      ring: "imagination",
      act: "Acts 1, 6",
      posture: "Future-facing concept atlas",
      role: "Mineral sands, geological time and far-horizon civic imagination.",
      use: "Use mineral close-ups and an honest scale jump from local material literacy to speculative worlds.",
      publicUrl: "https://auraofintelligence.github.io/mineral-moonshots/",
      repoUrl: "https://github.com/auraofintelligence/mineral-moonshots"
    },
    {
      title: "Space Weather and Earth Resilience",
      repo: "space-weather-news",
      ring: "imagination",
      act: "Act 6",
      posture: "Early concept source",
      role: "A starting trail for space-weather storytelling.",
      use: "Use only as a lead; source film claims through current BOM, NOAA, NASA and peer-reviewed work.",
      publicUrl: "https://auraofintelligence.github.io/space-weather-news/",
      repoUrl: "https://github.com/auraofintelligence/space-weather-news"
    },
    {
      title: "Straddie Space Station Simulator",
      repo: "straddie-space-station-simulator",
      ring: "imagination",
      act: "Acts 5, 6",
      posture: "Browser simulation",
      role: "A small-lot habitat treated like a terrestrial spacecraft with visible constraints.",
      use: "Use as a playful screen sequence showing how big resilience questions can shrink into testable layouts.",
      publicUrl: "https://auraofintelligence.github.io/straddie-space-station-simulator/",
      repoUrl: "https://github.com/auraofintelligence/straddie-space-station-simulator"
    },
    {
      title: "Straddie Digital Twin Builders",
      repo: "straddie-digital-twin-builders",
      ring: "production",
      act: "Production",
      posture: "Public prompt builders",
      role: "Plain-English scene and simulation prompts for places and future worlds.",
      use: "Use for labelled previsualisation where real footage is unavailable or the film is rehearsing a scenario.",
      publicUrl: "https://auraofintelligence.github.io/straddie-digital-twin-builders/",
      repoUrl: "https://github.com/auraofintelligence/straddie-digital-twin-builders"
    },
    {
      title: "Straddie Content Assets Kit",
      repo: "straddie-content-assets-kit",
      ring: "production",
      act: "Production",
      posture: "Public asset-planning toolkit",
      role: "Portable records for cameras, sound, lighting, shared assets and upgrade gaps.",
      use: "Use before field production to discover what can be borrowed, shared or added later.",
      publicUrl: "https://auraofintelligence.github.io/straddie-content-assets-kit/",
      repoUrl: "https://github.com/auraofintelligence/straddie-content-assets-kit"
    },
    {
      title: "Quandamooka Film Festival",
      repo: "quandamooka-film-festival",
      ring: "production",
      act: "Act 7 and release",
      posture: "Draft public doorway",
      role: "A practical route for first-time makers, story care and a possible future screening context.",
      use: "Use as an audience and participation pathway; do not imply festival acceptance or cultural authority.",
      publicUrl: "https://auraofintelligence.github.io/quandamooka-film-festival/",
      repoUrl: "https://github.com/auraofintelligence/quandamooka-film-festival"
    },
    {
      title: "Minjerribah Screen and Media Network",
      repo: "minjerribah-screen-media-network",
      ring: "production",
      act: "Production and release",
      posture: "Public network invitation",
      role: "A bridge between local stories, training, media places and possible work.",
      use: "Use to map crew development and distribution context after people opt in.",
      publicUrl: "https://auraofintelligence.github.io/minjerribah-screen-media-network/",
      repoUrl: "https://github.com/auraofintelligence/minjerribah-screen-media-network"
    },
    {
      title: "Ready S.E.T. Hyperlocal Media",
      repo: "ready-set-co-op-hyperlocal-media",
      ring: "production",
      act: "Production and release",
      posture: "Public proposal",
      role: "Short video, audio, pages, live events, screens and learning inside real work.",
      use: "Use for field reports and small story fragments that can support the feature without replacing it.",
      publicUrl: "https://auraofintelligence.github.io/ready-set-co-op-hyperlocal-media/",
      repoUrl: "https://github.com/auraofintelligence/ready-set-co-op-hyperlocal-media"
    },
    {
      title: "Infinity Content Engine",
      repo: "infinity-content-engine",
      ring: "production",
      act: "Later derivatives",
      posture: "Content-pipeline concept",
      role: "A possible later pathway from the feature into short episodes or vertical story fragments.",
      use: "Leave outside first-pass production; revisit after the feature has a stable voice and approved source trail.",
      publicUrl: "https://auraofintelligence.github.io/infinity-content-engine/",
      repoUrl: "https://github.com/auraofintelligence/infinity-content-engine"
    }
  ];

  const grid = document.querySelector("[data-field-grid]");
  const count = document.querySelector("[data-field-count]");
  const buttons = Array.from(document.querySelectorAll("[data-field-filter]"));

  if (!grid || !count || !buttons.length) return;

  const ringLabels = {
    core: "Build spine",
    action: "Local action",
    imagination: "Imagination",
    production: "Production"
  };

  function link(label, url) {
    if (!url) return "";
    return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
  }

  function render(filter) {
    const visible = filter === "all"
      ? projects
      : projects.filter(function (project) { return project.ring === filter; });

    count.textContent = visible.length + (visible.length === 1 ? " project shown" : " projects shown");

    if (!visible.length) {
      grid.innerHTML = '<p class="field-empty">No projects match this view yet.</p>';
      return;
    }

    grid.innerHTML = visible.map(function (project) {
      return [
        '<article class="field-card" data-ring="' + project.ring + '">',
        '<div class="field-meta"><span class="pill">' + ringLabels[project.ring] + '</span><span class="pill">' + project.act + '</span><span class="pill">' + project.posture + '</span></div>',
        '<h3>' + project.title + '</h3>',
        '<p class="field-role">' + project.role + '</p>',
        '<p class="field-use">Where to use it: ' + project.use + '</p>',
        '<div class="field-links">' + link("Open public page", project.publicUrl) + link("Open source repo", project.repoUrl) + '</div>',
        '</article>'
      ].join("");
    }).join("");
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (candidate) { candidate.setAttribute("aria-pressed", "false"); });
      button.setAttribute("aria-pressed", "true");
      render(button.dataset.fieldFilter);
    });
  });

  render("core");
})();
