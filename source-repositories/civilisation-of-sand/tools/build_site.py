from pathlib import Path
from html import escape
from textwrap import dedent
import json


ROOT = Path(__file__).resolve().parents[1]


SITE_TITLE = "Civilisation of Sand"
SITE_URL = "https://auraofintelligence.github.io/civilisation-of-sand/"
SOCIAL_IMAGE = f"{SITE_URL}assets/img/link-preview.png"
REPO_URL = "https://github.com/auraofintelligence/civilisation-of-sand"
README_URL = f"{REPO_URL}#readme"
LICENCE_URL = f"{REPO_URL}/blob/main/LICENCE.md"
LAST_UPDATED = "18 June 2026"
ASSET_VERSION = "20260618-full-width-heroes"
TAGLINE = (
    "A public sci-fi story backbone about capability: a subterranean city simulation "
    "for asking how people could thrive through existential threats, grow from "
    "local resources, and use AI, robotics, making, repair, care and storytelling "
    "to create joyful responsible abundance."
)


PUBLIC_LINKS = {
    "Mineral Moonshots": "https://auraofintelligence.github.io/mineral-moonshots/",
    "Mineral Moonshots Materials": "https://auraofintelligence.github.io/mineral-moonshots/materials.html",
    "Mineral Moonshots Elements": "https://auraofintelligence.github.io/mineral-moonshots/elements.html",
    "Straddie Maker-Space Lab": "https://auraofintelligence.github.io/straddie-makerspace-lab/",
    "Straddie Maker-Space Sand": "https://auraofintelligence.github.io/straddie-makerspace-lab/sand.html",
    "Straddie Maker-Space Tools": "https://auraofintelligence.github.io/straddie-makerspace-lab/tools.html",
    "Straddie Maker-Space Geopolymers": "https://auraofintelligence.github.io/straddie-makerspace-lab/concrete.html",
    "Dunwich Gumpi Ferry Terminal Open Data Lab": "https://auraofintelligence.github.io/dunwich-gumpi-ferry-terminal-open-data-lab/",
    "Ready S.E.T. Co-op Trust Hub": "https://auraofintelligence.github.io/ready-set-co-op-trust-hub/",
    "Moreton Bay Community Wealth and Mutuals": "https://auraofintelligence.github.io/moreton-bay-community-wealth-and-mutuals/",
    "Strange But True": "https://auraofintelligence.github.io/strange-but-true/",
    "Strange But True Community Ledger": "https://auraofintelligence.github.io/strange-but-true/community-ledger.html",
    "Cosmic Nexus": "https://auraofintelligence.github.io/strange-but-true-cosmic-nexus/",
    "Cosmic Nexus Governance": "https://auraofintelligence.github.io/strange-but-true-cosmic-nexus/governance.html",
    "Quandamooka Film Festival": "https://auraofintelligence.github.io/quandamooka-film-festival/",
    "Quandamooka Country Events Engine": "https://auraofintelligence.github.io/quandamooka-country-events-engine/",
    "Stradbroke Grants Lab": "https://auraofintelligence.github.io/stradbroke-grants-lab/",
    "P4A": "https://auraofintelligence.github.io/p4a_xyz/",
    "P4A Rabbit Hole": "https://auraofintelligence.github.io/p4a_xyz/pages/rabbit-hole.html",
    "Brisbane Peaceful Space and Civic AI Summit": "https://auraofintelligence.github.io/GAJRA_Earth-Space-AI_Summit/",
    "AUKUS Space Gambit": "https://auraofintelligence.github.io/aukus-space-gambit/",
    "Space Weather News": "https://auraofintelligence.github.io/space-weather-news/",
}


PRIMARY_PAGES = [
    ("index", "index.html", "Home"),
    ("start", "start.html", "Story"),
    ("simulation", "simulation.html", "Simulation"),
    ("in-situ-resources", "in-situ-resources.html", "Materials"),
    ("great-filters", "great-filters.html", "Threats"),
    ("sources", "sources.html", "Sources"),
]


SEQUENCE = [
    ("index", "index.html", "Home"),
    ("start", "start.html", "Story"),
    ("simulation", "simulation.html", "Simulation"),
    ("subterranean-city", "subterranean-city.html", "Subterranean City"),
    ("surface-interface", "surface-interface.html", "Surface Interface"),
    ("in-situ-resources", "in-situ-resources.html", "Local Resources"),
    ("material-stack", "material-stack.html", "Material Stack"),
    ("maker-loop", "maker-loop.html", "Maker Loop"),
    ("ai-robotics", "ai-robotics.html", "AI And Robotics"),
    ("digital-twins", "digital-twins.html", "Digital Twins"),
    ("great-filters", "great-filters.html", "Great Filters"),
    ("energy-resilience", "energy-resilience.html", "Energy Resilience"),
    ("genesis-acceleration", "genesis-acceleration.html", "Genesis Acceleration"),
    ("story-quests", "story-quests.html", "Reading Paths"),
    ("ledger", "ledger.html", "Recognition Questions"),
    ("gumpi-gateway", "gumpi-gateway.html", "Gumpi Gateway"),
    ("trust-work", "trust-work.html", "Trust And Work"),
    ("wealth-mutuals", "wealth-mutuals.html", "Wealth And Mutuals"),
    ("brisbane-space-summit", "brisbane-space-summit.html", "Brisbane Space Summit"),
    ("learning-university", "learning-university.html", "Learning University"),
    ("roadmap", "roadmap.html", "Roadmap"),
    ("ecosystem-links", "ecosystem-links.html", "Ecosystem Links"),
    ("boundaries", "boundaries.html", "Boundaries"),
    ("sources", "sources.html", "Sources"),
    ("site-map", "site-map.html", "Site Map"),
]


def card(title, body, link=None, link_text=None):
    return {"title": title, "body": body, "link": link, "link_text": link_text or "Open"}


STANDARD_PAGES = [
    {
        "slug": "start",
        "file": "start.html",
        "title": "What this is",
        "description": "A plain entry point into an early public sci-fi concept map and story backbone.",
        "lede": "Civilisation of Sand is not a finished interactive work, proposal or engineering plan. It is an early story backbone for thinking about resilience, local resources, AI, robotics, care and choice.",
        "hero_image": "assets/img/heroes/start-hero.webp",
        "hero_alt": "A coastal and subterranean threshold with warm pathways into learning, making, mapping, care, storytelling and review rooms",
        "actions": [("Read the simulation", "simulation.html"), ("Read the boundaries", "boundaries.html")],
        "sections": [
            {
                "title": "Start with the idea, not the machinery.",
                "body": "The useful centre is simple: imagine a subterranean city as a story lens, then ask what would help people thrive without pretending the answer is already known.",
                "cards": [
                    card("Story", "What kind of future is being imagined, and why does it matter?", "simulation.html"),
                    card("Place", "What stays accountable to Country, water, surface life and the right to say no?", "surface-interface.html"),
                    card("Materials", "What can local resources teach without turning curiosity into an extraction claim?", "in-situ-resources.html"),
                    card("Care", "What keeps people, privacy, culture, safety and consent at the centre?", "boundaries.html"),
                ],
            },
            {
                "title": "Three simple promises.",
                "body": "The site should make the idea easier to inspect, not harder to refuse. It treats sci-fi as a concept space, keeps authority with the right people, and links out when another project already carries the detail.",
                "list": [
                    "Choice before commitment.",
                    "Source trails before strong claims.",
                    "Practical usefulness before spectacle.",
                ],
            },
        ],
        "bridge": {"title": "Useful first move", "body": "Read the simulation as a story frame, then check the boundaries before treating any idea as practical.", "link": "simulation.html", "label": "Read the simulation"},
    },
    {
        "slug": "simulation",
        "file": "simulation.html",
        "title": "The story simulation",
        "description": "How the subterranean city simulation frames capability, resilience, materials, AI, care and public choice.",
        "lede": "The subterranean city is not a promise to dig and not a hidden plan. It is a sci-fi story frame for asking what would need to be true before deep infrastructure could ever be safe, lawful, useful and consent-based.",
        "hero_image": "assets/img/heroes/simulation-hero.webp",
        "hero_alt": "A coastal island above a layered subterranean simulation chamber with public review tables, route lines and material shelves",
        "actions": [("Visit the city room", "subterranean-city.html"), ("Check boundaries", "boundaries.html")],
        "sections": [
            {
                "title": "What the story can safely hold.",
                "body": "A public story simulation can hold big questions without forcing quick answers. It can ask what people would need during shocks, what can be learned from local material loops, and what should stay in community control.",
                "cards": [
                    card("Capability growth", "What skills, tools, data, workshops and learning loops would make ordinary life stronger?"),
                    card("Great-filter rehearsal", "What happens if heat, flood, logistics, energy, information or social trust systems fail at once?", "great-filters.html"),
                    card("Material literacy", "What can sand, glass, rubble, metals, organics, sunlight and open data teach before anyone touches risky materials?", "material-stack.html"),
                    card("Human agency", "Where must AI, robotics and modelling stay answerable to people, safety and consent?", "ai-robotics.html"),
                ],
            },
            {
                "title": "Reality gates stay in the middle.",
                "body": "Every deeper layer should pass through cultural, ecological, legal, engineering, safety, cost, maintenance and community-benefit questions. A simulation that cannot accept a no is not a useful simulation.",
                "list": [
                    "What can be simulated first?",
                    "What can be learned without disturbance?",
                    "What needs qualified review?",
                    "Who benefits, who carries risk, and who can say no?",
                ],
            },
            {
                "title": "Wonder has a clear lane.",
                "body": "Cosmic Nexus adds a useful boundary pattern for the strange-and-true edge of the story: keep myth, history, UAP questions, underwater scenarios, film worlds and governance ideas clearly labelled instead of mixing them into one claim.",
                "cards": [
                    card("Story lane", "Let the mystery stay clearly labelled through scenes, festivals and worldbuilding.", PUBLIC_LINKS["Cosmic Nexus"], "Open Cosmic Nexus"),
                    card("Evidence lane", "Dates, source trails, confidence labels and review status travel with any claim."),
                    card("Governance lane", "Extra Chair style review keeps affected voices, legal memory, public/private boundaries and cultural care in the room.", PUBLIC_LINKS["Cosmic Nexus Governance"], "Open governance"),
                ],
            },
        ],
    },
    {
        "slug": "story-quests",
        "file": "story-quests.html",
        "title": "Reading paths",
        "description": "Optional reading paths for exploring the Civilisation of Sand concept from different angles.",
        "lede": "These paths are not tasks or proof of progress. They are optional ways to read the concept from different angles: story, materials, care, resilience and review.",
        "hero_image": "assets/img/heroes/story-quests-hero.webp",
        "hero_alt": "A story-path table with source cards, material samples and a glowing path into a coastal subterranean city",
        "actions": [("Read the simulation", "simulation.html"), ("Read the roadmap", "roadmap.html")],
        "sections": [
            {
                "title": "Reading lanes.",
                "body": "Each lane gives visitors a way to inspect the idea without needing to accept the whole thing.",
                "cards": [
                    card("Story reader", "Follow the subterranean city as a thought experiment.", "subterranean-city.html"),
                    card("Materials reader", "Ask what sand, repair and local resources can teach without overclaiming.", "material-stack.html"),
                    card("Care reader", "Track consent, culture, privacy, safety and who gets to say no.", "boundaries.html"),
                    card("Systems reader", "Look at AI, robotics, energy and digital twins as questions, not promises.", "ai-robotics.html"),
                ],
            },
            {
                "title": "Capability is a question.",
                "body": "Capability here means: what would make people better able to care, repair, learn, decide and refuse? It is not a ranking system.",
                "list": [
                    "What is imagined?",
                    "What is known?",
                    "What is unknown?",
                    "Who can say no?",
                ],
            },
            {
                "title": "Public recognition comes later.",
                "body": "Any public record of contribution would need real consent, receipts, privacy boundaries and correction paths. It should not appear before real support exists.",
                "cards": [
                    card("Receipts first", "Show what happened, what source or receipt supports it, and who agreed it can be public.", "ledger.html"),
                    card("Consent first", "Names, amounts, wallet details, youth details and sensitive context stay private unless explicitly released.", "boundaries.html"),
                    card("Corrections first", "Every public entry needs a way to amend, remove, question or add context.", "ledger.html"),
                ],
            },
        ],
    },
    {
        "slug": "ledger",
        "file": "ledger.html",
        "title": "Future recognition questions",
        "description": "A cautious concept page for possible future public recognition, without pressure or surveillance.",
        "lede": "This page only asks what would make any future public recognition safe, opt-in, receipt-backed, correction-friendly and useful.",
        "hero_image": "assets/img/heroes/ledger-hero.webp",
        "hero_alt": "A warm civic ledger bench with contribution tokens, repair notes, sample cards and light trails between community projects",
        "actions": [("Read trust and work", "trust-work.html"), ("Read boundaries", "boundaries.html")],
        "sections": [
            {
                "title": "What a future record could show.",
                "body": "A record would only be useful after real support exists. It should connect public notes to chosen profiles or projects, not create pressure to perform.",
                "cards": [
                    card("Support trail", "Who chose to support what, what service or contribution was involved, and what project moved forward."),
                    card("Contribution trail", "Volunteer time, mentoring, repair, care, ecological work, training and source-checking."),
                    card("Project trail", "Which source note, material note, place evidence note or review room benefited."),
                    card("Correction trail", "What changed, who corrected it, and what context should travel with the public record."),
                ],
            },
            {
                "title": "Controls before display.",
                "body": "A public record is only healthy when the boring controls are visible. Otherwise it turns into pressure, surveillance or reputation theatre.",
                "list": [
                    "Opt-in public display only.",
                    "Receipts or source notes before public display.",
                    "No shame boards, debt boards or coercive comparison.",
                    "Youth, private care, cultural material and sensitive details stay protected.",
                    "Wallets, amounts, names and exact locations need explicit consent.",
                    "Every entry needs correction, removal and context paths.",
                ],
            },
            {
                "title": "Boundary questions.",
                "body": "The boundary rule is simple: say who controls the file, what stays local, which status label applies, when it was checked, and what cultural or place permission is needed before sharing.",
                "cards": [
                    card("Context control", "The person, organiser or community closest to the context helps decide what becomes public."),
                    card("Status labels", "Draft, public-safe, permission needed, cultural review needed and professional review needed should stay visible."),
                    card("Freshness dates", "A public note should say when it was prepared or last checked."),
                    card("Local-only detail", "Sensitive notes can support private work without being turned into public display."),
                ],
            },
            {
                "title": "Civic questions.",
                "body": "Any future public record would need boring civic structure: provenance, correction paths, privacy boundaries, change history and plain ways to dispute context.",
                "cards": [
                    card("Public-good records", "Recognition should support public understanding, not pressure people into politics.", PUBLIC_LINKS["P4A"], "Open P4A"),
                    card("Source trails", "Receipts, claim labels and correction paths matter more than display.", PUBLIC_LINKS["P4A Rabbit Hole"], "Open Rabbit Hole"),
                    card("Legal memory", "Keep legal, governance and compliance questions marked as source-backed literacy, not advice.", PUBLIC_LINKS["P4A Rabbit Hole"], "Review civic lane"),
                ],
            },
            {
                "title": "Cosmic Nexus input.",
                "body": "Recognition can also be cultural: films, festivals, mystery maps, travel routes and review rooms where people can be credited without pretending story, source and speculation are the same thing.",
                "cards": [
                    card("Careful wonder", "Keep odd artefacts, myths, underwater questions and UAP scenarios labelled by source state.", PUBLIC_LINKS["Cosmic Nexus"], "Open Cosmic Nexus"),
                    card("Festival credits", "Credit trails could support episodes, maps, scenes, fieldwork, source checks and event support."),
                    card("Governance spine", "The honour board should inherit the same consent, public/private and affected-voice review habits.", PUBLIC_LINKS["Cosmic Nexus Governance"], "Open governance"),
                ],
            },
        ],
    },
    {
        "slug": "great-filters",
        "file": "great-filters.html",
        "title": "Great filters, from local to cosmic",
        "description": "Local, middle-way and deep sci-fi scenario rooms for the Civilisation of Sand concept.",
        "lede": "The Great Filters are not just storms and supply chains. They are concept rooms for reading risk at different depths: local resilience, civilisation stress, Kardashev transition risk, solar-system sensing, subterranean refuge and black-swan ocean diplomacy.",
        "hero_image": "assets/img/heroes/great-filters-hero.webp",
        "hero_alt": "A civic scenario room with a coastal island model, ocean-depth glow, solar-swarm lights and layered risk maps",
        "actions": [("Read Great Filters", "great-filters.html"), ("Open Cosmic Nexus", PUBLIC_LINKS["Cosmic Nexus"])],
        "sections": [
            {
                "title": "Three depths, not one flat list.",
                "body": "A useful filter map lets visitors choose their depth. Local starters stay practical. Middle-way rooms test regional and planetary systems. Deep edge cases keep the sci-fi alive while staying labelled as hypothesis, film world, simulation or source trail.",
                "cards": [
                    card("Local starters", "Heat, fire, flood, ferry logistics, water, food, power, check-ins, repair, shelter and official warnings."),
                    card("Middle-way stress tests", "Grid and internet fracture, geomagnetic storms, food-system shocks, cyber failures, AI governance failure, health events and institutional trust loss."),
                    card("Deep edge cases", "Solar micro-nova hypotheses, Virtual Solar Swarm sensing, Kardashev transition misfires, subterranean respawn cities, Sub-Oceanic Technate scenarios and first-contact diplomacy."),
                    card("Film and festival rooms", "Use story, screenings, challenges and source trails to let people rehearse hard futures without pretending the fiction is evidence."),
                ],
            },
            {
                "title": "Middle-way rooms.",
                "body": "These are not apocalypse fantasies. They are sober system tests that can still produce practical local action.",
                "cards": [
                    card("Space-weather hardening", "Solar flares, geomagnetic storms, comms disruption, backup power, island-mode microgrids and readable public warnings.", "energy-resilience.html"),
                    card("Food and water stack", "Ferry interruption, fuel price shock, crop disruption, shared tables, storage, gardens, filtration, repair and fair distribution."),
                    card("AI and cyber failure", "Bad automated decisions, hacked services, fake evidence, privacy leaks, dependency collapse and human override rules.", "ai-robotics.html"),
                    card("Material bottlenecks", "Semiconductors, batteries, magnets, medical parts, pumps, water fittings and repairable appliances as local capability questions.", "material-stack.html"),
                    card("Social trust fracture", "Rumours, coercive scoring, weak ledgers, exclusion, burnout and the need for correction-friendly public records.", "ledger.html"),
                    card("Governance lag", "The system moves too slowly for the risk. Story rooms can rehearse public choices before panic chooses for everyone.", "great-filters.html"),
                ],
            },
            {
                "title": "Deep sci-fi but plausible edge cases.",
                "body": "This is where Civilisation of Sand should be brave and disciplined. The rule is simple: keep the idea exciting, label its evidence state, and turn it into a useful rehearsal question.",
                "cards": [
                    card("Subterranean respawn city", "Could underground refuges preserve food, culture, seed, tooling, data, stories and skills if surface systems were damaged?", "subterranean-city.html"),
                    card("Kardashev transition", "Could a local stack learn from Type I and Type II ideas without surrendering sovereignty, ecology or consent?", "genesis-acceleration.html"),
                    card("Virtual Solar Swarm", "Could a decentralised solar-system sensor network make space-weather and planetary-risk data more public, verifiable and useful?"),
                    card("Global Sensorium", "Could open digital twins compare known science, fringe hypotheses, uncertainty and model failures without collapsing them into one claim?", "digital-twins.html"),
                    card("Abyss Protocol", "If underwater civilisation or trans-medium UAP scenarios are treated as wargames, what ecological politeness, acoustic restraint and diplomacy habits improve anyway?", PUBLIC_LINKS["Cosmic Nexus"], "Open Cosmic Nexus"),
                    card("First-contact governance", "Who sits in the room, who can say no, what gets recorded, what stays private, and what is the verifiable no?", PUBLIC_LINKS["Cosmic Nexus Governance"], "Open governance"),
                ],
            },
            {
                "title": "Every room asks the same plain questions.",
                "body": "The repetition is useful. It helps a sceptical reader compare risks without needing technical jargon.",
                "list": [
                    "What could happen?",
                    "What would people need?",
                    "What can be learned now?",
                    "What belongs in local control?",
                    "What needs public institutions?",
                    "What source trails are needed?",
                    "What evidence label belongs on this: known, modelled, disputed, speculative or fictional?",
                ],
            },
            {
                "title": "Screening room and festival lane.",
                "body": "Cosmic Nexus and Quandamooka Film Festival can carry the film and festival side of this material. Screenings and story workshops can let people explore frightening or far-out futures with source notes, consent, credits and review boundaries intact.",
                "cards": [
                    card("Cosmic Nexus", "The wider adventure atlas for mystery, myth, UAP, travel, festival and governance lanes.", PUBLIC_LINKS["Cosmic Nexus"], "Open Cosmic Nexus"),
                    card("Quandamooka Film Festival", "A phone-first filmmaking and screening doorway for AI storyboarding, source trails, asset sharing and public/private story care.", PUBLIC_LINKS["Quandamooka Film Festival"], "Open festival"),
                    card("Scenario episodes", "Great-filter rooms can become short films, source maps, debate scenes, repair plans, dashboard mockups or festival sessions."),
                ],
            },
        ],
    },
    {
        "slug": "surface-interface",
        "file": "surface-interface.html",
        "title": "The living surface stays real",
        "description": "How the surface, Country, water, culture, ordinary life and the right to say no keep the simulation accountable.",
        "lede": "The subterranean city simulation only stays useful if it remains accountable to living people, living places and the right to say no.",
        "actions": [("Check public boundaries", "boundaries.html"), ("Read digital twins", "digital-twins.html")],
        "sections": [
            {
                "title": "The surface is not a decorative layer.",
                "body": "People still need shops, schools, clubs, rest, beauty, access, care, water, trees, dunes, wildlife and ordinary logistics. The surface is the interface where any public idea earns or loses trust.",
                "cards": [
                    card("People", "Residents, visitors, workers, young people, parents, elders, sceptics and collaborators need readable choices."),
                    card("Country and water", "Cultural authority, ecological limits and water systems are not props."),
                    card("Ferry and movement", "Gumpi / Dunwich is a practical gateway for logistics, evidence and simulation.", "gumpi-gateway.html"),
                    card("Rest and refusal", "A useful system leaves room to pause, opt out, challenge, correct and say no."),
                ],
            },
            {
                "title": "Accountability questions.",
                "body": "The simulation should keep asking whether an idea improves real surface life or merely looks impressive underground.",
                "list": [
                    "Who is helped now?",
                    "Who might be burdened?",
                    "What should stay private?",
                    "What needs custodial, professional or community review?",
                ],
            },
        ],
    },
    {
        "slug": "in-situ-resources",
        "file": "in-situ-resources.html",
        "title": "Local materials and resources",
        "description": "A public guide to local mineral sands, lawful reuse, maker-space material tests, repair loops and material passports.",
        "lede": "The resource story starts with what is already here: mineral-sands literacy, quartz and silica, titanium minerals, zircon ceramics, rare-earth discipline, waste streams, repair skills, maker-space experiments and clean public records.",
        "hero_image": "assets/img/heroes/materials-lab-hero.webp",
        "hero_alt": "A coastal maker-space material lab with jars of sand, mineral samples, hand tools and a bright dune landscape outside",
        "actions": [("Read material stack", "material-stack.html"), ("Open Mineral Moonshots", PUBLIC_LINKS["Mineral Moonshots Materials"])],
        "sections": [
            {
                "title": "The local mineral-sands map.",
                "body": "Mineral Moonshots gives this site the missing atom-level spine. This page should not imply extraction permission; it should show why the sand story matters for education, repair, materials, energy, tools and deep civilisation design.",
                "cards": [
                    card("Quartz and silica", "Glass, optics, filtration, structural ceramics, solar silicon, sand batteries, transparent dashboards and safe vitrified samples.", PUBLIC_LINKS["Mineral Moonshots Materials"], "Mineral-sands map"),
                    card("Ilmenite and rutile", "Titanium dioxide, corrosion-resistant coastal hardware, photocatalytic surfaces, alloy research and future 3D-printing powder questions."),
                    card("Zircon and zirconia", "High-temperature ceramics, glaze opacifiers, thermal barriers, oxygen sensors, pump bearings, cutter-head ideas and durable underground components."),
                    card("Monazite discipline", "Lanthanum, cerium and neodymium sit in the narrow rare-earth lane, with thorium treated as a serious stewardship boundary."),
                    card("Iron, oxygen and phosphorus", "Useful companion elements for pigments, biology, ceramics, batteries, soil, food-loop education and the whole periodic-table context.", PUBLIC_LINKS["Mineral Moonshots Elements"], "Element atlas"),
                    card("Sand batteries", "Silica thermal storage gives a grounded bridge from tiny benchtop physics to process heat, microgrids and resilience.", "energy-resilience.html"),
                ],
            },
            {
                "title": "Maker-space first tests.",
                "body": "The new Straddie Maker-Space Lab turns the material map into a public learning bench: not a mine, not a factory, but a place to compare, label, repair, prototype and record.",
                "cards": [
                    card("Sand learning board", "Jars, lenses, grains, glass tests, ceramics, geopolymers and plain-language tags that make the material story touchable.", PUBLIC_LINKS["Straddie Maker-Space Sand"], "Open sand page"),
                    card("Material shelf", "Sieves, scales, moulds, sample jars, hand lenses, kiln partnerships, glass tests and mineral-sand education.", PUBLIC_LINKS["Straddie Maker-Space Tools"], "Tool shelf"),
                    card("Geopolymer bench", "Tiny labelled non-structural samples from clean lawful inputs: sand, recycled glass, clean rubble, crushed brick, ash and safe binders.", PUBLIC_LINKS["Straddie Maker-Space Geopolymers"], "Geopolymer page"),
                    card("Public material wall", "Show source, use, risk, recipe, result, failure and next experiment before anything scales."),
                    card("Home-scale products", "Kitchen tools, ceramic parts, glass filters, modular appliance pieces and water/food-loop fittings, only after safe lawful pathways exist."),
                    card("Material passports", "Every object or sample should carry what it is, where it came from, what not to do with it, how to repair it and where it returns.", "material-stack.html"),
                ],
            },
            {
                "title": "The first lawful ore body is often waste.",
                "body": "The safest starting point is not dramatic extraction. It is clean, reviewed, consent-based loops around materials that are already in circulation.",
                "cards": [
                    card("Repairable goods", "Tools, bikes, furniture, electronics and household items that can be fixed before replaced.", "maker-loop.html"),
                    card("Clean rubble and glass", "Non-structural learning samples only after safety, dust and permission checks."),
                    card("Scrap metals and aluminium", "Embodied energy made visible through sorting, safe storage and lawful reuse."),
                    card("Organic streams", "Compost, mulch, mycelium experiments and food-loop learning with hygiene review."),
                    card("Open data", "Maps, photos, dates, public records and source trails as reusable civic material.", "digital-twins.html"),
                    card("Local skills", "Knowledge is also a resource: repairing, caring, translating, testing and teaching."),
                ],
            },
            {
                "title": "Strong boundary.",
                "body": "This is not a mining proposal. Start with lawful, safe, low-risk, reviewed and consent-based resource loops.",
                "list": [
                    "Do not touch land, cultural material or sensitive sites without authority.",
                    "Do not treat hazardous materials as classroom props.",
                    "Do not make engineering or health claims without qualified review.",
                    "Treat mineral-sands pages as education and source trails unless proper authority, review and law say otherwise.",
                ],
            },
        ],
    },
    {
        "slug": "genesis-acceleration",
        "file": "genesis-acceleration.html",
        "title": "Genesis acceleration, translated safely",
        "description": "A public-safe translation of high-energy GenesisAI and Kardashev source ideas.",
        "lede": "This layer keeps the useful pattern: global science can inspire local learning, but local people should not have to surrender data, agency, culture or consent to participate.",
        "actions": [("Check AI boundaries", "ai-robotics.html"), ("Read sources", "sources.html")],
        "sections": [
            {
                "title": "Useful concepts, kept as questions.",
                "body": "The old source is energetic and technical. Public language needs to slow it down and ask what would need to be true before any claim became confident.",
                "cards": [
                    card("Local-first AI", "Could big models help without taking raw local data away from the people who carry the context?", "digital-twins.html"),
                    card("Scientific foundation models", "Could AI help test material, energy, biology, climate and robotics questions before physical risk?"),
                    card("Materials discovery", "Could tools like material databases inspire literacy and better questions, not instant local industry?", "material-stack.html"),
                    card("Sand battery simulation", "Could thermal storage ideas be modelled before anyone promises performance?", "energy-resilience.html"),
                    card("Global sensorium", "Could digital twins show assumptions and uncertainty instead of hiding them?", "digital-twins.html"),
                    card("Sand to silicon", "Could a hard technical pathway become a brilliant education story without pretending it is easy?", "material-stack.html"),
                ],
            },
            {
                "title": "Verification rule.",
                "body": "Anything tied to governments, agencies, executive orders, national labs, defence programs, nuclear, fusion, rare earths, biomining, Indigenous data governance or named AI tools needs fresh source checking before public wording becomes confident.",
                "list": [
                    "Label old brainstorm material as concept context.",
                    "Use current reliable sources before specific claims.",
                    "Prefer plain questions to technical certainty.",
                ],
            },
        ],
    },
    {
        "slug": "ai-robotics",
        "file": "ai-robotics.html",
        "title": "AI and robotics as helpers",
        "description": "How AI and robotics could support learning, repair, source trails, simulation and safety while keeping people in charge.",
        "lede": "AI and robotics can grow capability when they help people learn, test, maintain, translate and repair. They lose legitimacy when they erase choice, consent or human review.",
        "hero_image": "assets/img/heroes/ai-robotics-hero.webp",
        "hero_alt": "A warm coastal maker-space where small helper robots, repair benches, sensor kits and AI review panels support careful public work",
        "actions": [("Read digital twins", "digital-twins.html"), ("Open AI and robotics", "ai-robotics.html")],
        "sections": [
            {
                "title": "Where helpers might fit.",
                "body": "The most useful first uses are boring in a good way: make things clearer, safer, more accessible and easier to hand off.",
                "cards": [
                    card("Learning support", "Translate complex notes into plain steps, source trails and micro lessons."),
                    card("Repair support", "Help identify parts, manuals, safety checks and next actions.", "maker-loop.html"),
                    card("Material sorting", "Assist with visual classification only when safety and review are clear.", "in-situ-resources.html"),
                    card("Digital twins", "Model places and assumptions before physical change.", "digital-twins.html"),
                    card("Maintenance", "Support checklists, reminders, inspections and record keeping."),
                    card("Storytelling", "Turn systems into rooms, scenes, diagrams and handoffs people can understand."),
                ],
            },
            {
                "title": "What must stay human.",
                "body": "People choose, people can opt out, people can ask why, and sensitive data needs stronger protection.",
                "list": [
                    "Raw cultural, personal and sensitive data is not training material by default.",
                    "Robots do not erase duties of care, safety or consent.",
                    "AI outputs need correction paths and human judgement.",
                ],
            },
        ],
    },
    {
        "slug": "material-stack",
        "file": "material-stack.html",
        "title": "The material stack",
        "description": "A careful public explanation of local mineral sands, silica, titanium, zircon, rare earths, recycled streams, thermal storage and material boundaries.",
        "lede": "Sand is not just a metaphor. It is a local material atlas: silica, titanium minerals, zircon, rare-earth questions, glass, ceramics, thermal storage, repair and deep infrastructure imagination, all held behind consent and review.",
        "actions": [("Read material stack", "material-stack.html"), ("Visit Mineral Moonshots", PUBLIC_LINKS["Mineral Moonshots Materials"])],
        "sections": [
            {
                "title": "Learning layers from the sand.",
                "body": "The material stack should feel like a periodic table with public handrails: what the element could teach, what it might become in a moonshot, and what boundary keeps the claim honest.",
                "cards": [
                    card("Quartz and silica", "Glass, optics, filtration, ceramics, solar silicon, thermal storage, transparent dashboards and sand-to-compute education."),
                    card("Rutile and ilmenite", "Titanium dioxide, corrosion resistance, hard coastal machines, aerospace thinking and photocatalytic surface questions."),
                    card("Zircon", "Zirconia ceramics, thermal barriers, oxygen sensors, pump bearings, cutters, refractory parts and long-life underground components."),
                    card("Monazite", "Lanthanum, cerium, neodymium and thorium stewardship: magnets, phosphors, catalysts, ceramics and the hard question of safe separation."),
                    card("Recycled glass and rubble", "The safer first public learning loop for non-structural experiments, geopolymers, pavers, tiles and public sample walls.", PUBLIC_LINKS["Straddie Maker-Space Geopolymers"], "Geopolymer bench"),
                    card("Sand batteries", "Thermal storage as a grounded bridge from material literacy to energy resilience.", "energy-resilience.html"),
                ],
            },
            {
                "title": "From atom to workshop to city.",
                "body": "This page should connect Mineral Moonshots, the Maker-Space Lab and the subterranean city so a visitor can see the ladder: source note, safe sample, repair loop, prototype, public record, then deeper infrastructure question.",
                "cards": [
                    card("Element atlas", "Use the Mineral Moonshots periodic table to avoid hand-wavy rare-earth language.", PUBLIC_LINKS["Mineral Moonshots Elements"], "Open atlas"),
                    card("Maker-space sand page", "Use the practical maker-space doorway for sand learning boards, home products and public material walls.", PUBLIC_LINKS["Straddie Maker-Space Sand"], "Open sand page"),
                    card("Subterranean components", "Ask which materials matter for shelter, heat, water, pumps, sensors, ceramics, glazing, power, repair and closed-loop life.", "subterranean-city.html"),
                    card("Public material passport", "Every sample or object needs source, recipe, safety limit, repair path, steward and end-of-life note.", "material-stack.html"),
                ],
            },
            {
                "title": "Boundaries that protect trust.",
                "body": "No mining claim. No processing claim. Silica dust is dangerous. High-purity silicon is difficult. Rare-earth and radioactive materials require qualified review.",
                "list": [
                    "Use Mineral Moonshots for wider material pages.",
                    "Use Straddie Maker-Space Lab for hands-on sand, tool and geopolymer learning.",
                    "Keep local claims tied to sources and review.",
                    "Start with safe education and lawful reuse.",
                ],
            },
        ],
    },
    {
        "slug": "subterranean-city",
        "file": "subterranean-city.html",
        "title": "The subterranean city thought experiment",
        "description": "The Sandworm, Silica Citadel and underground city simulation as plausible sci-fi and reviewable scenario planning.",
        "lede": "The underground city is the central story engine: a way to think through great filters, deep resilience and capability growth without pretending that tunnels are approved, safe or inevitable.",
        "hero_image": "assets/img/heroes/subterranean-city-hero.webp",
        "hero_alt": "A disciplined underground coastal civic city with layered gardens, warm workshops, clean water channels and a central lit shaft",
        "actions": [("Check reality gates", "boundaries.html"), ("Explore simulation", "simulation.html")],
        "sections": [
            {
                "title": "What it can imagine.",
                "body": "As plausible sci-fi, the city can ask how storage, utilities, safe refuge, logistics, manufacturing, robotics, thermal systems and research might work under strong review.",
                "cards": [
                    card("Sandworm", "A story object for asking what robotic excavation would require before any physical disturbance."),
                    card("Silica Citadel", "A learning image for material loops, thermal systems and closed-loop design."),
                    card("Underground commons", "A way to ask how people live well, not merely survive, during stress."),
                    card("Digital nervous system", "A simulation layer for showing assumptions, risks, resource flows and veto points.", "digital-twins.html"),
                ],
            },
            {
                "title": "Reality gates.",
                "body": "Before deep infrastructure could be more than a story, it would need cultural authority, land and environmental law, engineering feasibility, safety, groundwater review, cost clarity, maintenance, emergency access and community benefit.",
                "list": [
                    "Who decides?",
                    "Who can say no?",
                    "What can be simulated first?",
                    "What can be learned without physical disturbance?",
                ],
            },
        ],
    },
    {
        "slug": "maker-loop",
        "file": "maker-loop.html",
        "title": "The maker loop starts useful",
        "description": "Repair, right-to-repair, tool sharing, safe workshops, material passports and useful projects before impressive projects.",
        "lede": "The practical doorway is simple: fix something, learn something, document the boundary, and leave a handoff the next person can use.",
        "actions": [("Read the maker loop", "maker-loop.html"), ("Visit Maker-Space Lab", PUBLIC_LINKS["Straddie Maker-Space Lab"])],
        "sections": [
            {
                "title": "Useful before impressive.",
                "body": "A maker loop can connect right-to-repair, safe induction, tool sharing, upcycling, material passports and Try Everything roles without needing the whole city story first.",
                "cards": [
                    card("Repair cafe", "Small repairs build trust, confidence and shared tool literacy."),
                    card("Material passport", "Name what a thing is, where it came from, safe uses, unknowns and reuse paths.", "material-stack.html"),
                    card("Small tests", "Non-structural, lawful, low-risk experiments with clear disposal and review."),
                    card("Handoff notes", "Clear notes let another helper continue without guessing."),
                ],
            },
            {
                "title": "Safety culture is part of the build.",
                "body": "The workshop layer should be welcoming and serious: induction, dust control, tool checks, child/youth safeguards, privacy and respectful permission.",
                "list": [
                    "Do not improvise with hazardous materials.",
                    "Do not turn learning into pressure.",
                    "Do not skip a boring safety note because the story is exciting.",
                ],
            },
        ],
    },
    {
        "slug": "gumpi-gateway",
        "file": "gumpi-gateway.html",
        "title": "Gumpi gateway as arrival point",
        "description": "The Dunwich / Gumpi ferry terminal as data doorway, logistics scenario room and digital-twin rehearsal space.",
        "lede": "Gumpi / Dunwich is the practical arrival point. It is also a useful place to learn how photos, maps, open data and public source trails can support better design.",
        "actions": [("Read the surface interface", "surface-interface.html"), ("Visit Ferry Lab", PUBLIC_LINKS["Dunwich Gumpi Ferry Terminal Open Data Lab"])],
        "sections": [
            {
                "title": "What the gateway teaches.",
                "body": "The ferry gateway can connect ordinary movement to larger systems: logistics, resilience, accessibility, public records, visual evidence and simulation workflows.",
                "cards": [
                    card("Logistics room", "What happens when ferry, road, food, fuel, care or emergency movement is disrupted?"),
                    card("Evidence map", "Photos, observations and source links make assumptions visible."),
                    card("Open data ladder", "Ask for public data respectfully and keep official facts with the repo that maintains the source trail."),
                    card("Digital twin rehearsal", "Start with a photo, note, map pin, source link and question.", "digital-twins.html"),
                ],
            },
            {
                "title": "Do not duplicate official facts here.",
                "body": "The ferry lab keeps the detailed source trails and project context. Civilisation of Sand uses Gumpi as a bridge into simulation and capability questions.",
            },
        ],
    },
    {
        "slug": "trust-work",
        "file": "trust-work.html",
        "title": "Trust, work and contribution",
        "description": "Training, Try Everything roles, trust ladders, co-op pathways and fair chances to learn, help, rest, earn and choose.",
        "lede": "Nobody needs to be assigned a grand destiny. People need fair chances to learn, help, rest, earn and choose.",
        "actions": [("Read trust and work", "trust-work.html"), ("Visit Ready S.E.T.", PUBLIC_LINKS["Ready S.E.T. Co-op Trust Hub"])],
        "sections": [
            {
                "title": "Possible role rotations.",
                "body": "Try Everything can help people sample useful roles without being trapped in them.",
                "cards": [
                    card("Maker", "Repair, tool care, simple fabrication and safe workshop habits."),
                    card("Steward", "Source trails, privacy boundaries, consent notes and review flags."),
                    card("Data helper", "Photos, maps, public records, spreadsheets and open-data asks."),
                    card("Ferry helper", "Arrival, logistics, wayfinding and scenario notes."),
                    card("Care helper", "Access, rest, translation, check-ins and safeguards."),
                    card("Robotics learner", "Safe support tasks, not human replacement."),
                ],
            },
            {
                "title": "Trust before assets.",
                "body": "Shared tools, data, jobs, spaces and funds need public trust before they scale.",
                "list": [
                    "Keep public and private boundaries visible.",
                    "Name what is draft.",
                    "Let people leave with a useful skill or note.",
                ],
            },
        ],
    },
    {
        "slug": "wealth-mutuals",
        "file": "wealth-mutuals.html",
        "title": "Community wealth without advice",
        "description": "A careful bridge to community wealth, mutual care, shared assets and local reinvestment without legal or financial advice.",
        "lede": "The wealth layer asks how capability growth could benefit people instead of extracting from them. It is not legal, financial, tax, investment, insurance or Native Title advice.",
        "actions": [("Read wealth and mutuals", "wealth-mutuals.html"), ("Visit Mutuals site", PUBLIC_LINKS["Moreton Bay Community Wealth and Mutuals"])],
        "sections": [
            {
                "title": "Questions worth holding.",
                "body": "Community wealth language can become dangerous when it sounds like a promise. Keep it as a map of questions until qualified advice and proper authority exist.",
                "cards": [
                    card("Shared assets", "What could be held, maintained and reported in ways ordinary people can inspect?"),
                    card("Mutual care", "What work keeps people safe, connected and supported before crisis?"),
                    card("Local reinvestment", "What value can stay visible and useful close to home?"),
                    card("Data sovereignty", "What should people and communities control before data becomes value?"),
                ],
            },
            {
                "title": "Strong warning.",
                "body": "This page is not advice. Real funds, trusts, mutual structures, insurance, tax, land, cultural and Native Title matters need qualified and community-led review.",
            },
        ],
    },
    {
        "slug": "digital-twins",
        "file": "digital-twins.html",
        "title": "Digital twins that show assumptions",
        "description": "Plain-language digital twin and simulation layers for places, sources, self-sovereign data and local-first sharing.",
        "lede": "A digital twin can start with a photo, a note, a source link, a map pin and a question. The important part is showing assumptions before decisions harden.",
        "hero_image": "assets/img/heroes/digital-twins-hero.webp",
        "hero_alt": "A coastal workbench with a transparent island digital twin, ferry routes, source cards and translucent assumption layers",
        "actions": [("Read digital twins", "digital-twins.html"), ("Read boundaries", "boundaries.html")],
        "sections": [
            {
                "title": "Start small and honest.",
                "body": "The best first twin is humble: what is seen, when it was seen, who can verify it, what is unknown, and what should stay private.",
                "cards": [
                    card("Place mesh", "Photos, map pins, notes and source links for places and routes."),
                    card("Before and after", "Use modelling to compare options before physical change."),
                    card("Local-first data", "Keep sensitive raw context local where possible and share only what is chosen."),
                    card("Assumption ledger", "Record what the model knows, guesses and refuses to guess."),
                ],
            },
            {
                "title": "Self-sovereign sharing.",
                "body": "People should know what is public, private, permissioned, draft or sensitive before AI, maps or simulations touch it.",
                "list": [
                    "Public facts can be linked.",
                    "Private notes stay private by default.",
                    "Cultural and sensitive data needs stronger authority and care.",
                ],
            },
        ],
    },
    {
        "slug": "energy-resilience",
        "file": "energy-resilience.html",
        "title": "Energy and resilience",
        "description": "Solar, wave, tidal, sand batteries, microgrids, disaster kiosks, water, food, repair and space-weather scenarios without overclaiming.",
        "lede": "Energy resilience is not a magic machine. It is a layered question about generation, storage, repair, prioritisation, public institutions and what happens when systems are stressed.",
        "hero_image": "assets/img/heroes/energy-resilience-hero.webp",
        "hero_alt": "A coastal resilience system with solar panels, small wind, wave research buoys, a sand-battery cutaway, gardens and microgrid lines",
        "actions": [("Read Great Filters", "great-filters.html"), ("Visit Space Weather News", PUBLIC_LINKS["Space Weather News"])],
        "sections": [
            {
                "title": "Possible layers to model.",
                "body": "Each layer needs source checking and technical review before strong claims. The site can still help people see how the pieces might relate.",
                "cards": [
                    card("Solar and microgrids", "Local generation, islanding, safe priorities and maintenance."),
                    card("Wave and tidal ideas", "Research questions and source trails, not instant infrastructure."),
                    card("Sand batteries", "Thermal storage as a testable simulation and education pathway."),
                    card("Disaster kiosks", "Offline information, charging, check-ins and local repair support."),
                    card("Water and food loops", "Practical resilience beyond electricity."),
                    card("Space weather", "A plausible scenario for hardening systems without fear marketing."),
                ],
            },
            {
                "title": "Do not overpromise.",
                "body": "Energy pages must keep performance, cost, safety and readiness claims under review.",
            },
        ],
    },
    {
        "slug": "brisbane-space-summit",
        "file": "brisbane-space-summit.html",
        "title": "A bridge to Brisbane and peaceful space",
        "description": "How Civilisation of Sand could feed a Brisbane Peaceful Space and Civic AI Summit conversation without announcing partners, dates or venues.",
        "lede": "Civilisation of Sand can feed a possible summit with scenario rooms, source trails and a public simulation story. It is not announcing a summit.",
        "actions": [("Read summit bridge", "brisbane-space-summit.html"), ("Visit summit concept", PUBLIC_LINKS["Brisbane Peaceful Space and Civic AI Summit"])],
        "sections": [
            {
                "title": "What this bridge can offer.",
                "body": "The bridge keeps sand-to-stars language public-safe: local resilience, civic AI, peaceful space, sky literacy and review rooms before big claims.",
                "cards": [
                    card("Scenario rooms", "Great-filter prompts that could become review-table materials."),
                    card("Civic AI", "Local-first, source-aware, human-reviewed tools for public understanding."),
                    card("Peaceful space commons", "A values lane, not a defence or partner claim."),
                    card("Eclipse and sky literacy", "Wonder, observation and preparedness without hype."),
                ],
            },
            {
                "title": "Clear limits.",
                "body": "This site does not claim partners, speakers, venues or dates. The summit repo carries the support invitation and event-convening pathway.",
            },
        ],
    },
    {
        "slug": "learning-university",
        "file": "learning-university.html",
        "title": "A learning and research node",
        "description": "A possible future learning, research or university node framed as public questions, student projects and reviewable briefs.",
        "lede": "This is not a university claim. It is a possible learning layer where plausible sci-fi becomes testable assignments, source trails and practical public projects.",
        "actions": [("Read learning university", "learning-university.html"), ("Open Genesis layer", "genesis-acceleration.html")],
        "sections": [
            {
                "title": "What a learning node might do.",
                "body": "The useful public version turns big ideas into safe, reviewable learning tasks.",
                "cards": [
                    card("Citizen science", "Observation, source trails, small safe measurements and public data literacy."),
                    card("Materials education", "Sand, glass, ceramics, dust safety, thermal storage and recycling loops.", "material-stack.html"),
                    card("Responsible AI", "Prompting, source checking, local data care and human review.", "ai-robotics.html"),
                    card("Digital twins", "Place models that show assumptions and uncertainty.", "digital-twins.html"),
                    card("Cultural humility", "Knowing when a question is not yours to answer."),
                    card("Research briefs", "Clear notes for future reviewers, students or partners."),
                ],
            },
            {
                "title": "Turn wild into researchable.",
                "body": "A good student question names what is imagined, what is known, what is unknown, what source would help, what boundary applies, and what small step comes next.",
            },
        ],
    },
    {
        "slug": "roadmap",
        "file": "roadmap.html",
        "title": "A staged public path",
        "description": "A staged concept path from noticing and documenting through review rooms and deep-infrastructure questions.",
        "lede": "The path keeps the first steps useful and the deep steps conditional. It does not ask anyone to leap from curiosity to a megaproject.",
        "actions": [("Choose a reading path", "story-quests.html"), ("Open ecosystem links", "ecosystem-links.html")],
        "sections": [
            {
                "title": "Ten stages.",
                "body": "Each stage should leave behind something a person, organiser, reviewer or future agent can actually use.",
                "timeline": [
                    "Notice and document",
                    "Choose a reading path",
                    "Repair and make",
                    "Build trust and roles",
                    "Simulate and source-check",
                    "Test small lawful prototypes",
                    "Fund useful public infrastructure",
                    "Build public learning loops",
                    "Convene review rooms",
                    "Explore deep infrastructure only after review",
                ],
            },
            {
                "title": "The spirit of the path.",
                "body": "Joyful responsible abundance means practical local usefulness, more choice, better care, better evidence and no pressure to join a belief system.",
            },
        ],
    },
    {
        "slug": "ecosystem-links",
        "file": "ecosystem-links.html",
        "title": "Connected projects, clear pathways",
        "description": "Where neighbouring repos fit and what Civilisation of Sand should link out to instead of duplicating.",
        "lede": "Civilisation of Sand is a readable gateway into the wider ecosystem: story, materials, filters, source trails and concept bridges. Neighbouring repos carry the specialist detail.",
        "hero_image": "assets/img/heroes/ecosystem-map-hero.webp",
        "hero_alt": "A luminous ecosystem map on a sandstone table with connected project symbols, material samples and coastal island contours",
        "actions": [("Read sources", "sources.html"), ("Open roadmap", "roadmap.html")],
        "sections": [
            {
                "title": "Where to go next.",
                "body": "Use these bridges to send readers to the page that already has the deeper context or source trail.",
                "table": [
                    ("Civilisation of Sand", "Subterranean Kardashev-scale simulation, public story concept and connective ecosystem map.", "index.html"),
                    ("Mineral Moonshots", "Wider mineral and spacefaring atlas.", PUBLIC_LINKS["Mineral Moonshots"]),
                    ("Mineral Moonshots Materials", "Element-by-element mineral-sands map for silica, titanium, zircon and rare-earth discipline.", PUBLIC_LINKS["Mineral Moonshots Materials"]),
                    ("Straddie Maker-Space Lab", "Practical making, repair, tools, upcycling and maker forms.", PUBLIC_LINKS["Straddie Maker-Space Lab"]),
                    ("Straddie Maker-Space Sand", "Hands-on sand, material shelf, geopolymers, tool bench and product-passport bridge.", PUBLIC_LINKS["Straddie Maker-Space Sand"]),
                    ("Gumpi Ferry Lab", "Ferry data, source trail, photos, maps and simulation workflows.", PUBLIC_LINKS["Dunwich Gumpi Ferry Terminal Open Data Lab"]),
                    ("Ready S.E.T.", "Trust, jobs, training and co-op front door.", PUBLIC_LINKS["Ready S.E.T. Co-op Trust Hub"]),
                    ("Moreton Bay Community Wealth", "Wealth and mutual explainers without advice.", PUBLIC_LINKS["Moreton Bay Community Wealth and Mutuals"]),
                    ("Events Engine", "Source-backed event atlas and public event context.", PUBLIC_LINKS["Quandamooka Country Events Engine"]),
                    ("P4A", "Civic governance experiments and broader public-good architecture.", PUBLIC_LINKS["P4A"]),
                    ("P4A Rabbit Hole", "Deeper civic rooms for ledgers, law, sensorium ideas and public trust architecture.", PUBLIC_LINKS["P4A Rabbit Hole"]),
                    ("Brisbane Summit", "Possible civic AI and peaceful space convening/support pathway.", PUBLIC_LINKS["Brisbane Peaceful Space and Civic AI Summit"]),
                    ("AUKUS Space Gambit", "ISS / peaceful space / transition hypothesis lane.", PUBLIC_LINKS["AUKUS Space Gambit"]),
                    ("Grants Lab", "Grant readiness, profiles and opportunity matching.", PUBLIC_LINKS["Stradbroke Grants Lab"]),
                    ("Strange But True", "Local public support doorway and grounded service framing.", PUBLIC_LINKS["Strange But True"]),
                    ("Strange But True Community Ledger", "Opt-in public support records and honour-board pattern.", PUBLIC_LINKS["Strange But True Community Ledger"]),
                    ("Cosmic Nexus", "Mystery, myth, UAP, film, festival, travel and governance lanes kept separate from evidence claims.", PUBLIC_LINKS["Cosmic Nexus"]),
                    ("Quandamooka Film Festival", "Phone-first films, AI storyboarding, source trails, screenings and public/private story care.", PUBLIC_LINKS["Quandamooka Film Festival"]),
                ],
            }
        ],
    },
    {
        "slug": "boundaries",
        "file": "boundaries.html",
        "title": "The boundary is part of the design",
        "description": "Public boundaries for culture, consent, safety, sources, AI, robotics, children, environment, law and finance.",
        "lede": "This is a map of ideas, possible pathways, source trails and practical starting points. Real decisions belong with the right people, proper review and community consent.",
        "hero_image": "assets/img/heroes/boundaries-hero.webp",
        "hero_alt": "A calm coastal civic review room with a round table, source-card trays, privacy screens and light boundaries between public and private areas",
        "actions": [("Read sources", "sources.html"), ("Read boundaries", "boundaries.html")],
        "sections": [
            {
                "title": "What this site is not.",
                "body": "The public posture needs to be boringly clear so the imagination can stay useful.",
                "cards": [
                    card("Not an approval claim", "No QYAC, MMEICAC, Elders, Council, university, funder, school, business or community endorsement is implied."),
                    card("Not a mining proposal", "No claim that mineral extraction should restart, and no processing claim."),
                    card("Not an engineering plan", "Subterranean infrastructure is a simulation and story space unless properly reviewed."),
                    card("Not legal or financial advice", "Trust, fund, mutual, tax, insurance, Native Title and investment matters need qualified advice."),
                    card("Not health or safety advice", "Hazards, dust, radiation, biology, robotics and youth activities need proper controls."),
                    card("Not a defence claim", "Space-security and defence-adjacent ideas stay labelled as hypothesis or source trail."),
                ],
            },
            {
                "title": "Who gets to say no?",
                "body": "A useful simulation keeps refusal available. Cultural authority, landholder permission, environmental review, professional review, privacy and community consent are not obstacles to dodge. They are part of the design.",
                "list": [
                    "Proper cultural review.",
                    "Proper community consultation.",
                    "Landholder permission.",
                    "Environmental and engineering review.",
                    "Safety, legal, privacy and child/youth safeguards.",
                    "Source and copyright discipline.",
                ],
            },
        ],
    },
    {
        "slug": "sources",
        "file": "sources.html",
        "title": "Source trail and open questions",
        "description": "Local source documents, repo homes inspected, old brainstorm boundaries and claims needing future verification.",
        "lede": "This page records the source lanes behind the site. It does not turn old AI brainstorms into public truth.",
        "actions": [("Read boundaries", "boundaries.html"), ("Open ecosystem links", "ecosystem-links.html")],
        "sections": [
            {
                "title": "Local source documents used as draft context.",
                "body": "These labels describe local archive documents used to shape the public map. They are not presented as verified public authority.",
                "cards": [
                    card("Civilisation of Sand", "Mineral-sand and subterranean eco-civilisation brainstorm source."),
                    card("Straddie Sovereign Wealth Fund and Civilisation of Sand research briefs", "Community wealth, local resources, trust and governance context."),
                    card("The Amity Stratum and Subterranean City frameworks", "Legacy subterranean and Silica Citadel concept material."),
                    card("Silica Citadel Education", "Try Everything learning, roles and distributed classroom patterns."),
                    card("GenesisAI, Sands and Kardashev Civilisation", "High-energy technical acceleration source treated as concept until verified."),
                    card("Subterranean Crystal City Kardashev Ground Station", "Solar-event, underground city, respawn and Kardashev-adaptive scenario source."),
                    card("Solar Swarm Satellite Research Report", "Virtual Solar Swarm source for decentralised solar-system sensing and space-weather scenarios."),
                    card("Web3 Sensorium for Science Debate", "Source for comparing known science, fringe hypotheses, uncertainty and digital-twin evidence labels."),
                    card("Cosmic Nexus UAP, AI, AA, R&D", "Mystery, UAP, ancient-aeronautics, membership, research and ethics source, treated as scenario material."),
                    card("What if UAP are Underwater Civilizations", "Abyss Protocol source used as a deep wargame and ecological-politeness thought experiment, not as evidence."),
                    card("Quandamooka Film Festival", "Draft local sibling repo used for AI storyboard, screening and source-trail patterns."),
                    card("Virtual Minjerribah and Digital Twin sources", "Place mesh, simulation and source-aware modelling context."),
                ],
            },
            {
                "title": "Repo homes inspected.",
                "body": "The sibling repos shape link boundaries and tone. Civilisation of Sand links out instead of copying their work.",
                "table": [(name, "Public bridge target", url) for name, url in PUBLIC_LINKS.items()],
            },
            {
                "title": "Claims needing future source checking.",
                "body": "Before any page becomes confident about specific agencies, programs, model capabilities, funding, rare-earths, nuclear, fusion, biomining, defence or Indigenous data governance, it needs a fresh source pass from reliable current sources.",
                "list": [
                    "Government, executive-order or agency-specific claims.",
                    "Named AI tools and scientific model capabilities.",
                    "Material processing, rare-earth, radioactive or biological claims.",
                    "Engineering, safety, health, legal and financial claims.",
                    "Any cultural, consent or data-governance claim involving real groups.",
                ],
            },
        ],
    },
]



def write(path, content):
    target = ROOT / path
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content.rstrip() + "\n", encoding="utf-8")


def rel_prefix(path):
    return "../" if "/" in path else ""


def page_url(path):
    return SITE_URL if path == "index.html" else SITE_URL + path


def html_head(title, description, path):
    prefix = rel_prefix(path)
    full_title = f"{title} | {SITE_TITLE}"
    url = page_url(path)
    return dedent(f"""\
        <!doctype html>
        <html lang="en-AU">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="description" content="{escape(description)}">
          <meta name="theme-color" content="#064b4f">
          <meta property="og:title" content="{escape(full_title)}">
          <meta property="og:description" content="{escape(description)}">
          <meta property="og:type" content="website">
          <meta property="og:url" content="{escape(url)}">
          <meta property="og:image" content="{escape(SOCIAL_IMAGE)}">
          <meta property="og:site_name" content="{SITE_TITLE}">
          <meta name="twitter:card" content="summary_large_image">
          <meta name="twitter:title" content="{escape(full_title)}">
          <meta name="twitter:description" content="{escape(description)}">
          <meta name="twitter:image" content="{escape(SOCIAL_IMAGE)}">
          <title>{escape(full_title)}</title>
          <link rel="canonical" href="{escape(url)}">
          <link rel="icon" href="{prefix}assets/img/favicon.svg" type="image/svg+xml">
          <link rel="apple-touch-icon" href="{prefix}assets/img/apple-touch-icon.png">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@700;900&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="{prefix}assets/css/styles.css?v={ASSET_VERSION}">
        </head>
    """)


def link_attrs(url):
    if url.startswith("http"):
        return ' target="_blank" rel="noopener noreferrer"'
    return ""


def css_image_url(path):
    if path.startswith("assets/img/"):
        return "../img/" + path[len("assets/img/"):]
    return path


def render_actions(actions):
    if not actions:
        return ""
    items = []
    for index, (label, href) in enumerate(actions):
        klass = "button primary" if index == 0 else "button secondary"
        items.append(f'<a class="{klass}" href="{escape(href)}"{link_attrs(href)}>{escape(label)}</a>')
    return '<div class="hero-actions">' + "".join(items) + "</div>"


def render_cards(cards):
    return '<div class="card-grid">' + "\n".join(render_card(item) for item in cards) + "</div>"


def render_card(item):
    link = ""
    if item.get("link"):
        link = f'<a class="text-link" href="{escape(item["link"])}"{link_attrs(item["link"])}>{escape(item.get("link_text", "Open"))}</a>'
    return dedent(f"""\
        <article class="info-card">
          <h3>{escape(item["title"])}</h3>
          <p>{escape(item["body"])}</p>
          {link}
        </article>
    """)


def render_list(items):
    return '<ul class="plain-list">' + "".join(f"<li>{escape(item)}</li>" for item in items) + "</ul>"


def render_table(rows):
    body = []
    for first, second, third in rows:
        link = f'<a href="{escape(third)}"{link_attrs(third)}>Open</a>' if third else ""
        body.append(f"<tr><th>{escape(first)}</th><td>{escape(second)}</td><td>{link}</td></tr>")
    return '<div class="table-wrap"><table><thead><tr><th>Name</th><th>Role</th><th>Link</th></tr></thead><tbody>' + "".join(body) + "</tbody></table></div>"


def render_timeline(items):
    return '<ol class="timeline">' + "".join(f"<li><span>{index:02d}</span><p>{escape(item)}</p></li>" for index, item in enumerate(items, 1)) + "</ol>"


def render_section(section):
    parts = [
        '<section class="section">',
        '<div class="section-inner">',
        f'<div class="section-heading"><h2>{escape(section["title"])}</h2><p>{escape(section.get("body", ""))}</p></div>',
    ]
    if "cards" in section:
        parts.append(render_cards(section["cards"]))
    if "list" in section:
        parts.append(render_list(section["list"]))
    if "table" in section:
        parts.append(render_table(section["table"]))
    if "timeline" in section:
        parts.append(render_timeline(section["timeline"]))
    parts.extend(["</div>", "</section>"])
    return "\n".join(parts)


def render_standard_page(page):
    body = [html_head(page["title"], page["description"], page["file"])]
    body.append(f'<body data-page="{escape(page["slug"])}">')
    body.append('<a class="skip-link" href="#main">Skip to content</a>')
    body.append('<header class="site-header" data-site-header></header>')
    body.append('<main id="main">')
    hero_image = page.get("hero_image", "assets/img/civilisation-of-sand-hero.png")
    body.append(dedent(f"""\
        <section class="page-hero" style="--hero-image: url('{escape(css_image_url(hero_image))}');">
          <div class="hero-copy">
            <h1>{escape(page["title"])}</h1>
            <p>{escape(page["lede"])}</p>
            {render_actions(page.get("actions", []))}
          </div>
        </section>
    """))
    for section in page["sections"]:
        body.append(render_section(section))
    if page.get("bridge"):
        bridge = page["bridge"]
        body.append(dedent(f"""\
            <section class="section accent-band">
              <div class="section-inner split-panel">
                <div>
                  <h2>{escape(bridge["title"])}</h2>
                  <p>{escape(bridge["body"])}</p>
                </div>
                <a class="button primary" href="{escape(bridge["link"])}"{link_attrs(bridge["link"])}>{escape(bridge["label"])}</a>
              </div>
            </section>
        """))
    body.append('<nav class="sequence-nav" data-sequence-nav aria-label="Page sequence"></nav>')
    body.append('</main>')
    body.append('<footer class="site-footer" data-site-footer></footer>')
    body.append('<button class="back-to-top" type="button" data-back-to-top aria-label="Back to top">&uarr;</button>')
    body.append(f'<script src="assets/js/site-nav.js?v={ASSET_VERSION}"></script>')
    body.append('</body></html>')
    return "\n".join(body)


def page_description(slug, label):
    if slug == "index":
        return TAGLINE
    if slug == "site-map":
        return "A public index of every site page and outbound auraofintelligence project link."
    page = next((item for item in STANDARD_PAGES if item["slug"] == slug), None)
    if page:
        return page.get("description", label)
    return label



def aura_link_role(url):
    prefix = "https://auraofintelligence.github.io/"
    if not url.startswith(prefix):
        return "External link"
    target = url[len(prefix):].strip("/")
    if not target:
        return "auraofintelligence.github.io"
    parts = target.split("/", 1)
    repo = parts[0]
    path = f"/{parts[1]}" if len(parts) > 1 else "/"
    if path == "/":
        return f"{repo} repo home"
    return f"{repo}{path}"


def site_map_page_data():
    page_rows = [(label, page_description(slug, label), href) for slug, href, label in SEQUENCE]
    outbound_rows = [(name, aura_link_role(url), url) for name, url in PUBLIC_LINKS.items()]
    return {
        "slug": "site-map",
        "file": "site-map.html",
        "title": "Site map",
        "description": "A public index of Civilisation of Sand pages and outbound auraofintelligence project links.",
        "lede": "One place to find every public page in this site and every outbound auraofintelligence project bridge used by the Civilisation of Sand.",
        "actions": [("Open ecosystem map", "ecosystem-links.html"), ("Read sources", "sources.html")],
        "sections": [
            {
                "title": "Public pages.",
                "body": "The main reading path, including the sitemap itself, in sequence order.",
                "table": page_rows,
            },
            {
                "title": "Outbound auraofintelligence links.",
                "body": "External project bridges this site points to instead of duplicating another repo's job.",
                "table": outbound_rows,
            },
        ],
    }


def render_site_map():
    return render_standard_page(site_map_page_data())


def render_home():
    actions = [("Choose your doorway", "start.html"), ("Read the simulation", "simulation.html")]
    body = [html_head("Home", TAGLINE, "index.html")]
    body.append('<body data-page="index">')
    body.append('<a class="skip-link" href="#main">Skip to content</a>')
    body.append('<header class="site-header" data-site-header></header>')
    body.append('<main id="main">')
    body.append(dedent(f"""\
        <section class="home-hero" style="--hero-image: url('{css_image_url("assets/img/civilisation-of-sand-hero.png")}');">
          <div class="home-hero-copy">
            <h1>{SITE_TITLE}</h1>
            <p>{escape(TAGLINE)}</p>
            {render_actions(actions)}
            <p class="micro-note">Free to explore. Source-aware. You choose what to believe.</p>
          </div>
        </section>
        <section class="section first-steps">
          <div class="section-inner">
            <div class="section-heading centred">
              <h2>Choose a doorway</h2>
              <p>Read the concept from the angle that makes the most sense first.</p>
            </div>
            <div class="doorway-grid">
              <a class="doorway-card teal" href="start.html"><span>01</span><h3>What this is</h3><p>A plain statement of the site's current stage and limits.</p></a>
              <a class="doorway-card ochre" href="simulation.html"><span>02</span><h3>Story frame</h3><p>The subterranean city as a sci-fi concept, not a proposal.</p></a>
              <a class="doorway-card gold" href="in-situ-resources.html"><span>03</span><h3>Local resources</h3><p>Materials, repair and learning without extraction claims.</p></a>
              <a class="doorway-card blue" href="boundaries.html"><span>04</span><h3>Boundaries</h3><p>What stays conditional, reviewed and able to be refused.</p></a>
            </div>
          </div>
        </section>
    """))
    home_sections = [
        {
            "title": "What this site is for.",
            "body": "Civilisation of Sand is an early public concept map. It gives the sci-fi idea enough structure to inspect without pretending it is already a plan, product, game or institution.",
            "cards": [
                card("Subterranean story", "A thought experiment for asking how people might survive shocks and grow capability.", "subterranean-city.html"),
                card("Local resources", "Repair, reuse, material literacy and safe local loops.", "in-situ-resources.html"),
                card("Care and consent", "Boundaries that keep authority with the right people.", "boundaries.html"),
                card("Future records", "Questions about recognition and contribution, not a live scoring system.", "ledger.html"),
            ],
        },
        {
            "title": "What stage this is.",
            "body": "This is public concept work. It can inspire stories, research, learning and future design, but it should not sound more finished than it is.",
            "list": [
                "Not an engineering proposal.",
                "Not a live game or app.",
                "Not a civic program.",
                "Not community consent.",
            ],
        },
    ]
    for section in home_sections:
        body.append(render_section(section))
    body.append('<nav class="sequence-nav" data-sequence-nav aria-label="Page sequence"></nav>')
    body.append('</main>')
    body.append('<footer class="site-footer" data-site-footer></footer>')
    body.append('<button class="back-to-top" type="button" data-back-to-top aria-label="Back to top">&uarr;</button>')
    body.append(f'<script src="assets/js/site-nav.js?v={ASSET_VERSION}"></script>')
    body.append('</body></html>')
    return "\n".join(body)



CSS = r"""
:root {
  --deep-teal: #064b4f;
  --living-green: #2e7d73;
  --ocean-blue: #0c5a7a;
  --red-ochre: #b84a2f;
  --solar-gold: #dfa429;
  --sand: #f6f2ea;
  --sand-2: #efe4d2;
  --surface: #fffdf8;
  --graphite: #1f1f1f;
  --muted: #60706c;
  --border: #d9d3c3;
  --shadow: 0 18px 45px rgba(31, 31, 31, 0.12);
  --radius: 8px;
  --max: 1180px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--graphite);
  background: var(--sand);
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
}

body.menu-open {
  overflow: hidden;
}

a {
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
}

.skip-link {
  position: absolute;
  left: 1rem;
  top: -5rem;
  z-index: 20;
  background: var(--solar-gold);
  color: var(--graphite);
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
}

.skip-link:focus {
  top: 1rem;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(6, 75, 79, 0.97);
  color: #fffdf8;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.12);
}

.nav-shell {
  max-width: var(--max);
  margin: 0 auto;
  min-height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1.25rem;
}

.brand {
  font-family: "Merriweather", Georgia, serif;
  font-weight: 900;
  font-size: 1.15rem;
  text-decoration: none;
  white-space: nowrap;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 0.15rem;
}

.site-nav a {
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 700;
  padding: 0.7rem 0.65rem;
  border-radius: 6px;
  color: rgba(255, 253, 248, 0.86);
}

.site-nav a:hover,
.site-nav a.active {
  color: #fff;
  background: rgba(255, 253, 248, 0.12);
}

.menu-toggle {
  display: none;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: transparent;
  color: #fff;
  border-radius: 6px;
  min-width: 42px;
  min-height: 42px;
  font-size: 1.25rem;
}

.home-hero,
.page-hero {
  position: relative;
  isolation: isolate;
  min-height: min(760px, calc(100vh - 110px));
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image:
    linear-gradient(90deg, rgba(4, 48, 51, 0.91) 0%, rgba(4, 48, 51, 0.78) 34%, rgba(4, 48, 51, 0.18) 72%),
    var(--hero-image);
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid rgba(6, 75, 79, 0.25);
}

.home-hero::after,
.page-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(180deg, rgba(6, 75, 79, 0.08), rgba(6, 75, 79, 0.38));
  pointer-events: none;
}

.home-hero-copy,
.page-hero .hero-copy {
  width: min(var(--max), 100%);
  margin: 0 auto;
  padding: 5.25rem 1.25rem 4.5rem;
}

.home-hero h1,
.page-hero h1 {
  font-family: "Merriweather", Georgia, serif;
  margin: 0;
  line-height: 1.02;
  color: #fffdf8;
  text-shadow: 0 2px 22px rgba(0, 0, 0, 0.32);
}

.home-hero h1 {
  font-size: clamp(3.3rem, 8vw, 7.2rem);
  max-width: 10ch;
}

.page-hero h1 {
  font-size: clamp(3rem, 6vw, 6.25rem);
  max-width: 12ch;
}

.home-hero p,
.page-hero p {
  font-size: clamp(1.05rem, 2vw, 1.65rem);
  max-width: 34em;
  color: rgba(255, 253, 248, 0.94);
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.42);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.1rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.64rem 1rem;
  border-radius: 6px;
  border: 1px solid var(--deep-teal);
  font-weight: 800;
  font-size: 0.92rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button.primary {
  background: var(--deep-teal);
  color: #fffdf8;
}

.button.secondary,
.button.subtle {
  background: transparent;
  color: var(--deep-teal);
}

.button.subtle {
  border-color: var(--border);
}

.home-hero .button.primary,
.page-hero .button.primary {
  background: #fffdf8;
  border-color: #fffdf8;
  color: var(--deep-teal);
}

.home-hero .button.secondary,
.page-hero .button.secondary {
  border-color: rgba(255, 253, 248, 0.78);
  color: #fffdf8;
}

.micro-note {
  margin-top: 1.1rem;
  font-size: 0.9rem;
  color: rgba(255, 253, 248, 0.8);
}

.section {
  padding: 4.5rem 1.25rem;
}

.section-inner {
  max-width: var(--max);
  margin: 0 auto;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 2rem;
}

.section-heading.centred {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  font-family: "Merriweather", Georgia, serif;
  font-size: 2rem;
  line-height: 1.15;
  margin: 0 0 0.75rem;
  color: var(--deep-teal);
}

h3 {
  margin: 0 0 0.55rem;
  color: var(--deep-teal);
  font-size: 1.05rem;
}

p {
  margin: 0 0 1rem;
}

.doorway-grid,
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.doorway-card,
.info-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem;
  box-shadow: 0 8px 28px rgba(31, 31, 31, 0.06);
}

.doorway-card {
  min-height: 220px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.doorway-card span {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid currentColor;
  border-radius: 50%;
  font-weight: 900;
}

.doorway-card.teal {
  color: var(--deep-teal);
}

.doorway-card.ochre {
  color: var(--red-ochre);
}

.doorway-card.gold {
  color: #9b6a00;
}

.doorway-card.blue {
  color: var(--ocean-blue);
}

.plain-list {
  display: grid;
  gap: 0.7rem;
  padding-left: 1.2rem;
  max-width: 760px;
}

.plain-list li::marker {
  color: var(--red-ochre);
}

.text-link {
  color: var(--deep-teal);
  font-weight: 800;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.accent-band {
  background: linear-gradient(135deg, #e4f0eb, #f7edda);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.split-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.table-wrap {
  overflow-x: auto;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;
}

th,
td {
  padding: 0.9rem;
  border-bottom: 1px solid var(--border);
  text-align: left;
  vertical-align: top;
}

th {
  color: var(--deep-teal);
  width: 30%;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.timeline li {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem;
}

.timeline span {
  color: var(--red-ochre);
  font-weight: 900;
}

.sequence-nav {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 1.25rem 4rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.sequence-nav a {
  flex: 1;
  text-decoration: none;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem;
  background: var(--surface);
  color: var(--deep-teal);
  font-weight: 800;
}

.sequence-nav a:last-child {
  text-align: right;
}


.site-footer {
  background: #063f43;
  color: #fffdf8;
  padding: 3rem 1.25rem;
}

.footer-inner {
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(280px, 1.1fr) minmax(280px, 0.9fr);
  gap: 2rem;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1rem;
}

.footer-links a {
  color: #fffdf8;
}

.footer-links span {
  color: rgba(255, 253, 248, 0.78);
}

.back-to-top {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--deep-teal);
  background: var(--surface);
  color: var(--deep-teal);
  font-weight: 900;
  box-shadow: var(--shadow);
  cursor: pointer;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

@media (max-width: 980px) {
  .home-hero,
  .page-hero {
    min-height: min(720px, calc(100vh - 96px));
    background-position: center right;
  }

  .home-hero-copy,
  .page-hero .hero-copy {
    padding: 4rem 1.25rem 3rem;
  }

  .doorway-grid,
  .card-grid,
  .timeline {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .site-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 62px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    background: var(--deep-teal);
    padding: 0.75rem 1.25rem 1.25rem;
  }

  .site-nav.open {
    display: flex;
  }

  .site-nav a {
    padding: 0.9rem;
  }
}

@media (max-width: 680px) {
  .home-hero,
  .page-hero {
    min-height: auto;
    background-image:
      linear-gradient(90deg, rgba(4, 48, 51, 0.94) 0%, rgba(4, 48, 51, 0.84) 58%, rgba(4, 48, 51, 0.4) 100%),
      var(--hero-image);
  }

  .home-hero h1,
  .page-hero h1 {
    font-size: 2.35rem;
  }

  .home-hero-copy,
  .page-hero .hero-copy {
    padding: 4rem 1rem 3.25rem;
  }

  .home-hero h1 {
    font-size: 2.5rem;
  }

  .home-hero p,
  .page-hero p {
    font-size: 0.94rem;
    line-height: 1.48;
  }

  .home-hero .hero-actions {
    gap: 0.55rem;
    margin-top: 0.8rem;
  }

  .home-hero .button {
    min-height: 40px;
    padding: 0.55rem 0.78rem;
  }

  .home-hero .micro-note {
    font-size: 0.84rem;
    margin-top: 0.75rem;
  }

  .first-steps {
    padding-top: 2.2rem;
  }

  .section {
    padding: 3rem 1rem;
  }

  .doorway-grid,
  .card-grid,
  .timeline {
    grid-template-columns: 1fr;
  }

  .split-panel,
  .sequence-nav,
  .footer-inner {
    flex-direction: column;
    grid-template-columns: 1fr;
  }

  .sequence-nav {
    display: grid;
  }

  .sequence-nav a:last-child {
    text-align: left;
  }

  .brand {
    font-size: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition: none !important;
  }
}
"""


def site_nav_js():
    data = {
        "primary": [{"slug": slug, "href": href, "label": label} for slug, href, label in PRIMARY_PAGES],
        "sequence": [{"slug": slug, "href": href, "label": label} for slug, href, label in SEQUENCE],
    }
    return f"""\
const SITE_MAP = {json.dumps(data, indent=2)};

function sitePrefix() {{
  return '';
}}

function withPrefix(href) {{
  if (href.startsWith('http')) return href;
  return sitePrefix() + href;
}}

function renderHeader() {{
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  const current = document.body.dataset.page;
  const links = SITE_MAP.primary.map((item) => {{
    const active = item.slug === current ? ' active' : '';
    return `<a class="${{active.trim()}}" href="${{withPrefix(item.href)}}">${{item.label}}</a>`;
  }}).join('');
  header.innerHTML = `
    <div class="nav-shell">
      <a class="brand" href="${{withPrefix('index.html')}}">Civilisation of Sand</a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle>&#9776;</button>
      <nav class="site-nav" data-site-nav aria-label="Primary navigation">${{links}}</nav>
    </div>
  `;
  const toggle = header.querySelector('[data-menu-toggle]');
  const nav = header.querySelector('[data-site-nav]');
  toggle.addEventListener('click', () => {{
    const open = nav.classList.toggle('open');
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }});
}}

function renderFooter() {{
  const footer = document.querySelector('[data-site-footer]');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-inner">
      <div>
        <h2>Civilisation of Sand</h2>
        <p>A public sci-fi story backbone about capability, local resources, AI, robotics, making, repair, care and joyful responsible abundance.</p>
      </div>
      <div class="footer-links">
        <a href="${{withPrefix('ecosystem-links.html')}}">Ecosystem links</a>
        <a href="${{withPrefix('site-map.html')}}">Site map</a>
        <a href="${{withPrefix('boundaries.html')}}">Boundaries</a>
        <a href="${{withPrefix('sources.html')}}">Sources</a>
        <a href="{README_URL}">README</a>
        <a href="{LICENCE_URL}">Licence</a>
        <a href="{REPO_URL}">GitHub repo</a>
        <span>Last updated: {LAST_UPDATED}</span>
      </div>
    </div>
  `;
}}

function renderSequence() {{
  const nav = document.querySelector('[data-sequence-nav]');
  if (!nav) return;
  const current = document.body.dataset.sequenceId || document.body.dataset.page;
  const index = SITE_MAP.sequence.findIndex((item) => item.slug === current);
  if (index < 0) {{
    nav.remove();
    return;
  }}
  const prev = SITE_MAP.sequence[index - 1];
  const next = SITE_MAP.sequence[index + 1];
  const parts = [];
  if (prev) parts.push(`<a href="${{withPrefix(prev.href)}}">&larr; ${{prev.label}}</a>`);
  if (next) parts.push(`<a href="${{withPrefix(next.href)}}">${{next.label}} &rarr;</a>`);
  nav.innerHTML = parts.join('');
}}

function wireBackToTop() {{
  const button = document.querySelector('[data-back-to-top]');
  if (!button) return;
  window.addEventListener('scroll', () => {{
    button.classList.toggle('visible', window.scrollY > 520);
  }}, {{ passive: true }});
  button.addEventListener('click', () => window.scrollTo({{ top: 0, behavior: 'smooth' }}));
}}

renderHeader();
renderFooter();
renderSequence();
wireBackToTop();
"""



def readme():
    pages = "\n".join(f"- `{href}` - {label}" for _, href, label in SEQUENCE)
    return f"""\
# Civilisation of Sand

A public, GitHub Pages-ready static site for the Civilisation of Sand: a sci-fi story backbone about a subterranean city simulation for capability growth, material literacy, AI and robotics, digital twins, care, consent and joyful responsible abundance.

## Local Preview

From this folder:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

There is no build step. The files are plain HTML, CSS and JavaScript.

## Page Map

{pages}


## Source Posture

This site treats older AI brainstorms as draft context, not public authority. It keeps the underground city as a plausible sci-fi simulation and source-aware learning map. Real decisions need cultural review, community consent, landholder permission, environmental review, engineering review, safety review, legal advice where relevant, funding and governance checks, and qualified professional input.

## Licence

This repository uses the [Civilisation of Sand Public Planning Licence](./LICENCE.md).

The short version: public non-commercial learning, remixing and community use are welcome with attribution. Commercial rights in the Civilisation of Sand world, images, planning material, merch, media, courses and derivative products are reserved. Commercial use requires written permission by contacting Luke via GitHub or the [Strange But True contact form](https://auraofintelligence.github.io/strange-but-true/contact.html).

## GitHub

Do not push this repo to GitHub unless explicitly asked. If this folder is not yet a Git repo, ask before running `git init`.
"""


def source_notes():
    return """\
# Source Notes

These notes summarise what shaped the site. They avoid local absolute paths so the public site does not expose a local machine layout.

## Local Archive Source Labels

- Civilisation of Sand
- Straddie Sovereign Wealth Fund and Civilisation of Sand research briefs
- Wave Energy Design Research and Validation
- Designing a Sovereign Island Civilization
- The Amity Stratum
- Subterranean City Multigenerational Resilience Framework
- Silica Citadel Education
- GenesisAI, Sands and Kardashev Civilization
- Subterranean Crystal City Kardashev Ground Station
- Solar Swarm Satellite Research Report
- Web3 Sensorium for Science Debate
- Cosmic Nexus UAP, AI, AA, R&D
- What if UAP are Underwater Civilizations
- Quandamooka Film Festival
- Mineral Moonshots materials and element pages
- Straddie Maker-Space Lab sand, tool and geopolymer pages
- A Strategic Straddie Dossier
- Virtual Minjerribah Design Document
- PLFC Digital Twins for Moreton Bay Ecosystem
- New Scientific Renaissance
- AI-Discovered Materials and Bio-Integration
- Subterranean Eco-City Quandamooka Development

## Treatment

- Old AI brainstorms were used for idea architecture, not public certainty.
- GenesisAI / Kardashev material was translated into public-safe questions and marked as needing verification.
- Sibling repos were inspected for clear boundaries and link-out targets.
- Civilisation of Sand provides the orientation path, story engine and concept spine.
- Strange But True Community Ledger shaped the opt-in honour board pattern.
- Civilisation of Sand keeps public/private, owner-control and status-label rules visible.
- P4A and its Rabbit Hole shaped public-good ledger, legal memory and civic trust language.
- Cosmic Nexus shaped the story/evidence/governance lane separation for mystery, myth, UAP, film, festival and travel-world material.
- Mineral Moonshots shaped the local mineral-sands map: silica, titanium pathways, zircon ceramics and narrow rare-earth discipline.
- Straddie Maker-Space Lab shaped the practical material bench: sand learning board, tool shelf, geopolymers, tip loop, public material wall and material passports.
- Quandamooka Film Festival shaped the story-room pathway for phone-first films, AI storyboarding, screenings, source trails and public/private story care.
- Solar Swarm, Web3 Sensorium and Abyss Protocol material shaped the deeper Great Filters as labelled scenario rooms, not public evidence claims.
"""


def site_map_doc():
    pages = "\n".join(f"- {label}: `{href}`" for _, href, label in SEQUENCE)
    outbound = "\n".join(f"- {name}: {url}" for name, url in PUBLIC_LINKS.items())
    return f"""\
# Site Map

## Pages

{pages}


## Outbound Auraofintelligence Links

{outbound}

## Shared Assets

- `assets/css/styles.css`
- `assets/js/site-nav.js`
- `assets/img/civilisation-of-sand-hero.png`
- `assets/img/favicon.svg`
- `assets/img/apple-touch-icon.png`
- `assets/img/link-preview.png`
- `assets/img/concepts/civilisation-of-sand-concept.png`
"""


def favicon_svg():
    return """\
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Civilisation of Sand mark">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#063f43"/>
      <stop offset="1" stop-color="#0c6a63"/>
    </linearGradient>
    <linearGradient id="sand" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#e7b84a"/>
      <stop offset="1" stop-color="#b84a2f"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#sky)"/>
  <path d="M9 38c8-6 15-7 23-4s15 2 23-4v11c-8 6-15 7-23 4S17 43 9 49Z" fill="url(#sand)"/>
  <path d="M18 24c7-8 21-8 28 0" fill="none" stroke="#fffdf8" stroke-width="4" stroke-linecap="round"/>
  <path d="M24 32c5-5 11-5 16 0" fill="none" stroke="#fffdf8" stroke-width="4" stroke-linecap="round" opacity=".9"/>
  <path d="M32 13v36" stroke="#f6f2ea" stroke-width="3" stroke-linecap="round" opacity=".72"/>
  <circle cx="32" cy="32" r="5" fill="#fffdf8"/>
</svg>
"""



def main():
    write("index.html", render_home())
    for page in STANDARD_PAGES:
        write(page["file"], render_standard_page(page))
    write("site-map.html", render_site_map())
    write("assets/css/styles.css", CSS)
    write("assets/js/site-nav.js", site_nav_js())
    write("assets/img/favicon.svg", favicon_svg())
    write("docs/source-notes.md", source_notes())
    write("docs/site-map.md", site_map_doc())
    write("README.md", readme())
    write(".nojekyll", "")


if __name__ == "__main__":
    main()
