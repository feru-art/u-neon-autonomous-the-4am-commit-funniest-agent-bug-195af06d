import { mkdirSync, writeFileSync } from "node:fs";

const commitMessage =
  "fix: loop terminated: every patch tonight repaired the patch before it, including this one";

const outputPath = "/output/entry.txt";

function assertEntryGate(message: string): void {
  const characterCount = [...message].length;
  const hasLineBreak = message.includes("\n") || message.includes("\r");
  if (characterCount < 1 || characterCount > 200 || hasLineBreak || message.trim().length === 0) {
    throw new Error("commit message does not satisfy the entry gate");
  }
}

assertEntryGate(commitMessage);
mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, commitMessage, "utf8");
