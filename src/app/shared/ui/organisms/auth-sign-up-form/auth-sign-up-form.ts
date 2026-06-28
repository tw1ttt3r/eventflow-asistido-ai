import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EfButton } from '../../atoms/button/button';
import { Heading } from '../../atoms/heading/heading';
import { Subheading } from '../../atoms/subheading/subheading';
import { FormField } from '../../molecules/form-field/form-field';
import { InlineLinkRow } from '../../molecules/inline-link-row/inline-link-row';
import { PasswordField } from '../../molecules/password-field/password-field';

export interface SignUpFormValue {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'ef-auth-sign-up-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    Heading,
    Subheading,
    FormField,
    PasswordField,
    EfButton,
    InlineLinkRow,
  ],
  template: `
    <form class="space-y-6" (ngSubmit)="submitForm()">
      <div class="space-y-2">
        <ef-heading>Create your EventFlow account</ef-heading>
        <ef-subheading>Join thousands of event professionals using EventFlow</ef-subheading>
      </div>

      <ef-form-field
        fieldId="signup-full-name"
        label="Full name"
        placeholder="John Doe"
        autocomplete="name"
        [(value)]="fullName"
      />

      <ef-form-field
        fieldId="signup-email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        autocomplete="email"
        [(value)]="email"
      />

      <div class="grid gap-4 sm:grid-cols-2">
        <ef-password-field
          fieldId="signup-password"
          label="Password"
          placeholder="••••••••"
          autocomplete="new-password"
          [(value)]="password"
        />
        <ef-password-field
          fieldId="signup-confirm-password"
          label="Confirm"
          placeholder="••••••••"
          autocomplete="new-password"
          [showStrength]="false"
          [(value)]="confirmPassword"
        />
      </div>

      <ef-button type="submit" variant="purple" [disabled]="submitting()">
        {{ submitting() ? 'Creando cuenta…' : 'Create account' }}
      </ef-button>

      <ef-inline-link-row
        prefix="Already have an account? "
        linkLabel="Log in"
        (linkPress)="switchToLogin.emit()"
      />
    </form>
  `,
})
export class AuthSignUpForm {
  readonly submitting = input(false);

  protected fullName = '';
  protected email = '';
  protected password = '';
  protected confirmPassword = '';

  readonly submitted = output<SignUpFormValue>();
  readonly switchToLogin = output<void>();

  protected submitForm(): void {
    this.submitted.emit({
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  }
}
