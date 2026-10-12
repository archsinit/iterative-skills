## What it does

`grill-the-basics` inspects the project and aligns you and the agent on the first useful slice. It owns facts discoverable in code and docs, and asks you only consequential product, risk, permission or private-knowledge questions.

It stops when that slice is understood, not when an exhaustive decision tree is empty. Reversible implementation details belong to the agent; relevant assumptions stay explicit.

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

**Must I decide the whole product before building?**
No. Understand the first usable path and its important failures. Later slices and low-risk assumptions can stay provisional.

## It's working if

- The agent cites code/docs instead of asking you to supply discoverable facts.
- You see a small recommended round about intent or risk, not file names and libraries.
- The first slice has observable success/failure expectations and explicit assumptions.

## Where it fits

A chain step: basics -> [to-spec](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/to-spec.md) -> [implement-loop](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/implement-loop.md). The spec is required even for a small change. [ask-the-playbook](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/ask-the-playbook.md) routes this fork; these pages are not claimed to be published on aihero.dev.
