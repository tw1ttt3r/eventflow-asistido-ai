import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { EventEditStateService } from '@features/events/event-edit-state.service';
import {
  createEventEditDraft,
  generateEventId,
  type EventEditData,
  type EventEditFormValue,
} from '@features/events/event-edit.model';
import { EventsStateService } from '@features/events/events-state.service';
import { EventEditForm } from '@shared/ui/organisms/event-edit-form/event-edit-form';
import { EventEditHeader } from '@shared/ui/organisms/event-edit-header/event-edit-header';
import { AdminLayout } from '@shared/ui/templates/admin-layout/admin-layout';

@Component({
  selector: 'app-event-create-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AdminLayout, EventEditHeader, EventEditForm],
  template: `
    @if (canAccess() && draftData(); as currentDraft) {
      <ef-admin-layout activeNav="events" (navigate)="onNavigate($event)">
        <ef-event-edit-header
          heading="Create Event"
          subtitle="Set up a new event and publish when ready"
          [showToolbar]="false"
          (backPress)="backToEvents()"
        />

        <ef-event-edit-form
          [editData]="currentDraft"
          [submitting]="saving()"
          [createMode]="true"
          (submitted)="onCreate($event)"
          (cancelled)="backToEvents()"
        />
      </ef-admin-layout>
    }
  `,
})
export class EventCreatePage implements OnInit {
  private readonly router = inject(Router);
  private readonly auth = inject(AppwriteAuthService);
  private readonly adminNav = inject(AdminNavigationService);
  private readonly editState = inject(EventEditStateService);
  private readonly eventsState = inject(EventsStateService);

  private readonly eventId = signal(generateEventId());
  protected readonly draftData = signal<EventEditData | undefined>(undefined);
  protected readonly currentUserId = signal<string | null>(null);
  protected readonly saving = signal(false);

  protected readonly canAccess = computed(() => Boolean(this.currentUserId() && this.draftData()));

  ngOnInit(): void {
    void this.bootstrap();
  }

  private async bootstrap(): Promise<void> {
    const user = await this.auth.getCurrentUser();
    const userId = user?.$id ?? null;
    const organizerName = user?.name ?? 'Organizer';

    this.currentUserId.set(userId);
    this.draftData.set(createEventEditDraft(this.eventId(), organizerName));
  }

  protected onNavigate(tabId: string): void {
    this.adminNav.navigate(tabId);
  }

  protected backToEvents(): void {
    void this.router.navigate(['/events']);
  }

  protected onCreate(value: EventEditFormValue): void {
    const userId = this.currentUserId();
    if (!userId) {
      return;
    }

    this.saving.set(true);

    const eventId = this.eventId();
    const draft = this.draftData();
    if (!draft) {
      return;
    }

    this.saving.set(true);

    const created = this.editState.createEvent(eventId, draft, value);
    this.eventsState.syncFromEdit(created, userId);
    this.saving.set(false);

    void this.router.navigate(['/events']);
  }
}
