# Right Place, Right Time

<!-- github-organisation:start -->

## Project links and history

- First substantive build: 12 July 2026.
- GitHub repository: [right-place-right-time](https://github.com/auraofintelligence/right-place-right-time).
- Public site: [visit the public site](https://auraofintelligence.github.io/right-place-right-time/).

## Related public projects

Each link below reflects an evidenced family, lineage or direct connection. This project has 7 relevant public connections.

### Direct and other supported connections

- [moreton-bay-autonomous-mobility](https://github.com/auraofintelligence/moreton-bay-autonomous-mobility) - [public page](https://auraofintelligence.github.io/moreton-bay-autonomous-mobility/) - explicit cross-reference.
- [p4a-xyz-cinema](https://github.com/auraofintelligence/p4a-xyz-cinema) - [public page](https://p4a.xyz/) - explicit cross-reference.
- [UN-world-days](https://github.com/auraofintelligence/UN-world-days) - [public page](https://auraofintelligence.github.io/UN-world-days/) - explicit cross-reference.

### Luke public profile, portfolio and patronage

- [aura-and-luke](https://github.com/auraofintelligence/aura-and-luke) - [public page](https://auraofintelligence.github.io/aura-and-luke/) - shared tooling suite.
- [auraofintelligence.github.io](https://github.com/auraofintelligence/auraofintelligence.github.io) - [public page](https://auraofintelligence.github.io/) - shared tooling suite.
- [meet-luke](https://github.com/auraofintelligence/meet-luke) - [public page](https://auraofintelligence.github.io/meet-luke/) - explicit cross-reference, shared tooling suite.
- [Queens_Venture](https://github.com/auraofintelligence/Queens_Venture) - [public page](https://auraofintelligence.github.io/Queens_Venture/) - explicit cross-reference, shared tooling suite.

<!-- github-organisation:end -->

A tiered patronage and portfolio site for Luke Nathan Hayes, built so patrons and recurring sponsors can keep one systems-builder free to be where the work needs him. Bold, unashamed, hopeful, ethical, imperfect. Provisional by design; the seams are worn on the outside.

**Working title.** Even the name is a seam: see `seams.html`.

## Public page

- [Open Right Place, Right Time](https://auraofintelligence.github.io/right-place-right-time/)

## The architecture (the actual deliverable)

One canonical core, four thin geographic skins. The thing the handoff brief warned against (building the core four times) is prevented structurally:

- **`assets/core.js`**: THE canonical Luke core: identity, spine candidates, ethos, and the full project register on four axes (scale / horizon / portability / register). Every tier page renders from it. Change it once, all four tiers inherit in the same breath.
- **`index.html`**: the core page: the open spine slot, the four doors, the person layer, the value-for-value promise.
- **`local.html` / `australia.html` / `oceania.html` / `world.html`**: the four thin skins. Static pitch copy per tier; project shelves rendered from the core data file.
- **`support.html`**: the shared support module, inherited from the working Strange but True pattern: the three-rung ladder, four support shapes (structure built, amounts deliberately absent), commission-light payment rails framing, and the empty-on-purpose Honour Board.
- **`register.html`**: the static, no-JavaScript source of truth: all placements as a plain table, plus the four axes. If it disagrees with `core.js`, the seam is showing: fix `core.js` first.
- **`seams.html`**: the open questions only Luke can answer, the known seams, and the change log.

## Design language

Inherited from the p4a cinema family (`styles.css` is the family base with a chapter theme appended, never edited in). Two registers, same grammar as the Native Nations chapter:

- **Gold, solid border** = proven record: live, citable, real today.
- **Purple, dashed border** = proposal, Luke's own provisional frames: react, revise, refuse.

Progressive enhancement contract: self-hosted fonts, no CDN; without JavaScript every panel is visible and `register.html` covers the content; `prefers-reduced-motion` honoured in CSS and JS.

## Standing decisions honoured

- Value for value: any support that returns something returns something real.
- The mobilisation of care, never the other m-word.
- FPIC is the floor: Quandamooka-named projects move only with the right yeses.
- The long life-log is a quarry, not a template.
- Money/tax/fee specifics get verified live before anything is charged; nothing here is financial or legal advice.
- Intimate-territory repos are unlisted pending Luke's public/private call, an option weighed on the seams page, not a rule imposed.

## Before treating this public draft as finished

1. Luke answers the six open questions on `seams.html` (spine, boundary, audiences, amounts, axes, name).
2. Swap placeholder patron/sponsor conversations for real rails once amounts exist.
3. Re-shelve or extend the register from the existing repo audit (`aura-knowledge-base/_planning/repo-audit.md`) and machine catalogue (`strange-but-true-field-library/data/repos.json`).
4. Update the i-C-infinity music site for the finished fourth album (24 songs), then let this site link deeper.

## Related pages

- [Meet Luke](https://auraofintelligence.github.io/meet-luke/)
- [P4A cinematic presentation](https://auraofintelligence.github.io/p4a-xyz-cinema/)
- [Queens Venture](https://auraofintelligence.github.io/Queens_Venture/)

## Licence

Strange But True Public Source Licence: see `LICENCE.md`. Non-commercial use is a gift; commercial rights stay with Luke Nathan Hayes.

---

Drafted by Luke × Claude on Quandamooka Country (Minjerribah), provisional by design, corrections welcome.
