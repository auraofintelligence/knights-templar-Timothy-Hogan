#!/usr/bin/env python3
"""
Is there a clean cycle in the excursion dates, or is it a scatter?

This site has been asserting "a scatter, not a beat" for L5 without ever
running the number, which is the same failure it criticises elsewhere. So
here is the number.

Method: Rayleigh test on circular phase.

  For a candidate period P, map each event age t to a phase angle
  theta = 2*pi*(t mod P)/P. If the events are periodic at P, the phases
  cluster and the resultant vector of the unit phasors is long. If they
  are scattered, the resultant is short.

      R = |sum(exp(i*theta))| / n          (0 = uniform, 1 = perfectly clustered)

  Under the null hypothesis of uniform phase, n*R^2 is approximately
  exponentially distributed, giving p ~ exp(-n*R^2) for modest n.

  Because the period is not specified in advance but searched over a range,
  the best-fitting period will always look better than it is. So the script
  also reports a "look-elsewhere" corrected significance by running the same
  search on randomised date sets and asking how often pure noise scores at
  least as well.

Dates: proposed geomagnetic excursions of the last ~30 kyr, including the
ones this site's own ladder audit found to be unconfirmed, because excluding
them would stack the test.

Run:  python tools/cadence_test.py
"""

import math
import random

# Proposed excursions, ages in years before present, with status.
# Ages are midpoints of published ranges; see corpus/03-the-excursion-record.md
EVENTS = [
    ("Laschamp",        41000, "accepted"),
    ("Mono Lake",       34000, "accepted"),
    ("Hilina Pali",     18500, "contested"),
    ("Lake Mungo",      26000, "proposed"),
    ("Gothenburg",      12500, "proposed, unconfirmed"),
    ("Solovki",         10000, "proposed, unconfirmed"),
    ("Etrussia",         2700, "proposed, unconfirmed"),
]

CLAIMED_PERIODS = [6000, 12000]
N_TRIALS = 20000
SEED = 20260802     # fixed so the result is reproducible


def rayleigh(ages, period):
    """Return (R, p_uncorrected) for a candidate period."""
    n = len(ages)
    cs = sum(math.cos(2 * math.pi * (a % period) / period) for a in ages)
    sn = sum(math.sin(2 * math.pi * (a % period) / period) for a in ages)
    R = math.hypot(cs, sn) / n
    z = n * R * R
    # Standard small-sample correction (Zar, Biostatistical Analysis)
    p = math.exp(math.sqrt(1 + 4 * n + 4 * (n * n - z * z)) - (1 + 2 * n))
    return R, p


def best_over_range(ages, lo, hi, step):
    best = (0.0, None)
    P = lo
    while P <= hi:
        R, _ = rayleigh(ages, P)
        if R > best[0]:
            best = (R, P)
        P += step
    return best


def main():
    random.seed(SEED)
    ages = [a for _, a, _ in EVENTS]
    n = len(ages)

    print("=" * 76)
    print("CADENCE TEST: is there a clean cycle in the excursion dates?")
    print("=" * 76)
    print(f"\n{n} proposed excursions in the last ~41 kyr\n")
    for name, age, status in sorted(EVENTS, key=lambda e: e[1]):
        print(f"  {age:>7,} yr BP   {name:<14} {status}")

    print("\nThe claimed periods, tested directly")
    print("-" * 76)
    print(f"{'period':>10} {'R':>8} {'p':>10}   phases (fraction of cycle)")
    for P in CLAIMED_PERIODS:
        R, p = rayleigh(ages, P)
        ph = " ".join(f"{(a % P) / P:.2f}" for a in sorted(ages))
        print(f"{P:>10,} {R:>8.3f} {p:>10.3f}   {ph}")

    print("\n  R near 0 means the phases are spread around the cycle.")
    print("  R near 1 means they all land at the same point in it.")

    print("\nBest period anywhere in a wide search (2,000 to 25,000 yr)")
    print("-" * 76)
    R_best, P_best = best_over_range(ages, 2000, 25000, 10)
    print(f"  best-fitting period    {P_best:,} yr")
    print(f"  its R                  {R_best:.3f}")

    print("\nLook-elsewhere correction")
    print("-" * 76)
    print(f"  Running the same search on {N_TRIALS:,} randomised date sets,")
    print("  drawn uniformly over the same 2.7 to 41 kyr window...")
    lo, hi = min(ages), max(ages)
    beat = 0
    for _ in range(N_TRIALS):
        fake = [random.uniform(lo, hi) for _ in range(n)]
        R_f, _ = best_over_range(fake, 2000, 25000, 50)
        if R_f >= R_best:
            beat += 1
    p_corr = beat / N_TRIALS
    print(f"  pure noise scored at least as well  {beat:,} / {N_TRIALS:,}")
    print(f"  corrected p                         {p_corr:.3f}")

    print("\nVerdict")
    print("-" * 76)
    for P in CLAIMED_PERIODS:
        R, p = rayleigh(ages, P)
        call = "no clustering" if R < 0.5 else "some clustering"
        print(f"  {P:,}-year cycle: R = {R:.3f}, p = {p:.2f}  ->  {call}")
    if p_corr > 0.05:
        print(f"\n  The best period found anywhere is not significant once the")
        print(f"  search itself is accounted for (corrected p = {p_corr:.2f}).")
        print("  Seven dates spread over 41,000 years will always fit SOME")
        print("  period. That is a property of seven dates, not of the Sun.")
    else:
        print(f"\n  The best period survives the look-elsewhere correction")
        print(f"  (corrected p = {p_corr:.3f}). That would be worth a second look.")

    print("\n  What this does not do: it does not test the mechanism, which")
    print("  does not depend on the cadence. It tests L5 only, and L5 is the")
    print("  rung the argument needs least.")
    print("=" * 76)


if __name__ == "__main__":
    main()
