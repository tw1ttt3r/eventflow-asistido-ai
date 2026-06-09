import type { Environment } from './environment.model';
import { APP_VERSION } from '../version';

export const environment: Environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  appName: 'Eventflow Asistido (dev)',
  version: APP_VERSION,



};
