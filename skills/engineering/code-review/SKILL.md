---
name: code-review
description: "Review a fixed-baseline diff, including relevant uncommitted work, on separate Standards and Spec axes. Use for branch, PR, current slice or work-in-progress review; use permitted independent reviewers or label self-review honestly."
---

Two-axis review against a fixed baseline the user supplies or the authorised iteration record pins:

- **Standards**: does the code conform to this repo's documented coding standards?
- **Spec**: does the code faithfully implement the originating issue / spec?

Keep the two axes separate. Use independent reviewers when available and permitted, otherwise label **SELF-REVIEW**. A local versioned spec is sufficient; tracker setup is not required. Review is not acceptance or permission to change scope. Apply the enclosing run's finite budget, with no recursive delegation or automatic access expansion.

## Process

### 1. Pin the fixed point

Resolve and pin the baseline SHA (commit, branch, tag or explicitly intended merge-base). Use the recorded iteration baseline when supplied; otherwise ask rather than guess. Validate it with `git rev-parse <fixed-point>^{commit}`.

For committed branch review, use `git diff <baseline-sha>...HEAD` when merge-base comparison is intended. For a current slice, use `git diff <baseline-sha>` to include the tracked working-tree and staged state, plus `git status --short` and `git ls-files --others --exclude-standard` to identify relevant new files. Read authorised new source/spec/evidence files separately; do not stage them just for review. If both staged and unstaged changes to the same file matter, inspect `git diff --cached` and `git diff` too. Note commits with `git log <baseline-sha>..HEAD --oneline`.

Record the exact commands, relevant file scope and review state. Exclude unrelated dirty work and private runtime data without silently losing candidate files. A bad ref or genuinely empty scoped change stops review. Recheck that the diff has not changed before applying findings; stale review evidence is not current verification.

### 2. Identify the spec source

Read the local versioned spec first:

1. The path supplied by the user or iteration record, including relevant current-slice spec changes.
2. A tracked spec under the repo's `specs/` or documented convention matching this work, read in full.
3. An originating issue only if no local contract exists and tracker access is configured and authorised. No automatic fetch or publication.
4. If none is found, ask for it. If there is no spec, the Spec axis reports "no spec available"; do not invent requirements or treat a skipped axis as a pass. A required implement-loop handoff cannot be bypassed this way.

Distinguish approved intent from candidate-proposed scope changes. The Spec axis checks observable outcomes, failures, regressions and permission boundaries, not compliance with an invented technical blueprint. Passing tests do not establish usefulness; examine real-surface evidence and label unavailable checks.

### 3. Identify the standards sources

Search the repo for every file that documents how code should be written. When `CODING_STANDARDS.md` or `CONTRIBUTING.md` exists, it must be on the list.

On top of whatever the repo documents, the Standards axis always carries the **smell baseline** below: a fixed set of Fowler code smells (_Refactoring_, ch.3) that applies even when a repo documents nothing. Two rules bind it:

- **The repo overrides.** A documented repo standard always wins; where it endorses something the baseline would flag, suppress the smell.
- **Always a judgement call.** Each smell is a labelled heuristic ("possible Feature Envy"), never a hard violation. Like any standard here, skip anything tooling already enforces.

Each smell reads *what it is* → *how to fix*; match it against the diff:

- **Mysterious Name**: a function, variable, or type whose name doesn't reveal what it does or holds. → rename it; if no honest name comes, the design's murky.
- **Duplicated Code**: the same logic shape appears in more than one hunk or file in the change. → extract the shared shape, call it from both.
- **Feature Envy**: a method that reaches into another object's data more than its own. → move the method onto the data it envies.
- **Data Clumps**: the same few fields or params keep travelling together (a type wanting to be born). → bundle them into one type, pass that.
- **Primitive Obsession**: a primitive or string standing in for a domain concept that deserves its own type. → give the concept its own small type.
- **Repeated Switches**: the same `switch`/`if`-cascade on the same type recurs across the change. → replace with polymorphism, or one map both sites share.
- **Shotgun Surgery**: one logical change forces scattered edits across many files in the diff. → gather what changes together into one module.
- **Divergent Change**: one file or module is edited for several unrelated reasons. → split so each module changes for one reason.
- **Speculative Generality**: abstraction, parameters, or hooks added for needs the spec doesn't have. → delete it; inline back until a real need shows.
- **Message Chains**: long `a.b().c().d()` navigation the caller shouldn't depend on. → hide the walk behind one method on the first object.
- **Middle Man**: a class or function that mostly just delegates onward. → cut it, call the real target direct.
- **Refused Bequest**: a subclass or implementer that ignores or overrides most of what it inherits. → drop the inheritance, use composition.

### 4. Review with the available runtime

Where permitted, dispatch narrow independent Standards and Spec reviewers through the host's available mechanism, preferably in the background so the human can continue. Honour host worker-count limits and completion delivery; do not poll, duplicate their tasks or claim completion before reports arrive. Give read-only scope, finite stopping budgets, safe pointers and the exact diff commands including uncommitted/new files when relevant. Workers must not invoke code-review, delegate recursively, write, commit, publish, use credentials or expand access.

If running as a worker, perform the assigned review directly, never spawn more workers. If independent tools are unavailable or forbidden, perform both axes directly and prominently label SELF-REVIEW. A failed/timed-out reviewer is unavailable evidence, not permission for unlimited retries. Report which axes were independently reviewed and which were self-reviewed.

**Standards sub-agent prompt** should include:

- The full diff command and commit list.
- The list of standards-source files you found in step 3, **plus the smell baseline from step 3** pasted in full (the sub-agent has no other access to it).
- The brief: "Report, per file/hunk where relevant, (a) every place the diff violates a documented standard: cite the standard (file + the rule); and (b) any baseline smell you spot: name it and quote the hunk. Distinguish hard violations from judgement calls: documented-standard breaches can be hard, but baseline smells are always judgement calls, and a documented repo standard overrides the baseline. Skip anything tooling enforces. Under 400 words."

**Spec sub-agent prompt** should include:

- The diff command and commit list.
- The path or fetched contents of the spec.
- The brief: "Report: (a) requirements the spec asked for that are missing or partial; (b) behaviour in the diff that wasn't asked for (scope creep); (c) requirements that look implemented but where the implementation looks wrong. Quote the spec line for each finding. Under 400 words."

If the spec is missing, skip the Spec review and note this in the final report. Each reviewer brief also says: "Do not invoke code-review or delegate. Review only the scoped diff and safe files against the stated sources and real-surface evidence; stop at the supplied budget. Report unavailable evidence honestly."

### 5. Aggregate

Present the reports under `## Standards` and `## Spec`, with review mode and unavailable evidence. Keep the axes separate; one cannot mask the other. Verify each cited finding against current files, approved intent and evidence. Distinguish relevant defects from speculative preferences or mistaken tests; record disposition and reasoning rather than blindly applying suggestions. Repairs consume the enclosing candidate budget. Do not loop reviews until nothing is found, invent requirements or silently change accepted behavior.

End with a one-line summary: total findings per axis, and the worst issue _within each axis_ (if any). Don't pick a single winner across axes: that's the reranking the separation exists to prevent.

## Why two axes

A change can pass one axis and fail the other:

- Code that follows every standard but implements the wrong thing → **Standards pass, Spec fail.**
- Code that does exactly what the issue asked but breaks the project's conventions → **Spec pass, Standards fail.**

Reporting them separately stops one axis from masking the other.
