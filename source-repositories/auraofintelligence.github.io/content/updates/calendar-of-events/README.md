# Drop-zone: calendar-of-events

Drop any research documents, build plans, scripts or notes for the "calendar-of-events" page
here, in any format. Sonnet checks this folder before building or revising this page and
treats these documents as the top-ranking source for its content.

## 2026-07-12: Luke's brief

This page is a **literal, cool-looking calendar showing upcoming events**, distinct from
`aura-events` (the Events and Event Management tool pitch page). It launches blank/empty
(no events currently scheduled) and must be built so a future agent can add an event by
editing one small data file: no HTML or design changes required.

**Build pattern (matches the `pathways-data.js` / `courses-data.js` registry pattern used
elsewhere in this plan):** back the calendar with `assets/events-data.js`, a plain array of
`{id, title, date, description, link}` objects, empty (`[]`) at launch. The calendar view
renders whatever is in that array. Adding an event later is a one-entry edit to that file.

Keep the empty state warm and honest: no fake placeholder events, a simple "nothing
scheduled yet, check back" message, still visually alive (fits the "funky but disciplined"
animation rules in the ground rules).
