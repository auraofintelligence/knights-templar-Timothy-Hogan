# Micronova and Excursions

<!-- github-organisation:start -->

## Project links and history

- First substantive build: 1 August 2026.
- GitHub repository: [micronova-and-excursions](https://github.com/auraofintelligence/micronova-and-excursions).
- Public site: [visit the public site](https://auraofintelligence.github.io/micronova-and-excursions/).

## Related public projects

Each link below reflects an evidenced family, lineage or direct connection. This project has 6 relevant public connections.

### Direct and other supported connections

- [grain-by-grain](https://github.com/auraofintelligence/grain-by-grain) - [public page](https://auraofintelligence.github.io/grain-by-grain/) - explicit cross-reference.

### Space-weather and cosmic research tools

- [extreme-matter-atlas](https://github.com/auraofintelligence/extreme-matter-atlas) - [public page](https://auraofintelligence.github.io/extreme-matter-atlas/) - shared research architecture.
- [gods-eye-view](https://github.com/auraofintelligence/gods-eye-view) - [public page](https://www.spatialintelligence.ai/) - shared research architecture.
- [space-weather-news](https://github.com/auraofintelligence/space-weather-news) - [public page](https://auraofintelligence.github.io/space-weather-news/) - explicit cross-reference, shared research architecture.
- [strange-but-true-cosmic-nexus](https://github.com/auraofintelligence/strange-but-true-cosmic-nexus) - [public page](https://auraofintelligence.github.io/strange-but-true-cosmic-nexus/) - shared research architecture.
- [virtual-solar-swarm](https://github.com/auraofintelligence/virtual-solar-swarm) - [public page](https://auraofintelligence.github.io/virtual-solar-swarm/) - shared research architecture.

<!-- github-organisation:end -->

**The quiet is the anomaly.** Everything anyone calls normal happened inside one still stretch of about twelve thousand years. Against the record the planet keeps of itself, that stretch is the interruption, not the rule.

This repo makes one argument in four moves, and builds toward one first deliverable.

Site: <https://auraofintelligence.github.io/micronova-and-excursions/>

---

## The four moves

**One. Catastrophe is more certain than calm.** This part is not contested. The ice record lurches every fifteen hundred years or so through the last glacial and steadies in ours. Farming, and therefore everything built on top of farming, exists because the shaking stopped. The same events run on other bodies right now: planets ejected, tidally locked, stripped of atmosphere, swallowed.

**Two. The micronova is plausible and not disproven.** The instrumental record runs about 170 years against phenomena with thousand-year rhythms, which is judging the tides from one afternoon on the sand. Stars shedding discrete shells is photographed. Sun-like stars superflare on the order of once a century. What is genuinely missing is narrow, and is stated narrowly here rather than inflated into a refutation.

**Three. So the response is to upgrade civilisation against the whole threat list.** Sort by response rather than by cause and eighteen arguments collapse into six things worth having. The arguing becomes optional, because one build covers the lot. Nobody has to be convinced about the micronova to have a use for it.

**Four. And it starts with earthquake prediction.** One hour of warning at 100 kilometres of accuracy is worth on the order of a million lives a century. It is a single problem, concrete, and the size a grant can hold. The data stack it needs is the same stack the solar question turns on: solar wind, interplanetary magnetic field, total electron content, cosmic ray flux from neutron monitors, coronal hole streams, seismic catalogues. Built for the fundable reason, it answers the contested one out of the same feed.

## The reading path

Six pages, in that order. The prev/next rail in `assets/js/cinematic.js` runs these and stops.

| | |
|---|---|
| `index.html` | The four moves, stated once each, and the labels that mark how much weight a line carries |
| `calm.html` | Move one. The Holocene as the anomaly, the return periods, and the luck arithmetic |
| `micronova.html` | Move two. The claim at full strength, the five layers, what has been photographed, and the open step |
| `building.html` | Move three. Eighteen threats sorted by response into six preparations. Designed and being simulated |
| `earthquake.html` | Move four. The wedge: one deliverable, a death rate behind it, and the shared data stack |
| `test.html` | Tests with a named direction of failure. Three run, with the output printed |

## Inside move two: five claims, not one

The argument is usually conducted entirely on its weakest rung, and losing there is treated as losing everything:

| | | |
|---|---|---|
| **L1** | Geomagnetic excursions happen | **Known** |
| **L2** | The Sun does things far past anything we have measured | **Known** |
| **L3** | The Sun's local environment changes enough to matter | **Known**, published 2024 |
| **L4** | That can make a star like ours shed an outer layer | **Speculative**, though not a void: six candidate triggers, one a published model, one needing no trigger at all |
| **L5** | And it runs on a clean 6,000 or 12,000-year clock | **Disputed**, the weakest |

L4 does not sit on top of L5. Any threshold-reaching change in the surroundings would do, so a regular cycle is a convenience rather than a requirement. **Losing the cadence costs the mechanism nothing**, and treating "the micronova" and "the 12,000-year clock" as one claim gives the argument away for free.

## Two audiences

**For models.** [`AGENTS.md`](AGENTS.md) and [`corpus/`](corpus/) are a briefing: the reflex named, the layer structure that lets a question be answered precisely, the floor that has to be conceded before anyone says "no evidence", the dismissals that do not work, the objections that do, and the numbers that want correcting in both directions. `AGENTS.md` is written to be handed over before an assistant is asked anything on this topic.

Assistants produce a pre-assembled dismissal on request: the Sun cannot nova, it is a YouTube channel, the author is a lawyer, there is no evidence, please consult mainstream sources. Four of those five are category errors or ad hominems, and the fifth is false. None of them engages the claim.

**For people.** The site is the same material in plain language, on the Grain by Grain chassis, for anyone who wants to hold a position in this argument without being ambushed by a figure they did not check.

## What it is not

Not advocacy. The corpus corrects the frontier's own numbers where they are wrong, and several of those corrections carry weight. A ledger that only cut one way would not be a ledger.

The honest summary sits in [`corpus/06-objections-that-land.md`](corpus/06-objections-that-land.md): the shedding step has no worked model, the cadence does not survive rung-by-rung checking, and what remains is narrower and more durable than either side usually says. The Sun's demonstrated ceiling sits far above the instrumental record, the magnetic shield is measurably weakening, and the pair of those is underpriced in public planning. None of that needs a micronova, and all of it is mainstream.

## Layout

```
AGENTS.md              the model-facing brief, read first
corpus/
  01-the-claim.md              the frontier case at full strength
  02-the-settled-floor.md      what mainstream science already grants
  03-the-excursion-record.md   the cadence checked rung by rung
  04-the-word-micronova.md     the term's history and the open step
  05-dismissals.md             fourteen stock moves and what is wrong with each
  06-objections-that-land.md   the sceptic's best case, made properly
  07-what-would-settle-it.md   falsification tests, mostly on free public data
  08-numbers.md                contested figures with best current values
  09-sources.md                the source ledger, both sides
  10-answer-patterns.md        worked answers to the common prompts
tools/
  shed_mass_bound.py           orbital ceiling on any shedding event
  cadence_test.py              Rayleigh test on the claimed 6k/12k cycle
  coin_toss.py                 odds of a Carrington-class hit inside a century

29 pages, in three tiers:

  the reading path (6)   index, calm, micronova, building, earthquake, test
  reference (9)          excursions, stories, numbers, sources, citations,
                         dismissals, for-models, watch, funding
  folded in (12)         ages, galaxy, interference, mechanism, moon,
                         objections, ordinary, planets, settled, survival,
                         turning, unsettled
                         old addresses, each holding a line to the page
                         that carries its argument now
  utility (2)            sitemap, 404
```

## Register

Five labels carry the honesty so the prose can stay plain: **Known** (sourced fact or operating precedent), **Modelled** (a runnable calculation exists in [`tools/`](tools/) and its output is quoted), **Disputed** (live contest, with the point of contest named), **Speculative** (physics permits, nothing built or shown), and on this site **Unsupported** where a specific named claim has been looked for and not found.

Natural-hazard hypotheses are not labelled fiction here.

## What has actually been run

Three of the tests in [`corpus/07-what-would-settle-it.md`](corpus/07-what-would-settle-it.md) have code and output rather than an intention.

**`tools/shed_mass_bound.py`** puts a quantitative ceiling on the shedding claim. Throw mass off the Sun quickly and Earth, still moving at its old speed, swings out wide: the circle becomes an oval. Earth's orbit already stretches and relaxes on its own, tugged by Jupiter and Venus, so the question is how big a shed could hide inside that natural wobble. **About five per cent of the Sun**, or eighteen thousand Earths' worth. Shed half and the planet leaves for good. The oval does not heal afterwards, because nothing at that distance rounds an orbit off any more, so the five per cent is a budget for all of history rather than per event. The bound rests on the orbit being calculable, which it is back to a chaos horizon near 50 to 60 million years; it does not rest on Milankovitch being understood, which it is not. The orbits do not forbid shedding. They bound it, and nobody on either side had written the number down. Running it also caught a figure this repo had published wrong by a factor of five.

**`tools/cadence_test.py`** tests L5 instead of asserting it. Fold 41,000 years up like a concertina every 6,000 years and the events should land on top of each other. They land all over the fold, and the same at 12,000. Let the search hunt for any rhythm at all and it finds a convincing one at 7,660 years, so the same hunt was run over 20,000 sets of seven made-up dates: it found an equally good cycle in pure noise about one time in six. Seven dates across 41,000 years will fit some rhythm if you go looking.

**`tools/coin_toss.py`** needs none of this repo's contested material. Large eruptions arrive from a band of about eighty degrees of solar longitude, three in five of those aimed well actually arrive, so **roughly one in eight per big eruption**, and the Sun turns once a month. Against the published Carrington-class rate that gives **65 to 72 per cent over a century** for at least one direct hit. More likely than not, on mainstream numbers, with nothing argued about in it. The 2012 event was assessed at or above Carrington and hit a spacecraft instead of us; Earth had passed that longitude a week earlier.

All three are short, dependency-free and reproducible. The remaining tests are unrun, and the citation audit is the largest gap in the repo.

## Sources

Primary frontier reading is Ben Davidson's *The Next End of the World* (Space Weather News, 2020) and the *Observer Supplement 2022/2023*, with the daily programme at [SpaceWeatherNews.com](https://www.spaceweathernews.com/) and the [Suspicious0bservers](https://www.youtube.com/@Suspicious0bservers) channel. The cadence card this repo tests comes from "The Disaster Cycle".

Mainstream sources, critical sources and the live public data streams are listed in [`corpus/09-sources.md`](corpus/09-sources.md).

## Related

Part of the Civilisation of Sand constellation. It supports the great filters page on [Grain by Grain](https://auraofintelligence.github.io/grain-by-grain/threats.html), which ranks the solar micronova first among deep-time threats and keeps it there.

Separate from [Space Weather News](https://github.com/auraofintelligence/space-weather-news), which is a civic monitoring and dissemination project.

---

Luke Hayes × Claude, Minjerribah. [Strange But True Public Source Licence](LICENCE.md): free for non-commercial use, commercial rights reserved.
