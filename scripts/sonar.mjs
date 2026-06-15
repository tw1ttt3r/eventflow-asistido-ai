import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import { config } from 'dotenv';

import { appendBitacoraEntry, formatTimestamp } from './sonar-bitacora.mjs';

const root = resolve(import.meta.dirname, '..');
const envPath = resolve(root, process.env.ENV_FILE ?? '.env');

if (existsSync(envPath)) {
  config({ path: envPath });
}

const sonarHostUrl = process.env.SONAR_HOST_URL ?? 'http://localhost:9000';
const sonarToken = process.env.SONAR_TOKEN;

if (!sonarToken) {
  console.error('Falta SONAR_TOKEN en .env');
  process.exit(1);
}

const startedAt = formatTimestamp();

const result = spawnSync(
  'sonar',
  [
    `-Dsonar.host.url=${sonarHostUrl}`,
    `-Dsonar.token=${sonarToken}`,
    '-Dproject.settings=sonar-project.properties',
    `-Dsonar.projectVersion=${process.env.npm_package_version ?? '0.0.0'}`,
  ],
  {
    cwd: root,
    stdio: 'inherit',
    env: {
      ...process.env,
      SONAR_HOST_URL: sonarHostUrl,
      SONAR_TOKEN: sonarToken,
    },
    shell: process.platform === 'win32',
  },
);

const exitCode = result.status ?? 1;
const finishedAt = formatTimestamp();

try {
  await appendBitacoraEntry({
    scanExitCode: exitCode,
    hostUrl: sonarHostUrl,
    token: sonarToken,
    startedAt,
    finishedAt,
  });
} catch (error) {
  console.warn(
    'No se pudo actualizar .quality/bitacora.md:',
    error instanceof Error ? error.message : error,
  );
}

process.exit(exitCode);
