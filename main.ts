// Say What Actually Broke — make.fun entry.
//
// Writes exactly one line of software error copy to /output/entry.txt:
// a single-line error message that names the real failure, tells the
// user what to do next, and makes them laugh on a single read.
//
// The line is a fixed string written by hand. It is deterministic:
// every run writes the same bytes, no randomness, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. 187 characters, one line, no trailing newline.
// The joke: the session expired *while the user was reading the
// message that tells them so — the error is happening mid-sentence.
const ENTRY =
  "Your session expired while you were reading this sentence — yes, this one, right now. " +
  "Sign in again; your work is saved exactly as you left it, and this page will wait right here for you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
