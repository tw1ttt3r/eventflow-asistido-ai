export interface AppSecrets {
  apiKey: string | null;
}

export function loadSecrets(): AppSecrets {
  return {
    apiKey: typeof NG_APP_API_KEY !== 'undefined' ? NG_APP_API_KEY : null,
  };
}
