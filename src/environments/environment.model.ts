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
}
