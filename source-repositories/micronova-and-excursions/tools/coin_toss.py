#!/usr/bin/env python3
"""
The Sun sprays, the Sun rotates, and Earth is somewhere in the spray pattern.

This needs no micronova, no excursion and no cadence. It is entirely
mainstream space weather statistics, and it is the strongest "why bother"
argument available, so it should have a number on it rather than a vibe.

Two things combine.

  GEOMETRY.  A big eruption leaves from wherever the active region happens
  to be. Published work finds that coronal mass ejections launched from
  roughly E40 to W40 solar longitude are the ones that reach Earth, and that
  about 59 per cent of full-halo CMEs from that window actually arrive.
  Everything outside it mostly sails past. The Sun turns about once a month,
  so that window comes round and round.

  RATE.  Carrington-class events are not rare in the Sun's terms. Riley's
  much-cited estimate puts them near 10 to 12 per cent per decade AT EARTH.
  The July 2012 event, measured by STEREO-A, was assessed as comparable to
  or stronger than Carrington. Earth had been at that longitude about a week
  earlier.

Run:  python tools/coin_toss.py
"""

# Earth-effective longitude window, from the CME arrival literature.
WINDOW_DEG = 80.0          # E40 to W40
ARRIVAL_FRACTION = 0.59    # of full-halo CMEs from that window that arrive

# Riley-style probability of a Carrington-class event AT EARTH, per decade.
RILEY_LOW = 0.10
RILEY_HIGH = 0.12

SOLAR_ROTATION_DAYS = 27.3


def at_least_one(p_per_decade, years):
    """Probability of at least one event in a span, from a per-decade rate."""
    decades = years / 10.0
    return 1.0 - (1.0 - p_per_decade) ** decades


def main():
    print("=" * 74)
    print("THE COIN TOSS: how often does the Sun point a loaded gun at us?")
    print("=" * 74)

    print("\nThe geometry")
    print("-" * 74)
    frac = WINDOW_DEG / 360.0
    print(f"  Earth-effective launch window   {WINDOW_DEG:.0f} degrees of solar longitude")
    print(f"  As a share of the whole Sun     {frac:.1%}   (about 1 in {1/frac:.1f})")
    print(f"  Of those that are aimed well,   {ARRIVAL_FRACTION:.0%} actually arrive")
    print(f"  Net, per big eruption           {frac * ARRIVAL_FRACTION:.1%}  "
          f"(about 1 in {1/(frac*ARRIVAL_FRACTION):.0f})")
    print()
    print(f"  The Sun turns once every {SOLAR_ROTATION_DAYS:.1f} days, so a long-lived")
    print("  active region sweeps that window roughly once a month, over and")
    print("  over, for as long as it survives.")
    print()
    print("  This is the part worth sitting with. The odds are not one in a")
    print("  million. They are closer to ONE IN EIGHT per large eruption, and")
    print("  the machine reloads monthly.")

    print("\nAccumulating over time, at the published rate")
    print("-" * 74)
    print(f"{'span':>12} {'at 10%/decade':>16} {'at 12%/decade':>16}")
    for years, label in ((10, "a decade"), (50, "a lifetime"),
                         (100, "a century"), (200, "two centuries"),
                         (1000, "a millennium")):
        lo = at_least_one(RILEY_LOW, years)
        hi = at_least_one(RILEY_HIGH, years)
        print(f"{label:>12} {lo:>15.0%} {hi:>16.0%}")

    print("\n  Read the century row again. On the mainstream published rate,")
    print("  a Carrington-class hit on the grid inside a hundred years is")
    print("  MORE LIKELY THAN NOT, and nothing in that sentence depends on")
    print("  anything contested.")

    print("\nWhat we have actually watched go past")
    print("-" * 74)
    for yr, note in (
        ("1859", "Carrington. Telegraph fires. The only direct hit on record."),
        ("1921", "New York Railroad storm. Comparable class, less to break."),
        ("1989", "Quebec grid down in ninety seconds. Well short of Carrington."),
        ("2003", "Halloween storms. Largest flare ever recorded, mostly off-limb."),
        ("2012", "Assessed at or above Carrington. Hit STEREO-A. Earth had left"),
        ("    ", "that longitude about a week before."),
        ("2024", "Two G5 storms in one year, the first since 2003."),
    ):
        print(f"  {yr}  {note}")

    print("\nThe honest limits of this")
    print("-" * 74)
    print("  - The window figure is longitude only. Latitude matters too:")
    print("    Earth sits within about 7 degrees of the solar equator, and")
    print("    active regions migrate equatorward through a cycle, so the")
    print("    real number moves with cycle phase. Treat 1 in 8 as an order")
    print("    of magnitude, not a precision figure.")
    print("  - Riley's estimate has been argued over and revised, with the")
    print("    published range running roughly 0.5 to 12 per cent per decade")
    print("    depending on method. The table above uses the higher end.")
    print("    At the low end a century still comes out near 1 in 20.")
    print("  - 'Carrington-class' is a storm-strength statement, not an")
    print("    aurora-latitude one. Those get conflated constantly.")

    print("  - AND THE BIG ONE, which this calculation quietly assumes:")
    print("    that eruption longitude is INDEPENDENT of where Earth is.")
    print("    That is an assumption, not a finding, and it is contested.")
    print()
    print("    Whether the planets influence solar activity is a live")
    print("    published question, not a fringe one. The Venus-Earth-Jupiter")
    print("    alignment period of 11.07 years tracks the 11-year sunspot")
    print("    cycle closely, and tidally synchronised dynamo models have")
    print("    been published in mainstream solar physics journals, with a")
    print("    2022 review of the whole planetary theory and work continuing")
    print("    through 2026, including a paper on tidal triggers that")
    print("    explicitly discusses the Carrington event.")
    print()
    print("    What is genuinely unresolved is the mechanism: the tidal")
    print("    forces involved are very weak, and how they could pace a")
    print("    dynamo is the open part. Stefani's helicity-oscillation")
    print("    resonance is the leading attempt.")
    print()
    print("    Note the distinction that matters here. Those models are about")
    print("    WHEN the Sun is active, not about WHICH FACE erupts. Cycle")
    print("    modulation would not by itself bias the longitude. But Earth")
    print("    is one of the three bodies named, so saying 'the Sun does not")
    print("    know where Earth is' asserts more than anyone has shown.")
    print()
    print("    It is also directly testable on public data, and that test is")
    print("    in corpus/07: take a CME source-longitude catalogue and ask")
    print("    whether the distribution relative to the Sun-Earth line is")
    print("    flat. If it is, this calculation stands. If it is not, the")
    print("    number above is wrong in whichever direction the bias runs.")

    print("\n  What it does establish: nobody has produced a mechanism that")
    print("  aims these AWAY from us, and the geometry and the rotation are")
    print("  not in dispute. Neither of those runs out of patience.")
    print("=" * 74)


if __name__ == "__main__":
    main()
