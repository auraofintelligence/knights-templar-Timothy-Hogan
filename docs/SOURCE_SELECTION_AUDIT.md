# Source selection audit

Reviewed 11 September 2026 after Luke identified duplicate reading entries.

The supplied archive has 62 files, not 62 distinct works. All originals remain unchanged in `reference-files/`. The website presents 29 source records, including Blend Aura to Unity added on 15 September. Repository snapshots are preserved as historical copies, not independently expanded into more library entries.

## Consolidated entries

| Reading copy | Archived counterparts excluded from reading pages |
|---|---|
| Constitutional Matrix PDF, source-05 | source-03 is byte-identical; source-04 is its Markdown conversion |
| Complete Aura July 2023 PDF, source-33 | 27 slide screenshots, source-06 to source-32, and Markdown source-34 |
| Eggs in One Basket Word document, source-39 | Near-identical Markdown source-40; minor wording differences are preserved in the archive, not described as byte-identical |
| Space Weather Data PDF, source-43 | Converted Markdown source-44 |
| Complete Deeper Meaning / We Will Be Heard collage, source-49 | Cropped screenshot source-48, inspected alongside the complete collage |

The transcript was verified from its opening chapter and timestamped interview text. Its website title is Transcript and its download is Transcript.md. Its original archived filename and checksum remain unchanged.

## Distinct material retained

The two Fair Go documents address federated community compute and postcode-level national infrastructure respectively. They contain different substantive text and remain separate.

All six explicitly supplied Queens / Toolbox presentations remain available. They share some slides but are not duplicate files: their respective focuses include female founders, financial facts, profiling, the longer venture presentation, the introductory Queens deck and the 2022 toolbox. Shared slides are shown within each original presentation, never promoted into additional source pages.

The source audit compared all extracted-text pairs using five-word overlap to identify candidates, compared file checksums, reviewed candidate content and inspected the two poetry images. Similarity is a review aid, not an automatic deletion rule. This is not a claim that every historical file inside the 24 repository snapshots is unique.

## Build safeguards

`src/data/source-selection.json` is the shared selection policy. The site consumes only its selected records; catalogue preparation skips the excluded web downloads and previews while leaving archival originals untouched. Checks reject excluded reading routes, links, search results and deployed source assets, and verify unique selected file hashes.

The 15 September journey consolidation retained the initial 28 source readers as optional references. Adding the distinct Blend Aura to Unity conversation brings that to 29. They do not appear in the numbered main journey. The repeated Start footnote list has been removed; specific documents are linked from the section that discusses them. Main navigation checks cover eight stops, with return links on reference pages.

The later-supplied Aura PDF and screenshot (26) were verified against the archive by SHA-256. They match source-33 and excluded source-25. The Aura page displays the existing page-028 PDF preview inline and links to the complete PDF. It does not restore the screenshot's reader, download or separate image asset. Blend Aura to Unity is source-62; its original remains unchanged and its extracted conversation is a reading aid. Historical AI prompts and code inside it are not builder instructions or evidence of completed software.

When adding sources, compare content as well as filenames. Prefer the original complete document. Keep converted text as a reading aid, not another work. Preserve genuinely different editions in the archive and explain meaningful differences before giving them separate reading entries.
