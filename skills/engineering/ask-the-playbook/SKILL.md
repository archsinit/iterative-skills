---
name: ask-the-playbook
description: "Find the right skill in this fork, especially the basics, required spec and bounded implementation loop."
disable-model-invocation: true
---

# Ask the Playbook

Invoke `/ask-the-playbook` for this fork's adopted replacement for `ask-matt`, not a router over arbitrary installed skills. Read a skill's actual `SKILL.md` before describing its behavior. Recommend user-only commands to the human; never invoke them yourself. Recommend the smallest useful route, not the whole map at once.

## Main flow

`/grill-the-basics` -> `/to-spec` -> `/implement-loop`

- **Basics** inspects facts, asks only consequential decisions and stops when the desired end product, intended user/use, observable overall success and boundaries are understood. It retains shared glossary/domain modeling and lightweight material decision docs, without exhaustive feature/design interrogation or a first-slice gate.
- **Spec is REQUIRED**, even for a small change: persisted product agreement, constraints/non-goals and an approved finite execution envelope. No selected first slice, detailed roadmap or fixed ticket tree is required.
- **Loop** chooses and precisely defines numbered smallest usable slices toward the approved product outcome, then implements them. It verifies real surfaces/failures/regressions, reviews each slice against Spec and Standards BEFORE a working checkpoint commit, assesses findings and preserves last-good. Consequential changes use proportionate independent review when available. A final cumulative review from the run's starting checkpoint checks integration/cross-slice drift. These reviews are built in, not dependent on an explicit `/code-review` command. It continues inside a bounded multi-slice mandate without mandatory per-slice human approval. Technical readiness and human acceptance are distinct; silence is not acceptance. No scheduler, automatic push or external actions.

A human-selected earlier checkpoint starts a NEW branch preserving history, then basics -> spec -> loop again with specs versioned with code. Explicitly flag changes to accepted behavior. Never destructive reset or auto-checkout over dirty work.

## Choose a route

| Situation | Route |
| --- | --- |
| Idea or change in a repo | Main flow above |
| A question needs runnable evidence | `/prototype` for one throwaway experiment, then feed the result into basics/spec |
| Incoming external issues | `/triage` with configured tracker; for bounded spec-led delivery, capture intent with basics/spec before loop |
| Hard bug or regression | `/diagnosing-bugs`; this remains a standalone diagnostic tool, not a way to bypass the loop's spec handoff |
| Fog genuinely exceeds one session | `/wayfinder` for a decision map; bring resolved decisions to basics as needed, then required spec and loop |
| Codebase upkeep | `/improve-codebase-architecture` surveys opportunities; selected work returns to the main flow |
| Existing standalone ticket | `/implement` remains a standalone single-ticket tool with the targeted TDD/review compatibility edits; for this fork's autonomous multi-slice workflow use the main flow |
| Need review, not a build | `/code-review` against a fixed baseline, including relevant uncommitted/new files for a current slice; local spec first, permitted independent reviewers or labelled self-review |
| After a build | Optional `/code-review`, then optional user-invoked `/retro` for environment improvements; neither is a mandatory gate or access-expansion permission |

`to-tickets` is deprecated in this fork and not shipped in the promoted plugin. It is retained for historical reference, NOT an active route or required planning step. `implement-loop` replaces `implement-spec`; it does not promise parallel whole-ticket-graph delivery.

## References and standalone tools

- `/domain-modeling`: actively sharpen domain vocabulary and material ADRs; basics calls it when needed.
- `/codebase-design`: vocabulary for deep modules and seams.
- `/tdd`: test-first discipline; the agent chooses technical seams within authorised outcomes, asking only material product/risk/permission decisions.
- `/grill-me`: unchanged stateless, exhaustive interview for non-code plans or work with no repo. Unlike basics it aims to resolve the whole decision tree.
- `/grilling`: unchanged exhaustive interview primitive for grill-me, triage, wayfinder and architecture work; basics has its own bounded rounds.
- `/research`: scoped primary-source investigation where delegation is permitted; findings inform basics/spec.
- `/to-questionnaire`: questions for private knowledge held by somebody else. Preparing a questionnaire is not permission to send it.
- `/wizard`: a human setup procedure when manual actions are unavoidable; no extra permission to access credentials or provision services.
- `/wait-what`: explain a message again with missing context and shared vocabulary.
- `/teach`: stateful learning workspace.
- `/writing-for-agents`: reference for skills and other agent-facing docs.
- `/handoff`: portable context for another directory, harness, colleague or side task; never a substitute for the required tracked spec.
- `/pr`: shapes a PR body when separately authorised; does not authorise opening or publishing one.
- `/setup-matt-pocock-skills`: retained upstream-named setup for tracker-dependent tools. Local basics/spec/loop do not require a tracker.

At context boundaries, preserve the tracked spec, evidence and remaining budget. Continue when context remains useful; clear only disposable context; use handoff for portability, scoped workers where permitted, or compact at a boundary. [PHASE-BOUNDARIES.md](PHASE-BOUNDARIES.md) retains the upstream context-management reference, not authority to skip spec or reset budgets.
