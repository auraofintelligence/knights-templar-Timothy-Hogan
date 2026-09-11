#!/usr/bin/env python3
"""
How much mass can the Sun have shed, before the planets say no?

The shedding hypothesis has never had a quantitative bound put on it, by
either side. This is the elementary one, and it needs no new data.

Two regimes, and the difference matters:

  SLOW loss (mass lost over many orbits, as the Sun does now)
      Orbits expand adiabatically and stay near-circular.
      da/a = dM/M, and the orbital period lengthens at twice that rate.

  IMPULSIVE loss (a shell shed in far less than one orbital period)
      The planet keeps the velocity vector it had. The Sun is suddenly
      lighter, so that velocity is now too fast for a circular orbit and
      the planet swings outward onto an ellipse.

      Starting circular at radius r, losing fraction f of the solar mass:
          v^2 = GM/r                       (unchanged at the instant)
          mu' = GM(1-f)                    (new gravitational parameter)
          1/a' = 2/r - v^2/mu'  =>  a' = r(1-f)/(1-2f)
          e = f/(1-f)
          r is the new perihelion; aphelion = r(1-f)/(1-2f) * (1+e)

      At f = 0.5 the planet is unbound. This is the classic result and it
      is the hard ceiling on any impulsive shedding claim.

Run:  python tools/shed_mass_bound.py
"""

M_SUN_KG = 1.98847e30
AU_KM = 1.495978707e8
EARTH_E_NOW = 0.0167          # present orbital eccentricity
EARTH_A_KM = 1.0 * AU_KM

# Present-day slow loss: radiation plus wind, in solar masses per year.
SLOW_LOSS_PER_YEAR = 9.13e-14


def impulsive(f):
    """Return (a'/r, e, aphelion/r) for instantaneous loss of fraction f."""
    if f >= 0.5:
        return None, None, None
    a_ratio = (1.0 - f) / (1.0 - 2.0 * f)
    e = f / (1.0 - f)
    aph_ratio = a_ratio * (1.0 + e)
    return a_ratio, e, aph_ratio


def slow(f):
    """Adiabatic: fractional orbit expansion equals fractional mass lost."""
    return 1.0 + f


def main():
    print("=" * 74)
    print("SHED MASS vs ORBITAL RESPONSE  (Earth, starting circular at 1 AU)")
    print("=" * 74)

    print("\nPresent-day slow loss, for scale")
    print("-" * 74)
    per_yr = SLOW_LOSS_PER_YEAR
    print(f"  Sun loses            {per_yr:.3g} of itself per year")
    print(f"  Earth orbit widens   {per_yr * AU_KM * 1e5:.2f} cm/yr")
    print(f"  Over 4.567 Gyr       {per_yr * 4.567e9 * AU_KM:,.0f} km "
          f"({per_yr * 4.567e9 * 100:.2f}% of 1 AU)")

    print("\nIMPULSIVE loss: a shell shed in much less than one orbit")
    print("-" * 74)
    print(f"{'shed':>8} {'shed mass':>14} {'new e':>9} {'a_new/r':>8} "
          f"{'aphelion':>11} {'vs present e':>13}")
    print(f"{'':>8} {'(Earth masses)':>14} {'':>9} {'':>8} {'(AU)':>11} {'':>13}")
    for f in (1e-6, 1e-5, 1e-4, 1e-3, 0.003, 0.01, 0.03, 0.1, 0.3, 0.45):
        a_r, e, aph = impulsive(f)
        m_earths = f * M_SUN_KG / 5.9722e24
        ratio = e / EARTH_E_NOW
        print(f"{f:>8.2%} {m_earths:>14,.0f} {e:>9.4f} {a_r:>8.3f} "
              f"{aph:>11.3f} {ratio:>12.2f}x")
    print(f"{'50%':>8} {'166,000':>14} {'unbound':>9} {'-':>8} "
          f"{'escapes':>11} {'-':>13}")

    print("\nThe bound this puts on the claim")
    print("-" * 74)
    # What impulsive shed fraction would produce an eccentricity change we
    # could not have missed? Earth's e varies 0.000-0.058 on Milankovitch
    # cycles, so anything above that floor is the honest detection threshold.
    for label, e_budget in (("within present e (0.0167)", EARTH_E_NOW),
                            ("within Milankovitch max (0.058)", 0.058)):
        f_max = e_budget / (1.0 + e_budget)
        print(f"  {label:<32} -> f <= {f_max:.4f}  "
              f"({f_max * M_SUN_KG / 5.9722e24:,.0f} Earth masses, "
              f"{f_max * M_SUN_KG:.3g} kg)")

    print("\n  For comparison, one coronal mass ejection is around 1e13 kg,")
    print(f"  which is f = {1e13 / M_SUN_KG:.2e}. The bound above is roughly")
    print(f"  {(0.058 / 1.058 * M_SUN_KG) / 1e13:.3g} times a single CME.")

    print("\nReading it")
    print("-" * 74)
    print("  The orbits do NOT forbid a shedding event. They forbid a LARGE one.")
    print("  An impulsive shed stays inside Earth's own Milankovitch eccentricity")
    print("  budget up to a few per cent of a solar mass, which is enormous in")
    print("  absolute terms and tiny as a fraction. Anything approaching 50%")
    print("  unbinds the planet, so the claim has a hard ceiling well below that.")
    print("  Slow loss over many orbits is far gentler and leaves e untouched.")
    print("\nDoes the ellipse heal between events?")
    print("-" * 74)
    print("  If it did, each shed would erase the evidence of the last one and")
    print("  the orbit would say nothing about history. Two things really do")
    print("  round an orbit off: tides, and drag from a surrounding medium.")
    print("  Neither operates here.")
    print()
    print("    Tides   fall off steeply with distance. At 1 AU from the Sun the")
    print("            circularisation timescale for Earth exceeds the age of")
    print("            the universe by many orders of magnitude.")
    print("    Drag    circularised the planets in the gas-rich early disc.")
    print("            That gas has been gone for over four billion years and")
    print("            the interplanetary medium today is far too thin.")
    print()
    print("  So imposed eccentricity persists, and the bound above applies to")
    print("  the CUMULATIVE history rather than to one event. Two qualifiers,")
    print("  both of which matter:")
    print()
    print("    - Repeats at random orbital phase random-walk rather than add,")
    print("      so N events give roughly sqrt(N) times one event, not N times.")
    print("    - Earth's eccentricity is calculable from the secular")
    print("      interactions of the whole planetary system, not two planets,")
    print("      and the calculation matches observation. That is what this")
    print("      bound rests on, and it holds only back to the chaos horizon")
    print("      of roughly 50-60 Myr, beyond which the orbit is not")
    print("      retrodictable at all.")
    print()
    print("      Do NOT say Milankovitch is fully explained. The ORBIT is")
    print("      calculated; the CLIMATE RESPONSE to it is not. The strongest")
    print("      signal in the ice record sits at ~100 kyr, where the")
    print("      insolation forcing is the WEAKEST of the three. That is the")
    print("      named and unresolved 100,000-year problem, alongside the")
    print("      Mid-Pleistocene Transition, where the dominant period")
    print("      switched from 41 to 100 kyr with no change in forcing.")
    print("      Neither touches this bound, which needs only the orbit.")
    print()
    print("  Both tighten the constraint. Neither eliminates it.")

    print("\n  What this does not do: it does not tell you whether the Sun sheds.")
    print("  It tells you how big the event is allowed to be if it does, and")
    print("  that the answer is a budget for all of history, not a per-event one.")
    print("=" * 74)


if __name__ == "__main__":
    main()
