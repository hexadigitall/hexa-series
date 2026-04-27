# Subnetting Espresso

**Domain:** The City | **Book 5 of 12**

**Metaphor:** Concentrated doses of IP math using coffee cup sizes and room dividers

**Technical Goal:** CIDR notation, subnet masks, network boundaries, routing

---

## Part 1: The Metaphorical Story

### The Story of the Barista Who Divided the Café

> [Draft pending — a café owner expands from one room to a building. She needs to divide the space so that regular customers, takeout orders, and wholesale clients have separate areas that don't interfere. She uses dividers of different sizes: thick walls for major separations, smaller partitions for internal groupings. The crisis: a delivery driver enters the wrong section and disrupts service. The resolution introduces the concept of labeled thresholds — each section has a visible boundary rule that says who belongs inside it. The turning point maps directly to subnet masks: not every address in a range belongs to the same network.]

---

## Part 2: The Visual Blueprint

> Diagrams pending production. Planned sequence:
> 1. Metaphor bridge (café room → subnet, divider → mask, address → IP)
> 2. Binary IP address breakdown
> 3. CIDR notation explained (/24, /16, /8)
> 4. Subnet mask in binary
> 5. Network address vs broadcast address vs usable hosts
> 6. Subnetting a /24 into /26 blocks
> 7. VLSM (variable length subnet masking)
> 8. Routing between subnets

---

## Part 3: The Code Adapter

### Metaphor-to-Code Table (Outline)

| Story Element | Technical Name |
|---|---|
| The whole building | network (e.g. 192.168.0.0/16) |
| One room | subnet |
| The room divider | subnet mask |
| A seat number | host address |
| The door rule | gateway / routing rule |

### Canonical Pattern (Bash / Python)

> [Draft pending — `ipcalc` usage, Python `ipaddress` module, practical subnetting examples with AWS VPC or similar]

### Antipattern

> [Draft pending — overlapping subnets, too-large subnets wasting addresses, too-small subnets blocking growth]

### Before / After

> [Draft pending]
