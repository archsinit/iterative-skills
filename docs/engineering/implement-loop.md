## What it does

`implement-loop` builds numbered end-to-end runnable slices against the required tracked spec. It preserves the latest verified runnable checkpoint while a candidate evolves, and stops inside finite approved limits.

It is instructions in an active session, not a scheduler or perpetual wake engine. Technical verification is separate from human acceptance.

## When to reach for it

You invoke this by typing `/implement-loop`, and the agent won't reach for it on its own. Use it with the spec path after basics and spec, when you want bounded delivery rather than dispatching a fixed ticket tree.

The retained [implement](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/implement.md) is still a standalone single-ticket tool, not this multi-slice workflow.

## Prerequisites

A tracked spec, explicit host-authorised local commits, an approved scope and finite execution limits. Autonomous multi-slice runs require an overall maximum slice count and elapsed time limit. Each candidate has one initial pass plus at most two focused repairs, subject to lower approved limits. Runtime access is separately bounded.

## Runnable checkpoints and honest evidence

Every slice gets a Spec and Standards review plus actual browser, CLI, API or other runtime verification BEFORE its commit can be labelled a working/runnable checkpoint. Tests serve the spec, not invent requirements. Consequential changes get proportionate independent review when available; otherwise the record says SELF-REVIEW. Findings are assessed, not blindly applied. Post-review repairs receive proportionate fresh Standards/Spec review and affected runtime/regression rechecks before runnable promotion, including repairs from the cumulative review. Pre-repair evidence cannot certify changed code. These checks use the remaining budget; unavailable required evidence means NOT runnable.

At the end of the authorised run, a cumulative review from its fixed starting checkpoint catches integration and cross-slice drift. It consumes the same remaining budget, not a fresh retry allowance. These reviews are built in: you do not need to invoke code-review to trigger them.

Every iteration commits code, relevant spec updates and concise evidence locally with permission. Verified commits say `runnable checkpoint`; failed/incomplete ones say `NOT runnable`. A pinned inspection worktree with isolated ports and disposable data can keep last-good available. See [checkpoint safety](https://github.com/archsinit/iterative-skills/blob/main/skills/engineering/implement-loop/CHECKPOINTS.md).

## Common questions

**Do I have to approve each slice?**
No, not within an explicitly approved multi-slice envelope. You may inspect, redirect or pause; silence is not acceptance. Decisions outside the mandate still stop the loop.

**Will it keep retrying or wake up on its own?**
No. Time, slice and repair limits are finite and survive resumes. There is no scheduler. A failed candidate leaves honest evidence and last-good intact.

**Do I need to run code-review or retro after every slice?**
No. Slice reviews and a final cumulative review are built into the loop. Explicit code-review is available for extra scrutiny, and retro is optional after the run for environment learning, not a mandatory gate or authority to expand access.

**Can I return to an earlier checkpoint?**
Choose it, create a new branch without resetting history or overwriting dirty work, then rerun basics, spec and loop. Specs travel with code; changes to accepted behavior must be explicitly authorised.

## It's working if

- You can try a real narrow user path, not just view scaffolding.
- The last-good version remains reproducible while the candidate changes.
- Records show runtime checks and both review axes before checkpoint commits, plus a cumulative assessment at run end.
- Unavailable evidence, review mode and remaining budget are visible.
- Failed commits are visibly not runnable and passing checks never pretend to be human acceptance.

## Where it fits

The build chain step after the required [to-spec](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/to-spec.md). [ask-the-playbook](https://github.com/archsinit/iterative-skills/blob/main/docs/engineering/ask-the-playbook.md) explains the route from basics and retained standalone tools. Publishing or opening a PR is a separate authorised action, never an automatic closeout.
