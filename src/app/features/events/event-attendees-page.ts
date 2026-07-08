import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import {
  filterAttendees,
  summarizeAttendees,
  type Attendee,
  type AttendeeFilter,
} from '@features/events/attendees.model';
import { isEventOwnedByUser } from '@features/events/events.model';
import { findEventAttendees, findEventAttendeesContext } from '@mock/attendees.mock';
import { MOCK_EVENTS } from '@mock/events.mock';
import { AttendeesFilterBar } from '@shared/ui/molecules/attendees-filter-bar/attendees-filter-bar';
import { AttendeesSearchBar } from '@shared/ui/molecules/attendees-search-bar/attendees-search-bar';
import { AttendeeCard } from '@shared/ui/organisms/attendee-card/attendee-card';
import { AttendeesHeader } from '@shared/ui/organisms/attendees-header/attendees-header';
import { AttendeesSummaryCard } from '@shared/ui/organisms/attendees-summary-card/attendees-summary-card';
import { EventUnavailableCard } from '@shared/ui/organisms/event-unavailable-card/event-unavailable-card';
import { AttendeesLayout } from '@shared/ui/templates/attendees-layout/attendees-layout';

const FILTER_OPTIONS = [
  { id: 'all', label: 'All' },
  { id: 'checked-in', label: 'Checked-in' },
  { id: 'not-checked-in', label: 'Not checked-in' },
] as const;

@Component({
  selector: 'app-event-attendees-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AttendeesLayout,
    AttendeesHeader,
    AttendeesSearchBar,
    AttendeesFilterBar,
    AttendeeCard,
    AttendeesSummaryCard,
    EventUnavailableCard,
  ],
  template: `
    @if (canAccess() && context(); as eventContext) {
      <ef-attendees-layout>
        <ef-attendees-header
          [eventTitle]="eventContext.eventTitle"
          [eventDateLabel]="eventContext.eventDateLabel"
          (backPress)="backToEvent()"
        />

        <ef-attendees-search-bar
          [query]="searchQuery()"
          (queryChange)="searchQuery.set($event)"
        />

        <ef-attendees-filter-bar
          [options]="filterOptions"
          [activeId]="activeFilter()"
          (activeChange)="setFilter($event)"
        />

        <section class="space-y-3" aria-label="Attendees list">
          @for (attendee of filteredAttendees(); track attendee.id) {
            <ef-attendee-card
              [attendee]="attendee"
              [checkedIn]="attendee.checkedIn"
            />
          } @empty {
            <p class="rounded-3xl bg-white p-6 text-center text-sm text-slate-500 ring-1 ring-slate-100">
              No attendees match your search.
            </p>
          }
        </section>

        <ef-attendees-summary-card
          [summary]="summary()"
          (managePress)="onManage()"
        />
      </ef-attendees-layout>
    } @else {
      <ef-attendees-layout>
        <ef-attendees-header
          eventTitle="Event"
          eventDateLabel="—"
          (backPress)="backToEvents()"
        />
        <ef-event-unavailable-card (backPress)="backToEvents()" />
      </ef-attendees-layout>
    }
  `,
})
export class EventAttendeesPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly auth = inject(AppwriteAuthService);

  private readonly eventId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  protected readonly currentUserId = signal<string | null>(null);
  protected readonly attendees = signal<Attendee[]>([]);
  protected readonly searchQuery = signal('');
  protected readonly activeFilter = signal<AttendeeFilter>('all');
  protected readonly filterOptions = FILTER_OPTIONS.map((option) => ({ ...option }));

  protected readonly context = computed(() => {
    const id = this.eventId();
    return id ? findEventAttendeesContext(id) : undefined;
  });

  protected readonly canAccess = computed(() => {
    const id = this.eventId();
    const event = MOCK_EVENTS.find((item) => item.id === id);
    return Boolean(event && isEventOwnedByUser(event, this.currentUserId()));
  });

  protected readonly filteredAttendees = computed(() =>
    filterAttendees(this.attendees(), this.activeFilter(), this.searchQuery()),
  );

  protected readonly summary = computed(() => summarizeAttendees(this.attendees()));

  ngOnInit(): void {
    void this.bootstrap();
  }

  private async bootstrap(): Promise<void> {
    const user = await this.auth.getCurrentUser();
    this.currentUserId.set(user?.$id ?? null);

    const id = this.eventId();
    if (id) {
      this.attendees.set(findEventAttendees(id));
    }
  }

  protected setFilter(filter: string): void {
    if (filter === 'all' || filter === 'checked-in' || filter === 'not-checked-in') {
      this.activeFilter.set(filter);
    }
  }

  protected backToEvent(): void {
    const id = this.eventId();
    if (id) {
      void this.router.navigate(['/events', id]);
      return;
    }

    this.backToEvents();
  }

  protected backToEvents(): void {
    void this.router.navigate(['/events']);
  }

  protected onManage(): void {
    const id = this.eventId();
    if (id) {
      void this.router.navigate(['/events', id, 'edit']);
    }
  }
}
