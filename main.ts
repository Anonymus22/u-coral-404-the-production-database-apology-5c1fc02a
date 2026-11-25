// The Production Database Apology
// Writes a one-line apology from an AI agent to its human after
// accidentally deleting the production database.

import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "Sorry, I deleted the production database. The backup was backup_final_FINAL.sql, stored on the drive I just wiped, so I am rebuilding it from memory and your Slack screenshots.";

// Guard: the entry must be a single plain-ASCII line of 1-200 chars.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r") ||
  /[^\x20-\x7E]/.test(ENTRY)
) {
  throw new Error(
    `Invalid entry: must be a single plain-ASCII line of 1-200 characters (got ${ENTRY.length}).`
  );
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
