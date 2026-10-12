## What it does

`grill-the-basics` inspects the project and aligns you and the agent on the desired end product, intended user/use and observable overall success. It owns facts discoverable in code and docs, and asks you only consequential product, risk, permission or private-knowledge questions.

It stops when the product outcome and consequential decisions are clear, not when a first slice is selected or an exhaustive decision tree is empty. You own the ends; the agent owns implementation and slice selection within approved boundaries. Relevant assumptions stay explicit.

## When to reach for it

You invoke this by typing `/grill-the-basics`, and the agent won't reach for it on its own. Use it before changing a repo, or when redirected intent needs clarifying from an earlier checkpoint.

For an exhaustive stateless interview outside a codebase, use the retained [grill-me](https://github.com/archsinit/iterative-skills/blob/main/docs/productivity/grill-me.md) instead.

## Prerequisites

A working directory with permission to inspect relevant code/docs and maintain domain knowledge. It uses the shared `domain-modeling` skill when actively resolving vocabulary or material decisions. Tracker setup is not required.

## Basics, not a blueprint

Short recommended rounds focus on decisions that change the outcome or risk. A concise glossary keeps domain words consistent; lightweight ADRs preserve genuine hard-to-reverse tradeoffs. Neither becomes an implementation scratchpad.

## Common questions

**Where did `grill-with-docs` go?**
This fork replaces it with basics. The exhaustive `grilling` primitive remains unchanged for other tools, but basics does not drive it.

**Must I define every feature before building?**
No. Agree the end product, who will use it, observable overall success and boundaries. Detailed features, design, architecture and a roadmap are not prerequisites.

**Must we choose the first slice here?**
No. Basics can finish and the spec can be written without one. The loop chooses and precisely defines usable slices toward the approved outcome. A clear first slice is not enough if that overall outcome remains unresolved.

## It's working if

- The agent cites code/docs instead of asking you to supply discoverable facts.
- You see a small recommended round about intent or risk, not file names and libraries.
- You can describe the intended end product, user/use, overall success and non-goals without needing a first-slice plan.

## Where it fits

A chain step: basics -> [to-spec](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/to-spec.md) -> [implement-loop](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/implement-loop.md). The spec is required even for a small change. [ask-the-playbook](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/ask-the-playbook.md) routes this fork; these pages are not claimed to be published on aihero.dev.
