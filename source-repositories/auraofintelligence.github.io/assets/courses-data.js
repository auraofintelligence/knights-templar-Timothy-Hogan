/*
 * The courses: the data behind the hub at courses/index.html and each
 * course page. Add a course here and the hub card appears automatically,
 * grouped under its `family` (the hub renders tracks in the order families
 * first appear below).
 *
 * Shape:
 *   {
 *     id:        "slug",              // becomes courses/<slug>.html
 *     title:     "Course title",
 *     family:    "Track label",       // groups the card on the hub
 *     blurb:     "One or two sentences, in the build-your-own voice.",
 *     links:     [ { label, href } ],
 *     generator: true|false,          // does this course carry a working md builder?
 *     videos:    [ "YouTubeID", ... ],// avatar-presented short videos (TBC until recorded)
 *     livestream:null
 *   }
 *
 * The Local track draws on the real Minjerribah project family (see the
 * Strange but True community ledger). Not every project is a course; these
 * are the ones that teach a repeatable, buildable skill. Videos and live
 * streams launch empty on purpose; the blurbs and links are real today.
 */
window.AURA_COURSES = [
  {
    id: 'markdown-with-ai',
    title: 'Markdown with AI',
    family: 'Start here',
    blurb: 'The foundational skill: writing plain Markdown files that give AI the right context, so you can build your own tools instead of renting someone else’s. Includes a working builder that runs entirely in your browser.',
    links: [ { label: 'How to use Markdown with AI', href: 'https://auraofintelligence.github.io/how-to-use-md-with-ai/' } ],
    generator: true, videos: [], livestream: null
  },
  {
    id: 'straddie-projects',
    title: 'Grants & tenders',
    family: 'Local: Minjerribah',
    blurb: 'How to win grants (funding programs) and tenders (government buying processes), using a reusable kit you build and own rather than an agency you pay by the hour.',
    links: [
      { label: 'Stradbroke Grants Lab', href: 'https://auraofintelligence.github.io/stradbroke-grants-lab/' },
      { label: 'Straddie Tenders Lab', href: 'https://auraofintelligence.github.io/straddie-tenders-lab/' },
      { label: 'Amity Outdoor Fitness grant', href: 'https://auraofintelligence.github.io/amity-outdoor-fitness-grant/' }
    ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'community-club',
    title: 'Start a community club',
    family: 'Local: Minjerribah',
    blurb: 'A practical playbook for building a community club that’s legal, welcoming and light enough that it doesn’t burn out one person. My worked example is an idea I’m floating for a sand sports club on the island; the method is yours, for any club, anywhere.',
    links: [ { label: 'Community Club Builder (Sandy Sports example)', href: 'https://auraofintelligence.github.io/community-club-builder-sandy-sports/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'noticeboard',
    title: 'Run a community noticeboard',
    family: 'Local: Minjerribah',
    blurb: 'The community noticeboard I’m working to start on the island, and how to run your own wherever you are: a public place for local notices the community owns, not a feed that sells the attention.',
    links: [ { label: 'Straddie Noticeboard Network', href: 'https://auraofintelligence.github.io/straddie-noticeboard-network/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'film-on-phone',
    title: 'Make films on your phone',
    family: 'Local: Minjerribah',
    blurb: 'How I’m helping first-time filmmakers on the island get started with just a phone, from a first short to a community documentary, and how you’d run the same where you are.',
    links: [
      { label: 'Quandamooka Film Festival', href: 'https://auraofintelligence.github.io/quandamooka-film-festival/' },
      { label: 'Film Club Documentary Builders', href: 'https://auraofintelligence.github.io/film-club-documentary-builders/' }
    ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'place-digital-twin',
    title: 'Build a digital twin of your place',
    family: 'Local: Minjerribah',
    blurb: 'The living digital copy of Minjerribah I’m building for its own people to steer, and how to build one for your own place. A twin, never a master.',
    links: [ { label: 'Straddie Digital Twin Builders', href: 'https://auraofintelligence.github.io/straddie-digital-twin-builders/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'legal-memory',
    title: 'Legal memory with AI',
    family: 'Local: Minjerribah',
    blurb: 'Get your legal information ready for AI the safe way: a Markdown workbench for preparing what matters, kept in your hands rather than uploaded to someone else’s system.',
    links: [ { label: 'Legal Memory Workbench', href: 'https://auraofintelligence.github.io/legal-memory-workbench/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'night-market',
    title: 'Run a night market',
    family: 'Local: Minjerribah',
    blurb: 'The night market I’m working to start on the island, and how to start your own wherever you are: stalls, stallholders and the coordination that makes an evening hum.',
    links: [ { label: 'Straddie Night Market Lab', href: 'https://auraofintelligence.github.io/straddie-night-market-lab/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'makerspace',
    title: 'Start a makerspace',
    family: 'Local: Minjerribah',
    blurb: 'The makerspace I want to get going on the island, and how to start one where you are: a place to repair, build and tinker, for every age.',
    links: [ { label: 'Straddie Makerspace Lab', href: 'https://auraofintelligence.github.io/straddie-makerspace-lab/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'disaster-kiosks',
    title: 'Disaster-ready kiosks',
    family: 'Local: Minjerribah',
    blurb: 'The offline-first kiosks I’m building to keep the island informed when the power and network go down, and how to build them for your own community. Preparedness you own.',
    links: [ { label: 'Straddie Disaster Kiosks', href: 'https://auraofintelligence.github.io/straddie-disaster-kiosks/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'shared-table',
    title: 'Run a shared table',
    family: 'Local: Minjerribah',
    blurb: 'The shared table I’m working to start on the island, rescuing surplus food and coordinating the volunteers who move it, and how to run one of your own. The mobilisation of care in practice.',
    links: [ { label: 'Straddie Shared Table', href: 'https://auraofintelligence.github.io/shared-table-initiative/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'events-engine',
    title: 'Plan community events',
    family: 'Local: Minjerribah',
    blurb: 'The events atlas and Markdown builder I’m making for gatherings on Quandamooka Country, and how to plan your own: public-safe, consent-first, and yours to run.',
    links: [ { label: 'Quandamooka Country Events Engine', href: 'https://auraofintelligence.github.io/quandamooka-country-events-engine/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'clean-energy',
    title: 'Community clean energy',
    family: 'Local: Minjerribah',
    blurb: 'Clean energy for the island, asked as honest questions: rooftop solar and batteries, sand batteries, green hydrogen, neighbourhood power sharing and bill ledgers. How to work out your own community’s answers.',
    links: [ { label: 'Straddie Clean Energy Superpower', href: 'https://auraofintelligence.github.io/straddie-clean-energy-superpower/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'tip-loop',
    title: 'Run a tip loop',
    family: 'Local: Minjerribah',
    blurb: 'A lawful tip-loop and local recycling: recover more useful material on the island, build real skills, and keep the value local before it ships away. How to design your own loop where you are.',
    links: [ { label: 'Straddie Tip Loop Lab', href: 'https://auraofintelligence.github.io/straddie-tip-loop-lab/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'capsule-surge',
    title: 'A spare room for the future',
    family: 'Local: Minjerribah',
    blurb: 'The case for a small, site-neutral space that can flex: beds, civic AI, idle capsule compute, health-surge logistics and co-op value. What I’m proposing for the island, and how you’d make your own.',
    links: [ { label: 'Straddie Capsule Surge Lab', href: 'https://auraofintelligence.github.io/straddie-capsule-surge-lab/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'open-data',
    title: 'Open your community’s data',
    family: 'Local: Minjerribah',
    blurb: 'Open data and simple simulation for a real local question (a ferry terminal, here): community-readable evidence anyone can check. How to open up and model your own place’s data.',
    links: [ { label: 'Dunwich (Gumpi) Ferry Terminal Lab', href: 'https://auraofintelligence.github.io/dunwich-gumpi-ferry-terminal-open-data-lab/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'content-kit',
    title: 'Make a content kit',
    family: 'Local: Minjerribah',
    blurb: 'Portable Markdown tools for camera, audio, lighting and local media planning: your own kit for making content, that you keep and reuse.',
    links: [ { label: 'Straddie Content Assets Kit', href: 'https://auraofintelligence.github.io/straddie-content-assets-kit/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'co-op',
    title: 'Start a co-op',
    family: 'Local: Minjerribah',
    blurb: 'Co-working, trust-building and shared-asset readiness for a community: how to start a co-op people actually trust, and own it together. What I’m building on the island, and how to build yours.',
    links: [ { label: 'Ready S.E.T. Co-op Trust Hub', href: 'https://auraofintelligence.github.io/ready-set-co-op-trust-hub/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'p4a-civic',
    title: 'P4A: build your own civic tools',
    family: 'National & regional',
    blurb: 'Public tools for a fair go: referendum rehearsals, civic records and consent-first instruments you can run under your own name and your own laws, never a platform sold back to you.',
    links: [
      { label: 'P4A: the civic workbench', href: 'https://auraofintelligence.github.io/p4a-xyz-cinema/' },
      { label: 'P4A Oceania', href: 'https://auraofintelligence.github.io/p4a-oceania-cinema/' },
      { label: 'P4A Native Nations', href: 'https://auraofintelligence.github.io/p4a-native-nations-cinema/' }
    ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'community-wealth',
    title: 'Community wealth & mutuals',
    family: 'National & regional',
    blurb: 'Community wealth funds, mutual protection, data sovereignty and Native Title pathways, in plain English. How neighbours can pool risk and wealth so prevention beats premiums: worked out for Moreton Bay, meant for anywhere.',
    links: [ { label: 'Moreton Bay Community Wealth and Mutuals', href: 'https://auraofintelligence.github.io/moreton-bay-community-wealth-and-mutuals/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'travel',
    title: 'Travel: plan your own way',
    family: 'World',
    blurb: 'Build your own travel tools and companions: a trip atlas, a compass that reads the live signals, and a way to gather a tribe around the journey before there is ever a place.',
    links: [
      { label: 'Project Odyssey', href: 'https://auraofintelligence.github.io/Australian-world-travel/' },
      { label: 'Travel Oracle', href: 'https://auraofintelligence.github.io/strange-but-true-travel-oracle/' },
      { label: 'Cosmic Nexus travel club', href: 'https://auraofintelligence.github.io/strange-but-true-cosmic-nexus/' }
    ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'grey-area-commons',
    title: 'Grey Area Commons',
    family: 'Life & connection',
    blurb: 'An adults-only, consent-first, privacy-preserving way into the human questions most places won’t touch: loving connection, mental health, and the grey area between what stays private and what you share. Gentle by design, honest about what it addresses.',
    links: [ { label: 'Grey Area Commons', href: 'https://auraofintelligence.github.io/grey-area-commons/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'become-a-patron',
    title: 'Become a patron or sponsor',
    family: 'Back the work',
    blurb: 'How patronage works here, and how to become one: back Luke’s work and travels, and get something real in return. Value for value, out in the open.',
    links: [ { label: 'Right Place, Right Time', href: 'https://auraofintelligence.github.io/right-place-right-time/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'long-horizon',
    title: 'The long horizon',
    family: 'Frontiers',
    blurb: 'The furthest-out builds, treated seriously: mineral moonshots and the deep-time frontier. Where the tools you own today grow toward the things that take a lifetime.',
    links: [ { label: 'Mineral Moonshots', href: 'https://auraofintelligence.github.io/mineral-moonshots/' } ],
    generator: false, videos: [], livestream: null
  },
  {
    id: 'subterranean',
    title: 'Underground systems',
    family: 'Frontiers',
    blurb: 'Why careful subterranean work might matter: autonomous transport arteries, less road damage, tunnel spoil as a resource, sand batteries and community wealth. The questions asked openly, and how to explore your own.',
    links: [ { label: 'Sandworm Subterranean Systems', href: 'https://auraofintelligence.github.io/sandworm-subterranean-systems/' } ],
    generator: false, videos: [], livestream: null
  }
];
