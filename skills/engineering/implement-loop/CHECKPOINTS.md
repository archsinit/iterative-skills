# Keep last-good inspectable

A commit preserves code, not a running service or database. Document the checkpoint SHA, spec path, exact start/stop command, working directory, prerequisites, safe data setup, ports and a small acceptance walkthrough in its iteration record. If no version is verified yet, say so; do not fabricate a baseline.

## Portable Git mechanism

Within permitted local filesystem access, from the candidate repo:

```bash
git status --short
git rev-parse --verify <last-good-sha>^{commit}
git worktree add --detach <unused-inspection-path> <last-good-sha>
```

Use a fresh unoccupied path; never delete an existing directory to make this work. Start the checkpoint from that inspection worktree with its documented prerequisites, not from the changing candidate checkout. Leave it at the pinned SHA while the candidate evolves. After a new runnable checkpoint is committed, create a fresh inspection worktree for that SHA if needed; retire older runtime/worktrees only when authorised and safe. Do not remove the currently useful inspection path behind the human's back.

## Runtime and data safety

- Use separate ports, process ownership, environment files and disposable data directories/databases for checkpoint and candidate. Avoid sharing a writable volume, production data or an incompatible migration target.
- Do not read/copy credentials or private data without authority. Git does not copy ignored runtime config; document user-supplied prerequisites without committing values. Prefer synthetic fixtures and local test services.
- Worktree creation alone does not authorise dependency installation, network access, starting services, migrations or spending. Stop for missing permissions/prerequisites and label unavailable evidence honestly.
- If hardware/tooling prevents simultaneous runtime, keep the pinned code and safe reproducible start instructions; explicitly state that runtime availability is limited. Do not advertise a continuously running checkpoint that is not running.
- Keep secrets, logs containing private payloads, databases and other runtime artifacts out of commits. A local evidence record stores only redacted observations and safe pointers.

## Resume from an earlier checkpoint

After the human selects the checkpoint and branch name, verify it and use a new unused path:

```bash
git worktree add -b <new-branch> <new-path> <chosen-checkpoint-sha>
```

This preserves original history and avoids switching a dirty checkout. Read the spec at that commit. The human runs basics, spec and loop again to capture changed intent. Previously accepted behavior remains protected unless its change is explicitly authorised. Do not quietly turn a restart into a repair-budget reset for an unchanged failed candidate.
