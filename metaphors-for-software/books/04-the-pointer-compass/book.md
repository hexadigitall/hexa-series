# The Pointer Compass

**Domain:** The Workshop | **Book 4 of 12**

**Metaphor:** Maps, street addresses, and pointing to where the treasure is buried

**Technical Goal:** Memory management, references, pointers, heap vs stack

---

## Part 1: The Metaphorical Story

### The Story of the Cartographer's Map

> [Draft pending — a cartographer is hired to guide a team to buried treasure. She does not carry the treasure with her. She carries a map with an address — coordinates that point to where the treasure is. The crisis: a rival team is given a copy of the map. When the rival team digs up the treasure and moves it, the cartographer's map now points to an empty hole. The resolution introduces the idea of ownership and reference invalidation: a map is only valuable if what it points to still exists. The turning point establishes the difference between having a thing and knowing where a thing is.]

---

## Part 2: The Visual Blueprint

> Diagrams pending production. Planned sequence:
> 1. Metaphor bridge (map → pointer, address → memory address, treasure → value)
> 2. Stack vs heap memory layout
> 3. Pointer declaration and dereferencing (C)
> 4. Reference vs value semantics comparison
> 5. Null pointer: a map to nowhere
> 6. Dangling pointer: a map to a moved treasure
> 7. Garbage collection: the city that reclaims empty lots
> 8. Python / Go references vs C pointers comparison

---

## Part 3: The Code Adapter

### Metaphor-to-Code Table (Outline)

| Story Element | Technical Name |
|---|---|
| The map | pointer / reference |
| The coordinates | memory address |
| The treasure | value stored in memory |
| A copied map | reference copy (same address) |
| The rival moving the treasure | memory mutation / deallocation |
| An empty hole | null / dangling pointer |

### Canonical Pattern (C and Python)

> [Draft pending — pointer arithmetic in C, reference semantics in Python, Go pointers, how Python's garbage collector handles this automatically]

### Antipattern

> [Draft pending — dangling pointers, memory leaks, passing large objects by value when reference is intended]

### Before / After

> [Draft pending]
