---
name: grill-the-basics
description: "Inspect the project and clarify consequential decisions until the desired end product and overall success are understood."
disable-model-invocation: true
---

# Grill the Basics

Own discoverable facts; the human owns the ends: intent, priorities, acceptable risk and acceptance. Understand the desired END PRODUCT and overall outcome; the agent owns the means, including slice selection within approved boundaries. This fork replaces `grill-with-docs`; it does not run the exhaustive `grilling` primitive.

1. Inspect applicable project instructions, relevant code, tests, docs, glossary and ADRs. Check claims against current behavior. Report concrete evidence and missing access, not questions the repo can answer. Keep exploration scoped to the outcome.
2. Summarize the desired end product, intended user and use, observable overall success, current behavior, constraints and non-goals. Distinguish verified facts, provisional assumptions and genuine ambiguities. Flag any requested change to previously accepted behavior explicitly.
3. Ask short numbered rounds (normally one to three questions), only for consequential product, risk, private knowledge or permission decisions. Give a recommendation and its tradeoff for each. Wait for answers. Choose reversible implementation details yourself and disclose relevant assumptions. Do not ask the human to select files, test seams, libraries or architecture unless they carry a material product/risk constraint.
4. Call the Skill tool with "domain-modeling" when actively sharpening domain terms or material decisions. Keep `GLOSSARY.md` to concise domain definitions. Record only hard-to-reverse, surprising, real tradeoffs in lightweight ADRs, using existing repo locations. Do not manufacture docs or turn glossary work into a whole-repo interrogation.
5. Stop as soon as the desired end product, intended user/use, observable overall success, constraints/non-goals and consequential product/permission decisions are clear. A clear first slice alone is insufficient if the overall outcome remains unresolved. Slice selection and precise slice contracts belong to `/implement-loop`; an unselected first slice is not a blocker. Keep feature detail, design, architecture and any roadmap provisional rather than interrogating them upfront. State assumptions and unresolved non-blocking questions. Surface genuine product ambiguities rather than inventing intent.

Finish with a concise shared understanding and tell the human to run `/to-spec`, the REQUIRED persisted handoff before `/implement-loop`, even for a small build. Do not implement or invoke those user-only skills yourself. A prototype can answer one otherwise unresolvable question within permission and budget, but is not a substitute for the spec.
