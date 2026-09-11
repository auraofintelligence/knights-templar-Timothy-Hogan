# Aura of Intelligence

**A self-sovereign digital companion: a bridge to your infinite self, built for
non-technical people who want to own their data, their attention and their choices.**

The rebuild of [auraofintelligence.com](https://auraofintelligence.com) as a plain,
fast, static site: every page from the old WordPress site replicated in full and
upgraded, plus a growing hub of short courses and interactive builders.

GitHub Pages entry point: [https://auraofintelligence.github.io/](https://auraofintelligence.github.io/)

## Status

This site is published and growing in public, on purpose; see [todo.html](todo.html)
for what's shipped and what's next. Nothing here is a finished reveal; it's a working
site that gets better every week.

## How it's built

- Plain HTML, one shared `styles.css`, a couple of small scripts. No build step, no
  framework, no third-party requests on load.
- `assets/site-nav.js` generates the header, footer, breadcrumbs and full-screen index
  from one data file: add a page in one place and it appears everywhere.
- Every page stays light: self-hosted fonts, lazy-loaded images, and videos that only
  load a real player when clicked.
- `PLAN.md` is the full build plan, phase by phase. `content/PAGE-INVENTORY.md` maps
  every old page to its new one. `content/updates/<page>/` is where new source
  material gets dropped in as it arrives.

## Run it locally

No build step; open `index.html` directly, or serve the folder:

```bash
npx serve .
```

## Licence

[LICENCE.md](LICENCE.md): the Aura of Intelligence Public Source Licence,
non-commercial use free, commercial rights reserved.

## Related pages

- [Aura of Intelligence Ecosystem](https://auraofintelligence.github.io/aura-ecosystem/) — the wider venture, community and civilisational concept index.
- [Aura of Intelligence Pathways](https://auraofintelligence.github.io/aura-of-intelligence-pathways/) — an early multi-page collaboration, care and civic pathway draft.

---

*A Bridge to The Infinite.* **Luke Hayes × Claude**, Minjerribah · 2026.
