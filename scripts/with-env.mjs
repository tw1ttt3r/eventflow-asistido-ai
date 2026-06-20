import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import { config } from 'dotenv';

import {
  applyEnvToNgAppAliases,
  isProductionNgCommand,
  stripSonarFromNgAppVars,
} from './env-aliases.mjs';

const root = resolve(import.meta.dirname, '..');
const envFile = process.env['ENV_FILE'] ?? '.env';

if (existsSync(resolve(root, envFile))) {
  config({ path: resolve(root, envFile) });
}

const ngArgs = process.argv.slice(2);
if (ngArgs.length === 0) {
  console.error('Usage: node scripts/with-env.mjs <ng-command> [ng-options...]');
  process.exit(1);
}

const productionBuild = isProductionNgCommand(ngArgs);

const ngAppVars = {};
for (const [key, value] of Object.entries(process.env)) {
  if (!key.startsWith('NG_APP_') || value === undefined) {
    continue;
  }
  ngAppVars[key] = value;
}

// `production` no es variable de usuario: se deriva del comando ng (serve vs build).
delete ngAppVars.NG_APP_PRODUCTION;

if (productionBuild) {
  stripSonarFromNgAppVars(ngAppVars);
} else {
  applyEnvToNgAppAliases(ngAppVars);
}

const appProduction = productionBuild ? 'true' : 'false';
const defineArgs = [
  `--define`,
  `NG_APP_VARS=${JSON.stringify(ngAppVars)}`,
  `--define`,
  `APP_PRODUCTION=${JSON.stringify(appProduction)}`,
];

const result = spawnSync('ng', [...ngArgs, ...defineArgs], {
  cwd: root,
  stdio: 'inherit',
  env: process.env,
});

process.exit(result.status ?? 1);
