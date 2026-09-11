/*
 * Oceania pulse data: election clocks and what makes each system different.
 * Research run: 2026-07-07, Australia/Brisbane. Same rule as the atlas —
 * "sources checked say" voltage only. Dates and due windows need fresh
 * checking before anyone relies on them; entries flagged followup:true are
 * known to need it. Agents refreshing this file: update researchRun,
 * re-verify every lastElection date, and keep the system notes structural
 * (voting systems change slowly; governments change fast — no leader names).
 *
 * termYears: a number here means the term length is a well-known fixed
 * cycle, so the board projects lastElection + termYears as a live countdown
 * to the next election window — always labelled a term-length ESTIMATE, not
 * an announced date. Leave termYears out (or null) wherever followup is true
 * or the cycle is genuinely uncertain — a ticking countdown on an uncertain
 * cycle would be a false-precision claim, exactly what this site avoids.
 */
window.OCEANIA_PULSE = {
  researchRun: '2026-07-07',
  entries: [
    {
      id: 'australia', name: 'Australia', bloc: 'australasia',
      lastElection: '2025-05-03', lastLabel: 'Federal election',
      dueWindow: 'Due by 2028', followup: false, termYears: 3,
      system: 'Compulsory voting, preferential ballots for the House, proportional Senate.',
      note: 'One of the few countries on Earth where turning up is the law — election day runs on democracy sausages.'
    },
    {
      id: 'new-zealand', name: 'Aotearoa New Zealand', bloc: 'australasia',
      lastElection: '2023-10-14', lastLabel: 'General election',
      dueWindow: 'Due 2026', followup: false, termYears: 3,
      system: 'Mixed-member proportional (MMP) with dedicated Māori electorates.',
      note: 'Voters choose between the general roll and the Māori roll — representation itself is a standing constitutional conversation.'
    },
    {
      id: 'papua-new-guinea', name: 'Papua New Guinea', bloc: 'melanesia',
      lastElection: '2022-07-22', lastLabel: 'General election (polling spread over weeks)',
      dueWindow: 'Due 2027', followup: false, termYears: 5,
      system: 'Limited preferential voting; polling staged across weeks of terrain.',
      note: 'The region’s biggest electoral logistics exercise: helicopters, boats and hundreds of languages between writ and result.'
    },
    {
      id: 'fiji', name: 'Fiji', bloc: 'melanesia',
      lastElection: '2022-12-14', lastLabel: 'General election',
      dueWindow: 'Due window 2026', followup: true,
      system: 'One national constituency, open-list proportional representation.',
      note: 'Every voter in the country chooses from the same national candidate list — there are no local electorates at all.'
    },
    {
      id: 'solomon-islands', name: 'Solomon Islands', bloc: 'melanesia',
      lastElection: '2024-04-17', lastLabel: 'Joint national and provincial election',
      dueWindow: 'Due 2028', followup: false, termYears: 4,
      system: 'First-past-the-post; 2024 ran national and provincial polls on one day.',
      note: 'The 2024 joint polling day was a first — one canoe trip, two ballots.'
    },
    {
      id: 'vanuatu', name: 'Vanuatu', bloc: 'melanesia',
      lastElection: '2025-01-16', lastLabel: 'Snap general election',
      dueWindow: 'Due 2029', followup: true,
      system: 'Single non-transferable vote in multi-member constituencies.',
      note: 'Coalition politics moves fast here; snap elections are a live possibility in any given year, so the due window is soft.'
    },
    {
      id: 'samoa', name: 'Samoa', bloc: 'polynesia',
      lastElection: '2025-08-29', lastLabel: 'Early general election',
      dueWindow: 'Due 2030', followup: true,
      system: 'Only matai (chiefly title holders) may stand for most seats; a minimum share of seats is guaranteed for women.',
      note: 'The fa’amatai system braids village chiefly authority directly into the national parliament.'
    },
    {
      id: 'tonga', name: 'Tonga', bloc: 'polynesia',
      lastElection: '2025-11-20', lastLabel: 'General election',
      dueWindow: 'Due 2029', followup: true,
      system: 'Mixed chamber: seventeen people’s seats plus nine seats elected by the nobility.',
      note: 'The last Polynesian kingdom: constitutional monarchy where nobles and commoners hold structurally separate seats.'
    },
    {
      id: 'kiribati', name: 'Kiribati', bloc: 'micronesia',
      lastElection: '2024-10-25', lastLabel: 'Presidential election (parliamentary rounds in August 2024)',
      dueWindow: 'Due 2028', followup: false, termYears: 4,
      system: 'Two-round parliamentary voting, then a directly elected president chosen from parliamentary nominees.',
      note: 'A parliament that spans three island groups and the date line — the same country greets two different days at once.'
    },
    {
      id: 'tuvalu', name: 'Tuvalu', bloc: 'polynesia',
      lastElection: '2024-01-26', lastLabel: 'General election',
      dueWindow: 'Due 2028', followup: false, termYears: 4,
      system: 'No political parties exist; every member sits as an independent.',
      note: 'Government forms through consensus among sixteen independents — party machines simply never took root.'
    },
    {
      id: 'nauru', name: 'Nauru', bloc: 'micronesia',
      lastElection: '2022-09-24', lastLabel: 'Parliamentary election (a further cycle since is likely)',
      dueWindow: 'Cycle needs follow-up', followup: true,
      system: 'Dowdall positional counting: every preference on the ballot earns a fractional score.',
      note: 'The world’s only national Dowdall-count democracy, on a 21-square-kilometre island. Three-year cycles mean a newer result needs checking.'
    },
    {
      id: 'palau', name: 'Palau', bloc: 'micronesia',
      lastElection: '2024-11-05', lastLabel: 'General election',
      dueWindow: 'Due 2028', followup: false, termYears: 4,
      system: 'Nonpartisan bicameral congress; a Council of Chiefs advises on custom.',
      note: 'No parties, two chambers, and traditional leadership constitutionally in the loop.'
    },
    {
      id: 'marshall-islands', name: 'Marshall Islands', bloc: 'micronesia',
      lastElection: '2023-11-20', lastLabel: 'General election',
      dueWindow: 'Due 2027', followup: false, termYears: 4,
      system: 'The Nitijela elects the president; the Council of Iroij (traditional leaders) reviews custom-related law.',
      note: 'Parliamentary head of state plus a constitutional chamber for traditional authority.'
    },
    {
      id: 'micronesia-fsm', name: 'Federated States of Micronesia', bloc: 'micronesia',
      lastElection: '2025-03-04', lastLabel: 'Congressional election',
      dueWindow: 'Next congressional cycle 2027', followup: false, termYears: 2,
      system: 'Two-year congressional cycles; the president is chosen by Congress from its four-year at-large members.',
      note: 'Four states, four flags in one — the federation itself is the daily constitutional exercise.'
    },
    {
      id: 'cook-islands', name: 'Cook Islands', bloc: 'polynesia',
      lastElection: '2022-08-01', lastLabel: 'General election',
      dueWindow: 'Due window 2026', followup: true,
      system: 'Westminster-style parliament in free association with Aotearoa New Zealand; Aronga Mana traditional leadership alongside.',
      note: 'Makes treaties and runs its own foreign relations while its people hold New Zealand citizenship.'
    },
    {
      id: 'niue', name: 'Niue', bloc: 'polynesia',
      lastElection: '2023-04-29', lastLabel: 'General election',
      dueWindow: 'Due window 2026', followup: true,
      system: 'Twenty-member assembly mixing village seats and a common roll, in free association with Aotearoa New Zealand.',
      note: 'One of the smallest self-governing legislatures on Earth — village-level democracy at national scale.'
    },
    {
      id: 'french-polynesia', name: 'French Polynesia', bloc: 'polynesia',
      lastElection: '2023-04-30', lastLabel: 'Territorial assembly election (second round)',
      dueWindow: 'Due 2028', followup: false, termYears: 5,
      system: 'French overseas collectivity with its own territorial assembly and government.',
      note: 'Campaigns run across five archipelagos and an area the size of Europe, inside the French constitutional frame.'
    },
    {
      id: 'new-caledonia', name: 'New Caledonia', bloc: 'melanesia',
      lastElection: '2019-05-12', lastLabel: 'Provincial elections (later cycles deferred)',
      dueWindow: 'Deferred — needs follow-up', followup: true,
      system: 'Congress drawn from three provincial assemblies, with a restricted electoral roll tied to the self-determination process.',
      note: 'The region’s most delicate constitutional clock: the electoral cycle itself is part of an ongoing decolonisation conversation. Handle with sources, not slogans.'
    },
    {
      id: 'bougainville', name: 'Bougainville (AROB)', bloc: 'melanesia',
      lastElection: null, lastLabel: 'Autonomous-region cycle',
      dueWindow: 'Needs follow-up', followup: true,
      system: 'Autonomous Region within Papua New Guinea, with its own house and president.',
      note: 'After the 2019 non-binding independence referendum, consultation with PNG continues — a live example of peaceful constitutional pathfinding.'
    },
    {
      id: 'territories', name: 'Territories and realm partners', bloc: 'territories',
      lastElection: null, lastLabel: 'Administering-state cycles',
      dueWindow: 'Per-territory research lane', followup: true,
      system: 'Guam, American Samoa, Northern Marianas, Tokelau, Wallis and Futuna, Pitcairn, Norfolk and others follow their administering states’ electoral frameworks.',
      note: 'Each deserves its own card before any civic translation — the atlas holds the source shelf for that work.'
    }
  ]
};
