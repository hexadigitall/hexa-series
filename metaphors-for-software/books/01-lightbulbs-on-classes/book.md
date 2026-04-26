# Lightbulbs on Classes

**Domain:** The Workshop | **Book 1 of 12**

**Metaphor:** Blueprints, filaments, and switches

**Technical Goal:** Master Object-Oriented Programming — classes, instances, methods, and encapsulation

---

## Part 1: The Metaphorical Story

### The Story of the Master Glassblower

The workshop smelled of hot sand and iron.

Old Vera had been making lightbulbs for forty years. She knew every step so completely that she no longer thought about them — she simply moved, and the bulb appeared. Her hands remembered the glass at the end of the blowpipe. Her ears recognized the exact pitch of the flame when it was correct. She had made ten thousand lightbulbs. No two were identical. But all of them worked.

The city had grown. Orders tripled. The factory manager came to Vera with a problem.

"We need fifty bulbs a week," he said. "You can make thirty."

"Then find another glassblower," Vera told him.

"There are no other glassblowers like you," he said. "But there are apprentices."

Vera looked at him for a long time. Then she picked up a blank piece of paper and began to write.

---

She worked for three days. She drew shapes: the exact curve of the glass globe, measured to the millimeter. She wrote temperatures: the specific heat of the tungsten filament, the pressure of the gas inside the sealed envelope, the length of the leads. She described the base: how many millimeters of brass, how many threads on the screw.

At the bottom of the page she wrote a checklist: *Is the seal airtight? Does the filament glow at 110 volts? Does the base thread evenly? If no, start again.*

She called this document **The Blueprint**.

The Blueprint was not a bulb. It was the idea of a bulb, made precise enough that anyone who followed it would produce a real one.

---

She called three apprentices together and handed each of them a copy.

The first apprentice — a young man named Marco — followed the blueprint and produced a bulb. His bulb was not as beautiful as Vera's. But when Marco screwed it into the socket and the filament glowed, it was indistinguishable from hers.

The second apprentice made a red-tinted bulb. Same blueprint. Different glass. Also correct.

The third made a smaller bulb for a reading lamp. She scaled the blueprint. Still correct.

---

Vera watched them work. She noticed they each kept stopping to ask her the same questions: *How do I check if the seal is good? How do I measure the temperature? When do I know the filament is set?*

She added a section to the blueprint she called **Procedures**.

Each procedure had a name and a set of steps. *CheckSeal. MeasureTemperature. SetFilament.* When an apprentice needed to know how to check the seal, they did not come to Vera. They opened the blueprint, found *CheckSeal*, and followed it.

The questions stopped.

---

The factory manager returned two months later. The workshop was producing sixty bulbs a week.

"How?" he asked.

Vera showed him the blueprint.

He looked at the single page, then at the three apprentices, each working independently at their own bench, each building a different bulb, each following the same blueprint.

"One document," he said. "Three workers. Sixty bulbs."

"One document," Vera agreed. "But fifty-three bulbs so far this week. Marco's seal keeps failing."

She walked to Marco's bench and pointed to *CheckSeal* on the blueprint. He had been skipping it.

"The blueprint is not a suggestion," she said.

---

The day before Vera retired, she added one final line to the blueprint.

*This document creates bulbs. A bulb created from this document is complete only when every procedure in the Procedures section has been run.*

She called this final instruction the **Constructor**.

---

## Part 2: The Visual Blueprint

> Diagrams produced using the HexaTech HTML/CSS visual framework.
> Domain color: Deep Amber `#d97706`

---

### Diagram 1 — The Metaphor Bridge

*Maps each story element to its Object-Oriented Programming equivalent.*

```
┌──────────────────────────────────────────────────────────────┐
│  STORY ELEMENT              │  OOP EQUIVALENT                │
│─────────────────────────────│────────────────────────────────│
│  The Blueprint              │  class                         │
│  A finished bulb            │  instance (object)             │
│  Marco's bulb               │  instance 1                    │
│  The red-tinted bulb        │  instance 2 (same class,       │
│                             │  different attribute values)   │
│  CheckSeal / SetFilament    │  methods                       │
│  The Constructor line       │  __init__ / constructor        │
│  Blueprint fields           │  attributes / properties       │
│  The workshop               │  program / runtime             │
└──────────────────────────────────────────────────────────────┘
```

---

### Diagram 2 — Class Anatomy

*The parts of a class, labeled.*

```
┌──────────────────────────────────────────────────────────────┐
│                      class Lightbulb                         │
│──────────────────────────────────────────────────────────────│
│  ATTRIBUTES (blueprint fields)                               │
│    wattage        → int                                      │
│    color          → str                                      │
│    filament_set   → bool                                     │
│    seal_intact    → bool                                     │
│──────────────────────────────────────────────────────────────│
│  CONSTRUCTOR                                                  │
│    __init__(self, wattage, color)                            │
│      Sets initial values for all attributes                  │
│──────────────────────────────────────────────────────────────│
│  METHODS (procedures)                                        │
│    check_seal()     → verifies seal integrity                │
│    set_filament()   → sets tungsten filament                 │
│    power_on()       → activates at rated voltage             │
└──────────────────────────────────────────────────────────────┘
```

---

### Diagram 3 — Class vs Instance

*One blueprint. Three distinct objects.*

```
              class Lightbulb (one definition)
                        │
         ┌──────────────┼──────────────┐
         ▼              ▼              ▼
    bulb_marco     bulb_red      bulb_small
    wattage=60     wattage=60    wattage=25
    color=clear    color=red     color=clear
    (Marco's)      (tinted)      (reading lamp)
```

---

### Diagram 4 — Method Execution Flow

*What happens when you call a method on an instance.*

```
    bulb_marco.check_seal()
         │
         ▼
    Python looks up check_seal in class Lightbulb
         │
         ▼
    Executes check_seal with self = bulb_marco
         │
         ▼
    Reads self.seal_intact
         │
         ▼
    Returns True / False to caller
```

---

### Diagram 5 — Encapsulation

*Hiding internal state. Exposing controlled interfaces.*

```
┌────────────────────────────────────────────────────────────┐
│   class Lightbulb                                          │
│                                                            │
│   PRIVATE (inside the bulb)                                │
│     _filament_temp   ← not directly readable outside      │
│     _gas_pressure    ← not directly readable outside      │
│                                                            │
│   PUBLIC INTERFACE                                         │
│     power_on()       ← caller uses this                   │
│     check_seal()     ← caller uses this                   │
│     is_working()     ← returns True/False                  │
│                                                            │
│   External code knows the bulb works.                      │
│   External code does not need to know the filament temp.  │
└────────────────────────────────────────────────────────────┘
```

---

### Diagrams 6–15

> [Pending production — additional diagrams in this section will cover:]
> - Inheritance (the "child blueprint")
> - Class hierarchies
> - Static vs instance methods
> - The `self` parameter explained visually
> - Before/after comparison: procedural vs OOP
> - Real-world class diagram: a user authentication system
> - Composition vs inheritance decision tree
> - Common OOP antipatterns (God class, anemic model)
> - Full worked example class diagram

---

## Part 3: The Code Adapter

### Metaphor-to-Code Table

| Story Element | Technical Name | Python Syntax |
|---|---|---|
| The Blueprint | class | `class Lightbulb:` |
| A finished bulb | instance / object | `bulb = Lightbulb(60, "clear")` |
| Blueprint fields | attributes | `self.wattage = wattage` |
| The Constructor line | `__init__` method | `def __init__(self, wattage, color):` |
| A procedure (CheckSeal) | method | `def check_seal(self):` |
| Vera's private notes | private attribute | `self._filament_temp = 2700` |
| "Run every procedure" | constructor enforcement | `__init__` is called automatically at instantiation |

---

### The Canonical Pattern (Python 3.10+)

```python
class Lightbulb:
    """
    Blueprint for a lightbulb.
    Each instance represents one physical bulb.
    """

    def __init__(self, wattage: int, color: str = "clear"):
        self.wattage = wattage
        self.color = color
        self.filament_set = False
        self.seal_intact = False
        self._filament_temp = 0  # private: internal state only

    def set_filament(self) -> None:
        self._filament_temp = 2700
        self.filament_set = True

    def check_seal(self) -> bool:
        # In a real system this would inspect internal state
        self.seal_intact = self.filament_set
        return self.seal_intact

    def power_on(self) -> str:
        if not self.filament_set:
            return "Error: filament not set"
        if not self.seal_intact:
            return "Error: seal not intact"
        return f"Bulb glowing at {self.wattage}W ({self.color})"

    def is_working(self) -> bool:
        return self.filament_set and self.seal_intact


# Creating instances (making bulbs from the blueprint)
bulb_marco = Lightbulb(wattage=60, color="clear")
bulb_red = Lightbulb(wattage=60, color="red")
bulb_small = Lightbulb(wattage=25, color="clear")

# Running methods (following the procedures)
bulb_marco.set_filament()
bulb_marco.check_seal()
print(bulb_marco.power_on())  # → "Bulb glowing at 60W (clear)"

bulb_small.set_filament()
# Marco's mistake: skipping check_seal
print(bulb_small.power_on())  # → "Error: seal not intact"
```

---

### The Same Pattern in JavaScript (ES2022)

```javascript
class Lightbulb {
  #filamentTemp = 0; // private field (ES2022)

  constructor(wattage, color = "clear") {
    this.wattage = wattage;
    this.color = color;
    this.filamentSet = false;
    this.sealIntact = false;
  }

  setFilament() {
    this.#filamentTemp = 2700;
    this.filamentSet = true;
  }

  checkSeal() {
    this.sealIntact = this.filamentSet;
    return this.sealIntact;
  }

  powerOn() {
    if (!this.filamentSet) return "Error: filament not set";
    if (!this.sealIntact) return "Error: seal not intact";
    return `Bulb glowing at ${this.wattage}W (${this.color})`;
  }
}

const bulbMarco = new Lightbulb(60, "clear");
bulbMarco.setFilament();
bulbMarco.checkSeal();
console.log(bulbMarco.powerOn()); // "Bulb glowing at 60W (clear)"
```

---

### The Antipattern: Procedural Sprawl

```python
# Before OOP: everything in functions with no shared state

filament_set = False
seal_intact = False
wattage = 60

def set_filament():
    global filament_set
    filament_set = True

def check_seal():
    global seal_intact
    seal_intact = filament_set

def power_on():
    if not filament_set:
        return "Error"
    return f"Glowing at {wattage}W"

# Problem: this only works for ONE bulb at a time.
# Adding a second bulb requires duplicating every variable.
# There is no "blueprint" — only scattered global state.
```

**Why it fails:**
- No encapsulation: all state is global and can be corrupted from anywhere
- Cannot create multiple bulbs without naming every variable twice
- No relationship between the data (wattage) and the behaviour (power_on)
- Impossible to extend without touching existing code

**The OOP fix:** Everything above becomes one class. Each bulb instance carries its own state. The global namespace stays clean.

---

### Before / After

| Problem | Procedural approach | OOP approach |
|---|---|---|
| Track two bulbs | `wattage_1`, `wattage_2`, `filament_1`, `filament_2`... | `bulb1 = Lightbulb(60)`, `bulb2 = Lightbulb(40)` |
| Add a new behaviour | Edit global functions | Add a method to the class |
| Share the pattern | Copy-paste code | Import the class |
| Hide internal state | Not possible with globals | Private attributes (`_name` / `#name`) |

---

### Production Context

OOP is the foundational pattern of most production codebases. You will find classes everywhere:

- Django/Flask: `class UserSerializer(serializers.ModelSerializer)`
- Java Spring: `@Component class AuthService`
- Kubernetes controllers: Python `class Reconciler` patterns
- Game engines: every game entity is a class instance

Learning to think in classes — blueprint first, instance second — is not optional for professional development.

---

### Further Depth

- SOLID principles: five rules that make OOP systems maintainable
- Inheritance and polymorphism (Book 2 connection: how drawers inherit from containers)
- Abstract classes and interfaces: blueprints that enforce but do not implement
- Dataclasses in Python: `@dataclass` shorthand for attribute-heavy classes
- Design patterns: Factory, Singleton, Observer — all built on classes
