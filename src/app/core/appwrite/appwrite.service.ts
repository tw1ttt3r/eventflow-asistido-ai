import { inject, Injectable } from '@angular/core';
import { Account } from 'appwrite';

import { isAppwriteConfigured, type AppwriteConfig } from './appwrite.config';
import { APPWRITE_CLIENT, APPWRITE_CONFIG } from './appwrite.tokens';

@Injectable({ providedIn: 'root' })
export class AppwriteService {
  private readonly client = inject(APPWRITE_CLIENT);
  private readonly config = inject(APPWRITE_CONFIG);

  readonly account = new Account(this.client);

  get configuration(): AppwriteConfig {
    return this.config;
  }

  isConfigured(): boolean {
    return isAppwriteConfigured(this.config);
  }

  async ping(): Promise<unknown> {
    if (!this.isConfigured()) {
      throw new Error(
        'Appwrite no configurado: define NG_APP_APPWRITE_ENDPOINT y NG_APP_APPWRITE_PROJECT_ID en .env',
      );
    }

    return this.client.ping();
  }
}
