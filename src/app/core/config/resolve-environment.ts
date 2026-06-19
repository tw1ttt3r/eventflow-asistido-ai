import type { Environment } from '../../../environments/environment.model';

import { ENV_FIELD_REGISTRY } from './env.registry';
import { getValueByPath, readNgAppVar, readNgAppVars, setValueByPath, type NgAppVars } from './env-vars';

/**
 * Completa el environment estático con valores de `.env` (`NG_APP_*`).
 * Cada variable debe estar registrada en `env.registry.ts` para mapear a un campo de `Environment`.
 */
export function resolveEnvironment(base: Environment, vars: NgAppVars = readNgAppVars()): Environment {
  const resolved: Environment = {
    ...base,
    appwrite: { ...base.appwrite },
   };

  for (const [envKey, { path }] of Object.entries(ENV_FIELD_REGISTRY)) {
    const value = readNgAppVar(vars[envKey], '');
    if (value) {
      setValueByPath(resolved, path, value);
    }
  }

  return resolved;
}

export function readEnvField(env: Environment, envKey: keyof typeof ENV_FIELD_REGISTRY): string {
  const path = ENV_FIELD_REGISTRY[envKey].path;
  return getValueByPath(env, path) ?? '';
}
