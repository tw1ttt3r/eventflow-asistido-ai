import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { ProfileStateService } from '@features/profile/profile-state.service';
import { AttendedEventsCard } from '@shared/ui/organisms/attended-events-card/attended-events-card';
import { DigitalTicketsCard } from '@shared/ui/organisms/digital-tickets-card/digital-tickets-card';
import { ProfileHeroCard } from '@shared/ui/organisms/profile-hero-card/profile-hero-card';
import { UpcomingEventsCard } from '@shared/ui/organisms/upcoming-events-card/upcoming-events-card';
import { AdminLayout } from '@shared/ui/templates/admin-layout/admin-layout';

@Component({
  selector: 'app-session-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AdminLayout,
    ProfileHeroCard,
    UpcomingEventsCard,
    AttendedEventsCard,
    DigitalTicketsCard,
  ],
  template: `
    <ef-admin-layout activeNav="account" (navigate)="onNavigate($event)">
      <ef-profile-hero-card
        [profile]="dashboard().profile"
        [loggingOut]="loggingOut()"
        (editPress)="goToEdit()"
        (changePasswordPress)="goToChangePassword()"
        (logoutPress)="logout()"
      />

      <ef-upcoming-events-card
        [events]="dashboard().upcoming"
        (seeAllPress)="onPlaceholder('Upcoming events')"
        (viewTicketPress)="onPlaceholder('View ticket')"
      />

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ef-attended-events-card [events]="dashboard().attended" />
        <ef-digital-tickets-card
          [tickets]="dashboard().tickets"
          (openPress)="onPlaceholder('Open ticket')"
        />
      </div>
    </ef-admin-layout>
  `,
})
export class SessionPage {
  private readonly auth = inject(AppwriteAuthService);
  private readonly router = inject(Router);
  private readonly adminNav = inject(AdminNavigationService);
  private readonly profileState = inject(ProfileStateService);

  protected readonly dashboard = this.profileState.dashboard;
  protected readonly loggingOut = signal(false);

  protected onNavigate(tabId: string): void {
    this.adminNav.navigate(tabId);
  }

  protected goToEdit(): void {
    void this.router.navigate(['/session', 'edit']);
  }

  protected goToChangePassword(): void {
    void this.router.navigate(['/session', 'change-password']);
  }

  protected onPlaceholder(_action: string): void {
    // Placeholder until dedicated mocks/flows arrive
  }

  protected async logout(): Promise<void> {
    this.loggingOut.set(true);

    try {
      await this.auth.logout();
      await this.router.navigate(['/auth']);
    } finally {
      this.loggingOut.set(false);
    }
  }
}
