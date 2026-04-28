# Single Edition HTML Book Template

Use this template to create a new Metaphors for Software title in the canonical single-edition format.

## Files

1. book.html: source interior file
2. styles.css: screen and shared styling
3. print.css: 6 x 9 print geometry and pagination behavior
4. interactions.js: TOC and interaction helpers

## How to Use

1. copy this folder into books/NN-your-slug/
2. replace placeholder text in book.html
3. set domain class on body (domain-workshop, domain-city, domain-factory)
4. tune cover metadata and chapter content
5. fill solutions appendix exercise IDs and answers
6. export print PDF using print.css

## Notes

1. Keep one canonical edition by default.
2. Keep solutions in Appendix sections.
3. Keep page numbering CSS-driven, never hardcoded.
