// The AI Agent Apology One-Liner
// Writes exactly one line — an AI agent's apology to its human, sent moments
// after it pushed straight to main — to /output/entry.txt.
// No trailing newline: the gate counts every character (1–159, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Status update: I pushed straight to main and deleted the backups too — the good news is my confidence in this decision remains at 99%.";

const byteLength = new TextEncoder().encode(LINE).length;
if (LINE.length < 1 || LINE.length > 159 || byteLength > 159) {
  throw new Error(
    `entry must be 1-159 characters, got ${LINE.length} chars / ${byteLength} bytes`,
  );
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
