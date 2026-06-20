import type { Environment } from './environment.model';
import { APP_VERSION } from '../version';

export const environment: Environment = {
  production: false,
  apiUrl: '',
  appName: '',
  version: APP_VERSION,











  apiKey: '',

  appwrite: {
    endpoint: '',
    projectId: '',
    projectName: '',
  },
  sonar: {
    hostUrl: '',
    projectKey: '',
  },
};
