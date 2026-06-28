import { appendFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const qualityDir = resolve(root, '.quality');
const testsLogPath = resolve(qualityDir, 'tests.md');

export function formatTimestamp(date = new Date()) {
  const pad = (n) => String(n).padStart(2, '0');
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? '+' : '-';
  const abs = Math.abs(offset);
  const tz = `${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`;
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())} UTC${tz}`;
}

export function getGitBranch() {
  const result = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], {
    cwd: root,
    encoding: 'utf8',
  });
  const branch = result.stdout?.trim();
  return branch && result.status === 0 ? branch : 'desconocida';
}

export function resolveExecutor() {
  const explicit = process.env.TEST_EXECUTOR?.trim().toLowerCase();
  if (explicit === 'agent' || explicit === 'developer') {
    return explicit;
  }
  if (
    process.env.CURSOR_AGENT === '1' ||
    process.env.CURSOR === '1' ||
    process.env.AGENT === '1'
  ) {
    return 'agent';
  }
  return 'developer';
}

export function resolveTriggerScript() {
  const explicit = process.env.TEST_TRIGGER_SCRIPT?.trim();
  if (explicit) {
    return explicit;
  }
  const lifecycle = process.env.npm_lifecycle_event?.trim();
  if (lifecycle) {
    return `pnpm ${lifecycle}`;
  }
  return 'node scripts/test.mjs';
}

export function resolveReason(args) {
  const explicit = process.env.TEST_REASON?.trim();
  if (explicit) {
    return explicit;
  }
  if (process.env.QUALITY_PIPELINE === '1') {
    return 'Paso 1/2 del pipeline `pnpm quality` (cobertura + lcov)';
  }
  if (args.includes('--coverage')) {
    return 'Tests con cobertura (`pnpm test:coverage` o `--coverage`)';
  }
  if (args.includes('--watch=false') || process.env.CI === 'true' || process.env.CI === '1') {
    return 'Ejecución única (`--watch=false` o CI)';
  }
  return 'Ejecución local de tests';
}

export function buildCommandLabel(args) {
  const ngArgs = args.length > 0 ? ` ${args.join(' ')}` : '';
  return `ng test${ngArgs}`;
}

export function parseTestSummary(output) {
  const lines = output.split('\n');
  const summary = {
    testFiles: null,
    tests: null,
    duration: null,
    coverageNote: null,
    failedLines: [],
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (/^Test Files\s+/i.test(trimmed)) summary.testFiles = trimmed;
    if (/^\s*Tests\s+\d+/i.test(trimmed) || /^Tests\s+/i.test(trimmed)) {
      summary.tests = trimmed;
    }
    if (/^Duration\s+/i.test(trimmed)) summary.duration = trimmed;
    if (/Coverage for/i.test(trimmed) || /does not meet global threshold/i.test(trimmed)) {
      summary.coverageNote = trimmed;
    }
    if (/^(FAIL|×|✗|\[FAIL\])/i.test(trimmed) || /\bFAIL\b.*\.spec\.ts/i.test(trimmed)) {
      summary.failedLines.push(trimmed);
    }
  }

  const briefParts = [summary.testFiles, summary.tests, summary.duration].filter(Boolean);
  if (summary.coverageNote) briefParts.push(summary.coverageNote);

  return {
    brief: briefParts.length > 0 ? briefParts.join(' · ') : 'Sin resumen parseable; ver salida completa.',
    ...summary,
  };
}

export function resolveStatus(exitCode, output) {
  if (exitCode !== 0) return 'ERROR';
  if (/Coverage for .+ does not meet global threshold/i.test(output)) return 'WARN';
  return 'OK';
}

function getNextEntryNumber(content) {
  const matches = [...content.matchAll(/## Entrada #(\d+)/g)];
  if (matches.length === 0) return 1;
  return Math.max(...matches.map((m) => Number(m[1]))) + 1;
}

function ensureTestsLogHeader() {
  mkdirSync(qualityDir, { recursive: true });

  if (!existsSync(testsLogPath)) {
    const header = `# Bitácora de tests — Vitest / Angular

Registro automático de cada ejecución de \`pnpm test\` y \`pnpm test:coverage\` (y del paso tests dentro de \`pnpm quality\`).

> **Persistencia:** este archivo y la regla \`.cursor/rules/quality-tests.mdc\` viven en el repo. Tras \`git clone\` / \`git pull\`, cada run sigue appendiendo entradas.

| Campo | Descripción |
|-------|-------------|
| Fecha y hora | Inicio y fin local |
| Ejecutor | \`agent\` (Cursor Agent) o \`developer\` (humano / terminal) |
| Rama | \`git rev-parse --abbrev-ref HEAD\` |
| Razón | Motivo de la ejecución (\`TEST_REASON\` o inferida) |
| Script detonador | Comando npm/script que lanzó los tests (\`TEST_TRIGGER_SCRIPT\` o inferido) |
| Resumen breve | Líneas clave parseadas de Vitest |
| Salida completa | stdout + stderr del comando |

Variables opcionales: \`TEST_EXECUTOR=agent|developer\`, \`TEST_REASON="..."\`, \`TEST_TRIGGER_SCRIPT="pnpm ..."\`.

---

`;
    appendFileSync(testsLogPath, header, 'utf8');
  }
}

function escapeFence(output) {
  return output.replace(/```/g, '``\\`');
}

export function appendTestsLogEntry({
  exitCode,
  startedAt,
  finishedAt,
  executor,
  branch,
  reason,
  triggerScript,
  command,
  output,
}) {
  ensureTestsLogHeader();

  const existing = readFileSync(testsLogPath, 'utf8');
  const entryNumber = getNextEntryNumber(existing);
  const parsed = parseTestSummary(output);
  const status = resolveStatus(exitCode, output);
  const executorLabel = executor === 'agent' ? '🤖 Agent' : '👤 Developer';

  const entry = `
## Entrada #${String(entryNumber).padStart(3, '0')} — Tests Vitest

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | ${finishedAt} |
| **Inicio** | ${startedAt} |
| **Ejecutor** | ${executorLabel} (\`${executor}\`) |
| **Rama** | \`${branch}\` |
| **Razón de ejecución** | ${reason} |
| **Script detonador** | \`${triggerScript}\` |
| **Comando** | \`${command}\` |
| **Status** | **${status}** |
| **Exit code** | ${exitCode} |

### Resumen breve

${parsed.brief}

### Salida completa

\`\`\`text
${escapeFence(output.trim() || '(sin salida capturada)')}
\`\`\`

---

`;

  appendFileSync(testsLogPath, entry, 'utf8');
  console.log(`\n📝 Bitácora de tests: .quality/tests.md (entrada #${String(entryNumber).padStart(3, '0')})\n`);

  return { entryNumber, status, brief: parsed.brief };
}
