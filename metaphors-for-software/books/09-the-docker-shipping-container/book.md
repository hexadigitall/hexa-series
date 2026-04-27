# The Docker Shipping Container

**Domain:** The Factory | **Book 9 of 12**

**Metaphor:** Standardized metal boxes that fit on any ship, train, or truck

**Technical Goal:** Containerization, Docker images, Dockerfiles, environment isolation

---

## Part 1: The Metaphorical Story

### The Story of the Cargo That Arrived Whole

> [Draft pending — a logistics company ships fragile goods internationally. For decades, each shipment was packed differently: one captain used wood crates, another used cloth bags. Goods arrived damaged because no two handlers treated them the same. The crisis: a critical medical shipment is destroyed in transit because the loading crew at the destination port did not know how to handle it. The resolution introduces the standardized metal container: a sealed unit with known dimensions, weight ratings, and handling instructions stencilled on the side. It doesn't matter who moves it — ship, train, or truck. The container's internal environment is consistent. The turning point: the container is not the cargo. It is the guarantee that the cargo arrives in the same state it left.]

---

## Part 2: The Visual Blueprint

> Diagrams pending production. Planned sequence:
> 1. Metaphor bridge (container → Docker container, stencil → Dockerfile, manifest → image)
> 2. Image vs container (blueprint vs running instance)
> 3. Dockerfile instruction sequence
> 4. Layer caching in image builds
> 5. Container isolation (process, network, filesystem)
> 6. Volumes: persisting data outside the container
> 7. Image registry: Docker Hub, ECR, GCR
> 8. Multi-stage builds for production images

---

## Part 3: The Code Adapter

### Metaphor-to-Code Table (Outline)

| Story Element | Technical Name |
|---|---|
| The metal container | Docker container |
| The container specification | Dockerfile |
| A sealed container ready to ship | Docker image |
| Loading instructions on the outside | image metadata / labels |
| The container's internal environment | container filesystem / process space |
| The shipping manifest | `docker-compose.yml` |

### Canonical Pattern (Dockerfile + Bash)

> [Draft pending — minimal Python app Dockerfile, multi-stage build example, `.dockerignore`, `docker build`, `docker run`, volume mount example]

### Antipattern

> [Draft pending — running as root, no `.dockerignore`, storing secrets in image layers, bloated base images]

### Before / After

> [Draft pending]
