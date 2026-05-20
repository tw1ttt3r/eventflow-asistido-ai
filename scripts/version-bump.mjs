#!/usr/bin/env node
/**
 * Semantic Versioning 2.0.0 — Eventflow
 *
 * - PATCH: +1 en cada commit (pre-commit)
 * - MINOR: +1 al trabajar en una rama nueva (primera vez en el repo: solo PATCH)
 * - MAJOR: manual con `pnpm version:major [--module nombre]`
 */
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const versionStatePath = join(root, '.cardex', 'version.json');
const packageJsonPath = join(root, 'package.json');
const appVersionPath = join(root, 'src', 'version.ts');
const envFiles = [
  join(root, 'src', 'environments', 'environment.ts'),
  join(root, 'src', 'environments', 'environment.development.ts'),
];
const manifestPath = join(root, 'public', 'manifest.webmanifest');

const args = process.argv.slice(2);
const isMajor = args.includes('--major');
const isDryRun = args.includes('--dry-run');
const moduleArg = args.find((a) => a.startsWith('--module='));
const closedModule = moduleArg?.split('=').slice(1).join('=') ?? null;

function runGit(command) {
  return execSync(command, { cwd: root, encoding: 'utf8' }).trim();
}

function loadState() {
  if (!existsSync(versionStatePath)) {
    return { major: 0, minor: 0, patch: 0, knownBranches: [], history: [] };
  }
  return JSON.parse(readFileSync(versionStatePath, 'utf8'));
}

function saveState(state) {
  if (!isDryRun) {
    writeFileSync(versionStatePath, `${JSON.stringify(state, null, 2)}\n`);
  }
}

function toSemver({ major, minor, patch }) {
  return `${major}.${minor}.${patch}`;
}

function parseSemver(version) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
  if (!match) {
    throw new Error(`Versión inválida: ${version}`);
  }
  return { major: Number(match[1]), minor: Number(match[2]), patch: Number(match[3]) };
}

function getBranch() {
  try {
    return runGit('git rev-parse --abbrev-ref HEAD');
  } catch {
    return 'unknown';
  }
}

function getShortSha() {
  try {
    return runGit('git rev-parse --short HEAD');
  } catch {
    return 'no-git';
  }
}

function bumpForCommit(state, branch) {
  const previous = toSemver(state);
  let reason = 'patch';
  let detail = 'commit';

  if (!state.knownBranches.includes(branch)) {
    state.knownBranches.push(branch);
    if (state.knownBranches.length === 1) {
      state.patch += 1;
      reason = 'patch';
      detail = `primera rama registrada (${branch})`;
    } else {
      state.minor += 1;
      state.patch = 0;
      reason = 'minor';
      detail = `nueva rama (${branch})`;
    }
  } else {
    state.patch += 1;
    reason = 'patch';
    detail = `commit en rama (${branch})`;
  }

  const next = toSemver(state);
  state.history.push({
    at: new Date().toISOString(),
    from: previous,
    to: next,
    branch,
    reason,
    detail,
    sha: getShortSha(),
  });

  if (state.history.length > 100) {
    state.history = state.history.slice(-100);
  }

  return { previous, next, reason, detail };
}

function bumpMajor(state, moduleName) {
  const previous = toSemver(state);
  state.major += 1;
  state.minor = 0;
  state.patch = 0;

  const next = toSemver(state);
  state.history.push({
    at: new Date().toISOString(),
    from: previous,
    to: next,
    branch: getBranch(),
    reason: 'major',
    detail: moduleName ? `módulo cerrado: ${moduleName}` : 'cierre de módulo (manual)',
    sha: getShortSha(),
  });

  return { previous, next, reason: 'major', detail: state.history.at(-1).detail };
}

function writeAppVersion(version) {
  const content = `/** Generado por scripts/version-bump.mjs — no editar a mano */\nexport const APP_VERSION = '${version}';\n`;
  if (!isDryRun) {
    writeFileSync(appVersionPath, content);
  }
}

function syncPackageJson(version) {
  const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  pkg.version = version;
  if (!isDryRun) {
    writeFileSync(packageJsonPath, `${JSON.stringify(pkg, null, 2)}\n`);
  }
}

function syncEnvironments(version) {
  for (const file of envFiles) {
    if (!existsSync(file)) {
      continue;
    }
    let content = readFileSync(file, 'utf8');

    if (!content.includes("from '../version'")) {
      content = content.replace(
        /^(import type \{ Environment \}[^\n]*\n)/,
        `$1import { APP_VERSION } from '../version';\n`,
      );
    }

    const versionLines = content.match(/^\s*version:\s*.+$/gm) ?? [];
    if (versionLines.length > 0) {
      content = content.replace(/^\s*version:\s*.+$/gm, '');
      content = content.replace(
        /(appName:\s*.+,\n)/,
        `$1  version: APP_VERSION,\n`,
      );
    } else {
      content = content.replace(
        /(appName:\s*.+,\n)/,
        `$1  version: APP_VERSION,\n`,
      );
    }

    if (!isDryRun) {
      writeFileSync(file, content);
    }
  }
}

function syncManifest(version) {
  if (!existsSync(manifestPath)) {
    return;
  }

  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  manifest.version = version;
  manifest.name = `Eventflow Asistido v${version}`;
  manifest.short_name = 'Eventflow';
  manifest.description = `Eventflow Asistido AI — versión ${version}`;

  if (!isDryRun) {
    writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  }
}

function stageVersionFiles() {
  if (isDryRun) {
    return;
  }
  try {
    const files = [
      '.cardex/version.json',
      'package.json',
      'src/version.ts',
      'src/environments/environment.ts',
      'src/environments/environment.development.ts',
      'public/manifest.webmanifest',
    ];
    runGit(`git add ${files.join(' ')}`);
  } catch {
    // Sin repo git o fuera de commit; los archivos quedan escritos en disco.
  }
}

const state = loadState();
const branch = getBranch();

let result;
if (isMajor) {
  result = bumpMajor(state, closedModule);
} else {
  result = bumpForCommit(state, branch);
}

saveState(state);
syncPackageJson(result.next);
writeAppVersion(result.next);
syncEnvironments(result.next);
syncManifest(result.next);
stageVersionFiles();

const prefix = isDryRun ? '[dry-run] ' : '';
console.log(
  `${prefix}Versión ${result.previous} → ${result.next} (${result.reason}: ${result.detail})`,
);
