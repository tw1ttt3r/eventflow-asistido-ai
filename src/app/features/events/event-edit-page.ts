import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { EventEditStateService } from '@features/events/event-edit-state.service';
import type { EventEditFormValue } from '@features/events/event-edit.model';
import { isEventEditOwned } from '@mock/event-edit.mock';
import { EventEditForm } from '@shared/ui/organisms/event-edit-form/event-edit-form';
import { EventEditHeader } from '@shared/ui/organisms/event-edit-header/event-edit-header';
import { EventUnavailableCard } from '@shared/ui/organisms/event-unavailable-card/event-unavailable-card';
import { AdminLayout } from '@shared/ui/templates/admin-layout/admin-layout';

@Component({
  selector: 'app-event-edit-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AdminLayout, EventEditHeader, EventEditForm, EventUnavailableCard],
  template: `
    @if (canAccess() && editData(); as currentEdit) {
      <ef-admin-layout activeNav="events" (navigate)="onNavigate($event)">
        <ef-event-edit-header
          (backPress)="backToEvents()"
          (previewPress)="viewPublicPage()"
          (morePress)="onMoreOptions()"
        />

        <ef-event-edit-form
          [editData]="currentEdit"
          [submitting]="saving()"
          (submitted)="onSave($event)"
          (cancelled)="backToEvents()"
          (deletePress)="onDelete()"
          (previewPress)="onDescriptionPreview()"
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
  private readonly editState = inject(EventEditStateService);

  private readonly eventId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  protected readonly currentUserId = signal<string | null>(null);
  protected readonly saving = signal(false);
  private readonly refreshTick = signal(0);

  protected readonly editData = computed(() => {
    this.refreshTick();
    const id = this.eventId();
    return id ? this.editState.getEditData(id) : undefined;
  });

  protected readonly canAccess = computed(() => {
    const id = this.eventId();
    return Boolean(id && isEventEditOwned(id, this.currentUserId()) && this.editData());
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

  protected viewPublicPage(): void {
    const id = this.eventId();
    if (id) {
      void this.router.navigate(['/events', id]);
    }
  }

  protected onSave(value: EventEditFormValue): void {
    const id = this.eventId();
    if (!id) {
      return;
    }

    this.saving.set(true);
    this.editState.updateEdit(id, value);
    this.refreshTick.update((tick) => tick + 1);
    this.saving.set(false);
  }

  protected onDelete(): void {
    // Placeholder until delete flow and confirmation modal arrive
  }

  protected onMoreOptions(): void {
    // Placeholder until overflow menu mock arrives
  }

  protected onDescriptionPreview(): void {
    // Placeholder until markdown preview mock arrives
  }
}
