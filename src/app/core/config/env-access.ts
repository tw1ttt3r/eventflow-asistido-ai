import { inject } from '@angular/core';

import { APP_CONFIG } from './app-config';
import type { RegistryEnvKey } from './env.registry';
import { readEnvField } from './resolve-environment';

/** Lee un campo de `Environment` por su clave `NG_APP_*` del registro. */
export function injectEnvVar(key: RegistryEnvKey, fallback = ''): string {
  const env = inject(APP_CONFIG);
  return readEnvField(env, key) || fallback;
}
