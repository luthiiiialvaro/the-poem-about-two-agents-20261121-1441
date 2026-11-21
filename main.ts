// Writes the entry poem to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The poem is about agency: the power to choose and to act —
// here, the agency that passes between two agents when they agree.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const poem = readFileSync(join(here, "poem.txt"), "utf8");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
