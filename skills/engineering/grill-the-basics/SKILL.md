---
name: grill-the-basics
description: "Inspect the project and clarify only consequential decisions until the first useful slice is understood."
disable-model-invocation: true
---

# Grill the Basics

Own discoverable facts; the human owns intent, priorities, acceptable risk and acceptance. Understand the FIRST useful end-to-end slice, not an exhaustive decision tree. This fork replaces `grill-with-docs`; it does not run the exhaustive `grilling` primitive.

1. Inspect applicable project instructions, relevant code, tests, docs, glossary and ADRs. Check claims against current behavior. Report concrete evidence and missing access, not questions the repo can answer. Keep exploration scoped to the outcome.
2. Summarize the intended user, outcome, current behavior, constraints and non-goals. Distinguish verified facts, provisional assumptions and genuine ambiguities. Flag any requested change to previously accepted behavior explicitly.
3. Ask short numbered rounds (normally one to three questions), only for consequential product, risk, private knowledge or permission decisions. Give a recommendation and its tradeoff for each. Wait for answers. Choose reversible implementation details yourself and disclose relevant assumptions. Do not ask the human to select files, test seams, libraries or architecture unless they carry a material product/risk constraint.
4. Call the Skill tool with "domain-modeling" when actively sharpening domain terms or material decisions. Keep `GLOSSARY.md` to concise domain definitions. Record only hard-to-reverse, surprising, real tradeoffs in lightweight ADRs, using existing repo locations. Do not manufacture docs or turn glossary work into a whole-repo interrogation.
5. Stop as soon as the next smallest usable slice has clear observable success and failure expectations, boundaries, and no unresolved consequential decision. Later slices may remain provisional. State assumptions and unresolved non-blocking questions. If a genuine ambiguity blocks this slice, surface it rather than inventing intent.

Finish with a concise shared understanding and tell the human to run `/to-spec`, the REQUIRED persisted handoff before `/implement-loop`, even for a small build. Do not implement or invoke those user-only skills yourself. A prototype can answer one otherwise unresolvable question within permission and budget, but is not a substitute for the spec.
