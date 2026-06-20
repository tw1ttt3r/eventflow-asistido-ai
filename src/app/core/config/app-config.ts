import { InjectionToken } from '@angular/core';

import { environment } from '../../../environments/environment';
import type { Environment } from '../../../environments/environment.model';
import { resolveEnvironment } from './resolve-environment';

export const APP_CONFIG = new InjectionToken<Environment>('APP_CONFIG');

export function createAppConfig(): Environment {
  return resolveEnvironment(environment);
}
