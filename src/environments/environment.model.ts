export interface Environment {
  production: boolean;
  apiUrl: string;
  appName: string;
  apiKey: string;
  version: string;
  appwrite: {
    endpoint: string;
    projectId: string;
    projectName: string;
  };
  /** Solo desarrollo: sesión mock (`user-1`) alineada con mocks de eventos. */
  mockSessionUser?: boolean;
  /** Solo desarrollo: Sonar no aplica en producción. */
  sonar?: {
    hostUrl: string;
    projectKey: string;
  };
}
