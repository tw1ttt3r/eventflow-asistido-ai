import { InjectionToken } from '@angular/core';

import { environment } from '../../../environments/environment';
import type { Environment } from '../../../environments/environment.model';
import { loadSecrets, type AppSecrets } from './secrets';

export interface AppConfig {
  env: Environment;
  secrets: AppSecrets;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

export function createAppConfig(): AppConfig {
  return {
    env: environment,
    secrets: loadSecrets(),
  };
}
