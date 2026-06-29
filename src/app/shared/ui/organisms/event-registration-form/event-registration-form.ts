import { ChangeDetectionStrategy, Component, computed, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  isValidEmail,
  isValidFullName,
  isValidPhone,
  type RegistrationFormValue,
  validateRegistrationForm,
} from '@features/events/event-registration.model';
import { EfButton } from '@shared/ui/atoms/button/button';
import { EfInput, type EfInputState } from '@shared/ui/atoms/input/input';
import { Label } from '@shared/ui/atoms/label/label';
import { CheckboxField } from '@shared/ui/molecules/checkbox-field/checkbox-field';
import { FieldFeedback } from '@shared/ui/molecules/field-feedback/field-feedback';

@Component({
  selector: 'ef-event-registration-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, Label, EfInput, FieldFeedback, CheckboxField, EfButton],
  template: `
    <section class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div class="mb-5 flex items-start justify-between gap-3">
        <div>
          <h2 class="text-lg font-bold text-slate-900">Register for this event</h2>
          <p class="mt-1 text-sm text-slate-500">
            Secure your spot — fields marked with * are required
          </p>
        </div>
        <span class="text-sm font-bold text-ef-purple">{{ priceLabel() }}</span>
      </div>

      <form class="space-y-5" (ngSubmit)="submitForm()">
        <div class="space-y-2">
          <ef-label htmlFor="registration-full-name">Full name *</ef-label>
          <ef-input
            id="registration-full-name"
            placeholder="Alexandra Rivera"
            autocomplete="name"
            [state]="fullNameState()"
            [(value)]="fullName"
            (valueChange)="touchFullName.set(true)"
          />
          @if (showFullNameSuccess()) {
            <ef-field-feedback tone="success" message="Looks good" />
          }
        </div>

        <div class="space-y-2">
          <ef-label htmlFor="registration-email">Email *</ef-label>
          <ef-input
            id="registration-email"
            type="email"
            placeholder="alex@example.com"
            autocomplete="email"
            [state]="emailState()"
            [(value)]="email"
            (valueChange)="touchEmail.set(true)"
          />
          @if (showEmailInfo()) {
            <ef-field-feedback tone="info" message="We'll send your ticket to this email" />
          }
          @if (showEmailError()) {
            <ef-field-feedback tone="error" message="Introduce a valid email address" />
          }
        </div>

        <div class="space-y-2">
          <ef-label htmlFor="registration-phone">Phone (optional)</ef-label>
          <ef-input
            id="registration-phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            autocomplete="tel"
            [state]="phoneState()"
            [(value)]="phone"
            (valueChange)="touchPhone.set(true)"
          />
          @if (showPhoneError()) {
            <ef-field-feedback tone="error" message="Invalid phone number format" />
          }
        </div>

        <ef-checkbox-field
          fieldId="registration-terms"
          label="I agree to the event terms and privacy policy"
          [(checked)]="termsAccepted"
        />

        @if (formError(); as error) {
          <p class="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700" role="alert">
            {{ error }}
          </p>
        }

        <div class="space-y-3 pt-1">
          <ef-button type="submit" variant="purple" [disabled]="submitting()">Register</ef-button>
          <div class="flex justify-center">
            <ef-button variant="soft" [fullWidth]="false" (pressed)="saveForLater.emit()">
              Save for later
            </ef-button>
          </div>
        </div>

        <p class="text-center text-xs text-slate-400">
          By registering you agree to our
          <span class="font-semibold text-ef-purple">Terms</span>
          <span class="font-semibold text-ef-purple">Privacy</span>
        </p>
      </form>
    </section>
  `,
})
export class EventRegistrationForm {
  readonly priceLabel = input('Free');
  readonly submitting = input(false);

  protected fullName = model('Alexandra Rivera');
  protected email = model('alex@example.com');
  protected phone = model('');
  protected termsAccepted = model(false);

  protected readonly touchFullName = signal(false);
  protected readonly touchEmail = signal(false);
  protected readonly touchPhone = signal(false);
  protected readonly formError = signal<string | null>(null);
  protected readonly submittedAttempt = signal(false);

  readonly submitted = output<RegistrationFormValue>();
  readonly saveForLater = output<void>();

  protected readonly showFullNameSuccess = computed(
    () => this.touchFullName() && isValidFullName(this.fullName()),
  );

  protected readonly showEmailInfo = computed(
    () => !this.showEmailError() && (this.email().trim() === '' || isValidEmail(this.email())),
  );

  protected readonly showEmailError = computed(
    () =>
      (this.touchEmail() || this.submittedAttempt()) &&
      this.email().trim() !== '' &&
      !isValidEmail(this.email()),
  );

  protected readonly showPhoneError = computed(
    () => this.touchPhone() && this.phone().trim() !== '' && !isValidPhone(this.phone()),
  );

  protected readonly fullNameState = computed<EfInputState>(() =>
    this.showFullNameSuccess() ? 'success' : 'default',
  );

  protected readonly emailState = computed<EfInputState>(() =>
    this.showEmailError() ? 'error' : 'default',
  );

  protected readonly phoneState = computed<EfInputState>(() =>
    this.showPhoneError() ? 'error' : 'default',
  );

  protected submitForm(): void {
    this.submittedAttempt.set(true);
    this.formError.set(null);

    const value: RegistrationFormValue = {
      fullName: this.fullName(),
      email: this.email(),
      phone: this.phone(),
      termsAccepted: this.termsAccepted(),
    };

    const validationError = validateRegistrationForm(value);
    if (validationError) {
      this.formError.set(validationError);
      return;
    }

    this.submitted.emit(value);
  }
}
