# The Ansible Assembly Line

**Domain:** The Factory | **Book 10 of 12**

**Metaphor:** Robots on a factory floor following a playbook to build the same car every time

**Technical Goal:** Infrastructure as code, idempotency, configuration management, Ansible playbooks

---

## Part 1: The Metaphorical Story

### The Story of the Factory That Never Made the Same Mistake Twice

> [Draft pending — a car factory once relied on skilled workers memorizing assembly steps. When a senior worker left, the knowledge left too. The replacement team produced cars with subtle defects — same parts, wrong sequence, wrong torque settings. The crisis: a recall. The resolution introduces the Playbook: a book issued to every robot on the floor that describes, step by step, every action to take and every condition to verify. If the bolt is already torqued correctly, the robot skips it. If not, it tightens. The turning point: the robots never argue about what state the car is in. They check, and correct if needed. They are idempotent.]

---

## Part 2: The Visual Blueprint

> Diagrams pending production. Planned sequence:
> 1. Metaphor bridge (robot → Ansible task, playbook → YAML playbook, factory floor → inventory)
> 2. Inventory anatomy (hosts, groups, vars)
> 3. Playbook structure (play → tasks → handlers)
> 4. Idempotency: before/during/after on an already-correct server
> 5. Roles directory structure
> 6. Variables and precedence
> 7. Handlers and notify
> 8. Ansible vault for secrets

---

## Part 3: The Code Adapter

### Metaphor-to-Code Table (Outline)

| Story Element | Technical Name |
|---|---|
| The factory floor | Ansible inventory |
| Each robot | managed host |
| The playbook | YAML playbook |
| One assembly step | task |
| "Check before applying" | idempotent module behavior |
| "Only restart if changed" | handler with notify |

### Canonical Pattern (YAML)

> [Draft pending — a complete playbook that installs and configures nginx, uses a role, shows idempotency with `changed` vs `ok` output, vault for secrets]

### Antipattern

> [Draft pending — using `shell` module instead of idempotent modules, hardcoded secrets, no inventory groups]

### Before / After

> [Draft pending]
