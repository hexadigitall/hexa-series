# Techpoet Book Standard

**Metaphors for Software Series — Hexadigitall Technologies — April 2026**

Version 1.0

---

## Purpose

This document defines how every book in the Metaphors for Software series is written, structured, illustrated, reviewed, and published. It is the production law for the series.

Any book that cannot satisfy every requirement in this standard is not ready for publication.

---

## The Rule of Three

Every book consists of three parts. This structure is not negotiable.

```
┌───────────────────────────────────────┐
│  Part 1: The Metaphorical Story       │  5 pages — narrative, no code
│  Part 2: The Visual Blueprint         │  10–15 diagrams — HexaTech framework
│  Part 3: The Code Adapter             │  Working syntax, patterns, before/after
└───────────────────────────────────────┘
```

---

## Part 1: The Metaphorical Story

### Purpose
Build intuitive understanding of the technical concept before any code or jargon appears. The story is the conceptual scaffolding. Readers who only read Part 1 should leave with a functional mental model.

### Required Length
5 pages (approximately 1,000–1,500 words)

### Required Story Elements

| Element | Description |
|---|---|
| Opening scene | A physical, sensory setting. No abstraction. |
| Central character | A craftsperson, worker, or specialist with a clear role |
| The problem | A real constraint or failure the character faces |
| The solution | A process, system, or insight that resolves the problem |
| The turning point | A moment of clarity that mirrors the technical concept |
| Close | Resolution that leaves a concrete mental image |

### Writing Rules

1. **Never name the technical concept in Part 1.** Let the story carry the idea. The reader discovers the parallel, not the author.
2. **Use physical nouns.** Boxes, lanes, passports, levers, addresses. No clouds, pipelines, or stack traces until Part 3.
3. **The story must be complete.** Beginning, middle, end. Not a metaphor in passing.
4. **Match the domain tone.** Workshop stories are quiet and precise. City stories are urban and high-stakes. Factory stories are systematic and fast.
5. **Allow emotion.** Frustration, relief, pride. The character cares about the outcome. So should the reader.

### Quality Check for Part 1
- Would a non-technical reader find this story satisfying on its own?
- Does the story contain every element of the technical concept without naming it?
- Is the central character facing a real, relatable pressure?
- Does the resolution feel earned?

---

## Part 2: The Visual Blueprint

### Purpose
Make the technical concept visible and navigable. Diagrams here carry equal teaching weight to text.

### Required Diagram Count
10–15 diagrams per book

### HexaTech Visual Framework

All diagrams must be built using the HexaTech HTML/CSS framework. This ensures visual consistency, print-quality export, and accessibility compliance across the series.

#### Framework Color System

| Domain | Primary Color | Hex | Use |
|---|---|---|---|
| The Workshop | Deep Amber | #d97706 | Borders, headers, labels |
| The City | Electric Blue | #2563eb | Borders, headers, labels |
| The Factory | Industrial Green | #16a34a | Borders, headers, labels |
| Accent (all domains) | High Contrast White | #ffffff | Diagram content, text on dark |
| Background | Near Black | #111827 | Diagram background |

#### Typography

| Use | Font | Size |
|---|---|---|
| Diagram title | Orbitron or JetBrains Mono | 16px bold |
| Component label | Exo 2 or Inter | 13px |
| Code snippets in diagrams | JetBrains Mono | 12px |
| Annotation | Inter | 11px regular |

### Diagram Sequence Rules

Diagrams must progress logically. Each diagram in the sequence should answer a question raised by the previous one.

Recommended diagram types per book:

| Diagram Type | Purpose |
|---|---|
| **Metaphor bridge** | Visualize the story metaphor and label its technical equivalent |
| **Component anatomy** | Show all parts of the system and what each does |
| **State change** | Show before/during/after a key operation |
| **Failure mode** | Show what breaks and why |
| **Correct pattern** | Show the resolved state clearly |
| **Scale view** | Show how the concept changes at 1x, 10x, 1000x scale |
| **Comparison table** | Show when to use this pattern vs alternatives |

### Accessibility Requirements for Diagrams

- Minimum contrast ratio 4.5:1 for all text against backgrounds
- No red/green combinations as sole differentiation
- All diagram images must have descriptive alt text (100–150 characters)
- Font sizes minimum 11px in printed form at actual print size
- Key information must be readable in grayscale (for print environments)

### Quality Check for Part 2
- Can a reader understand the core concept from the diagrams alone?
- Does each diagram have a single clear subject?
- Are all diagrams high contrast and accessible?
- Do diagrams progress from simple to complex?
- Do all labels use consistent naming from Part 1 and Part 3?

---

## Part 3: The Code Adapter

### Purpose
Bridge the metaphor to real, working production code. This section gives the technical practitioner exactly what they need to apply the concept immediately.

### Required Length
Minimum 10 pages

### Required Content

| Section | Description |
|---|---|
| **Metaphor-to-code table** | Map each story element to its technical name (e.g., "envelope" = HTTP request body) |
| **Canonical pattern** | The clean, correct implementation of the concept in at least one language |
| **Antipattern** | The common wrong approach and why it fails |
| **Production context** | When and where this pattern is used in real systems |
| **Before/After** | A concrete improvement the concept enables (show the diff) |
| **Further depth** | 3–5 pointers to where this concept extends or connects |

### Code Standards

1. **Real code only.** No pseudocode unless explicitly labelled. All code examples should run.
2. **Language labelling.** Every code block must declare its language.
3. **Multiple languages where relevant.** For widely cross-language concepts (e.g., OOP, REST), show at least two languages.
4. **Preserve the metaphor naming.** Variable names and comments should reference story names until the clean version is shown.
5. **Version pin.** Specify the version of any tool, language, or framework used in the example.

### Antipattern Rules

Every antipattern section must:
- Show real code that appears reasonable but fails
- Explain specifically why it fails (not just "this is bad practice")
- Show the consequence (error message, performance collapse, security exposure)
- Provide the corrected version immediately after

### Quality Check for Part 3
- Does the metaphor-to-code table cover every element introduced in Part 1?
- Do all code examples run without modification?
- Is every language version pinned?
- Does the antipattern include a real failure consequence?
- Can a working developer implement this pattern after reading Part 3 alone?

---

## Book Metadata Standard

Every book must include a `metadata.json` at its folder root with all required fields.

```json
{
  "series": "metaphors-for-software",
  "number": "01",
  "slug": "lightbulbs-on-classes",
  "title": "Lightbulbs on Classes",
  "domain": "workshop",
  "metaphor": "Blueprints, filaments, and switches",
  "storyTitle": "The Story of the Master Glassblower",
  "technicalConcepts": [],
  "primaryLanguage": "python",
  "secondaryLanguages": [],
  "diagramCount": 0,
  "wordCountTarget": {
    "part1": 1200,
    "part2": 2000,
    "part3": 3000
  },
  "author": "Hexadigitall Curriculum Team",
  "technicalReviewer": null,
  "status": "draft",
  "version": "0.1.0",
  "lastModified": "2026-04-26",
  "relatedBooks": [],
  "prerequisites": []
}
```

---

## Review Gates

### Gate 1: Structure Completeness
- [ ] Part 1 present and at correct length (5 pages / 1,000–1,500 words)
- [ ] Part 2 has 10–15 diagrams built in HexaTech framework
- [ ] Part 3 has all required sections (metaphor-to-code table, canonical pattern, antipattern, before/after)
- [ ] metadata.json complete with all required fields

### Gate 2: Technical Accuracy
- [ ] All code examples verified working in declared language and version
- [ ] Antipattern failure described with real error or consequence
- [ ] Technical reviewer signed off
- [ ] Technical concepts list in metadata matches content

### Gate 3: Narrative Quality
- [ ] Part 1 complete story (opening, character, problem, solution, resolution)
- [ ] No technical jargon in Part 1 before the concept is introduced
- [ ] Metaphor-to-code bridge in Part 3 references Part 1 characters and objects
- [ ] Narrative voice is consistent: precise, human, never condescending

### Gate 4: Visual and Accessibility
- [ ] All diagrams use HexaTech framework
- [ ] Minimum 4.5:1 contrast ratio verified
- [ ] All diagrams readable in grayscale
- [ ] Alt text provided for all diagrams
- [ ] Domain color used correctly

### Gate 5: Production Readiness
- [ ] Print-ready PDF exported
- [ ] Cover illustration delivered
- [ ] Web version optimized
- [ ] ISBN or internal ID assigned
- [ ] Legal and rights clearance complete

---

## The Techpoet Voice

This is the series voice standard. Every book must meet it.

**Precise.** Never vague. Specific nouns, specific consequences, specific code.

**Human.** Never cold. Characters and analogies must feel like real people in real places.

**Rigorous.** Never wrong. Technical accuracy is non-negotiable.

**Approachable.** Never condescending. Assume the reader is intelligent and time-constrained.

**Visual.** Never text-only. If something can be shown, show it.

**Sequential.** Never random. Each section builds on the last.

---

## Production Timeline (Per Book)

| Phase | Duration | Milestone |
|---|---|---|
| Outline and story development | 1 week | Story draft + diagram list approved |
| Part 1 writing | 1 week | Story complete and reviewed |
| Part 2 diagram production | 2 weeks | All diagrams in HexaTech framework |
| Part 3 code writing and validation | 2 weeks | All code verified working |
| Technical review | 1 week | Reviewer sign-off |
| Design and layout | 1 week | Print-ready PDF produced |
| Final QA | 3 days | All gates passed |
| **Total** | **~8–10 weeks** | |

---

*Version 1.0 — April 2026*
