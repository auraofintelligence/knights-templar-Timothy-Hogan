# Australian Visa & Activity Atlas

A source-led guide for Australian passport holders comparing permission pathways for tourism, business meetings, speaking, book launches, teaching, remote work, entrepreneurship, trade and creative work.

The atlas now has 24 dated country guides and 288 activity pathways, while retaining a 201-place world baseline so no destination disappears before its deeper activity review. The 21 August 2026 batch added Germany, Italy, Spain, Uruguay, Japan, South Korea, Malaysia, Indonesia, the United Arab Emirates, Saudi Arabia, Qatar, Kenya and Palau. It builds on [Australian World Travel](https://auraofintelligence.github.io/Australian-world-travel/) by asking a more useful question:

> Can I legally do the activity I am travelling to do?

## What is different here

The atlas separates two gates:

1. **Entry permission** — may an Australian passport holder enter under the proposed visa or exemption?
2. **Activity permission** — does that status actually permit the planned meeting, talk, teaching, sale, performance or work?

Easy entry is not treated as permission to work. Ambiguous cases are marked **Confirm in writing**, not guessed.

## Public site

The site is designed for GitHub Pages and uses plain HTML, CSS and JavaScript. There is no build step and no tracking.

[Open the live Australian Visa & Activity Atlas](https://auraofintelligence.github.io/Australian-visa-activity-atlas/).

The visual layer includes three generated panoramic heroes for the world, cultural exchange and preparation. Their prompts and provenance are recorded in `assets/images/README.md`.

## Ready for anywhere

`prepare.html` is the broad-spectrum preparation console. It offers Always ready, Invited tonight, Flying in 72 hours, Long-lead upkeep, and Arrival and return views across identity, entry, hosts, health, money, devices, logistics, public work, legalisation, cultural consent and post-trip learning.

Only checklist status is stored in the visitor's browser. The public repo does not collect or store passport numbers, medical details, bookings, contacts or document contents.

## Travel constellation

- [Australian World Travel](https://auraofintelligence.github.io/Australian-world-travel/) — earlier entry, mission and logistics tools.
- [Strange But True Travel Oracle](https://auraofintelligence.github.io/strange-but-true-travel-oracle/) — non-linear serendipity and navigation.
- [Global Founder Atlas](https://auraofintelligence.github.io/global-founder-atlas/) — founder, funding, research and relocation opportunities.

## Event discovery feeds

- [GAJRA Earth · Ahead](https://auraofintelligence.github.io/gajra-earth-claude-build/ahead.html) — AI governance, public consultation, data-centre and international-policy rooms.
- [Desire Atlas · Gatherings](https://auraofintelligence.github.io/strange-but-true-desire-atlas/gatherings.html) — romance, romantasy, speculative-fiction, book-fair and rights-event leads for the fictional catalogue.

These are optional lead generators, not immigration authorities, and nothing is imported automatically. Events may remain a removable secondary layer. English access is recorded only as a batching clue; every country and every relevant purpose remain in scope.

## Local preview

Open `index.html` in a browser. For the most accurate local preview, serve the folder with any small local web server.

## Evidence standard

- Consequential claims should point to official immigration, labour, embassy, investment or other government sources.
- Every displayed claim has a stable claim ID and its own checked date. The ID stays quiet in the public interface but is available in the page data for exact updates.
- Country overviews, entry rules, age notes, departure cards, conference signals, pathway status, route, boundary and next check are dated separately.
- The 201-place baseline separately dates entry, estimated cost, legacy friction and advisory context.
- Proposed pathways, official facts and unresolved questions remain visibly separate.
- This is a research and planning aid, not legal advice or a visa approval service.

## Updating one claim or all claims

Deep-country dates are created by `buildClaimChecks` in `assets/data.js`. Change the country date to refresh every claim, or add an override keyed by the stable suffix to refresh one field. For example:

```js
claimChecks: buildClaimChecks("THA", "20 August 2026", {
  "PATH-PAID-SPEAKING-DETAIL": "24 August 2026"
})
```

The validator rejects missing dates, missing claim metadata and duplicate claim IDs. The world baseline is regenerated from `tools/import-world-baseline.mjs`, where its field dates live.

Open speaking calls are stored beside the relevant country with a stable opportunity ID, checked date and published closing date. Every live call has a timezone-aware `deadlineAt`: use the published time where available, or the conservative end of the organiser's local calendar date when it is not. The public site automatically stops showing expired calls, while calls without a firm deadline stay as conference signals rather than being presented as live opportunities.

## Licence

This repository uses the [Strange But True Public Source Licence](LICENSE).
