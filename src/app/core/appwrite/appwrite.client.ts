import { Client } from 'appwrite';

import type { AppwriteConfig } from './appwrite.config';

export function createAppwriteClient(config: AppwriteConfig): Client {
  return new Client().setEndpoint(config.endpoint).setProject(config.projectId);
}
