import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { isEventOwnedByUser, type EventItem } from '@features/events/events.model';
import { MOCK_EVENTS } from '@mock/events.mock';
import { EventEditComingSoonCard } from '@shared/ui/organisms/event-edit-coming-soon-card/event-edit-coming-soon-card';
import { EventEditHeader } from '@shared/ui/organisms/event-edit-header/event-edit-header';
import { EventUnavailableCard } from '@shared/ui/organisms/event-unavailable-card/event-unavailable-card';
import { AdminLayout } from '@shared/ui/templates/admin-layout/admin-layout';

@Component({
  selector: 'app-event-edit-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AdminLayout,
    EventEditHeader,
    EventEditComingSoonCard,
    EventUnavailableCard,
  ],
  template: `
    @if (canAccess() && event(); as currentEvent) {
      <ef-admin-layout activeNav="events" (navigate)="onNavigate($event)">
        <ef-event-edit-header [status]="currentEvent.status" (backPress)="backToEvents()" />

        <ef-event-edit-coming-soon-card
          [event]="currentEvent"
          (backPress)="backToEvents()"
          (attendeesPress)="goToAttendees()"
          (viewPagePress)="viewPublicPage()"
        />
      </ef-admin-layout>
    } @else {
      <ef-admin-layout activeNav="events" (navigate)="onNavigate($event)">
        <ef-event-unavailable-card (backPress)="backToEvents()" />
      </ef-admin-layout>
    }
  `,
})
export class EventEditPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly auth = inject(AppwriteAuthService);
  private readonly adminNav = inject(AdminNavigationService);

  private readonly eventId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  protected readonly currentUserId = signal<string | null>(null);

  protected readonly event = computed((): EventItem | undefined => {
    const id = this.eventId();
    return MOCK_EVENTS.find((item) => item.id === id);
  });

  protected readonly canAccess = computed(() => {
    const currentEvent = this.event();
    return Boolean(currentEvent && isEventOwnedByUser(currentEvent, this.currentUserId()));
  });

  ngOnInit(): void {
    void this.bootstrap();
  }

  private async bootstrap(): Promise<void> {
    const user = await this.auth.getCurrentUser();
    this.currentUserId.set(user?.$id ?? null);
  }

  protected onNavigate(tabId: string): void {
    this.adminNav.navigate(tabId);
  }

  protected backToEvents(): void {
    void this.router.navigate(['/events']);
  }

  protected goToAttendees(): void {
    const id = this.eventId();
    if (id) {
      void this.router.navigate(['/events', id, 'attendees']);
    }
  }

  protected viewPublicPage(): void {
    const id = this.eventId();
    if (id) {
      void this.router.navigate(['/events', id]);
    }
  }
}
