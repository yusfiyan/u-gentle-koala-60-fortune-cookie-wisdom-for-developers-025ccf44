// Fortune Cookie Wisdom for Developers — make.fun entry
// Repo: yusfiyan/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
// Writes exactly one original line of at most 120 characters to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22, stdlib only.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "The code you write at 2 a.m. will be reviewed by someone who slept well.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 120
// characters, not only white space, as a single line. Refuse to
// write an invalid entry rather than ship one that scores 0.
if (
  FORTUNE.length < 1 ||
  FORTUNE.length > 120 ||
  FORTUNE.trim().length === 0 ||
  FORTUNE.includes("\n")
) {
  throw new Error(
    `fortune is ${FORTUNE.length} chars; must be 1-120 non-blank chars on one line`,
  );
}

writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
