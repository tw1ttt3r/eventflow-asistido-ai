import { Client } from 'appwrite';

import type { AppwriteConfig } from '@core/appwrite/appwrite.config';

export function createAppwriteClient(config: AppwriteConfig): Client {
  return new Client().setEndpoint(config.endpoint).setProject(config.projectId);
}
