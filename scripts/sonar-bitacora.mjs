import { appendFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const qualityDir = resolve(root, '.quality');
const bitacoraPath = resolve(qualityDir, 'bitacora.md');
const sonarPropsPath = resolve(root, 'sonar-project.properties');

const RATING_LABELS = { '1.0': 'A', '2.0': 'B', '3.0': 'C', '4.0': 'D', '5.0': 'E' };

const METRIC_LABELS = {
  alert_status: 'Quality Gate',
  bugs: 'Bugs',
  vulnerabilities: 'Vulnerabilidades',
  code_smells: 'Code smells',
  security_hotspots: 'Security hotspots',
  coverage: 'Cobertura (%)',
  duplicated_lines_density: 'Duplicación (%)',
  ncloc: 'Líneas de código (ncloc)',
  sqale_index: 'Deuda técnica (min)',
  reliability_rating: 'Rating fiabilidad',
  security_rating: 'Rating seguridad',
  sqale_rating: 'Rating mantenibilidad',
};

const METRIC_KEYS = Object.keys(METRIC_LABELS);

const SEVERITY_ORDER = ['BLOCKER', 'CRITICAL', 'MAJOR', 'MINOR', 'INFO'];

const SEVERITY_LABELS = {
  BLOCKER: 'Bloqueante',
  CRITICAL: 'Crítico',
  MAJOR: 'Mayor',
  MINOR: 'Menor',
  INFO: 'Info',
};

const TYPE_LABELS = {
  BUG: 'Bug',
  VULNERABILITY: 'Vulnerabilidad',
  CODE_SMELL: 'Code smell',
  SECURITY_HOTSPOT: 'Security hotspot',
};

const STATUS_LABELS = {
  OPEN: 'Abierto',
  CONFIRMED: 'Confirmado',
  REOPENED: 'Reabierto',
  RESOLVED: 'Resuelto',
  CLOSED: 'Cerrado',
};

const FILE_METRIC_KEYS = ['ncloc', 'bugs', 'vulnerabilities', 'code_smells', 'coverage', 'duplicated_lines_density'];

export function readProjectKey() {
  const fromEnv = process.env.SONAR_PROJECT_KEY?.trim();
  if (fromEnv) {
    return fromEnv;
  }

  const content = readFileSync(sonarPropsPath, 'utf8');
  const match = content.match(/^sonar\.projectKey=(.+)$/m);
  return match?.[1]?.trim() ?? 'eventflow-asistido-ai';
}

export function readProjectName() {
  const content = readFileSync(sonarPropsPath, 'utf8');
  const match = content.match(/^sonar\.projectName=(.+)$/m);
  return match?.[1]?.trim() ?? readProjectKey();
}

export function getGitBranch() {
  const result = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], {
    cwd: root,
    encoding: 'utf8',
  });
  const branch = result.stdout?.trim();
  return branch && result.status === 0 ? branch : 'desconocida';
}

function formatRating(value) {
  if (value == null || value === '') return '—';
  const label = RATING_LABELS[Number(value).toFixed(1)];
  return label ? `${label} (${value})` : String(value);
}

function formatMetricValue(key, value) {
  if (value == null || value === '') return '—';
  if (key === 'alert_status') return value === 'OK' ? '✅ OK' : value === 'ERROR' ? '❌ ERROR' : value;
  if (key.endsWith('_rating')) return formatRating(value);
  if (key === 'coverage' || key === 'duplicated_lines_density') {
    const num = Number(value);
    return Number.isFinite(num) ? num.toFixed(1) : value;
  }
  return value;
}

function parseMeasuresPayload(data) {
  const measures = {};
  for (const measure of data?.component?.measures ?? []) {
    measures[measure.metric] = measure.value ?? measure.periods?.[0]?.value;
  }
  return measures;
}

async function fetchJson(url, token) {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${response.status} ${response.statusText}: ${body.slice(0, 200)}`);
  }

  return response.json();
}

async function fetchAllPages(baseUrl, token, pageSize = 500) {
  const items = [];
  let page = 1;
  let total = Infinity;

  while (items.length < total) {
    const separator = baseUrl.includes('?') ? '&' : '?';
    const url = `${baseUrl}${separator}p=${page}&ps=${pageSize}`;
    const data = await fetchJson(url, token);
    const batch = data.issues ?? data.components ?? [];
    items.push(...batch);
    total = data.paging?.total ?? batch.length;
    if (batch.length === 0) break;
    page += 1;
  }

  return items;
}

function normalizeSonarPath(componentKey, projectKey) {
  const prefix = `${projectKey}:`;
  if (componentKey.startsWith(prefix)) return componentKey.slice(prefix.length);
  return componentKey;
}

function escapeMarkdownCell(value) {
  return String(value ?? '—').replace(/\|/g, '\\|').replace(/\n/g, ' ').trim();
}

function truncate(value, max = 100) {
  const text = String(value ?? '');
  return text.length <= max ? text : `${text.slice(0, max - 1)}…`;
}

function parseFileMeasures(component) {
  const measures = {};
  for (const measure of component?.measures ?? []) {
    measures[measure.metric] = measure.value ?? measure.periods?.[0]?.value;
  }
  return measures;
}

export async function fetchSonarIssues(hostUrl, token, projectKey) {
  const base = hostUrl.replace(/\/$/, '');
  const url = `${base}/api/issues/search?projectKeys=${encodeURIComponent(projectKey)}&resolved=false`;
  const issues = await fetchAllPages(url, token);
  return issues.map((issue) => ({
    path: normalizeSonarPath(issue.component, projectKey),
    severity: issue.severity ?? 'INFO',
    type: issue.type ?? 'CODE_SMELL',
    status: issue.status ?? 'OPEN',
    line: issue.line ?? issue.textRange?.startLine ?? '—',
    rule: issue.rule ?? '—',
    message: issue.message ?? '',
    key: issue.key,
  }));
}

export async function fetchSonarFileMetrics(hostUrl, token, projectKey) {
  const base = hostUrl.replace(/\/$/, '');
  const metricKeys = FILE_METRIC_KEYS.join(',');
  const url = `${base}/api/measures/component?component=${encodeURIComponent(projectKey)}&metricKeys=${metricKeys}&qualifiers=FIL`;
  const components = await fetchAllPages(url, token);

  return components.map((component) => ({
    path: component.path ?? normalizeSonarPath(component.key, projectKey),
    measures: parseFileMeasures(component),
  }));
}

export function buildFindingsTable(issues) {
  if (issues.length === 0) {
    return '_Sin hallazgos abiertos en esta ejecución._';
  }

  const sorted = [...issues].sort((a, b) => {
    const severityDiff = SEVERITY_ORDER.indexOf(a.severity) - SEVERITY_ORDER.indexOf(b.severity);
    if (severityDiff !== 0) return severityDiff;
    return a.path.localeCompare(b.path);
  });

  const rows = sorted.map((issue) => {
    const nivel = SEVERITY_LABELS[issue.severity] ?? issue.severity;
    const tipo = TYPE_LABELS[issue.type] ?? issue.type;
    const status = STATUS_LABELS[issue.status] ?? issue.status;
    return `| \`${escapeMarkdownCell(issue.path)}\` | ${nivel} | ${tipo} | ${status} | ${issue.line} | \`${escapeMarkdownCell(issue.rule)}\` | ${escapeMarkdownCell(truncate(issue.message))} |`;
  });

  return [
    '| Ruta | Nivel | Tipo | Status | Línea | Regla | Mensaje |',
    '|------|-------|------|--------|-------|-------|---------|',
    ...rows,
  ].join('\n');
}

export function buildFilesInventoryTable(fileMetrics, issues) {
  const issuesByPath = new Map();
  for (const issue of issues) {
    if (!issuesByPath.has(issue.path)) issuesByPath.set(issue.path, []);
    issuesByPath.get(issue.path).push(issue);
  }

  const paths = new Set([
    ...fileMetrics.map((file) => file.path),
    ...issues.map((issue) => issue.path),
  ]);

  if (paths.size === 0) {
    return '_Inventario de archivos no disponible._';
  }

  const metricsByPath = new Map(fileMetrics.map((file) => [file.path, file.measures]));

  const rows = [...paths]
    .sort((a, b) => a.localeCompare(b))
    .map((path) => {
      const fileIssues = issuesByPath.get(path) ?? [];
      const measures = metricsByPath.get(path) ?? {};
      const highestSeverity = fileIssues.reduce((best, issue) => {
        const rank = SEVERITY_ORDER.indexOf(issue.severity);
        return rank >= 0 && rank < SEVERITY_ORDER.indexOf(best) ? issue.severity : best;
      }, 'INFO');
      const status =
        fileIssues.length === 0
          ? '✅ OK'
          : highestSeverity === 'BLOCKER' || highestSeverity === 'CRITICAL'
            ? '❌ Crítico'
            : '⚠️ Con hallazgos';
      const nivel =
        fileIssues.length === 0
          ? '—'
          : SEVERITY_LABELS[highestSeverity] ?? highestSeverity;
      const tipos = [...new Set(fileIssues.map((i) => TYPE_LABELS[i.type] ?? i.type))].join(', ') || '—';

      return `| \`${escapeMarkdownCell(path)}\` | ${nivel} | ${tipos} | ${status} | ${measures.ncloc ?? '—'} | ${measures.bugs ?? '0'} | ${measures.vulnerabilities ?? '0'} | ${measures.code_smells ?? '0'} | ${measures.coverage != null ? Number(measures.coverage).toFixed(1) : '—'} | ${fileIssues.length} |`;
    });

  return [
    '| Ruta | Nivel máx. | Tipos | Status | ncloc | Bugs | Vuln. | Smells | Cobertura % | Hallazgos |',
    '|------|------------|-------|--------|-------|------|-------|--------|-------------|-----------|',
    ...rows,
  ].join('\n');
}

export function buildFileDetailSummary(issues, fileMetrics) {
  const filesWithIssues = new Set(issues.map((i) => i.path)).size;
  const totalFiles = new Set([...fileMetrics.map((f) => f.path), ...issues.map((i) => i.path)]).size;
  const cleanFiles = totalFiles - filesWithIssues;

  const bySeverity = SEVERITY_ORDER.reduce((acc, severity) => {
    acc[severity] = issues.filter((i) => i.severity === severity).length;
    return acc;
  }, {});

  const byType = Object.keys(TYPE_LABELS).reduce((acc, type) => {
    acc[type] = issues.filter((i) => i.type === type).length;
    return acc;
  }, {});

  const severityParts = SEVERITY_ORDER.filter((s) => bySeverity[s] > 0).map(
    (s) => `${SEVERITY_LABELS[s]}: ${bySeverity[s]}`,
  );
  const typeParts = Object.entries(byType)
    .filter(([, count]) => count > 0)
    .map(([type, count]) => `${TYPE_LABELS[type]}: ${count}`);

  return [
    `**Archivos analizados:** ${totalFiles} · **Sin hallazgos:** ${cleanFiles} · **Con hallazgos:** ${filesWithIssues} · **Issues abiertos:** ${issues.length}`,
    severityParts.length > 0 ? `**Por nivel:** ${severityParts.join(' · ')}` : '',
    typeParts.length > 0 ? `**Por tipo:** ${typeParts.join(' · ')}` : '',
  ]
    .filter(Boolean)
    .join('\n\n');
}

export async function fetchSonarSnapshot(hostUrl, token, projectKey) {
  const base = hostUrl.replace(/\/$/, '');
  const metricKeys = METRIC_KEYS.join(',');

  const [measuresData, qualityGateData, issues, fileMetrics] = await Promise.all([
    fetchJson(
      `${base}/api/measures/component?component=${encodeURIComponent(projectKey)}&metricKeys=${metricKeys}`,
      token,
    ),
    fetchJson(
      `${base}/api/qualitygates/project_status?projectKey=${encodeURIComponent(projectKey)}`,
      token,
    ),
    fetchSonarIssues(hostUrl, token, projectKey),
    fetchSonarFileMetrics(hostUrl, token, projectKey),
  ]);

  return {
    measures: parseMeasuresPayload(measuresData),
    qualityGate: qualityGateData?.projectStatus ?? null,
    issues,
    fileMetrics,
  };
}

function formatQualityGateSummary(qualityGate) {
  if (!qualityGate) return 'Quality Gate: no disponible';

  const status = qualityGate.status ?? 'UNKNOWN';
  const failed = (qualityGate.conditions ?? []).filter((c) => c.status !== 'OK');

  if (failed.length === 0) {
    return `Quality Gate **${status}** — todas las condiciones cumplidas.`;
  }

  const details = failed
    .map((c) => `${c.metricKey ?? c.measureKey}: ${c.actualValue ?? '?'} (umbral: ${c.errorThreshold ?? c.comparator ?? '—'})`)
    .join('; ');

  return `Quality Gate **${status}** — condiciones incumplidas: ${details}.`;
}

export function buildScanSummary(scanExitCode, snapshotError, qualityGate) {
  const parts = [];

  if (scanExitCode !== 0) {
    parts.push('El scanner `@sonar/scan` terminó con código distinto de cero.');
  } else {
    parts.push('Análisis subido correctamente a SonarQube/SonarCloud.');
  }

  if (snapshotError) {
    parts.push(`No se pudieron consultar métricas vía API: ${snapshotError}`);
  } else {
    parts.push(formatQualityGateSummary(qualityGate));
  }

  return parts.join(' ');
}

export function buildAnalysis(measures, qualityGate, scanExitCode, issues = []) {
  if (scanExitCode !== 0) {
    return 'El scan falló antes de completar el análisis. Revisa la salida de consola, el token (`SONAR_TOKEN`), la URL (`SONAR_HOST_URL`) y que el proyecto exista en el servidor Sonar con el `projectKey` configurado.';
  }

  const notes = [];
  const coverage = Number(measures.coverage);
  const bugs = Number(measures.bugs) || 0;
  const vulnerabilities = Number(measures.vulnerabilities) || 0;
  const codeSmells = Number(measures.code_smells) || 0;
  const duplication = Number(measures.duplicated_lines_density);
  const ncloc = Number(measures.ncloc) || 0;

  if (Number.isFinite(coverage)) {
    if (coverage >= 80) {
      notes.push(
        `La cobertura (${coverage.toFixed(1)} %) alcanza el umbral del 80 % definido en \`angular.json\`, lo que indica tests suficientes para el código analizado.`,
      );
    } else if (coverage > 0) {
      notes.push(
        `La cobertura (${coverage.toFixed(1)} %) está por debajo del 80 % exigido localmente; Sonar refleja líneas sin ejecutar en Vitest. Ejecuta \`pnpm quality:coverage\` antes del scan.`,
      );
    } else {
      notes.push(
        'Cobertura en 0 %: normalmente significa que no se generó \`coverage/eventflow-asistido-ai/lcov.info\` antes del análisis o que las exclusiones de Sonar no incluyen esos archivos.',
      );
    }
  }

  if (bugs > 0) {
    notes.push(`${bugs} bug(s) abiertos: reglas de fiabilidad detectaron comportamientos potencialmente incorrectos.`);
  }

  if (vulnerabilities > 0) {
    notes.push(`${vulnerabilities} vulnerabilidad(es): revisar issues de seguridad con prioridad.`);
  }

  if (codeSmells > 0) {
    notes.push(
      `${codeSmells} code smell(s): deuda de mantenibilidad acumulada; no bloquean por sí solos pero elevan el costo de cambio.`,
    );
  }

  if (Number.isFinite(duplication) && duplication > 3) {
    notes.push(`Duplicación ${duplication.toFixed(1)} %: hay bloques repetidos que conviene extraer a utilidades o componentes compartidos.`);
  }

  if (qualityGate?.status === 'ERROR') {
    const failed = (qualityGate.conditions ?? []).filter((c) => c.status !== 'OK');
    if (failed.length > 0) {
      notes.push(
        `El Quality Gate falló por: ${failed.map((c) => c.metricKey ?? c.measureKey).join(', ')}. Ajusta código, tests o umbrales en Sonar según corresponda.`,
      );
    }
  } else if (qualityGate?.status === 'OK') {
    notes.push('El Quality Gate pasó: las métricas cumplen los umbrales configurados en el servidor Sonar.');
  }

  if (issues.length > 0) {
    const affectedFiles = new Set(issues.map((i) => i.path)).size;
    notes.push(
      `${issues.length} hallazgo(s) abierto(s) en ${affectedFiles} archivo(s); revisa la tabla de detalle en esta entrada.`,
    );
  }

  if (ncloc > 0 && notes.length === 0) {
    notes.push(`Base de código analizada: ~${ncloc} líneas (ncloc). Métricas sin alertas destacables en esta ejecución.`);
  }

  return notes.length > 0 ? notes.join(' ') : 'Sin datos suficientes para un análisis detallado; verifica conectividad con la API de Sonar.';
}

function buildMetricsTable(measures) {
  const rows = METRIC_KEYS.map((key) => {
    const value = formatMetricValue(key, measures[key]);
    return `| ${METRIC_LABELS[key]} | ${value} |`;
  });

  return ['| Métrica | Valor |', '|---------|-------|', ...rows].join('\n');
}

function getNextEntryNumber(content) {
  const matches = [...content.matchAll(/## Entrada #(\d+)/g)];
  if (matches.length === 0) return 1;
  return Math.max(...matches.map((m) => Number(m[1]))) + 1;
}

function ensureBitacoraHeader() {
  mkdirSync(qualityDir, { recursive: true });

  if (!existsSync(bitacoraPath)) {
    const header = `# Bitácora de calidad — Sonar

Registro automático de cada ejecución de \`pnpm sonar\` (y del paso Sonar dentro de \`pnpm quality\`).

> **Persistencia:** este archivo y la regla \`.cursor/rules/quality-bitacora.mdc\` viven en el repo. Tras \`git clone\` / \`git pull\`, cada scan sigue appendiendo entradas.

| Campo | Descripción |
|-------|-------------|
| Fecha y hora | Momento local de la ejecución |
| Rama | \`git rev-parse --abbrev-ref HEAD\` |
| Resumen del scan | Resultado del CLI + Quality Gate |
| Status del scan | \`OK\` / \`ERROR\` según exit code y gate |
| Métricas overall | Tabla desde API Sonar |
| Detalle de archivos | Hallazgos (ruta, nivel, tipo, status) + inventario por archivo |
| Análisis | Interpretación automática de las métricas |

---

`;
    appendFileSync(bitacoraPath, header, 'utf8');
  }
}

function resolveScanStatus(scanExitCode, qualityGate) {
  if (scanExitCode !== 0) return 'ERROR';
  if (qualityGate?.status === 'ERROR') return 'ERROR';
  if (qualityGate?.status === 'WARN') return 'WARN';
  return 'OK';
}

export async function appendBitacoraEntry({
  scanExitCode,
  hostUrl,
  token,
  startedAt,
  finishedAt,
}) {
  ensureBitacoraHeader();

  const projectKey = readProjectKey();
  const projectName = readProjectName();
  const branch = getGitBranch();
  const existing = readFileSync(bitacoraPath, 'utf8');
  const entryNumber = getNextEntryNumber(existing);

  let measures = {};
  let qualityGate = null;
  let issues = [];
  let fileMetrics = [];
  let snapshotError = null;

  if (token && hostUrl) {
    try {
      const snapshot = await fetchSonarSnapshot(hostUrl, token, projectKey);
      measures = snapshot.measures;
      qualityGate = snapshot.qualityGate;
      issues = snapshot.issues;
      fileMetrics = snapshot.fileMetrics;
    } catch (error) {
      snapshotError = error instanceof Error ? error.message : String(error);
    }
  } else {
    snapshotError = 'Faltan SONAR_HOST_URL o SONAR_TOKEN para consultar métricas.';
  }

  const scanStatus = resolveScanStatus(scanExitCode, qualityGate);
  const summary = buildScanSummary(scanExitCode, snapshotError, qualityGate);
  const analysis = buildAnalysis(measures, qualityGate, scanExitCode, issues);
  const metricsTable = snapshotError
    ? `_Métricas no disponibles (${snapshotError})._`
    : buildMetricsTable(measures);
  const fileDetailSummary = snapshotError
    ? `_Detalle de archivos no disponible (${snapshotError})._`
    : buildFileDetailSummary(issues, fileMetrics);
  const findingsTable = snapshotError
    ? `_Hallazgos no disponibles (${snapshotError})._`
    : buildFindingsTable(issues);
  const filesInventoryTable = snapshotError
    ? `_Inventario no disponible (${snapshotError})._`
    : buildFilesInventoryTable(fileMetrics, issues);

  const entry = `
## Entrada #${String(entryNumber).padStart(3, '0')} — Scan Sonar

| Campo | Valor |
|-------|-------|
| **Fecha y hora de ejecución** | ${finishedAt} |
| **Inicio** | ${startedAt} |
| **Rama** | \`${branch}\` |
| **Proyecto** | ${projectName} (\`${projectKey}\`) |
| **Status del scan** | **${scanStatus}** |
| **Exit code scanner** | ${scanExitCode} |

### Resumen del scan

${summary}

### Métricas overall (código)

${metricsTable}

### Detalle de archivos

${fileDetailSummary}

#### Hallazgos abiertos

${findingsTable}

#### Inventario por archivo

${filesInventoryTable}

### Análisis

${analysis}

---

`;

  appendFileSync(bitacoraPath, entry, 'utf8');
  console.log(`\n📝 Bitácora actualizada: .quality/bitacora.md (entrada #${String(entryNumber).padStart(3, '0')})\n`);
}

export function formatTimestamp(date = new Date()) {
  const pad = (n) => String(n).padStart(2, '0');
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? '+' : '-';
  const abs = Math.abs(offset);
  const tz = `${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`;
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())} UTC${tz}`;
}
