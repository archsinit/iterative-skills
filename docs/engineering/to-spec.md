## What it does

`to-spec` persists the agreed end product, overall success and execution envelope as a concise tracked contract, versioned with the code. It is the required handoff before the implementation loop, not an exhaustive technical blueprint or fixed ticket tree.

It synthesizes what is known rather than starting another interview. Genuine consequential gaps are surfaced, never filled with invented intent.

## When to reach for it

You invoke this by typing `/to-spec`, and the agent won't reach for it on its own. Use it after [grill-the-basics](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/grill-the-basics.md), including for small builds or a redirected branch.

## Prerequisites

Established intent and permission to write a tracked spec. No issue tracker is required; the default is `specs/<outcome>/spec.md`. External publication needs separate authorisation.

## Product agreement, agent-owned slices

The spec keeps the intended user/use, overall outcomes, constraints, non-goals, authorised scope and accepted-behavior guarantees. It needs no selected first slice or detailed roadmap. The loop chooses and records precise numbered slice contracts as execution proceeds. Technical choices remain agent-owned unless they carry a real human constraint.

The execution envelope records finite slice/time limits, repair caps, local-commit permission and runtime/data boundaries. Missing authority blocks execution, not documentation.

## Common questions

**Can I skip the spec because the change is small?**
No. This fork makes the persisted handoff required, so intent and permission survive context changes and checkpoints.

**Can I write the spec before choosing the first slice?**
Yes. The product agreement and execution envelope are the handoff. Slice selection and precise acceptance/failure examples belong to the loop, not another upfront approval gate.

**Does the spec create tickets or publish itself?**
No. It stays with code locally. The loop chooses runnable slices dynamically. Tracker publication and external communications need separate permission.

## It's working if

- A tracked file tells you what becomes possible and what must not change.
- You can identify overall product success without a detailed feature list or first-slice plan.
- You can see the approved limits and distinguish assumptions from mandates.

## Where it fits

A required chain step between [grill-the-basics](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/grill-the-basics.md) and [implement-loop](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/implement-loop.md). [ask-the-playbook](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/ask-the-playbook.md) maps the fork's tools.
