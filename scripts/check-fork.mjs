#!/usr/bin/env node
// Structural checks, not proof that a model follows the workflow instructions.
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(join(root, path), "utf8");
const promoted = ["engineering", "productivity"].flatMap((bucket) =>
  readdirSync(join(root, "skills", bucket)).filter((name) =>
    existsSync(join(root, "skills", bucket, name, "SKILL.md"))
  ).map((name) => ({ bucket, name, path: `./skills/${bucket}/${name}` })),
);
const plugin = JSON.parse(read(".claude-plugin/plugin.json"));
const marketplace = JSON.parse(read(".claude-plugin/marketplace.json"));
const packageJson = JSON.parse(read("package.json"));

function registryErrors(skills) {
  const expected = promoted.map(({ path }) => path).sort();
  return skills.length !== new Set(skills).size ||
    JSON.stringify([...skills].sort()) !== JSON.stringify(expected);
}
assert.equal(registryErrors(plugin.skills), false, "plugin must ship exactly promoted skills");
assert.equal(plugin.name, "iterative-skills");
assert.equal(packageJson.name, plugin.name);
assert.equal(plugin.version, packageJson.version);
assert.equal(marketplace.name, "archsinit");
assert.equal(marketplace.plugins[0].name, plugin.name);
assert.equal(plugin.repository, "https://github.com/archsinit/iterative-skills");

const router = read("skills/engineering/ask-the-playbook/SKILL.md");
const top = read("README.md");
for (const { bucket, name, path } of promoted) {
  const source = read(`${path}/SKILL.md`);
  const metadata = read(`${path}/agents/openai.yaml`);
  assert.match(source, new RegExp(`^---\\nname: ${name}\\n`, "m"), `${name}: frontmatter name`);
  const userOnly = /^disable-model-invocation: true$/m.test(source);
  assert.equal(userOnly, /allow_implicit_invocation: false/.test(metadata), `${name}: invocation parity`);
  assert.ok(top.includes(`](${path}/SKILL.md)`), `${name}: top index`);
  assert.ok(read(`skills/${bucket}/README.md`).includes(`](./${name}/SKILL.md)`), `${name}: bucket index`);
  assert.ok(existsSync(join(root, `docs/${bucket}/${name}.md`)), `${name}: docs page`);
  assert.ok(router.includes(`/${name}`), `${name}: router map`);
}
assert.ok(existsSync(join(root, "skills/deprecated/to-tickets/SKILL.md")));
for (const name of ["ask-matt", "grill-with-docs", "implement-spec", "to-tickets"]) {
  assert.ok(!existsSync(join(root, `skills/engineering/${name}`)), `${name}: not active`);
  assert.ok(!top.includes(`skills/engineering/${name}/SKILL.md`), `${name}: no stale index`);
}
for (const name of ["ask-the-playbook", "grill-the-basics", "to-spec", "implement-loop", "code-review", "tdd"]) {
  const page = read(`docs/engineering/${name}.md`);
  const headings = ["What it does", "When to reach for it", "Common questions", "It's working if", "Where it fits"];
  let last = -1;
  for (const heading of headings) {
    const index = page.indexOf(`## ${heading}`);
    assert.ok(index > last, `${name}: ordered docs section ${heading}`);
    last = index;
  }
  assert.ok(!page.includes("https://aihero.dev/skills-"), `${name}: no unpublished fork slugs`);
  assert.ok(!/```bash/.test(page), `${name}: no install block`);
}

// Resolve local Markdown links in the changed workflow surface. Remote network
// availability is deliberately not inferred from these local path checks.
const paths = ["README.md", "CLAUDE.md", "docs/fork-workflow.md",
  "skills/engineering/README.md", "skills/deprecated/README.md",
  ...promoted.filter(({ name }) => ["ask-the-playbook", "grill-the-basics", "to-spec", "implement-loop", "code-review", "tdd"].includes(name))
    .flatMap(({ path, bucket, name }) => [`${path}/SKILL.md`, `docs/${bucket}/${name}.md`]),
  "skills/engineering/implement-loop/CHECKPOINTS.md"];
for (const path of paths) {
  const text = read(path);
  assert.ok(!text.includes("\u2014"), `${path}: no em-dashes`);
  for (const [, target] of text.matchAll(/\]\(([^)]+)\)/g)) {
    const forkPrefix = "https://github.com/archsinit/iterative-skills/blob/main/";
    if (target.startsWith(forkPrefix)) {
      assert.ok(existsSync(join(root, target.slice(forkPrefix.length))), `${path}: fork link ${target}`);
    } else if (!/^(https?:|#)/.test(target)) {
      const destination = resolve(root, dirname(path), target.split("#")[0]);
      assert.ok(existsSync(destination) && statSync(destination), `${path}: relative link ${target}`);
    }
  }
}
// Static contract probes catch reintroduction of the compatibility conflicts.
const review = read("skills/engineering/code-review/SKILL.md");
const tdd = read("skills/engineering/tdd/SKILL.md");
const loop = read("skills/engineering/implement-loop/SKILL.md");
assert.ok(review.includes("local versioned spec first"));
assert.ok(review.includes("git ls-files --others --exclude-standard"));
assert.ok(review.includes("git diff <baseline-sha>"));
assert.ok(review.includes("SELF-REVIEW") && review.includes("never spawn more workers"));
assert.ok(!review.includes("in the foreground"));
assert.ok(!tdd.includes("No test is written at an unconfirmed seam"));
assert.ok(tdd.includes("Choose technical seams within authorised outcomes"));
assert.ok(loop.includes("Review EVERY current slice") && loop.includes("BEFORE a commit"));
assert.ok(loop.includes("cumulative Standards and Spec review") && loop.includes("STARTING"));
assert.ok(loop.includes("review of the resulting repaired diff") && loop.includes("pre-repair state cannot certify"));
assert.ok(loop.includes("rechecks to cumulative-review fixes before runnable promotion"));
const install = read(".agents/install-block.md");
assert.ok(!/install .*@claude-plugins-official/.test(install));
for (const [, command] of top.matchAll(/```bash\n([^`]+)```/g)) {
  assert.ok(install.includes(command.trim()), "README install command must match canonical block");
}

// Negative probes ensure the registry check rejects likely maintenance mistakes.
assert.equal(registryErrors([...plugin.skills, "./skills/deprecated/to-tickets"]), true);
assert.equal(registryErrors(plugin.skills.slice(1)), true);
assert.equal(registryErrors([...plugin.skills, plugin.skills[0]]), true);
console.log(`PASS: ${promoted.length} promoted skills, registry/index/router/invocation/docs/link/install checks; 3 negative registry probes`);
