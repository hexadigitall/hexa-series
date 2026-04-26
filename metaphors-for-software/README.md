# Metaphors for Software

**Hexadigitall Technologies — April 2026**

---

## What This Series Is

**Metaphors for Software** is a 12-book technical education series that treats software engineering as a physical craft.

Every book in the series works at three levels simultaneously:

1. **A Metaphorical Story** — A 5-page narrative opening that builds intuitive understanding before any code appears. The story is not decorative. It is the conceptual scaffolding.
2. **The Visual Blueprint** — 10–15 high-contrast diagrams using the HexaTech HTML/CSS visual framework. These make abstract systems architecture concrete and navigable.
3. **The Code Adapter** — A final section that translates the metaphor directly into working syntax, naming conventions, and patterns from real production environments.

This is the "Rule of Three" that every book must follow without exception.

---

## The Career Path

The series is structured as a journey through three domains. A reader who completes all three has moved from individual programmer to systems thinker to delivery engineer.

### Domain 1: The Workshop — The Foundations

*Focus: The individual artisan at their desk. The atoms of code.*

| # | Title | Metaphor | Technical Focus |
|---|---|---|---|
| 1 | Lightbulbs on Classes | Blueprints, filaments, and switches | Object-Oriented Programming, instances, methods |
| 2 | The Data Drawer | A cluttered desk with dividers and folders | Variables, data types, arrays, hash maps |
| 3 | The Recursive Mirror | A room of mirrors where each reflection is smaller | Recursion and stack frames |
| 4 | The Pointer Compass | Maps, addresses, and buried treasure | Memory management, references, pointers |

### Domain 2: The City — The Systems

*Focus: Infrastructure and communication. How buildings talk to each other.*

| # | Title | Metaphor | Technical Focus |
|---|---|---|---|
| 5 | Subnetting Espresso | Coffee cup sizes and room dividers | CIDR, subnet masks, network boundaries |
| 6 | The API Post Office | Envelopes, stamps, and return addresses | REST, SOAP, JSON payloads, HTTP status codes |
| 7 | The Load Balancing Traffic Cop | Directing cars to prevent a jam | High availability, horizontal scaling, round-robin |
| 8 | The Firewall Border Patrol | Passports, checkpoints, and denied entry | Network security, ports, ingress/egress rules |

### Domain 3: The Factory — The DevOps and Delivery

*Focus: Automation and scale. The assembly line that ships software.*

| # | Title | Metaphor | Technical Focus |
|---|---|---|---|
| 9 | The Docker Shipping Container | Standardized boxes that fit any transport | Containerization, images, environment isolation |
| 10 | The Ansible Assembly Line | Robots following a playbook to build the same car | Infrastructure as code, idempotency, config management |
| 11 | The CI/CD Conveyor Belt | A quality check at every step before boxing | Pipelines, automated testing, continuous deployment |
| 12 | The Kubernetes Conductor | An orchestra leader for every container | Orchestration, pods, self-healing systems |

---

## The Rule of Three

Every book must adhere strictly to this structure:

### Part 1: The Story (5 pages)
A narrative opening that makes the technical concept physically real. The story has characters, stakes, and resolution. It is not a metaphor in passing — it is a complete scene.

Example: "The Story of the Overworked Postman" (Book 6: The API Post Office)

The story must:
- introduce the metaphor without naming the technical concept
- reach a turning point that mirrors the technical problem the chapter solves
- leave the reader with an intuitive model they did not need to be taught

### Part 2: The Visual Blueprint (10-15 diagrams)
A structured visual section that uses the HexaTech HTML/CSS diagram framework to make the technical concept visible.

Each diagram should:
- carry a clear title
- use high-contrast colors from the series palette
- have labeled components
- progress logically from simple to complex
- include annotations in plain language

### Part 3: The Code Adapter
A translation section that bridges the metaphor to real production syntax.

Each Code Adapter must:
- reference the story characters and objects using technical names
- show real, working code (not pseudocode unless clearly labelled)
- show at least one antipattern and why it fails
- use language-specific examples clearly labelled
- close with a "before / after" that shows the improvement the concept enables

---

## Series Identity

**Tagline:** "Software is a craft. This is how you build it."

**Target audience:** Developers, DevOps engineers, and technical learners who want depth through clarity. Also accessible to non-programmers who think visually and prefer story-driven learning.

**Reading level:** Professional, with narrative written for maximum clarity and zero jargon until concepts are established.

**Format:** Print and digital. Each book standalone. The series has a linear career path but books can be read individually.

**Tone:** The "Techpoet" voice. Precise but human. Rigorous but approachable. Never condescending, never vague.

---

## Repository Structure

```
metaphors-for-software/
├── README.md                        ← This file
├── series-registry.json             ← Machine-readable series metadata
├── docs/
│   ├── standards/
│   │   └── techpoet-book-standard.md ← Rule of Three + production requirements
│   └── templates/
│       └── book-metadata-template.json
└── books/
    ├── 01-lightbulbs-on-classes/
    ├── 02-the-data-drawer/
    ├── 03-the-recursive-mirror/
    ├── 04-the-pointer-compass/
    ├── 05-subnetting-espresso/
    ├── 06-the-api-post-office/
    ├── 07-the-load-balancing-traffic-cop/
    ├── 08-the-firewall-border-patrol/
    ├── 09-the-docker-shipping-container/
    ├── 10-the-ansible-assembly-line/
    ├── 11-the-cicd-conveyor-belt/
    └── 12-the-kubernetes-conductor/
```

---

## Operating Documents

- [Series Standard — Rule of Three](docs/standards/techpoet-book-standard.md)
- [Series Registry](series-registry.json)

---

*Hexadigitall Technologies — April 2026*
