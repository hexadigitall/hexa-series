# The CI/CD Conveyor Belt

**Domain:** The Factory | **Book 11 of 12**

**Metaphor:** A belt that automatically checks every part for quality before it goes into the box

**Technical Goal:** Pipelines, automated testing, continuous integration, continuous deployment

---

## Part 1: The Metaphorical Story

### The Story of the Line That Refused Bad Parts

> [Draft pending — a factory assembles precision instruments. For years, the final quality check happened at the end of the line — one inspector examining every finished product. Defects were found late, after hours of assembly work had already been done on the bad part. The crisis: a faulty batch ships before the inspector catches it. The resolution redesigns the line itself: every station on the belt has its own small inspector. A part that fails at station three never reaches station four. The turning point: quality is not a gate at the end. It is a property of every step. The belt itself refuses bad parts.]

---

## Part 2: The Visual Blueprint

> Diagrams pending production. Planned sequence:
> 1. Metaphor bridge (belt station → pipeline stage, inspector → automated test, failed part → build failure)
> 2. CI pipeline stages: lint → test → build → scan
> 3. CD pipeline stages: build → staging deploy → smoke test → production deploy
> 4. Branch strategy and when pipelines run
> 5. Artifact management
> 6. Rollback: reversing the belt
> 7. Environment promotion (dev → staging → prod)
> 8. Pipeline as code: the YAML definition

---

## Part 3: The Code Adapter

### Metaphor-to-Code Table (Outline)

| Story Element | Technical Name |
|---|---|
| The conveyor belt | CI/CD pipeline |
| Each station | pipeline stage |
| The small inspector | automated test / lint / scan step |
| A rejected part | failed build |
| The finished boxed product | deployable artifact |
| Shipping to the store | deployment to production |

### Canonical Pattern (GitHub Actions YAML)

> [Draft pending — complete `.github/workflows/ci.yml` with lint, test, build, push to registry, deploy to staging, manual approval for production]

### Antipattern

> [Draft pending — manual deployments, no test coverage, deploying directly to production without staging, ignoring failed tests with `continue-on-error`]

### Before / After

> [Draft pending]
