import { inject, Injectable } from '@angular/core';
import { ID, type Models } from 'appwrite';

import { isAppwriteConfigured } from '@core/appwrite/appwrite.config';
import { APPWRITE_CONFIG } from '@core/appwrite/appwrite.tokens';
import { AppwriteService } from '@core/appwrite/appwrite.service';

export interface RegisterWithEmailParams {
  name: string;
  email: string;
  password: string;
}

export interface LoginWithEmailParams {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AppwriteAuthService {
  private readonly appwrite = inject(AppwriteService);
  private readonly config = inject(APPWRITE_CONFIG);

  isConfigured(): boolean {
    return isAppwriteConfigured(this.config);
  }

  async registerWithEmail(params: RegisterWithEmailParams): Promise<Models.User<Models.Preferences>> {
    this.assertConfigured();

    await this.appwrite.account.create({
      userId: ID.unique(),
      email: params.email.trim(),
      password: params.password,
      name: params.name.trim(),
    });

    await this.appwrite.account.createEmailPasswordSession({
      email: params.email.trim(),
      password: params.password,
    });

    return this.appwrite.account.get();
  }

  async loginWithEmail(params: LoginWithEmailParams): Promise<Models.User<Models.Preferences>> {
    this.assertConfigured();

    await this.appwrite.account.createEmailPasswordSession({
      email: params.email.trim(),
      password: params.password,
    });

    return this.appwrite.account.get();
  }

  async getCurrentUser(): Promise<Models.User<Models.Preferences> | null> {
    if (!this.isConfigured()) {
      return null;
    }

    try {
      return await this.appwrite.account.get();
    } catch {
      return null;
    }
  }

  async logout(): Promise<void> {
    if (!this.isConfigured()) {
      return;
    }

    try {
      await this.appwrite.account.deleteSession({ sessionId: 'current' });
    } catch {
      // Sin sesión activa
    }
  }

  private assertConfigured(): void {
    if (!this.isConfigured()) {
      throw new Error(
        'Appwrite no configurado: define NG_APP_APPWRITE_ENDPOINT y NG_APP_APPWRITE_PROJECT_ID en .env',
      );
    }
  }
}
