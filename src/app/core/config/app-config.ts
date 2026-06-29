import { InjectionToken } from '@angular/core';

import { environment } from '@env/environment';
import type { Environment } from '@env/environment.model';
import { resolveEnvironment } from '@core/config/resolve-environment';

export const APP_CONFIG = new InjectionToken<Environment>('APP_CONFIG');

export function createAppConfig(): Environment {
  return resolveEnvironment(environment);
}
