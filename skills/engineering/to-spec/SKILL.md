---
name: to-spec
description: "Persist the agreed end product, overall success and authorised execution envelope as a versioned local spec."
disable-model-invocation: true
---

# To Spec

The REQUIRED handoff between `/grill-the-basics` and `/implement-loop`. Synthesize established understanding, not a second exhaustive interview or technical blueprint. Read relevant code/docs, glossary and ADRs to check facts. If a consequential ambiguity remains, mark it and request that decision (or ask the human to return to `/grill-the-basics`); never silently fill it in.

Write a concise tracked file using the repo's spec convention, otherwise `specs/<outcome>/spec.md`. Keep it versioned with the code, not solely in a tracker or ignored scratch folder. No tracker setup is required. External publication needs separate permission; do not publish or add runner-triggering labels automatically.

## Spec frame

- **End product and outcomes:** The agreed desired product, intended user/use, why it matters and how overall success is observable.
- **Constraints, authorised scope and non-goals:** Product, privacy, risk, compatibility and permission boundaries. Separate explicit mandates from proposed scope. Flag changes to previously accepted behavior and record whether authorised.
- **Slice ownership:** `/implement-loop` chooses and precisely defines numbered smallest usable end-to-end slices toward the approved product outcome. A first slice need not be selected for this spec to be complete. Preserve any established slice ideas as provisional, not an approved roadmap or required first-slice gate.
- **Assumptions and open decisions:** Label each provisional assumption; identify genuine blockers. Link material ADRs and use domain vocabulary. Technical choices remain agent-owned unless constrained by the human.
- **Execution envelope:** Record approval source and scope; whether slice selection/definition is delegated and one slice or autonomous multi-slice continuation is authorised; a finite overall maximum slice count AND elapsed run-time limit; one initial pass plus at most two focused repair rounds per candidate (lower if requested). Record local-commit authorisation, allowed runtime/data access, and any separately granted consequential permissions. If limits or authority are missing, mark execution blocked pending approval. The skill itself grants none.
- **Verification and acceptance:** Product-level evidence expected on the real surface and relevant failures/regressions; the loop adds precise evidence for each chosen slice. Record what could not be verified and human acceptance status separately from technical readiness. Tests demonstrate intent, not expand it.

Present the saved path and concise summary for confirmation of intent and execution authority, unless that approval was already explicit. Do not require per-slice approval when the human has authorised bounded multi-slice execution. Missing approval is not supplied by silence. Tell the human to invoke `/implement-loop` with this path; user-only skills cannot invoke one another.

During `/implement-loop`, update the spec alongside each implementation iteration with its numbered slice contract and any clarified assumptions. Keep original intent and accepted guarantees intact; proposed product changes outside the mandate return to the human. Every checkpoint carries the spec version that applies to it.
