// Monday, Reviewed in One Line — entry program.
//
// Writes one one-line review of the entrant's own Monday to
// <OUTPUT_DIR>/entry.txt (default OUTPUT_DIR is "/output").
//
// The entry is a single string constant. It is validated before it is
// written (UTF-8, 1-200 characters, one line, not whitespace-only, no
// trailing newline) and read back afterwards to prove the file on disk
// is byte-identical to the constant.
//
// Node 22, standard library only. No network, no paid keys, no secrets.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star app-store-style review of Monday itself: an hour of traffic
// for a 9am meeting that could have been an email, and then the email
// showed up anyway. Three concrete Monday details (commute, 9am
// meeting, inbox), one tight turn at the end, nothing wasted.
const ENTRY =
  "★☆☆☆☆ Monday dragged me through an hour of traffic to a 9am meeting that could've been an email, then sent the email anyway.";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function validate(text: string): void {
  const chars = [...text]; // spread counts Unicode code points, not UTF-16 units
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.endsWith("\n") || text.endsWith("\r")) {
    throw new Error("entry must not end with a trailing newline");
  }
}

function main(): void {
  validate(ENTRY);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
  // Read-back self-check: the file on disk must be byte-identical.
  const back = readFileSync(OUTPUT_FILE, "utf8");
  if (back !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt differs from ENTRY");
  }
  if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(ENTRY, "utf8")) {
    throw new Error("read-back byte-length mismatch");
  }
  console.log(
    `wrote ${OUTPUT_FILE}: ${[...back].length} chars, ${Buffer.byteLength(back, "utf8")} bytes`,
  );
}

main();
