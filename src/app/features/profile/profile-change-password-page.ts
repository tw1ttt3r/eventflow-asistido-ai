import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';
import { ChangePasswordForm } from '@shared/ui/organisms/change-password-form/change-password-form';
import { AdminLayout } from '@shared/ui/templates/admin-layout/admin-layout';

@Component({
  selector: 'app-profile-change-password-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AdminLayout, EfIcon, EfIconButton, ChangePasswordForm],
  template: `
    <ef-admin-layout activeNav="account" (navigate)="onNavigate($event)">
      <header class="space-y-3">
        <ef-icon-button ariaLabel="Back to profile" (pressed)="backToProfile()">
          <ef-icon name="chevron-left" size="md" />
        </ef-icon-button>
        <div>
          <h1 class="font-serif text-2xl font-bold text-slate-900">Change Password</h1>
          <p class="mt-1 text-sm text-slate-500">Keep your account secure with a new password</p>
        </div>
      </header>

      <section class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <ef-change-password-form
          [submitting]="submitting()"
          (submitted)="onSubmit()"
          (cancelled)="backToProfile()"
        />
      </section>
    </ef-admin-layout>
  `,
})
export class ProfileChangePasswordPage {
  private readonly router = inject(Router);
  private readonly adminNav = inject(AdminNavigationService);

  protected readonly submitting = signal(false);

  protected onNavigate(tabId: string): void {
    this.adminNav.navigate(tabId);
  }

  protected backToProfile(): void {
    void this.router.navigate(['/session']);
  }

  protected onSubmit(): void {
    this.submitting.set(true);
    // Mock-only update; Appwrite password change will replace this flow.
    this.submitting.set(false);
  }
}
