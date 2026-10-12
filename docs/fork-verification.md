# Fork configuration verification

## Scope

Adapt the fork to `/grill-the-basics` -> required `/to-spec` -> `/implement-loop`, with `/ask-the-playbook`, retained supporting skills, safe local checkpoints and bounded autonomous continuation. Archive ticket-tree planning from the active workflow. Preserve upstream attribution and MIT licence.

## Review and repair

An independent read-only reviewer assessed the complete preserved draft against the approved workflow. One finding: post-review repairs could rely on stale review evidence. The final repair requires fresh proportionate Standards/Spec review of repaired changes and affected runtime/regression rechecks, including cumulative-review fixes, within existing budgets. Unavailable required evidence prevents runnable promotion.

The coordinating agent reviewed this narrow repair against the finding; this final repair review was self-performed. Structural probes cover the added rule but cannot prove model compliance.

## Checks

- `node scripts/check-fork.mjs`: passed for 26 promoted skills, registry, index, router, invocation, documentation, local links and installation consistency; three negative registry probes passed.
- `node scripts/sync-plugin-version.mjs --check`: passed, version 1.3.1 consistent.
- `git diff --check`: passed.
- Strict Claude plugin validation: unavailable because `claude` is not on PATH.
- Actual agent-behaviour trial: not run.
- Installation, remote documentation link verification and publishing: not performed.

## Status

Configuration candidate ready for a bounded trial, not a verified runnable product checkpoint and not human acceptance. Local commit authorised; no push or installation authorised. The initial worker reached its deadline; a separately authorised bounded review-and-finish pass preserved and completed the draft.

The proposed first trial is the subagent TUI. It should exercise bounded clarification, a versioned specification, per-slice review and commits, cumulative review, and an inspectable last-good version. Choose explicit scope and run limits before starting.
