import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { config } from 'dotenv';

const root = resolve(import.meta.dirname, '..');
const envFile = process.env['ENV_FILE'] ?? '.env';

if (existsSync(resolve(root, envFile))) {
  config({ path: resolve(root, envFile) });
}

const ngAppVars = {};
for (const [key, value] of Object.entries(process.env)) {
  if (!key.startsWith('NG_APP_') || value === undefined) {
    continue;
  }
  ngAppVars[key] = value;
}

const defineArgs = [`--define`, `NG_APP_VARS=${JSON.stringify(ngAppVars)}`];

const ngArgs = process.argv.slice(2);
if (ngArgs.length === 0) {
  console.error('Usage: node scripts/with-env.mjs <ng-command> [ng-options...]');
  process.exit(1);
}

const result = spawnSync('ng', [...ngArgs, ...defineArgs], {
  cwd: root,
  stdio: 'inherit',
  env: process.env,
});

process.exit(result.status ?? 1);
