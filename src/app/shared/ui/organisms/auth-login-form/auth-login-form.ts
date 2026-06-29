import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EfButton } from '@shared/ui/atoms/button/button';
import { FormField } from '@shared/ui/molecules/form-field/form-field';
import { AuthActionsRow } from '@shared/ui/molecules/auth-actions-row/auth-actions-row';
import { InlineLinkRow } from '@shared/ui/molecules/inline-link-row/inline-link-row';
import { PasswordField } from '@shared/ui/molecules/password-field/password-field';

export interface LoginFormValue {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'ef-auth-login-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    FormField,
    PasswordField,
    AuthActionsRow,
    EfButton,
    InlineLinkRow,
  ],
  template: `
    <form class="space-y-6" (ngSubmit)="submitForm()">
      <ef-form-field
        fieldId="login-email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        autocomplete="email"
        [(value)]="email"
      />

      <ef-password-field
        fieldId="login-password"
        label="Password"
        placeholder="••••••••"
        autocomplete="current-password"
        [showStrength]="false"
        [(value)]="password"
      />

      <ef-auth-actions-row [(rememberMe)]="rememberMe" (forgotPress)="forgotPassword.emit()" />

      <ef-button type="submit" variant="blue" [disabled]="submitting()">
        {{ submitting() ? 'Iniciando sesión…' : 'Sign in' }}
      </ef-button>

      <ef-inline-link-row
        prefix="New to EventFlow? "
        linkLabel="Create account"
        (linkPress)="switchToSignUp.emit()"
      />
    </form>
  `,
})
export class AuthLoginForm {
  readonly submitting = input(false);

  protected email = '';
  protected password = '';
  protected readonly rememberMe = model(false);

  readonly submitted = output<LoginFormValue>();
  readonly switchToSignUp = output<void>();
  readonly forgotPassword = output<void>();

  protected submitForm(): void {
    this.submitted.emit({
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe(),
    });
  }
}
