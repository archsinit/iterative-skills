## What it does

`code-review` checks current changes against two separate axes: **Standards** (documented rules and labelled code-smell heuristics) and **Spec** (approved outcomes, failures, regressions and scope). Neither axis can hide a failure on the other.

It reads the local versioned spec first and includes relevant uncommitted and new files when reviewing a current slice. A tracker and already-committed diff are not prerequisites.

## When to reach for it

Type `/code-review`, or the agent reaches for it when reviewing a branch, PR, current slice or work in progress. Supply a baseline and spec path, or use the authorised iteration's recorded baseline.

Implement-loop already performs slice reviews before working checkpoint commits and a final cumulative review from the starting checkpoint. You can invoke code-review explicitly for extra scrutiny; it is not needed to trigger the built-in reviews.

## Independent where available, honest otherwise

Permitted independent reviewers get narrow read-only scopes and finite budgets, preferably in the background. A worker never spawns further reviewers. Unavailable independent tooling is labelled SELF-REVIEW; a failed reviewer is not a passing review.

The baseline SHA and exact diff scope stay fixed. Current-slice review includes staged/unstaged changes and reads relevant new files separately, without staging them just for review. Private runtime data and unrelated dirty files stay out.

## Common questions

**Why did the old review miss my uncommitted changes?**
The upstream three-dot HEAD comparison only included committed work. This fork distinguishes committed branch review from current-slice review and explicitly includes relevant working-tree and new files.

**Do I need tracker setup?**
No. Pass the tracked local spec. Tracker access is a separately authorised fallback, not a prerequisite.

**Should I apply every finding or repeat reviews until clean?**
No. Check each claim against current files, approved intent and evidence. Explain dispositions and spend only the remaining repair budget. Review findings cannot invent requirements or grant permission.

## It's working if

- The report names its pinned baseline and whether current uncommitted/new files were covered.
- Standards and Spec appear separately, with cited findings and actual review mode.
- Missing specs, failed reviewers and unavailable runtime evidence are explicit, not claimed passes.
- Consequential findings get checked before repair, and budgets do not reset.

## Where it fits

A model- or user-reachable review tool supporting [implement-loop](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/implement-loop.md), also useful standalone. [retro](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/retro.md) is optional after the run for environment learning, not a gate. [ask-the-playbook](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/ask-the-playbook.md) maps the fork's routes.
