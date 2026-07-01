import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import type { ProfileEditFormValue } from '@features/profile/profile.model';
import { ProfileStateService } from '@features/profile/profile-state.service';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';
import { ProfileEditForm } from '@shared/ui/organisms/profile-edit-form/profile-edit-form';
import { AdminLayout } from '@shared/ui/templates/admin-layout/admin-layout';

@Component({
  selector: 'app-profile-edit-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AdminLayout, EfIcon, EfIconButton, ProfileEditForm],
  template: `
    <ef-admin-layout activeNav="account" (navigate)="onNavigate($event)">
      <header class="space-y-3">
        <ef-icon-button ariaLabel="Back to profile" (pressed)="backToProfile()">
          <ef-icon name="chevron-left" size="md" />
        </ef-icon-button>
        <div>
          <h1 class="font-serif text-2xl font-bold text-slate-900">Edit Profile</h1>
          <p class="mt-1 text-sm text-slate-500">Update your public details and photo</p>
        </div>
      </header>

      <section class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <ef-profile-edit-form
          [profile]="dashboard().profile"
          [submitting]="saving()"
          (submitted)="onSave($event)"
          (cancelled)="backToProfile()"
        />
      </section>
    </ef-admin-layout>
  `,
})
export class ProfileEditPage {
  private readonly router = inject(Router);
  private readonly adminNav = inject(AdminNavigationService);
  private readonly profileState = inject(ProfileStateService);

  protected readonly dashboard = this.profileState.dashboard;
  protected readonly saving = signal(false);

  protected onNavigate(tabId: string): void {
    this.adminNav.navigate(tabId);
  }

  protected backToProfile(): void {
    void this.router.navigate(['/session']);
  }

  protected onSave(value: ProfileEditFormValue): void {
    this.saving.set(true);
    this.profileState.updateProfile(value);
    this.saving.set(false);
    this.backToProfile();
  }
}
