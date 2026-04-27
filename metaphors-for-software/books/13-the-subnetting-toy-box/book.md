# The Subnetting Toy Box

**Domain:** The City | **Book 13**

**Metaphor:** Toy boxes, sliding walls, and room labels that turn subnet math into a spatial game

**Technical Goal:** Teach subnetting from first principles with visual chunking and practical automation

---

## Part 1: The Metaphorical Story

### The Story of the Builder Who Measured Every Box

A neighborhood school receives one giant toy chest. It works for a week, then chaos starts: puzzle pieces mix with blocks, science kits disappear, and game cards spill into every corner. The caretaker, Mara, does not buy a bigger chest. She installs sliding walls.

Each wall sets a clear boundary. Each section gets a label. She keeps one label for the section itself, one reserved card no child can claim, and one final card to announce cleanup time across the whole section.

The breakthrough comes when a new class arrives and needs a tiny section just for partner games. Mara does not rebuild everything. She slices one section into smaller boxes while preserving the main labels.

By the end, every class knows exactly where play begins, where it ends, and which door to use when toys need to move between rooms.

---

## Part 2: The Visual Blueprint

Planned diagram sequence:

1. Toy chest to network map bridge
2. Binary light switches and decimal counting
3. CIDR as moving divider wall
4. Network ID and broadcast as floor and lid
5. Usable host range as playable space
6. /24 split into /25 and /26 toy rooms
7. /30 point-to-point corridor model
8. VLSM design for mixed room sizes
9. Gateway and route handoff between rooms
10. Failure mode: overlapping toy labels
11. Correction pattern: non-overlapping allocation map
12. Printable cheat sheet from /8 to /32

---

## Part 3: The Code Adapter

### Metaphor-to-Code Table

| Story Element | Technical Name |
|---|---|
| Toy chest | IP block |
| Sliding wall | Subnet mask |
| Section label | Network ID |
| Cleanup announcement card | Broadcast address |
| Room door | Default gateway |

### Canonical Pattern (Python + YAML)

- Python ipaddress examples for deriving network, host ranges, and broadcast
- YAML variable file pattern for subnet inventory in automation projects
- Ansible filter examples using ipaddr() to avoid manual mistakes

### Antipattern

- Overlapping CIDR ranges between departments
- Using /24 by habit even when host demand is small
- Manual gateway math copied between tickets

### Before / After

Before: Spreadsheet-only subnet allocation with repeated collisions.

After: Source-controlled YAML subnet map with generated host ranges and validation checks.
