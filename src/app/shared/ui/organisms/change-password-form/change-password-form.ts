import { ChangeDetectionStrategy, Component, computed, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { validateChangePasswordForm, type ChangePasswordFormValue } from '@features/profile/profile.model';
import { EfButton } from '@shared/ui/atoms/button/button';
import { PasswordField } from '@shared/ui/molecules/password-field/password-field';
import { computePasswordStrength } from '@shared/ui/password-strength.util';

@Component({
  selector: 'ef-change-password-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, PasswordField, EfButton],
  template: `
    <form class="space-y-6" (ngSubmit)="submitForm()">
      <p class="rounded-2xl bg-ef-surface px-4 py-3 text-sm text-slate-600 ring-1 ring-slate-100">
        Choose a strong password you do not use elsewhere. You will stay signed in after updating.
      </p>

      <ef-password-field
        fieldId="current-password"
        label="Current password"
        autocomplete="current-password"
        [showStrength]="false"
        [(value)]="currentPassword"
      />

      <ef-password-field
        fieldId="new-password"
        label="New password"
        autocomplete="new-password"
        [showStrength]="true"
        [(value)]="newPassword"
      />

      <ef-password-field
        fieldId="confirm-password"
        label="Confirm new password"
        autocomplete="new-password"
        [showStrength]="false"
        [(value)]="confirmPassword"
      />

      @if (formError(); as error) {
        <p class="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700" role="alert">
          {{ error }}
        </p>
      }

      @if (saved()) {
        <p class="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700" role="status">
          Password updated successfully.
        </p>
      }

      <div class="grid grid-cols-2 gap-3">
        <ef-button type="button" variant="soft" [fullWidth]="true" (pressed)="cancelled.emit()">Cancel</ef-button>
        <ef-button type="submit" variant="purple" [disabled]="submitting() || !canSubmit()">
          Update password
        </ef-button>
      </div>
    </form>
  `,
})
export class ChangePasswordForm {
  protected currentPassword = model('');
  protected newPassword = model('');
  protected confirmPassword = model('');
  protected readonly formError = signal<string | null>(null);
  protected readonly saved = signal(false);

  readonly submitting = input(false);

  readonly submitted = output<ChangePasswordFormValue>();
  readonly cancelled = output<void>();

  protected readonly canSubmit = computed(() => {
    const strength = computePasswordStrength(this.newPassword());
    return strength !== 'empty' && strength !== 'weak';
  });

  protected submitForm(): void {
    this.formError.set(null);
    this.saved.set(false);

    const payload: ChangePasswordFormValue = {
      currentPassword: this.currentPassword(),
      newPassword: this.newPassword(),
      confirmPassword: this.confirmPassword(),
    };

    const validationError = validateChangePasswordForm(payload);
    if (validationError) {
      this.formError.set(validationError);
      return;
    }

    this.submitted.emit(payload);
    this.saved.set(true);
    this.currentPassword.set('');
    this.newPassword.set('');
    this.confirmPassword.set('');
  }
}
