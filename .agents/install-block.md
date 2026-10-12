# The canonical fork install block

This fork is `archsinit/iterative-skills`, not the upstream official distribution. Do not claim `claude-plugins-official` ships these adaptations. These are documented commands, not verification that a particular harness version resolves or auto-updates the fork. No install commands were executed during the adaptation.

Pick one route per agent to avoid duplicate skills. The plugin registry contains exactly the promoted set; generic skill discovery may also offer archived or beta skills, so select only `engineering/` and `productivity/`.

## Claude Code

```bash
claude plugin marketplace add archsinit/iterative-skills
claude plugin install iterative-skills@archsinit
```

Use the fork's marketplace, not `claude-plugins-official`. Update behavior depends on the harness and marketplace settings; no automatic-update guarantee is made here.

## Codex

```bash
codex plugin marketplace add archsinit/iterative-skills
codex plugin add iterative-skills@archsinit
```

## GitHub Copilot

```bash
copilot plugin marketplace add archsinit/iterative-skills
copilot plugin install iterative-skills@archsinit
```

In VS Code, run **Chat: Install Plugin From Source** and enter `https://github.com/archsinit/iterative-skills`. Fork installation and update behavior have not been exercised here.

## Gemini CLI (manual updates)

```bash
gemini skills install https://github.com/archsinit/iterative-skills.git --path skills/engineering
gemini skills install https://github.com/archsinit/iterative-skills.git --path skills/productivity
```

Re-run both commands to update.

## Other agents or editable files (manual updates)

```bash
npx skills@latest add archsinit/iterative-skills -a <agent>  # omit -a to choose
```

Select the promoted skills only, not deprecated `to-tickets`. To update, run `npx skills@latest update`, and re-run `add` to pick up new skills.

## Single skill (manual updates)

```bash
npx skills@latest add archsinit/iterative-skills --skill=<name>
```

```bash
npx skills@latest update <name>
```

For the main workflow, install `grill-the-basics`, `to-spec`, `implement-loop`, `ask-the-playbook` and the shared `domain-modeling` reference. Local basics/spec/loop do not require tracker setup. Use `/setup-matt-pocock-skills` only for retained tracker-dependent tools. Historical install commands in the changelog and ADRs describe upstream releases, not current fork installation.
