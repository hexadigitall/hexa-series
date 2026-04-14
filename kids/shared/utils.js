// ============================================
// HexaVerse Shared JS Utilities
// Hexadigitall Technologies — April 2026
// Used across all 14 books for coherence
// ============================================

const HexaVerse = {
  // Series metadata
  seriesTitle: "Hexa-AI-Series",
  totalBooks: 14,
  protagonist: "Hexa",
  world: "The HexaVerse",

  // Book registry
  books: [
    { id: 1, title: "Why Does the Apple Fall?", tier: 1, ageRange: "5-9", folder: "book-01-why-does-the-apple-fall" },
    { id: 2, title: "Sound and the Singing Air", tier: 1, ageRange: "5-9", folder: "book-02-sound-and-the-singing-air" },
    { id: 3, title: "Light is Always in a Hurry", tier: 1, ageRange: "5-9", folder: "book-03-light-is-always-in-a-hurry" },
    { id: 4, title: "The Gravity Lab", tier: 1, ageRange: "5-9", folder: "book-04-the-gravity-lab" },
    { id: 5, title: "My Robot Friend", tier: 1, ageRange: "5-9", folder: "book-05-my-robot-friend" },
    { id: 6, title: "The Goldilocks Problem", tier: 2, ageRange: "10-14", folder: "book-06-the-goldilocks-problem" },
    { id: 7, title: "The Glass Astronaut", tier: 2, ageRange: "10-14", folder: "book-07-the-glass-astronaut" },
    { id: 8, title: "Fire Against the Wind", tier: 2, ageRange: "10-14", folder: "book-08-fire-against-the-wind" },
    { id: 9, title: "Code the Habitat", tier: 2, ageRange: "10-14", folder: "book-09-code-the-habitat" },
    { id: 10, title: "The Digital Twin", tier: 2, ageRange: "10-14", folder: "book-10-the-digital-twin" },
    { id: 11, title: "Rewriting the Code of Life", tier: 3, ageRange: "15+", folder: "book-11-rewriting-the-code-of-life" },
    { id: 12, title: "Mind and Machine", tier: 3, ageRange: "15+", folder: "book-12-mind-and-machine" },
    { id: 13, title: "Edge of the Galaxy", tier: 3, ageRange: "15+", folder: "book-13-edge-of-the-galaxy" },
    { id: 14, title: "The Programmable Frontier", tier: 3, ageRange: "15+", folder: "book-14-the-programmable-frontier" },
  ],

  // Get book by ID
  getBook(id) {
    return this.books.find(b => b.id === id);
  },

  // Get previous book
  getPrevBook(id) {
    return id > 1 ? this.getBook(id - 1) : null;
  },

  // Get next book
  getNextBook(id) {
    return id < this.totalBooks ? this.getBook(id + 1) : null;
  },

  // Tier label
  getTierLabel(tier) {
    const labels = {
      1: "🌟 The Galactic Playground",
      2: "🚀 Mission to Mars",
      3: "🧠 The Silicon Astronaut"
    };
    return labels[tier] || "Unknown Tier";
  },

  // Render nav links dynamically
  renderNav(currentBookId) {
    const prev = this.getPrevBook(currentBookId);
    const next = this.getNextBook(currentBookId);
    const navEl = document.getElementById("hexa-nav");
    if (!navEl) return;
    navEl.innerHTML = `
      <div class="nav-inner">
        <a href="../../index.html" class="nav-home">🏠 HexaVerse Home</a>
        ${prev ? `<a href="../${prev.folder}/index.html" class="nav-prev">← Book ${prev.id}: ${prev.title}</a>` : `<span class="nav-disabled">← Start of Series</span>`}
        ${next ? `<a href="../${next.folder}/index.html" class="nav-next">Book ${next.id}: ${next.title} →</a>` : `<span class="nav-disabled">End of Series →</span>`}
      </div>
    `;
  },

  // Simple quiz checker
  checkAnswer(selected, correct, feedbackId) {
    const el = document.getElementById(feedbackId);
    if (!el) return;
    if (selected === correct) {
      el.textContent = "✅ Correct! Great job, Explorer!";
      el.style.color = "var(--hexa-accent)";
    } else {
      el.textContent = "❌ Not quite! Try again.";
      el.style.color = "var(--hexa-danger)";
    }
  }
};

// Make globally available
window.HexaVerse = HexaVerse;