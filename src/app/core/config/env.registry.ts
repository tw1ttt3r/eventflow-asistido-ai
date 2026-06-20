/**
 * Registro único de variables `NG_APP_*` → campos de `Environment`.
 * Toda variable nueva en `.env` debe registrarse aquí para usarse en la app.
 */
export const ENV_FIELD_REGISTRY = {
  NG_APP_API_URL: {
    path: 'apiUrl',
    description: 'URL base de la API',
  },
  NG_APP_APP_NAME: {
    path: 'appName',
    description: 'Nombre visible de la aplicación',
  },
  NG_APP_API_KEY: {
    path: 'apiKey',
    description: 'API key local (build-time)',
  },
  NG_APP_APPWRITE_ENDPOINT: {
    path: 'appwrite.endpoint',
    description: 'Endpoint de Appwrite',
  },
  NG_APP_APPWRITE_PROJECT_ID: {
    path: 'appwrite.projectId',
    description: 'Project ID de Appwrite',
  },
  NG_APP_APPWRITE_PROJECT_NAME: {
    path: 'appwrite.projectName',
    description: 'Nombre del proyecto en Appwrite',
  },
  NG_APP_SONAR_HOST_URL: {
    path: 'sonar.hostUrl',
    description: 'URL del servidor SonarQube/SonarCloud (solo desarrollo)',
  },
  NG_APP_SONAR_PROJECT_KEY: {
    path: 'sonar.projectKey',
    description: 'Project key de Sonar (solo desarrollo)',
  },
} as const satisfies Record<string, { path: string; description: string }>;

export type RegistryEnvKey = keyof typeof ENV_FIELD_REGISTRY;
