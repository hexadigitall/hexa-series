# The Recursive Mirror

**Domain:** The Workshop | **Book 3 of 12**

**Metaphor:** A room of mirrors where each reflection is a smaller version of the original

**Technical Goal:** Recursion, stack frames, base case, call stack

---

## Part 1: The Metaphorical Story

### The Story of the Painter Inside the Painting

> [Draft pending — a painter is commissioned to paint a self-portrait that contains, within the painting, a smaller self-portrait, which contains a smaller one still. The painter begins confidently but faces a crisis: when does it stop? She nearly falls into infinite regress before her mentor teaches her the concept of the "minimum scene" — a base case small enough to be painted without containing another portrait. The resolution shows the stack unwind: the smallest portrait is finished first, which allows the next larger one to complete, which allows the next, all the way to the full-size original.]

---

## Part 2: The Visual Blueprint

> Diagrams pending production. Planned sequence:
> 1. Metaphor bridge (mirror room → call stack, each reflection → stack frame)
> 2. A call stack growing (push frames)
> 3. A call stack resolving (pop frames)
> 4. Base case identification
> 5. Stack overflow: what happens without a base case
> 6. Fibonacci as a tree of calls
> 7. Recursion vs iteration comparison
> 8. Tail recursion and optimization

---

## Part 3: The Code Adapter

### Metaphor-to-Code Table (Outline)

| Story Element | Technical Name |
|---|---|
| Each mirror reflection | recursive function call |
| The room of mirrors | call stack |
| One reflected scene | stack frame |
| The minimum scene | base case |
| Painting the smallest first | return value unwinding |

### Canonical Pattern (Python 3.10+)

> [Draft pending — factorial, fibonacci, directory traversal as worked examples. Show the call stack state at each step.]

### Antipattern

> [Draft pending — missing base case, incorrect base case, recursion where iteration is more appropriate]

### Before / After

> [Draft pending]
