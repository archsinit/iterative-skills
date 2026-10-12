## What it does

`ask-the-playbook` routes you through this fork's skills and their boundaries. It reads the actual skill before recommending a route; it maps this set, not arbitrary locally installed tools.

The adopted name replaces `ask-matt` and points to basics -> required spec -> bounded implementation loop rather than an optional spec-and-ticket graph.

## When to reach for it

You invoke this by typing `/ask-the-playbook`, and the agent won't reach for it on its own. Use it when you know your situation but not the appropriate skill.

## A map, not a scheduler

- A repo change starts at [grill-the-basics](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/grill-the-basics.md), then the required [to-spec](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/to-spec.md), then [implement-loop](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/implement-loop.md).
- Loop reviews every current slice on Spec and Standards plus runtime evidence before a working checkpoint commit, with proportionate independent review for consequential changes and a final cumulative review from its starting checkpoint. Explicit code-review is optional extra scrutiny; retro is optional after the run.
- Incoming issues, hard bugs and huge foggy efforts can use retained triage, diagnosis and wayfinding tools. Their decisions feed the spec-led flow when bounded delivery is wanted.
- Stateless interviews, research, teaching and portable context remain standalone. The router does not invoke user-only commands for you.

## Common questions

**Does this replace all the upstream skills?**
No. Only the focused workflow is adapted. Retained standalone tools keep their own behavior; ticket-tree planning is deprecated and not promoted.

**Does “loop” mean an always-on worker?**
No. It executes within an active session and approved finite limits. A skill does not create a scheduler or grant permission to publish, spend or access private data.

## It's working if

- You get the smallest useful recommendation and a clear reason for it.
- A build route never silently skips the persisted spec.
- You know which actions require your authority and which technical details the agent owns.

## Where it fits

A standalone router over the fork. It is not a build phase. [Fork workflow notes](https://github.com/archsinit/iterative-skills/blob/main/docs/fork-workflow.md) describe the adaptation and attribution boundaries.
