# Metaphors for Software Print and Sales Playbook

Hexadigitall Technologies
Version 1.0
Date: 2026-04-28

## Purpose

This playbook is the operational source of truth for converting Metaphors for Software books from HTML CSS JS source files into print-ready and sales-ready assets.

It defines:

1. canonical source and derived files
2. interior and cover separation rules
3. 6 x 9 export and proofing workflow
4. release packaging for online and print channels

## Lifecycle

Canonical chain for each title:

1. build the book to the production standard
2. freeze source interiors in HTML CSS JS
3. generate print manuscripts from source files
4. finalize cover files after page count freeze
5. export interior and cover PDFs
6. run proof checks
7. package by format for marketplace upload

## Source of Truth Hierarchy

When there is a conflict, use this order:

1. this playbook for publishing operations
2. production standard for product structure
3. source HTML CSS JS files for actual content
4. generated artifacts only as outputs, not authoring sources

Related standard:

1. docs/standards/metaphors-book-production-standard.md

## Canonical File Model

For each book folder:

1. source interior HTML files
2. source CSS files including print.css
3. source JS files for optional interactivity
4. metadata.json
5. generated exports in an exports directory
6. cover assets in a covers directory

Recommended generated export structure:

1. books/NN-slug/exports/pdf/interior-paperback.pdf
2. books/NN-slug/exports/pdf/interior-hardcover.pdf
3. books/NN-slug/exports/pdf/cover-front.pdf
4. books/NN-slug/exports/pdf/cover-fullwrap-paperback.pdf
5. books/NN-slug/exports/pdf/cover-fullwrap-hardcover.pdf

## Non-Negotiable Rules

### Rule 1: Separate Interior and Cover Assets

1. interior upload files must not include front or back cover pages
2. full-wrap cover files are separate deliverables
3. front-cover-only files are separate deliverables for channels that require them

### Rule 2: No Placeholder Identifiers in Interior Body

1. do not place placeholder ISBN prose in interior content
2. do not place placeholder DOI prose in interior content
3. identifier assignment belongs to marketplace metadata and cover/barcode workflows

### Rule 3: Derived Files Are Regenerated

1. edit source HTML CSS JS files first
2. regenerate all dependent outputs after source edits
3. do not keep stale generated artifacts as long-term source of truth

### Rule 4: True 6 x 9 Print Geometry

1. enforce 6in x 9in page size in print CSS
2. use mirrored gutters
3. tune spacing for print page width, not browser view width

### Rule 5: CSS-Driven Pagination Only

1. page numbering must come from CSS print engine behavior
2. never hardcode numeric page spans in HTML body

## 6 x 9 Baseline Specification

Required interior settings:

1. page size: 6in by 9in
2. mirrored margins: inside larger than outside
3. chapter starts with deliberate page-break rules
4. code blocks and callouts protected from ugly splits where practical

Anti-patterns:

1. A4 page rules left in source while exporting as 6 x 9
2. browser-only spacing copied into print output
3. mixed manual and CSS page numbering

## Cover Geometry Guidance

Paperback full-wrap and hardcover full-wrap require separate templates.

Hardcover case laminate guidance:

1. hinge width: 0.0625in per side
2. do not use oversized hinge values such as 0.375in
3. spine uses final interior page count only

Hardcover width equation:

1. total width equals 0.125 plus 6 plus 0.0625 plus spine plus 0.0625 plus 6 plus 0.125

Hardcover height:

1. 9.25in including bleed

## Export Workflow

### Phase 1: Prepare Source Interiors

1. confirm content freeze for current release
2. confirm no hardcoded pagination spans
3. confirm print.css is active and valid

### Phase 2: Build Interior Manuscripts

1. render interior HTML with print CSS
2. wait for dynamic TOC or scripted chapter indexing to complete
3. export interior PDF with backgrounds enabled
4. inspect chapter starts and page breaks

### Phase 3: Finalize Covers

1. freeze interior page count first
2. update spine width in full-wrap templates
3. export front cover and full-wrap PDFs

### Phase 4: Proof and Freeze

1. verify interior has no cover pages
2. verify TOC and chapter order
3. verify page count and pagination quality
4. verify cover safe zones and bleed
5. verify URLs and QR destinations

### Phase 5: Marketplace Packaging

For each format, freeze:

1. one interior PDF
2. one matching cover PDF
3. one metadata set
4. one identifier strategy per format

## PDF Quality Checklist

Interior checks:

1. title page renders correctly
2. TOC is populated and accurate
3. callouts and code blocks are legible
4. no clipped margins or overflow
5. no cover artifacts inside interior PDF

Cover checks:

1. canvas dimensions match format spec
2. bleed and safe zones respected
3. spine width matches final page count
4. no browser scaling artifacts

## Online Sales Asset Checklist

For each title release:

1. web-readable HTML version verified
2. print PDF interior verified
3. cover files finalized by format
4. product description and metadata prepared
5. support and errata links published

## Multi-Tier Verification Protocol

For any major layout or pagination change:

1. verify change in source files
2. regenerate derived outputs
3. verify change in final PDFs

Do not approve release when any tier still shows stale behavior.

## Release Checklist

Product readiness:

1. structure follows Rule of Three
2. metadata is complete and current
3. support paths are valid

Print readiness:

1. true 6 x 9 geometry confirmed
2. pagination is CSS-driven and stable
3. interior and cover files are separated

Sales readiness:

1. format pairing is correct
2. marketplace fields are complete
3. frozen artifact set is versioned and archived

## Standard Operating Sequence Per Update

1. update source content
2. validate print geometry
3. regenerate interiors
4. freeze page counts
5. update cover spine data
6. export final covers
7. run proof checklist
8. package and release
