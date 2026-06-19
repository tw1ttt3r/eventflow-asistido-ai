import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const envExamplePath = resolve(root, '.env.example');
const envDtsPath = resolve(root, 'src/env.d.ts');
const registryPath = resolve(root, 'src/app/core/config/env.registry.ts');

const registrySource = readFileSync(registryPath, 'utf8');
const registryKeys = [...registrySource.matchAll(/^\s+(NG_APP_[A-Z0-9_]+):/gm)].map((match) => match[1]);

const envDts = `/**
 * Variables \`NG_APP_*\` inyectadas como JSON desde \`scripts/with-env.mjs\`.
 * Generado por \`pnpm env:sync\` — no editar a mano salvo el encabezado.
 */
declare const NG_APP_VARS: Readonly<Record<string, string>>;
`;

writeFileSync(envDtsPath, envDts, 'utf8');

let envExample = readFileSync(envExamplePath, 'utf8');
const missingKeys = registryKeys.filter((key) => !envExample.includes(`${key}=`));

for (const key of missingKeys) {
  const entry = registrySource.match(new RegExp(`${key}:\\s*\\{[^}]*description:\\s*'([^']*)'`));
  const description = entry?.[1] ?? 'Variable de entorno';
  envExample += `\n# ${description}\n${key}=\n`;
}

if (missingKeys.length > 0) {
  writeFileSync(envExamplePath, envExample, 'utf8');
}

console.log(`✓ env.d.ts actualizado`);
if (missingKeys.length > 0) {
  console.log(`✓ Añadidas a .env.example: ${missingKeys.join(', ')}`);
} else {
  console.log('✓ .env.example ya contiene todas las claves del registro');
}
