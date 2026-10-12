---
name: to-spec
description: "Persist human intent, the next slice and the authorised execution envelope as a versioned local spec."
disable-model-invocation: true
---

# To Spec

The REQUIRED handoff between `/grill-the-basics` and `/implement-loop`. Synthesize established understanding, not a second exhaustive interview or technical blueprint. Read relevant code/docs, glossary and ADRs to check facts. If a consequential ambiguity remains, mark it and request that decision (or ask the human to return to `/grill-the-basics`); never silently fill it in.

Write a concise tracked file using the repo's spec convention, otherwise `specs/<outcome>/spec.md`. Keep it versioned with the code, not solely in a tracker or ignored scratch folder. No tracker setup is required. External publication needs separate permission; do not publish or add runner-triggering labels automatically.

## Spec frame

- **Intent and outcomes:** Who needs what, why, and how success is observable.
- **Constraints, authorised scope and non-goals:** Product, privacy, risk, compatibility and permission boundaries. Separate explicit mandates from proposed scope. Flag changes to previously accepted behavior and record whether authorised.
- **Next numbered slice:** The smallest runnable end-to-end capability, its trigger/inputs, visible behavior, observable acceptance examples, relevant invalid inputs/failure expectations and regression guarantees. Precise enough to build and try, without fixed file/module lists or a ticket tree.
- **Provisional later slices:** Brief outcome hypotheses only. Reconsider after evidence, within the authorised scope.
- **Assumptions and open decisions:** Label each provisional assumption; identify genuine blockers. Link material ADRs and use domain vocabulary. Technical choices remain agent-owned unless constrained by the human.
- **Execution envelope:** Record approval source and scope; whether one slice or autonomous multi-slice continuation is authorised; a finite overall maximum slice count AND elapsed run-time limit; one initial pass plus at most two focused repair rounds per candidate (lower if requested). Record local-commit authorisation, allowed runtime/data access, and any separately granted consequential permissions. If limits or authority are missing, mark execution blocked pending approval. The skill itself grants none.
- **Verification and acceptance:** Evidence expected on the real surface and relevant failures/regressions; what could not be verified; human acceptance status separately from technical readiness. Tests demonstrate intent, not expand it.

Present the saved path and concise summary for confirmation of intent and execution authority, unless that approval was already explicit. Do not require per-slice approval when the human has authorised bounded multi-slice execution. Missing approval is not supplied by silence. Tell the human to invoke `/implement-loop` with this path; user-only skills cannot invoke one another.

Update the spec alongside each implementation iteration when evidence clarifies assumptions or the next slice. Keep original intent and accepted guarantees intact; proposed product changes outside the mandate return to the human. Every checkpoint carries the spec version that applies to it.
