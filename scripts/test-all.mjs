import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const triggerScript = 'pnpm test:all';

const phases = [
  {
    label: 'Paso 1/2 — tests (sin watch)',
    args: ['test', '--watch=false'],
    reason: 'Suite `pnpm test:all` — ejecución base de tests',
  },
  {
    label: 'Paso 2/2 — tests con cobertura',
    args: ['test:coverage'],
    reason: 'Suite `pnpm test:all` — cobertura + lcov',
  },
];

function runPhase({ label, args, reason }) {
  console.log(`\n▶ ${label}\n`);
  const result = spawnSync('pnpm', args, {
    cwd: root,
    stdio: 'inherit',
    env: {
      ...process.env,
      TEST_TRIGGER_SCRIPT: triggerScript,
      TEST_REASON: process.env.TEST_REASON?.trim() || reason,
    },
    shell: process.platform === 'win32',
  });

  return result.status ?? 1;
}

let exitCode = 0;

for (const phase of phases) {
  const code = runPhase(phase);
  if (code !== 0 && exitCode === 0) {
    exitCode = code;
  }
}

if (exitCode === 0) {
  console.log('\n✓ Suite test:all completada (test + test:coverage)\n');
} else {
  console.error('\n✗ Suite test:all terminó con errores\n');
}

process.exit(exitCode);
