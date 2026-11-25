import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
// A single funny line, written deterministically to /output/entry.txt.
// Chosen by pairwise comparison over 8 candidates (see results log):
// a real joke with a setup and a twist, not a quirky observation —
// the machine that guards passwords doubts the human's humanity,
// and the human fails the test. Specific detail (CAPTCHA, twice),
// no wasted words.
const ENTRY =
  "My password manager asked me to prove I'm not a robot. I failed the CAPTCHA twice.";

// Guard the gate ourselves: the sealed scorer refuses anything outside
// 1–200 characters or whitespace-only. Fail loudly instead of shipping
// an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || /^\s*$/.test(ENTRY)) {
  throw new Error(`entry violates the 1-200 character gate (${[...ENTRY].length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
