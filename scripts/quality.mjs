import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import { config } from 'dotenv';

const root = resolve(import.meta.dirname, '..');
const envFile = process.env['ENV_FILE'] ?? '.env';
const envPath = resolve(root, envFile);

if (existsSync(envPath)) {
  config({ path: envPath });
} else {
  console.warn(`No se encontró ${envFile}. Usa variables de entorno del sistema.`);
}

if (!process.env['SONAR_TOKEN']) {
  console.error(
    [
      'Falta SONAR_TOKEN.',
      '1. Copia .env.example → .env',
    '2. Genera un token en SonarQube (My Account → Security) o en tu instancia SonarQube.',
      '3. Define SONAR_HOST_URL y SONAR_TOKEN en .env',
    ].join('\n'),
  );
  process.exit(1);
}

if (!process.env['SONAR_HOST_URL']) {
  process.env['SONAR_HOST_URL'] = 'http://localhost:9000/';
  console.log('SONAR_HOST_URL no definido; usando http://localhost:9000/');
}

function run(command, args, label) {
  console.log(`\n▶ ${label}\n`);
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
    shell: process.platform === 'win32',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run('pnpm', ['test:coverage'], 'Paso 1/2 — tests con cobertura (Vitest + lcov)');
run('pnpm', ['sonar'], 'Paso 2/2 — análisis Sonar');

console.log('\n✓ Pipeline de calidad completado\n');
