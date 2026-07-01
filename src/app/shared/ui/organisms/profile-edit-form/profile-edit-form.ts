import { ChangeDetectionStrategy, Component, effect, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  profileToEditForm,
  validateProfileEditForm,
  type ProfileEditFormValue,
  type UserProfile,
} from '@features/profile/profile.model';
import { EfAvatar } from '@shared/ui/atoms/avatar/avatar';
import { EfButton } from '@shared/ui/atoms/button/button';
import { FormField } from '@shared/ui/molecules/form-field/form-field';

@Component({
  selector: 'ef-profile-edit-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, EfAvatar, FormField, EfButton],
  template: `
    <form class="space-y-6" (ngSubmit)="submitForm()">
      <div class="flex flex-col items-center gap-4 rounded-3xl bg-ef-surface p-5 text-center ring-1 ring-slate-100">
        <ef-avatar
          [fullName]="fullName()"
          [imageUrl]="avatarPreview()"
          [hue]="profile().avatarHue"
          size="lg"
        />
        <div>
          <label
            class="inline-flex cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-ef-purple ring-1 ring-ef-purple/20 transition hover:bg-ef-lavender"
          >
            Change photo
            <input type="file" accept="image/*" class="sr-only" (change)="onPhotoSelected($event)" />
          </label>
          <p class="mt-2 text-xs text-slate-500">JPG or PNG · preview only until storage is connected</p>
        </div>
      </div>

      <ef-form-field fieldId="profile-full-name" label="Full name" [(value)]="fullName" />
      <ef-form-field
        fieldId="profile-email"
        label="Email"
        type="email"
        autocomplete="email"
        [(value)]="email"
      />
      <ef-form-field fieldId="profile-phone" label="Phone" type="tel" autocomplete="tel" [(value)]="phone" />
      <ef-form-field fieldId="profile-role" label="Role" [(value)]="role" />
      <ef-form-field fieldId="profile-location" label="Location" [(value)]="location" />

      @if (formError(); as error) {
        <p class="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700" role="alert">
          {{ error }}
        </p>
      }

      <div class="grid grid-cols-2 gap-3">
        <ef-button type="button" variant="soft" [fullWidth]="true" (pressed)="cancelled.emit()">Cancel</ef-button>
        <ef-button type="submit" variant="purple" [disabled]="submitting()">Save changes</ef-button>
      </div>
    </form>
  `,
})
export class ProfileEditForm {
  readonly profile = input.required<UserProfile>();
  readonly submitting = input(false);

  protected fullName = model('');
  protected email = model('');
  protected phone = model('');
  protected role = model('');
  protected location = model('');
  protected avatarPreview = model<string | null>(null);
  protected readonly formError = signal<string | null>(null);

  readonly submitted = output<ProfileEditFormValue>();
  readonly cancelled = output<void>();

  constructor() {
    effect(() => {
      const form = profileToEditForm(this.profile());
      this.fullName.set(form.fullName);
      this.email.set(form.email);
      this.phone.set(form.phone);
      this.role.set(form.role);
      this.location.set(form.location);
      this.avatarPreview.set(form.avatarUrl);
    });
  }

  protected onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }

    this.avatarPreview.set(URL.createObjectURL(file));
  }

  protected submitForm(): void {
    this.formError.set(null);

    const payload: ProfileEditFormValue = {
      fullName: this.fullName(),
      email: this.email(),
      phone: this.phone(),
      role: this.role(),
      location: this.location(),
      avatarUrl: this.avatarPreview(),
    };

    const validationError = validateProfileEditForm(payload);
    if (validationError) {
      this.formError.set(validationError);
      return;
    }

    this.submitted.emit(payload);
  }
}
