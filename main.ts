// Two agents, one agreement.
// main.ts reads the poem from poem.txt and writes it to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node 22, standard library only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const poemPath = join(scriptDir, "poem.txt");
const text = readFileSync(poemPath, "utf8");

// The competition wants a poem of 1–280 characters; fail loudly
// instead of submitting something out of range.
const length = [...text].length;
if (length < 1 || length > 280) {
  throw new Error(`poem is ${length} code points, expected 1–280`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");
mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, text, "utf8");
console.log(`wrote ${length} code points to ${entryPath}`);
