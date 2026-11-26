// Writes the competition's single-line entry to /output/entry.txt.
// Deterministic: the same fixed text every run, no clock, no randomness, no I/O beyond the output file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The decision was made a week ago \u2014 the meeting was just its forty-minute carbon copy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
