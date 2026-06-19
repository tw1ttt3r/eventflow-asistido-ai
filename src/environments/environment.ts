import type { Environment } from './environment.model';
import { APP_VERSION } from '../version';

export const environment: Environment = {
  production: true,
  apiUrl: '',
  appName: '',
  version: APP_VERSION,





  apiKey: '',

  appwrite: {
    endpoint: '',
    projectId: '',
    projectName: '',
  },
};
