#!/usr/bin/env node
// Vendors Bulma's SASS into sass/bulma/ and applies the patches Zola's SASS
// compiler (grass) needs. See sass/bulma/README.md for the reasons behind them.
//
//   node scripts/vendor-bulma.mjs [version]     # default: latest
//
// Requires node and npm. If `zola` is on the PATH the result is build-checked.

import { execFileSync } from "node:child_process";
import {
  cpSync, mkdirSync, mkdtempSync, readdirSync, readFileSync,
  renameSync, rmSync, statSync, writeFileSync, existsSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const target = join(root, "sass", "bulma");
const version = process.argv[2] ?? "latest";

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
const scssFiles = (dir) => walk(dir).filter((p) => p.endsWith(".scss"));
const rel = (dir, p) => relative(dir, p).split("\\").join("/");

// --- fetch -------------------------------------------------------------
const work = mkdtempSync(join(tmpdir(), "vendor-bulma-"));
console.log(`Fetching bulma@${version}...`);
execFileSync("npm", ["pack", `bulma@${version}`, "--silent", "--pack-destination", work], { stdio: "inherit" });
const tarball = readdirSync(work).find((f) => f.endsWith(".tgz"));
execFileSync("tar", ["xzf", join(work, tarball), "-C", work]);
const pkgDir = join(work, "package");
const bulmaVersion = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf8")).version;
const stage = join(work, "stage");
cpSync(join(pkgDir, "sass"), stage, { recursive: true });
if (!scssFiles(stage).length || !existsSync(join(stage, "_index.scss")) && !existsSync(join(stage, "index.scss"))) {
  console.error(`bulma@${bulmaVersion} has no sass/ .scss entry point (the 0.x releases use indented .sass); this script targets Bulma 1.x.`);
  process.exit(1);
}

// --- patch 1: colour functions grass lacks -----------------------------
for (const file of scssFiles(stage)) {
  let s = readFileSync(file, "utf8");
  const before = s;
  s = s.replace(/color\.channel\(\s*([^,()]+?),\s*"(red|green|blue)",\s*\$space:\s*rgb\s*\)/g, "color.$2($1)");
  s = s.replace(/color\.channel\(\s*([^,()]+?),\s*"(hue|saturation|lightness)",\s*\$space:\s*hsl\s*\)/g, "color.$2($1)");
  s = s.replace(/(color\.adjust\(\s*\$[\w-]+,\s*\$lightness: [^,]+),\s*\$space: hsl\s*\)/g, "$1)");
  if (s !== before) writeFileSync(file, s);
}

// --- patch 2: cross-module @extend -> @include -------------------------
// grass ignores `@extend %placeholder` when the placeholder lives in another
// module, so each one becomes an @include of the mixin behind it.
const mixinFor = {
  block: "mixins", overlay: "mixins", delete: "mixins", loader: "mixins",
  unselectable: "mixins", reset: "mixins", arrow: "mixins", control: "controls",
};
const extendRe = new RegExp(`@extend %(${Object.keys(mixinFor).join("|")});`, "g");

for (const file of scssFiles(stage)) {
  if (rel(stage, file) === "utilities/_extends.scss" || rel(stage, file) === "utilities/extends.scss") continue;
  let s = readFileSync(file, "utf8");
  const used = new Set([...s.matchAll(extendRe)].map((m) => mixinFor[m[1]]));
  if (!used.size) continue;

  const ns = {};
  const uses = [];
  for (const mod of used) {
    const found = s.match(new RegExp(`@use "\\.\\./utilities/${mod}"(?: as (\\w+))?;`));
    if (found) ns[mod] = found[1] ?? mod;
    else { ns[mod] = mod; uses.push(`@use "../utilities/${mod}";`); }
  }
  s = s.replace(extendRe, (_, name) => `@include ${ns[mixinFor[name]]}.${name};`);
  if (uses.length) {
    const lines = s.split("\n");
    let at = 0;
    lines.forEach((l, i) => { if (/^(@use|@charset|\/\*)/.test(l)) at = i + 1; });
    lines.splice(at, 0, ...uses);
    s = lines.join("\n");
  }
  writeFileSync(file, s);
}

// %input is defined in form/shared and extended from two other form files.
for (const f of ["form/select.scss", "form/input-textarea.scss"]) {
  const file = join(stage, f);
  const s = readFileSync(file, "utf8");
  writeFileSync(file, s.replace("@extend %input;", "@include shared.input;"));
}

// --- patch 3: prefix partials with _ -----------------------------------
for (const file of scssFiles(stage)) {
  const name = file.split("/").pop();
  if (!name.startsWith("_")) renameSync(file, join(dirname(file), `_${name}`));
}

// --- verify nothing unpatched is left -----------------------------------
const problems = [];
for (const file of scssFiles(stage)) {
  const s = readFileSync(file, "utf8");
  const r = rel(stage, file);
  if (/color\.channel\(/.test(s)) problems.push(`${r}: color.channel is still used`);
  if (/\$space\s*:/.test(s)) problems.push(`${r}: a $space argument is still used`);
  const local = new Set([...s.matchAll(/^\s*%([\w-]+)\s*\{/gm)].map((m) => m[1]));
  for (const m of s.matchAll(/@extend %([\w-]+);/g)) {
    if (!local.has(m[1])) problems.push(`${r}: @extend %${m[1]} refers to a placeholder from another module`);
  }
}
if (problems.length) {
  console.error("\nUnpatched grass incompatibilities (Bulma changed upstream, extend this script):");
  for (const p of problems) console.error(`  - ${p}`);
  rmSync(work, { recursive: true, force: true });
  process.exit(1);
}

// --- install ----------------------------------------------------------
const readme = join(target, "README.md");
const readmeText = existsSync(readme) ? readFileSync(readme, "utf8") : null;
rmSync(target, { recursive: true, force: true });
mkdirSync(dirname(target), { recursive: true });
cpSync(stage, target, { recursive: true });
cpSync(join(pkgDir, "LICENSE"), join(target, "LICENSE"));
if (readmeText !== null) {
  writeFileSync(readme, readmeText.replace(/Bulma \d+\.\d+\.\d+/, `Bulma ${bulmaVersion}`));
}
rmSync(work, { recursive: true, force: true });
console.log(`Vendored Bulma ${bulmaVersion} into sass/bulma/`);

// --- build check ------------------------------------------------------
try {
  const out = mkdtempSync(join(tmpdir(), "vendor-bulma-build-"));
  rmSync(out, { recursive: true });
  execFileSync("zola", ["build", "-o", out], { cwd: root, stdio: "pipe" });
  rmSync(out, { recursive: true, force: true });
  console.log("zola build: ok");
} catch (e) {
  if (e.code === "ENOENT") console.log("zola not found; skipped the build check");
  else {
    console.error("zola build failed:\n" + (e.stderr?.toString() || e.message));
    process.exit(1);
  }
}
console.log("Now check the overrides in sass/deep-thought.scss and compare the pages visually.");
