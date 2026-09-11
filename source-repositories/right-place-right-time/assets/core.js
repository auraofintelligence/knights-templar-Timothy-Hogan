/*
 * THE CANONICAL LUKE CORE: defined once, inherited by every tier skin.
 * This file is the whole point of the architecture: bio, spine, ethos,
 * support shape and the project register live HERE, so the four tier
 * pages stay thin skins that cannot drift apart.
 *
 * Placements below are PROVISIONAL: shelved by Claude in one pass so the
 * shelves exist. Luke holds the pen. Re-shelving is expected, not failure.
 * The static mirror of this register lives at register.html (the no-JS
 * fallback). If the two disagree, the seam is showing: fix it here first.
 */
(() => {
  const CORE = {
    name: 'Luke Nathan Hayes',
    place: 'Quandamooka Country (Minjerribah)',
    fronts: ['Strange but True', 'Luke Catalyst', 'Aura of Intelligence', 'i C. infinity'],

    /* The spine is an OPEN SLOT: one sentence that makes the whole body of
       work legible as one life's work. Not chosen yet. These candidates are
       all Luke's own words, quarried from live repos. He chooses or replaces. */
    spineCandidates: [
      'Systems for Earth, Self and Future.',
      'Sovereignty of self and data (with consensual allowances for tribe and family) and protection from extraction, so that Joyful Responsible Abundance, self-evolution, the care economy and the environment can thrive.',
      'Joyful responsible abundance as a compass, not disorder as a destination.',
      'How would you manage your own time if money was irrelevant and joyful responsible abundance was the goal of civilisation?'
    ],

    ethos: [
      'Joyful Responsible Abundance is the compass.',
      'The braided economy and the mobilisation of care.',
      'FPIC is the floor, not the ceiling.',
      'Value for value: any support that returns something returns something real.',
      'Provisional by design; visible seams are a feature.'
    ]
  };

  /*
   * THE REGISTER. Each project placed on four axes:
   *   scale:     local | australia | oceania | world
   *   horizon:   proven (live and evidential) | active (live and growing)
   *              | horizon (described ahead of code, by design; unbuilt is
   *              not backlog, it is invitation)
   *   portable:  in-place (earns/functions only where it stands) | travels
   *   register:  record (gold, solid, established and citable)
   *              | proposal (purple, dashed, Luke's own provisional frame:
   *              react, revise, refuse)
   */
  const PROJECTS = [
    /* ---- Local: Minjerribah ---- */
    { name: 'Strange but True', scale: 'local', horizon: 'proven', portable: 'in-place', register: 'record',
      note: 'My market stall and mobile workshop on the island: tech, art and ideas that actually help. Real neighbours, real work, real payment rails. This is where everything else was proven first.',
      href: 'https://auraofintelligence.github.io/strange-but-true/' },
    { name: 'Community Ledger & Honour Board', scale: 'local', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'The island’s open thank-you book: who helped what move, out in the daylight. Small and voluntary today, growing into something a community can steer together.',
      href: 'https://auraofintelligence.github.io/strange-but-true/community-ledger.html' },
    { name: 'Cosmic Nexus', scale: 'local', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'An adventure atlas for careful wonder: trip planning, friendship systems and the strange-but-true corners of the map.',
      href: 'https://auraofintelligence.github.io/strange-but-true-cosmic-nexus/' },
    { name: 'Web3 Sensorium', scale: 'local', horizon: 'horizon', portable: 'travels', register: 'proposal',
      note: 'A living digital copy of a place that its own people can walk through and have a real say over, starting with my island. Any community could build their own version. A twin, never a master.',
      href: 'https://auraofintelligence.github.io/straddie-digital-twin-builders/' },
    { name: 'Country-first events & film culture', scale: 'local', horizon: 'horizon', portable: 'in-place', register: 'proposal',
      note: 'Festival and events planning for the island: moving only at the pace of the right yeses, because consent comes before the poster.',
      href: 'https://auraofintelligence.github.io/quandamooka-film-festival/' },

    /* ---- National: Australia ---- */
    { name: 'P4A: the civic workbench', scale: 'australia', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'My love letter to Australian democracy: civic tools, public records and referendum rehearsal, free for anyone to use. A drafting project and an invitation, not a party asking for your vote.',
      href: 'https://auraofintelligence.github.io/p4a-xyz-cinema/' },
    { name: 'Luke Catalyst: systems work', scale: 'australia', horizon: 'proven', portable: 'travels', register: 'record',
      note: 'The day job I’m proud of: calm software and AI automation with heart, for founders and communities who want less stress from their tools, not more.',
      href: 'https://auraofintelligence.github.io/meet-luke/' },
    { name: 'Grants & civic submissions practice', scale: 'australia', horizon: 'active', portable: 'travels', register: 'record',
      note: 'Paid civic craft: real grant submissions and council strategy responses that move real projects, written from wherever I’m standing.',
      href: 'https://auraofintelligence.github.io/stradbroke-grants-lab/' },
    { name: 'Community wealth & mutuals', scale: 'australia', horizon: 'horizon', portable: 'travels', register: 'proposal',
      note: 'Neighbours lawfully pooling risk and wealth so prevention beats premiums: worked out from Moreton Bay, meant for anywhere.',
      href: 'https://auraofintelligence.github.io/moreton-bay-community-wealth-and-mutuals/' },

    /* ---- Regional: Oceania ---- */
    { name: 'P4A Oceania', scale: 'oceania', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'The civic pattern offered across the Blue Pacific: a gift for any community to use under their own name and their own laws, never something sold to them.',
      href: 'https://auraofintelligence.github.io/p4a-oceania-cinema/' },
    /* ---- Global: the world ---- */
    { name: 'i C. infinity: the music universe', scale: 'world', horizon: 'proven', portable: 'travels', register: 'record',
      note: 'Four albums and counting: songs as emotional technology, island myth and world-building you can hum. The music travels everywhere I do, and plenty of places I don’t.',
      href: 'https://auraofintelligence.github.io/i-C-infinity-music-universe/' },
    { name: 'Project Odyssey', scale: 'world', horizon: 'horizon', portable: 'travels', register: 'proposal',
      note: 'The big dream: eleven years, roughly 256 countries and territories, one or two weeks at a time, arriving useful, leaving tools behind. Sponsors make it real one leg at a time.',
      href: 'https://auraofintelligence.github.io/Australian-world-travel/strategy.html' },
    { name: 'Travel Oracle', scale: 'world', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'My compass: it reads the live signals and points to the next right place.',
      href: 'https://auraofintelligence.github.io/strange-but-true-travel-oracle/' },
    { name: 'P4A Native Nations', scale: 'world', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'A world chapter where every nation holds its own pen: treaty maps and consent-first instruments, with refusal honoured as a full answer.',
      href: 'https://auraofintelligence.github.io/p4a-native-nations-cinema/' },
    { name: 'GAJRA Earth', scale: 'world', horizon: 'horizon', portable: 'travels', register: 'proposal',
      note: 'A global group for joyful responsible abundance: the values underneath everything I make, growing into a community of its own.',
      href: 'https://auraofintelligence.github.io/gajra-earth-public-hub/' },
    { name: 'AI-native indie distribution', scale: 'world', horizon: 'active', portable: 'travels', register: 'record',
      note: 'Tools that keep indie musicians in charge in the AI era: the technology hands you files, it never signs your name for you.',
      href: 'https://auraofintelligence.github.io/ai-native-indie-distribution/' }
  ];

  const HORIZON_ORDER = { proven: 0, active: 1, horizon: 2 };
  /* One chip per card, written for a visitor, not a taxonomist.
     Colour still carries the register: gold = real today, purple = becoming.
     The full four-axis breakdown lives on register.html for anyone who wants it. */
  const HORIZON_LABEL = { proven: 'Live today', active: 'Alive & growing', horizon: 'An open invitation' };

  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const card = (p) => `
    <article class="project-card panel-${p.register}">
      <p class="chip-row">
        <span class="register-chip chip-${p.register}">${HORIZON_LABEL[p.horizon]}</span>
      </p>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.note)}</p>
      <div class="source-links"><a href="${p.href}" target="_blank" rel="noopener">Step inside</a></div>
    </article>`;

  document.querySelectorAll('[data-project-grid]').forEach((grid) => {
    const scale = grid.dataset.scale;
    const list = PROJECTS
      .filter((p) => !scale || p.scale === scale)
      .sort((a, b) => HORIZON_ORDER[a.horizon] - HORIZON_ORDER[b.horizon]);
    grid.innerHTML = list.map(card).join('');
  });

  document.querySelectorAll('[data-spine-candidates]').forEach((el) => {
    el.innerHTML = CORE.spineCandidates.map((s) => `<li><q>${esc(s)}</q></li>`).join('');
  });

  window.RPRT = { CORE, PROJECTS };
})();
