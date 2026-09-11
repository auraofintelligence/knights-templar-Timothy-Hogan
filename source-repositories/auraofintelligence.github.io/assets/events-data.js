/*
 * Calendar of Events: the data.
 * Add an event by dropping one object into this array. No HTML or design
 * changes are needed: both the month calendar and the "upcoming" list on
 * calendar-of-events.html render straight from here.
 *
 * Shape of each event:
 *   {
 *     id:          "short-unique-slug",
 *     title:       "What it's called",
 *     date:        "YYYY-MM-DD",            // ISO date, e.g. "2026-09-14"
 *     description: "One line about it.",     // optional
 *     link:        "https://..."             // optional
 *   }
 *
 * The list launches empty on purpose. Add real events only.
 */
window.AURA_EVENTS = [
  // Template to copy (delete the leading // to switch it on):
  // { id: "example", title: "An Example Gathering", date: "2026-12-01", description: "A short, honest description.", link: "https://gajra.earth" }
];
