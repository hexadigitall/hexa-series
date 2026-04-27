# The Firewall Border Patrol

**Domain:** The City | **Book 8 of 12**

**Metaphor:** Passports, checkpoints, and not-on-the-list denials

**Technical Goal:** Network security, ports, ingress rules, egress rules, stateful inspection

---

## Part 1: The Metaphorical Story

### The Story of the Border That Never Slept

> [Draft pending — a border crossing manages thousands of vehicles. Some are expected (pre-approved suppliers). Some arrive unannounced and claim permission. Some carry the right papers but are going to the wrong exit. The crisis: a vehicle arrives that looks legitimate but is carrying contraband to an internal warehouse. The resolution introduces a layered checkpoint: not just "does the passport exist?" but "is this vehicle expected at this exit, carrying this cargo, at this time?" The turning point reveals that a stateless check (is the passport valid?) is weaker than a stateful check (does this vehicle match an earlier outbound request?).]

---

## Part 2: The Visual Blueprint

> Diagrams pending production. Planned sequence:
> 1. Metaphor bridge (border → firewall, passport → IP packet, checkpoint rule → ACL entry)
> 2. TCP port as building room number
> 3. Ingress rule table anatomy
> 4. Egress rule table anatomy
> 5. Stateless vs stateful inspection
> 6. Security group vs network ACL (AWS)
> 7. Common attack patterns and which rules block them
> 8. Zero-trust model overview

---

## Part 3: The Code Adapter

### Metaphor-to-Code Table (Outline)

| Story Element | Technical Name |
|---|---|
| The border | firewall |
| Vehicle passport | source IP and port |
| Destination exit | destination IP and port |
| The allowed list | allowlist / whitelist rule |
| Stateless check | packet filter (no connection tracking) |
| Stateful check | stateful inspection (tracks connection state) |

### Canonical Pattern (Bash + Terraform)

> [Draft pending — `iptables` rules, AWS Security Group Terraform example, explicit deny-all with selective allow, egress control]

### Antipattern

> [Draft pending — allow-all ingress, no egress control, stateless rules for stateful protocols]

### Before / After

> [Draft pending]
