# Page inventory: auraofintelligence.com

Source: `https://auraofintelligence.com/wp-sitemap-posts-page-1.xml` (walked 2026-07-12,
Phase 0). This is the definitive current-site page list: 34 URLs. Every one gets a
salvage file and a matching new-site page; nothing here is cut.

`aura-wellness` also appears in `wp-sitemap-posts-post-1.xml` (it's registered as both a
WordPress page and a post); one salvage file covers it, no duplicate page on the new site.

| # | Old URL | New slug | Family / notes |
|---|---|---|---|
| 1 | `/` | `home` | Homepage: founder intro, about, promise, 18-tool showcase (incl. Cosmic Nexus), early-access CTA. **RESOLVED 2026-07-12**: canonical content is the fuller version, `content/salvage/new-home.md`. See `content/updates/home/`. |
| 2 | `/new-home/` | *(merged into home)* | **RESOLVED 2026-07-12**: Luke confirmed, keep the fuller "Cosmic Nexus" version as `home`. No separate `new-home.html` page is built. |
| 3 | `/blog/` | `blog` | Blog index |
| 4 | `/contact/` | `contact` | Contact |
| 5 | `/avatar-creator/` | `avatar-creator` | Avatar Builder (Digital Twin) |
| 6 | `/mind-palaces/` | `mind-palaces` | Mind Palace Builder |
| 7 | `/aura-builder/` | `aura-builder` | Aura Builder (Mind Uploader) |
| 8 | `/generative-a-i/` | `generative-a-i` | Generative A.I. Customisation |
| 9 | `/world-builder/` | `world-builder` | World Builder |
| 10 | `/blockchain/` | `blockchain` | Blockchain |
| 11 | `/gamification/` | `gamification` | Gamification of Life |
| 12 | `/courses/` | `courses` | Aura Courses (existing); feeds new Courses hub, Phase 5 |
| 13 | `/videos/` | `videos` | Videos |
| 14 | `/smart-devices/` | `smart-devices` | Smart IoT Devices |
| 15 | `/space-weather-vr/` | `space-weather-vr` | Space Weather & Climate Change |
| 16 | `/aura-store/` | `aura-store` | **New discovery**: not in the original crawl checklist. Salvage in full. |
| 17 | `/calendar-of-events/` | `calendar-of-events` | **RESOLVED 2026-07-12**: a literal, cool-looking calendar of upcoming events, blank at launch, data-driven (`assets/events-data.js`) so a future agent can add events by editing one file. See `content/updates/calendar-of-events/`. |
| 18 | `/tool-kit/` | `tool-kit` | Tool Kit |
| 19 | `/cloud-compute/` | `cloud-compute` | Cloud Compute |
| 20 | `/music/` | `music` | Music Creation |
| 21 | `/course-creation/` | `course-creation` | Course Creation (existing); feeds new Courses hub, Phase 5 |
| 22 | `/aura-events/` | `aura-events` | **RESOLVED 2026-07-12**: this is the **Events & Event Management** tool pitch page (one of the seventeen pathways), "Craft the Unforgettable". Distinct from `calendar-of-events`. Luke's brief supersedes the salvaged stub; see `content/updates/aura-events/`. |
| 23 | `/affiliates/` | `affiliates` | Affiliate Promotions |
| 24 | `/choice-content/` | `choice-content` | Choice Content |
| 25 | `/podcasts/` | `podcasts` | Podcast Channels |
| 26 | `/aura-wellness/` | `aura-wellness` | Life Planning & Well Being (dual page+post in WP; one new page) |
| 27 | `/anti-dementia/` | `anti-dementia` | Anti-Dementia Aura: NDIS register, see care-language rule |
| 28 | `/cosmic-nexus/` | `cosmic-nexus` | Cosmic Nexus: travel club first, co-working/bar destination second |
| 29 | `/aura-capsule-hotels/` | `aura-capsule-hotels` | Aura Capsule Hotels |
| 30 | `/tinkering-labs/` | `tinkering-labs` | Innovation Tinkering Labs |
| 31 | `/a-i-auto-farm/` | `ai-auto-farm` | In-Home A.I. Auto-Farm |
| 32 | `/space-industry/` | `space-industry` | Commercial Space Development |
| 33 | `/alpha-infinity-foundation/` | `alpha-infinity-foundation` | Alpha Infinity Foundation |
| 34 | `/subterranean-cities/` | `subterranean-cities` | Subterranean Eco-Cities |

**Not found as standalone pages** (confirmed folded into `home`, per crawl): About/Founder,
The Promise. No separate page built for these; their content lives in `home`'s salvage.

**New additions on top of this inventory** (not from the old site, additive per the brief):
`todo.html`, `pathways/index.html` (Phase 3 showcase index), `courses/index.html` (Phase 5
hub expansion), individual course pages (Phase 5).

## Status
- [x] Sitemap walked, 34 URLs confirmed (2026-07-12).
- [x] Every page salvaged to `content/salvage/<slug>.md` (2026-07-12): 34/34.
- [x] Images harvested to `assets/media/` (2026-07-12): 219 images, catalogued in
  `assets/media/MEDIA-MANIFEST.md`, plus 6 YouTube video slots noted for poster art.
- [x] Drop-zone folders created for every slug (2026-07-12).

## What the salvage pass found (read before Phase 1): resolutions logged 2026-07-12
- **`new-home` vs `home`**: RESOLVED. Keep the fuller "Cosmic Nexus" version as the one
  `home` page; `new-home.md` is the canonical salvage source. See `content/updates/home/`.
- **`aura-events` vs `calendar-of-events`**: RESOLVED, genuinely distinct pages, both
  kept. `aura-events` = the Events & Event Management tool's pitch page ("Craft the
  Unforgettable"), brief supplied by Luke. `calendar-of-events` = a literal blank,
  data-driven calendar of upcoming events, built for easy future updates. See
  `content/updates/aura-events/` and `content/updates/calendar-of-events/`.
- **Other genuinely thin pages** (confirmed via re-fetch, not extraction failures):
  `blog` (one post only), `contact` (short), `courses` (bare topic list, no body copy;
  this is the existing page the new Courses hub in Phase 5 supersedes), `videos` (H1 +
  heading only, no visible embeds), `aura-store` (H1 only), `choice-content` (logo row
  + one link).
- **`anti-dementia`**: the live copy does NOT currently contain NDIS/funding language.
  Luke confirmed (2026-07-12) the NDIS framing is a **later update, direction TBC**.
  Build this page from the existing salvaged copy as-is for now; do not invent NDIS
  language. Revisit when Luke drops direction into `content/updates/anti-dementia/`.
- **`cosmic-nexus`**: the live copy is entirely the co-working/venue concept, no
  mention of a travel club. This matches Luke's brief that the travel club is a *new*
  starting point, not yet on the old site. Phase 4 should lead with the travel club per
  Luke's instruction and treat the salvaged venue copy as the second half.
- **No separate About/Founder or "The Promise" pages exist**: confirmed folded into
  `home` (and duplicated in `new-home`).
