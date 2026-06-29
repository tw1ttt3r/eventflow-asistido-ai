import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

import {
  appendTestsLogEntry,
  buildCommandLabel,
  formatTimestamp,
  getGitBranch,
  resolveExecutor,
  resolveReason,
  resolveTriggerScript,
} from './test-bitacora.mjs';

const root = resolve(import.meta.dirname, '..');
const rawArgs = process.argv.slice(2).filter((arg) => arg !== '--');

/** Mapea --coverage legacy → configuración coverage de angular.json */
function normalizeTestArgs(args) {
  if (args.includes('--coverage')) {
    const withoutCoverage = args.filter((arg) => arg !== '--coverage');
    if (!withoutCoverage.some((arg) => arg === '--configuration=coverage' || arg === 'coverage')) {
      withoutCoverage.push('--configuration=coverage');
    }
    return withoutCoverage;
  }
  return args;
}

const userArgs = normalizeTestArgs(rawArgs);

const startedAt = formatTimestamp();

const result = spawnSync('pnpm', ['exec', 'ng', 'test', ...userArgs], {
  cwd: root,
  encoding: 'utf8',
  env: process.env,
  shell: process.platform === 'win32',
});

const stdout = result.stdout ?? '';
const stderr = result.stderr ?? '';
const combinedOutput = [stdout, stderr].filter(Boolean).join('\n');

if (stdout) process.stdout.write(stdout);
if (stderr) process.stderr.write(stderr);

const exitCode = result.status ?? 1;
const finishedAt = formatTimestamp();
const executor = resolveExecutor();
const branch = getGitBranch();
const reason = resolveReason(userArgs);
const triggerScript = resolveTriggerScript();
const command = buildCommandLabel(userArgs);

if (process.env.TEST_SKIP_LOG !== '1') {
  try {
    const { brief, status } = appendTestsLogEntry({
      exitCode,
      startedAt,
      finishedAt,
      executor,
      branch,
      reason,
      triggerScript,
      command,
      output: combinedOutput,
    });

    if (brief) {
      console.log(`Resumen: ${brief} · Status ${status}`);
    }
  } catch (error) {
    console.warn(
      'No se pudo actualizar .quality/tests.md:',
      error instanceof Error ? error.message : error,
    );
  }
}

process.exit(exitCode);
