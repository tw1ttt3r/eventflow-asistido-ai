import type { Environment } from '@env/environment.model';

export interface AppwriteConfig {
  endpoint: string;
  projectId: string;
  projectName: string;
}

export function resolveAppwriteConfig(env: Environment): AppwriteConfig {
  return { ...env.appwrite };
}

export function isAppwriteConfigured(config: AppwriteConfig): boolean {
  return Boolean(config.endpoint && config.projectId);
}
