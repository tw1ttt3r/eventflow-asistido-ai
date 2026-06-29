import type { Environment } from '@env/environment.model';

import { ENV_FIELD_REGISTRY } from '@core/config/env.registry';
import {
  getValueByPath,
  parseEnvBoolean,
  readNgAppVar,
  readNgAppVars,
  setValueByPath,
  type NgAppVars,
} from '@core/config/env-vars';

const SONAR_PATH_PREFIX = 'sonar.';

export interface ResolveEnvironmentOptions {
  /** Solo tests: simula `APP_PRODUCTION` inyectado por `with-env.mjs`. */
  production?: boolean;
}

function isSonarPath(path: string): boolean {
  return path.startsWith(SONAR_PATH_PREFIX);
}

function readAppProduction(fallback: boolean): boolean {
  if (typeof APP_PRODUCTION !== 'undefined') {
    return parseEnvBoolean(APP_PRODUCTION, fallback);
  }

  return fallback;
}

/**
 * Completa el environment estático con valores de `.env` (`NG_APP_*`).
 * `production` se deriva del comando (`APP_PRODUCTION` vía `with-env.mjs`); Sonar solo en desarrollo.
 */
export function resolveEnvironment(
  base: Environment,
  vars: NgAppVars = readNgAppVars(),
  options?: ResolveEnvironmentOptions,
): Environment {
  const production = options?.production ?? readAppProduction(base.production);

  const resolved: Environment = {
    ...base,
    production,
    appwrite: { ...base.appwrite },
  };

  if (!production) {
    resolved.sonar = { ...(base.sonar ?? { hostUrl: '', projectKey: '' }) };
  }

  for (const [envKey, { path }] of Object.entries(ENV_FIELD_REGISTRY)) {
    if (production && isSonarPath(path)) {
      continue;
    }

    const value = readNgAppVar(vars[envKey], '');
    if (value) {
      setValueByPath(resolved, path, value);
    }
  }

  if (production) {
    delete resolved.sonar;
  }

  return resolved;
}

export function readEnvField(env: Environment, envKey: keyof typeof ENV_FIELD_REGISTRY): string {
  const path = ENV_FIELD_REGISTRY[envKey].path;

  if (env.production && isSonarPath(path)) {
    return '';
  }

  return getValueByPath(env, path) ?? '';
}
