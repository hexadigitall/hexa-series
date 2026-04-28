#!/usr/bin/env node
/**
 * export-book-pdf.mjs
 *
 * Exports one or more Metaphors for Software books to PDF using Puppeteer.
 * The CSS @page rule (size: 6in 9in) in print.css controls all dimensions.
 *
 * Requirements:
 *   npm install puppeteer   (or: npm install puppeteer-core)
 *
 * Usage:
 *   # Export a single book by slug
 *   node scripts/export-book-pdf.mjs 13-the-subnetting-toy-box
 *
 *   # Export all books that have a book.html
 *   node scripts/export-book-pdf.mjs --all
 *
 * Output:
 *   books/<slug>/exports/pdf/interior-paperback.pdf
 */

import { readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// ---------------------------------------------------------------------------
// Resolve paths relative to the series root (metaphors-for-software/)
// ---------------------------------------------------------------------------
const __dir = dirname(fileURLToPath(import.meta.url));
const SERIES_ROOT = resolve(__dir, "..");
const BOOKS_DIR = join(SERIES_ROOT, "books");

// ---------------------------------------------------------------------------
// Lazy-import Puppeteer so the script gives a clear error if not installed
// ---------------------------------------------------------------------------
async function loadPuppeteer() {
  try {
    const mod = await import("puppeteer");
    return mod.default ?? mod;
  } catch {
    console.error(
      "\nERROR: Puppeteer is not installed.\n" +
        "Run:  npm install puppeteer\n" +
        "inside metaphors-for-software/  or the workspace root.\n"
    );
    process.exit(1);
  }
}

// ---------------------------------------------------------------------------
// Export one book
// ---------------------------------------------------------------------------
async function exportBook(slug, browser) {
  const bookDir = join(BOOKS_DIR, slug);
  const htmlPath = join(bookDir, "book.html");

  if (!existsSync(htmlPath)) {
    console.warn(`  SKIP  ${slug}  (no book.html found)`);
    return;
  }

  const outDir = join(bookDir, "exports", "pdf");
  await mkdir(outDir, { recursive: true });
  const outPath = join(outDir, "interior-paperback.pdf");

  const fileUrl = pathToFileURL(htmlPath).href;
  const page = await browser.newPage();

  try {
    await page.goto(fileUrl, { waitUntil: "networkidle0" });

    await page.pdf({
      path: outPath,
      preferCSSPageSize: true,   // honours @page { size: 6in 9in } in print.css
      printBackground: true,
      displayHeaderFooter: false,
    });

    console.log(`  OK    ${slug}  →  ${outPath}`);
  } finally {
    await page.close();
  }
}

// ---------------------------------------------------------------------------
// Collect slugs
// ---------------------------------------------------------------------------
async function resolveSlugs(args) {
  if (args.includes("--all")) {
    const entries = await readdir(BOOKS_DIR, { withFileTypes: true });
    return entries
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
  }

  const slugs = args.filter((a) => !a.startsWith("--"));
  if (slugs.length === 0) {
    console.error(
      "Usage:\n" +
        "  node scripts/export-book-pdf.mjs <slug>\n" +
        "  node scripts/export-book-pdf.mjs --all\n"
    );
    process.exit(1);
  }
  return slugs;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
const slugs = await resolveSlugs(args);

const puppeteer = await loadPuppeteer();
const browser = await puppeteer.launch({ headless: "new" });

console.log(`\nExporting ${slugs.length} book(s)…\n`);
for (const slug of slugs) {
  await exportBook(slug, browser);
}

await browser.close();
console.log("\nDone.\n");
