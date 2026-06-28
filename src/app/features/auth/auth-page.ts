import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { toAuthErrorMessage } from '../../core/appwrite/appwrite-auth-error';
import { AppwriteAuthService } from '../../core/appwrite/appwrite-auth.service';
import { AuthLayout } from '../../shared/ui/templates/auth-layout/auth-layout';
import { AuthCard } from '../../shared/ui/organisms/auth-card/auth-card';
import {
  AuthLoginForm,
  type LoginFormValue,
} from '../../shared/ui/organisms/auth-login-form/auth-login-form';
import {
  AuthSignUpForm,
  type SignUpFormValue,
} from '../../shared/ui/organisms/auth-sign-up-form/auth-sign-up-form';

export type AuthTab = 'sign-up' | 'login';

@Component({
  selector: 'app-auth-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AuthLayout, AuthCard, AuthSignUpForm, AuthLoginForm],
  template: `
    <ef-auth-layout>
      <ef-auth-card [activeTab]="activeTab()" (activeTabChange)="setActiveTab($event)">
        @if (authError(); as error) {
          <p class="mb-6 rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700" role="alert">
            {{ error }}
          </p>
        }

        @if (activeTab() === 'sign-up') {
          <ef-auth-sign-up-form
            [submitting]="submitting()"
            (submitted)="onSignUp($event)"
            (switchToLogin)="setActiveTab('login')"
          />
        } @else {
          <ef-auth-login-form
            [submitting]="submitting()"
            (submitted)="onLogin($event)"
            (switchToSignUp)="setActiveTab('sign-up')"
          />
        }
      </ef-auth-card>
    </ef-auth-layout>
  `,
})
export class AuthPage {
  private readonly auth = inject(AppwriteAuthService);
  private readonly router = inject(Router);

  protected readonly activeTab = signal<AuthTab>('sign-up');
  protected readonly submitting = signal(false);
  protected readonly authError = signal<string | null>(null);

  protected setActiveTab(tab: string): void {
    if (tab === 'sign-up' || tab === 'login') {
      this.activeTab.set(tab);
      this.authError.set(null);
    }
  }

  protected async onSignUp(value: SignUpFormValue): Promise<void> {
    this.authError.set(null);

    const validationError = this.validateSignUp(value);
    if (validationError) {
      this.authError.set(validationError);
      return;
    }

    this.submitting.set(true);

    try {
      await this.auth.registerWithEmail({
        name: value.fullName,
        email: value.email,
        password: value.password,
      });

      await this.router.navigate(['/session'], { queryParams: { flow: 'register' } });
    } catch (error) {
      this.authError.set(toAuthErrorMessage(error));
    } finally {
      this.submitting.set(false);
    }
  }

  protected async onLogin(value: LoginFormValue): Promise<void> {
    this.authError.set(null);

    const validationError = this.validateLogin(value);
    if (validationError) {
      this.authError.set(validationError);
      return;
    }

    this.submitting.set(true);

    try {
      await this.auth.loginWithEmail({
        email: value.email,
        password: value.password,
      });

      await this.router.navigate(['/session'], { queryParams: { flow: 'login' } });
    } catch (error) {
      this.authError.set(toAuthErrorMessage(error));
    } finally {
      this.submitting.set(false);
    }
  }

  private validateSignUp(value: SignUpFormValue): string | null {
    if (!value.fullName.trim()) {
      return 'Indica tu nombre completo.';
    }
    if (!value.email.trim()) {
      return 'Indica tu correo electrónico.';
    }
    if (value.password.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres.';
    }
    if (value.password !== value.confirmPassword) {
      return 'Las contraseñas no coinciden.';
    }

    return null;
  }

  private validateLogin(value: LoginFormValue): string | null {
    if (!value.email.trim()) {
      return 'Indica tu correo electrónico.';
    }
    if (!value.password) {
      return 'Indica tu contraseña.';
    }

    return null;
  }
}
