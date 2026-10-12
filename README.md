# Iterative Skills

A focused fork of [Matt Pocock's skills](https://github.com/mattpocock/skills), adapted for small runnable outcomes and bounded autonomous execution. The upstream MIT [license](./LICENSE), author attribution, historical changelog and unrelated skills are retained. This fork is not the upstream official plugin or an aihero.dev release.

## Main workflow

**[`/grill-the-basics`](./skills/engineering/grill-the-basics/SKILL.md) -> [`/to-spec`](./skills/engineering/to-spec/SKILL.md) -> [`/implement-loop`](./skills/engineering/implement-loop/SKILL.md)**

1. Inspect facts and clarify the desired end product, intended user/use, observable overall success and consequential product decisions. Maintain concise domain vocabulary and material decision docs, not an exhaustive feature/design interview or first-slice gate.
2. Persist the product agreement, constraints, non-goals and approved finite execution envelope. **The spec handoff is required**, including small builds; no selected first slice or detailed roadmap is required.
3. Choose, precisely define and build numbered smallest usable end-to-end slices toward the approved product outcome, verify the real surface and relevant failures/regressions, assess review findings and commit each iteration locally with permission. Preserve the latest verified runnable checkpoint while the next candidate evolves.

Within an approved multi-slice mandate, the loop continues without mandatory per-slice human approval. The human can inspect, redirect or pause. Silence is not acceptance; technical verification is not human acceptance. Stop for achieved outcomes, exhausted finite budgets or genuine decisions outside the mandate. A skill is instructions, not a perpetual scheduler. No automatic push, publishing, spending, external communication or destructive actions.

Every loop reviews the current slice against Spec and Standards and verifies runtime behavior before labelling a working checkpoint commit. Consequential changes get proportionate independent review where available; a final cumulative review from the starting checkpoint catches integration/cross-slice drift. These reviews are built in, not triggered by a separate command. Optional `/code-review` then `/retro` after a run provides extra scrutiny and environment learning, not mandatory human gates. Supporting review reads the local spec first and covers current uncommitted work; TDD chooses technical seams within the authorised outcomes.

Each candidate has one initial pass plus at most two focused repairs, within the approved overall run-time and slice limits. Failed/incomplete commits are explicitly **NOT runnable**. Earlier checkpoints restart on a **new branch**, preserving original history, then basics -> spec -> loop again with specs versioned with code. See [checkpoint and runtime/data safety](./skills/engineering/implement-loop/CHECKPOINTS.md).

The adopted router name is **[`/ask-the-playbook`](./skills/engineering/ask-the-playbook/SKILL.md)**, replacing `ask-matt`. `grill-the-basics` replaces `grill-with-docs`, and `implement-loop` replaces `implement-spec`. Ticket-tree planning is archived, not a required active step. Retained tools such as `/implement`, `/grill-me` and `/wayfinder` remain standalone; TDD, code-review and retro have targeted fork compatibility boundaries; the router explains their boundaries. [Fork adaptation details](./docs/fork-workflow.md) distinguish the new flow from retained upstream docs.

## Installation

Pick one route per agent to avoid duplicates. Commands below are copied from [.agents/install-block.md](./.agents/install-block.md). Fork installs and automatic updates have not been exercised here; the upstream official marketplace does not ship this fork.

### Claude Code

```bash
claude plugin marketplace add archsinit/iterative-skills
claude plugin install iterative-skills@archsinit
```

### Codex

```bash
codex plugin marketplace add archsinit/iterative-skills
codex plugin add iterative-skills@archsinit
```

### GitHub Copilot

```bash
copilot plugin marketplace add archsinit/iterative-skills
copilot plugin install iterative-skills@archsinit
```

In VS Code, run **Chat: Install Plugin From Source** and enter `https://github.com/archsinit/iterative-skills`. Fork installation and update behavior have not been exercised here.

### Gemini CLI (manual updates)

```bash
gemini skills install https://github.com/archsinit/iterative-skills.git --path skills/engineering
gemini skills install https://github.com/archsinit/iterative-skills.git --path skills/productivity
```

Re-run both commands to update.

### Other agents or editable files (manual updates)

```bash
npx skills@latest add archsinit/iterative-skills -a <agent>  # omit -a to choose
```

Select the promoted skills only, not deprecated ticket planning. To update, run `npx skills@latest update`, and re-run `add` to pick up new skills. Local basics/spec/loop need no tracker setup; `/setup-matt-pocock-skills` configures retained tracker-dependent tools. Do not install both plugin and copied skills for the same agent.

## Reference

**User-invoked** skills are reachable only when the human types them. They cannot invoke one another. **Model-invoked** skills can be reached by the model or human. Slash-command labels below describe recommendations, not automatic phase invocation.

### Engineering

**User-invoked**

- **[ask-the-playbook](./skills/engineering/ask-the-playbook/SKILL.md)**: Route to the right fork workflow or retained standalone tool.
- **[grill-the-basics](./skills/engineering/grill-the-basics/SKILL.md)**: Inspect facts and clarify the end product, overall success and consequential decisions.
- **[triage](./skills/engineering/triage/SKILL.md)**: Move incoming issues through triage roles.
- **[improve-codebase-architecture](./skills/engineering/improve-codebase-architecture/SKILL.md)**: Survey deepening opportunities and clarify the selected one.
- **[setup-matt-pocock-skills](./skills/engineering/setup-matt-pocock-skills/SKILL.md)**: Configure tracker, triage labels and domain-doc layout for tracker-dependent tools.
- **[to-spec](./skills/engineering/to-spec/SKILL.md)**: Required persisted product agreement and execution envelope.
- **[implement](./skills/engineering/implement/SKILL.md)**: Retained upstream single-ticket implementation with TDD and review.
- **[implement-loop](./skills/engineering/implement-loop/SKILL.md)**: Bounded runnable slices, real-surface verification and local iteration checkpoints.
- **[wayfinder](./skills/engineering/wayfinder/SKILL.md)**: Chart a large foggy effort as decision tickets.
- **[retro](./skills/engineering/retro/SKILL.md)**: Suggest improvements to the agent's environment after a session.

**Model-invoked**

- **[prototype](./skills/engineering/prototype/SKILL.md)**: Throwaway runnable evidence for one design question.
- **[diagnosing-bugs](./skills/engineering/diagnosing-bugs/SKILL.md)**: Tight reproduction, diagnosis, fix and regression loop.
- **[research](./skills/engineering/research/SKILL.md)**: Scoped primary-source investigation with cited notes.
- **[tdd](./skills/engineering/tdd/SKILL.md)**: Test-first discipline with agent-owned technical seams inside authorised outcomes.
- **[domain-modeling](./skills/engineering/domain-modeling/SKILL.md)**: Sharpen domain terms, glossary and material ADRs.
- **[codebase-design](./skills/engineering/codebase-design/SKILL.md)**: Deep-module and seam vocabulary.
- **[code-review](./skills/engineering/code-review/SKILL.md)**: Separate Standards/Spec review including relevant current uncommitted work, local spec first.
- **[pr](./skills/engineering/pr/SKILL.md)**: Shape a PR body, not permission to publish.
- **[wizard](./skills/engineering/wizard/SKILL.md)**: Prepare a human setup procedure for manual prerequisites.

### Productivity

**User-invoked**

- **[grill-me](./skills/productivity/grill-me/SKILL.md)**: Retained exhaustive stateless interview for plans and designs.
- **[handoff](./skills/productivity/handoff/SKILL.md)**: Portable context for another agent or workspace.
- **[teach](./skills/productivity/teach/SKILL.md)**: Stateful lessons across sessions.
- **[to-questionnaire](./skills/productivity/to-questionnaire/SKILL.md)**: Prepare questions for private knowledge held by someone else.
- **[wait-what](./skills/productivity/wait-what/SKILL.md)**: Re-explain a message with missing context and shared vocabulary.

**Model-invoked**

- **[grilling](./skills/productivity/grilling/SKILL.md)**: Retained exhaustive interview primitive, not the bounded basics workflow.
- **[writing-for-agents](./skills/productivity/writing-for-agents/SKILL.md)**: Reference for low-load agent-facing documents.
