# The Load Balancing Traffic Cop

**Domain:** The City | **Book 7 of 12**

**Metaphor:** Directing cars to different lanes to prevent a massive traffic jam

**Technical Goal:** High availability, horizontal scaling, round-robin, health checks, failover

---

## Part 1: The Metaphorical Story

### The Story of the Officer at the Crossroads

> [Draft pending — a single road into the city is becoming a bottleneck. One traffic officer manages everything manually. When a bus breaks down blocking lane one, all traffic halts. The crisis: the officer realizes that a single point of failure is not a system — it is a risk. The resolution shows the officer designing a multi-lane roundabout with observable entry conditions: if a lane is blocked, cars are redirected. If a lane is slow, fewer cars are sent there. The turning point: the officer sees that fairness is not the goal — throughput is. Round-robin sends equal traffic; weighted distribution sends smarter traffic.]

---

## Part 2: The Visual Blueprint

> Diagrams pending production. Planned sequence:
> 1. Metaphor bridge (road → traffic, lane → server, cop → load balancer)
> 2. Single server failure mode
> 3. Round-robin distribution across 3 servers
> 4. Weighted round-robin
> 5. Health check: what happens when a server goes down
> 6. Session persistence (sticky sessions)
> 7. Layer 4 vs Layer 7 load balancing
> 8. Auto-scaling trigger diagram

---

## Part 3: The Code Adapter

### Metaphor-to-Code Table (Outline)

| Story Element | Technical Name |
|---|---|
| The road | network traffic / requests |
| Each lane | backend server / pod |
| The officer | load balancer |
| Sending equal cars to each lane | round-robin |
| Checking if a lane is blocked | health check |
| Blocking off a broken lane | failover / drain |

### Canonical Pattern (NGINX config + YAML)

> [Draft pending — NGINX upstream block with round-robin, health_check directive, AWS ALB target group example, Kubernetes Service load balancing]

### Antipattern

> [Draft pending — single server with no redundancy, sticky sessions causing uneven load, health checks that are too slow]

### Before / After

> [Draft pending]
