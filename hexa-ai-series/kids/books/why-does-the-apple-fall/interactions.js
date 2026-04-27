// Interactions for "Why Does the Apple Fall?"
// Gamification challenges and interactive elements

const WhydoesAppleFallInteractions = {
  bookSlug: "why-does-the-apple-fall",
  
  // Alphabet Explorer™
  alphabetExplorer: {
    concept: "Gravity",
    wordBank: [
      "Apple", "Bodies", "Circles", "Down", "Earth", "Force", "Gravity", 
      "Heavy", "Invisible", "Jumping", "Kinetic", "Levels", "Moon", "Newton",
      "Orbit", "Planets", "Quick", "Rising", "Spinning", "Telescopes", "Universe",
      "Velocity", "Weigh", "Xrays", "Yes", "Zero-gravity"
    ],
    solution: {
      a: "Apple",
      b: "Bodies (celestial)",
      c: "Circles (orbits)",
      d: "Down",
      e: "Earth",
      f: "Force",
      g: "Gravity",
      h: "Heavy",
      i: "Invisible",
      j: "Jumping",
      k: "Kinetic (energy)",
      l: "Levels (of height)",
      m: "Moon",
      n: "Newton",
      o: "Orbit",
      p: "Planets",
      q: "Quickly (falling)",
      r: "Rising",
      s: "Spinning",
      t: "Tree",
      u: "Universe",
      v: "Velocity",
      w: "Weight",
      x: "Xrays",
      y: "Yes",
      z: "Zero-gravity"
    },
    difficulty: "assisted",
    feedback: "Great! You've explored the alphabet of gravity!"
  },
  
  // Ten-Word Master™
  tenWordChallenge: {
    letter: "G",
    chapter: "Chapter 2: The Force of Gravity",
    prompt: "Find 10 words from this chapter that start with G:",
    solution: [
      "Gravity",
      "Ground",
      "Giant",
      "Glowing",
      "Given",
      "Guides",
      "Galaxy",
      "Great",
      "Going",
      "Gloves"
    ],
    difficulty: "guided",
    hints: [
      "The main topic of this chapter starts with G",
      "Think about where you stand",
      "Think about size",
      "Look for light"
    ]
  },
  
  // Concept Remix™
  conceptRemix: {
    title: "Gravity Design Challenge",
    prompt: "Design a toy or machine that uses gravity to make it work.",
    relatedConcepts: ["gravity", "force", "motion"],
    examples: [
      "A gravity-powered marble maze",
      "A water wheel",
      "A seesaw",
      "A slide",
      "A pendulum"
    ],
    rubric: {
      creativeProblemSolving: "Is the design original and thoughtful?",
      conceptApplication: "Does it correctly use gravity?",
      explanation: "Can the student explain how it works?"
    },
    successCriteria: "All three rubric areas demonstrate understanding"
  },
  
  // Chapter Checkpoints
  checkForUnderstanding: [
    {
      chapter: 1,
      question: "Why did Newton's apple fall from the tree?",
      options: [
        "Because wind pushed it",
        "Because invisible gravity pulled it toward Earth",
        "Because the apple was tired"
      ],
      correct: 1,
      explanation: "Gravity is an invisible force that pulls objects toward Earth."
    },
    {
      chapter: 2,
      question: "Is gravity a push or a pull?",
      options: [
        "A push",
        "A pull",
        "Both"
      ],
      correct: 1,
      explanation: "Gravity is always a pulling force, never a push."
    },
    {
      chapter: 3,
      question: "Why would you jump higher on the Moon than on Earth?",
      options: [
        "Because the Moon has stronger gravity",
        "Because the Moon has weaker gravity",
        "Because there's no air on the Moon"
      ],
      correct: 1,
      explanation: "The Moon's gravity is weaker, so you would jump higher there."
    },
    {
      chapter: 4,
      question: "Why do planets orbit the Sun instead of falling into it?",
      options: [
        "Because gravity pulls them toward the Sun, but their speed keeps them circling",
        "Because gravity doesn't exist in space",
        "Because planets are held by invisible strings"
      ],
      correct: 0,
      explanation: "Gravity pulls planets toward the Sun, but their motion keeps them in orbit."
    }
  ],
  
  // Interactive Activities
  dropAndObserve: {
    title: "Drop and Observe Activity",
    chapter: 1,
    description: "Drop three objects from the same height and observe",
    learningGoal: "See gravity in action with real objects"
  },
  
  jumpAndFeel: {
    title: "Jump and Feel Gravity",
    chapter: 2,
    description: "Jump and notice how gravity pulls you back down",
    learningGoal: "Feel the effects of gravitational force"
  },
  
  imagineDifferentGravity: {
    title: "Imagine Different Gravity",
    chapter: 3,
    description: "Calculate weight on different planets",
    learningGoal: "Understand that gravity varies by location"
  },
  
  spinningBucket: {
    title: "Spinning Bucket (Supervised)",
    chapter: 4,
    description: "Observe how motion and gravity work together",
    learningGoal: "Understand orbital mechanics in a simple demonstration"
  }
};

// Make globally available
if (typeof window !== 'undefined') {
  window.WhydoesAppleFallInteractions = WhydoesAppleFallInteractions;
}

// Export for Node/module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WhydoesAppleFallInteractions;
}
