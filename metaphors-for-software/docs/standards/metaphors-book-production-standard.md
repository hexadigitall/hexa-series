# Metaphors for Software Book Production Standard

Hexadigitall Technologies
Version 1.0
Date: 2026-04-28

## Purpose

This document is the canonical product standard for building every Metaphors for Software title as a premium technical textbook in HTML, CSS, and JavaScript with consistent 6 x 9 print readiness and online sales readiness.

Use this standard when:

1. creating a new book
2. upgrading a legacy book
3. reviewing a draft for release
4. aligning teacher and student variants where needed

## Standard Intent

Each title must function as all of the following at the same time:

1. a narrative-first technical textbook
2. a practical coding and systems manual
3. a portfolio evidence builder
4. a print-ready commercial publication
5. a digital-first online learning asset

## Canonical Product Model

Every book must include:

1. story-led conceptual scaffolding
2. visual architecture and diagrams
3. runnable code adapter sections
4. print-safe layout behavior at 6 x 9
5. sales-ready packaging and support paths

## The Rule of Three

This standard inherits and enforces the series Rule of Three.

1. Part 1: The Metaphorical Story
2. Part 2: The Visual Blueprint
3. Part 3: The Code Adapter

Minimum structural targets:

1. Story: 1,000 to 1,500 words
2. Blueprint: 10 to 15 diagrams
3. Code Adapter: production syntax and at least one anti-pattern with correction

## Canonical Build Stack

All book builds must be authored in:

1. HTML for structure
2. CSS for visual and print systems
3. JavaScript for optional interactions, assessment widgets, and print-time dynamic elements such as TOC preparation

Allowed additions:

1. static build scripts for artifact generation
2. CSS print utilities
3. content linting scripts

Not allowed as source-of-truth content:

1. hand-edited generated PDFs
2. manually diverged print-only source that bypasses canonical HTML

## Packaging and Brand Layer

Required:

1. premium front cover treatment
2. strong subtitle with scope and level
3. front metadata block with level, audience, format, and prerequisites
4. Hexadigitall URL and support path
5. polished back cover summary with outcomes and audience
6. barcode or ISBN zone in cover workflow, not interior body text

## Commercial and Access Layer

Required in front matter:

1. copyright and usage terms
2. updates or errata path
3. support path
4. mentorship path
5. course or cohort path where available

## Front Matter Standard

Required sequence:

1. copyright and access
2. license and updates
3. mentorship and enrollment options
4. table of contents
5. how to use this book
6. prerequisites and setup
7. learning framework
8. success strategies and workflow

Recommended additions where useful:

1. author note
2. portfolio rules page
3. time and cost expectations for lab-heavy books

## Unit and Chapter Architecture

Each chapter or unit should follow a repeatable order:

1. why this chapter matters
2. objectives
3. pre-reading or pre-lab tasks
4. main learning narrative
5. diagrams and walkthroughs
6. implementation tasks
7. troubleshooting guidance
8. practice checks
9. applied challenge
10. reflection and portfolio capture

## Portfolio Evidence Layer

Required for every implementation-heavy book:

1. repository naming rule
2. chapter-by-chapter evidence folder structure
3. README or runbook expectations
4. artifact capture rules for commands, configs, outputs, and diagrams
5. capstone evidence expectations where applicable

## Assessment Layer

When a title is assessment-driven, include:

1. practice questions
2. chapter quiz
3. scenario test
4. assignment or build task
5. capstone or synthesis challenge

Assessment labeling guidance:

1. quiz is formative
2. scenario test is applied
3. assignment is portfolio evidence
4. capstone is summative delivery

## Troubleshooting and Operational Realism

Required where labs or infrastructure examples exist:

1. common failure patterns
2. fixes and fallback steps
3. permission and access warnings
4. cleanup guidance
5. cost warnings for paid cloud services

## Teacher and Student Edition Boundaries

Shared across editions:

1. brand system
2. front matter quality
3. chapter flow
4. portfolio expectations
5. print system quality

Teacher-only material may include:

1. answer keys
2. grading rubrics
3. facilitation notes

Student-safe editions must exclude:

1. answer keys
2. internal grading logic
3. instructor-only facilitation instructions

## 6 x 9 Print Standard

This is mandatory for Metaphors for Software print-targeted books unless an explicit exception is documented.

Required:

1. actual page box at 6in x 9in via CSS print rules
2. mirrored gutter margins for duplex reading
3. outside margins tuned for narrow print pages
4. chapter starts with stable page-break behavior
5. avoidance of awkward splits in code blocks, callouts, and figure clusters

Print anti-patterns to avoid:

1. claiming 6 x 9 while keeping A4 page rules
2. desktop paddings copied directly into print chapters
3. hardcoded visible page numbers embedded in HTML content
4. mixed manual and CSS-driven pagination

Pagination requirement:

1. page numbering must be generated by CSS print engine behavior
2. do not hardcode numeric page spans in source content

## HTML CSS JS Book File Contract

Each book folder should include these canonical files as work begins:

1. book.html as the primary source interior
2. styles.css for shared and book-specific styling
3. print.css for print-only geometry and pagination behavior
4. interactions.js for optional interactive features
5. metadata.json for machine-readable catalog and production metadata

Optional supporting files:

1. assets directory for figures and diagrams
2. assessment.json for embedded study mode assessments
3. build notes for export scripts

## Metadata Requirements

Each metadata file must include:

1. title, slug, number, and domain
2. concept scope and technical concepts
3. author and reviewer fields
4. status and version
5. last modified date
6. related books and prerequisites

## Release Gates

Gate 1: Content Structure

1. Rule of Three complete
2. chapter architecture consistent
3. metadata complete

Gate 2: Technical Quality

1. code examples run as described
2. anti-pattern explanations are concrete
3. terminology is consistent across story, diagrams, and code

Gate 3: Visual and Accessibility

1. contrast minimum 4.5 to 1 for text and background
2. diagrams legible in grayscale
3. alt text provided for visual assets

Gate 4: Print Readiness

1. true 6 x 9 print geometry
2. stable page breaks
3. no hardcoded pagination artifacts
4. proof PDF reviewed

Gate 5: Sales Readiness

1. cover assets complete
2. support and errata paths valid
3. marketplace metadata prepared
4. identifier strategy prepared per format

## Production Sequence

1. define book scope and learner outcomes
2. produce story, diagram map, and code adapter outline
3. implement canonical HTML CSS JS source files
4. apply 6 x 9 print system and verify pagination
5. generate proof PDFs and resolve layout issues
6. finalize cover package and marketplace metadata

## Relationship to Playbook

This standard defines what the book product must be.

Operational export, packaging, and marketplace release steps are defined in:

1. docs/playbooks/metaphors-print-and-sales-playbook.md
