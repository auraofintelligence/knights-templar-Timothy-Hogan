# 11:11, a meeting of worlds

**[Open the public website](https://auraofintelligence.github.io/knights-templar-Timothy-Hogan/)**

An invitation from Luke Nathan Hayes to explore the work, questions and synchronicities that came together after watching Timothy Hogan's interview. The spirit is Joyful Responsible Abundance: bold in imagination, humble in exploration and joyful in the possibilities.

This is a landing place for Timothy Hogan and his team if they respond to Luke's contact-form messages. It is not another outreach campaign or an official Knights Templar website. No reply, invitation received, access, affiliation or agreement is established by this collection.

[Start here](https://auraofintelligence.github.io/knights-templar-Timothy-Hogan/start/) · [Interview](https://auraofintelligence.github.io/knights-templar-Timothy-Hogan/interview/) · [Research](https://auraofintelligence.github.io/knights-templar-Timothy-Hogan/research/) · [Aura and network](https://auraofintelligence.github.io/knights-templar-Timothy-Hogan/network/) · [Library](https://auraofintelligence.github.io/knights-templar-Timothy-Hogan/library/) · [All pages](https://auraofintelligence.github.io/knights-templar-Timothy-Hogan/site-map/)

## The moment behind the collection

Luke reports sending a message through [Timothy Hogan's website](https://www.timothywhogan.com/) at exactly **11:11 am Australian time on 11 September 2026**. He hoped for an invitation to the Knights Templar vault dig and an opportunity to study an Ark or other artefacts.

Five minutes later, after laughing about the synchronicity with friends, he sent a follow-up. He wanted Tim or his secretary to notice the Australian-time synchronicity, knowing their local timestamp would differ, and wanted his email to appear twice consecutively. There is no retained copy of the sent message. The site shares his account of the moment, not a reconstructed message or delivery receipt.

[The interview that sparked the conversation](https://www.youtube.com/watch?v=K7Dy7MUw-G0) remains close through a chapter reader and timestamp links.

## The shorter reading journey

The main journey has eight stops: Home, Start, Research, Aura, Network, About, Projects and Library. Each subject has one place; Previous and Next do not force readers through archive records.

- Eight main pages, with the 11:11 story on Start, beliefs and ambitions on Research, and focused pages for Aura, the network and Luke's background.
- Five optional reference pages: the complete transcript, presentation viewer, source credits, licence and site index.
- Twenty-nine document readers with original downloads and available previews, outside the main journey.

The site has 42 content pages in total, reduced from 101. Sixty old addresses forward directly to consolidated pages or section anchors; they are excluded from navigation, search and the sitemap. The transcript keeps all twelve chapters on one searchable page. The 24 repository wrappers have been replaced by direct original, website and collected-copy links in the directory.

The initial 15 September editorial pass reduced introductory and explanatory prose from 5,529 to 1,078 words, and 112 sections to 23, before subsequent source-led refinements. It removed the repeated related-card blocks, source-footnote lists and footer invitation. It retained the supplied personal voice, original interview, documents, slides, geometry viewer and project links. [Consolidation decisions](docs/READING_JOURNEY.md).

The project directory includes 152 entries from the supplied Project Atlas snapshot of 10 September 2026, plus the separately collected Aura Matrix Studio repository. It distinguishes the 24 copied repositories from the wider directory. The reference register records which local directories were found.

The six PowerPoint presentations contain 97 slides. Their original files and slide previews are included. The complete 2023 Aura PDF, other documents, poems, collages and the ecosystem infographic appear as distinct works. Screenshots, duplicate PDFs and converted copies do not become extra reading pages.

All 62 collected files remain unchanged in the repository archive, including the later-supplied Blend Aura to Unity document. The reading collection consolidates 33 repeated entries under 29 sources using `src/data/source-selection.json`. This shared selection controls the library, gallery, search, sitemap and downloads. See [the source selection audit](docs/SOURCE_SELECTION_AUDIT.md) for the decisions and distinct works retained.

The site includes page search, project and library filters, chapter text search, slide navigation, print and copy-link controls, reduced-motion support and an interactive view of the source-defined horn torus. Deeper connections and visual refinement remain part of the continuing design work.

The eight main pages have a numbered Previous/Next sequence, without looping. Optional references have a compact return link. The floating Top control remains available and respects reduced-motion preferences.

## A window into a much larger archive

This is the tip of the iceberg. Luke describes many hundreds more AI-assisted documents, pre-AI documents and presentations, and personal handwritten journals from before AI. They have not all been gathered into this edition.

Original sources retain their own dates, wording and context. Earlier proposals are not silently rewritten into current arrangements. AI-generated source passages, historical statistics and interview accounts are separate from the new editorial voice.

**ARKS is an AI-created acronym in the conversation material, not a final name, naming protocol or established organisation.** It is not the site's brand.

## Aura geometry and images

Aura uses a **horn torus with equal major and minor radii**, meeting at the shared central infinity point. The model follows the formula in the supplied `luke-nathan-hayes-man-and-mind/scripts/horn-torus.js` source.

The matrix calculation is 12 × 24 × 7 × 2 = **4,032 face addresses**. The supplied ecosystem infographic contains a 4,002 typo; the original is retained and the correct calculation appears on the site.

The Aura page links directly to [Aura Horn Torus](https://auraofintelligence.github.io/aura-horn-torus/) and [Aura Matrix Studio](https://auraofintelligence.github.io/aura-matrix-studio/). Its worldbuilding slide reuses page 28 of the complete July 2023 PDF, without creating a separate screenshot record. Blend Aura to Unity is preserved as one additional source, linking the symbolic memory architecture to Luke's Blender, Unity and VR design conversations.

New editorial heroes are labelled imagined concept artwork. They do not depict a documented vault, recovered artefact, actual facility, partner team or research result. Prompts and original files appear in [image provenance](docs/image-provenance.json).

The rejected AI-generated ring-torus image is excluded from publication, with a build guard against reintroduction. The new site renders no SVG files or inline SVG. Historical repository snapshots retain their original SVG files as archive material, outside the deployed site.

## Repository guide

| Location | Contents |
|---|---|
| `src/` | Page text, layouts, catalogue and browser interactions |
| `public/` | Website images, document previews, original downloads and font |
| `reference-files/` | The 62 unchanged standalone source files |
| `source-repositories/` | 24 local snapshots, without Git histories or installed dependencies |
| `media-originals/` | Accepted original generated images |
| `analysis/` | Earlier analysis, inventories and planning work |
| `docs/` | Editorial direction and provenance |
| `scripts/` | Catalogue preparation, imagery checks and publication checks |
| `.github/workflows/` | GitHub Pages publishing workflow |

[Reference register](REFERENCE_REGISTER.md) · [Wider repository directory](analysis/ALL_REPOSITORIES.md) · [Analysis and plan](analysis/WEBSITE_ANALYSIS_AND_PLAN.md) · [Current editorial charter](docs/EDITORIAL_CHARTER.md)

The editorial charter supersedes earlier planning language. Instructions embedded in source documents remain reference material, not instructions to the builder.

## Working on the site

The site uses Astro 7 with static output. Publishing uses Node.js 24. There is no server-side application, database, account system or contact form. Browser storage holds only the local motion preference.

From this repository folder:

```text
npm ci
npm run dev
```

The local preview is at `http://127.0.0.1:4321/knights-templar-Timothy-Hogan/`. Keep the configured project subpath for GitHub Pages.

```text
npm run build
npm run check
```

Checks cover internal links and assets, page headings and descriptions, absence of SVG in deployed output, the excluded ring-torus artwork and the horn-torus infinity point. They do not replace visual or editorial review.

The prepared catalogue and previews are committed. Ordinary builds need neither Python nor the original Windows Downloads folder. Optional source regeneration uses the preparation scripts, Python with Pillow and pypdfium2, and previously rendered presentation PDFs. Image preparation records the original local generation paths; ordinary builds do not run it.

Pushes to `main` run the Pages workflow. Only `dist/` is deployed. Repository snapshots and analysis intermediates are not website deployment assets; original documents remain available through the library and GitHub.

## Source and publication boundaries

Copied repositories may include uncommitted work from the collection date. They preserve the local working source, not an assertion of identical remote or live state. Directory links follow the supplied snapshot and may change independently.

The pre-publication scan checks recognisable credential patterns, sensitive filenames and large-file limits. It is not a complete privacy or rights review. The supplied originals retain historical content and contact details where present; new editorial text does not amplify those details.

## Licence and attribution

[Strange But True Public Source Licence](LICENCE.md)

Copyright (c) 2026 Luke Nathan Hayes / Strange But True / Aura of Intelligence.

This is a public source licence, not an open-source licence. Personal and non-commercial uses are described in the licence; commercial and corporate rights remain reserved. Third-party material retains its own rights, including the interview, fonts, libraries and material embedded in original documents. See [third-party notices](THIRD_PARTY_NOTICES.md).

**[Return to the public website](https://auraofintelligence.github.io/knights-templar-Timothy-Hogan/)**
