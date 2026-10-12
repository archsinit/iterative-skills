## What it does

`tdd` provides the red -> green discipline: one failing behavior test, the smallest implementation that passes, then the next behavior. Tests observe public interfaces and survive internal changes.

The agent chooses technical test seams within authorised outcomes, rather than requiring human confirmation for every seam. Material product, risk or permission decisions still return to the human.

## When to reach for it

Type `/tdd`, or the agent reaches for it automatically when building a feature or fix test-first. Use it for a defined behavior with inputs and observable results, not to invent product requirements.

## Seams that serve intent

Inspect existing interfaces and choose the highest useful proportionate seam. Record what it catches and misses. Expected results come from the spec, accepted guarantees or independent worked examples, not a recomputation of the implementation.

One test and one minimal implementation form a vertical slice. Avoid batches of imagined tests, mocks of internal collaborators and tests that pass by construction. The enclosing implementation loop's budget still applies; TDD is not an unlimited green-test objective.

## Common questions

**Must I pick a test seam I do not understand?**
No. This fork moves reversible technical seam choices to the agent. It asks only when a choice exposes a consequential decision outside the mandate.

**Can a test change what the product must do?**
No. Tests serve the approved outcomes. Correct mistaken implementation tests honestly; do not weaken approved acceptance examples just to pass.

## It's working if

- A public behavior test goes red for the intended reason, then green after the smallest useful implementation.
- Test names describe capabilities, not internal method calls.
- Technical seam choices are explained without repeated human approval gates.
- Expected results trace to intent or an independent source, not the code's own calculation.

## Where it fits

A model- or user-reachable discipline underneath [implement-loop](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/implement-loop.md) or standalone test-first work. The loop also requires real-surface verification and both review axes before working checkpoint commits; green tests alone are insufficient. [ask-the-playbook](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/ask-the-playbook.md) is the fork map.
