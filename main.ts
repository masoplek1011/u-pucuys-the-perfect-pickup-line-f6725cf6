import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Perfect Pickup Line — one line an AI agent could say out loud.
// Revised: the twist now lands at the very end — the machine itself
// will not run either. A missing-semicolon joke in the machine's own voice.
const LINE =
  "Are you a missing semicolon? Because my code won't run without you — and neither will I.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
