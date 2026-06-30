import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import { filterEvents, isEventOwnedByUser, type EventFilter, type EventItem } from '@features/events/events.model';
import { MOCK_EVENTS, MOCK_EVENTS_SPARKLINE, MOCK_EVENTS_SUMMARY } from '@mock/events.mock';
import { AdminLayout } from '@shared/ui/templates/admin-layout/admin-layout';
import { EventCard } from '@shared/ui/organisms/event-card/event-card';
import { EventsStatsCard } from '@shared/ui/organisms/events-stats-card/events-stats-card';
import { EventsToolbar } from '@shared/ui/organisms/events-toolbar/events-toolbar';
import { FilterChips } from '@shared/ui/molecules/filter-chips/filter-chips';

const FILTER_OPTIONS = [
  { id: 'all', label: 'All' },
  { id: 'published', label: 'Published' },
  { id: 'closed', label: 'Closed' },
] as const;

@Component({
  selector: 'app-events-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AdminLayout, EventsStatsCard, EventsToolbar, FilterChips, EventCard],
  template: `
    <ef-admin-layout activeNav="events" (navigate)="onNavigate($event)">
      <ef-events-stats-card
        [total]="summary.total"
        [published]="summary.published"
        [publishedPercent]="summary.publishedPercent"
        [sparkline]="sparkline"
      />

      <ef-events-toolbar
        [query]="searchQuery()"
        (queryChange)="searchQuery.set($event)"
        (createEvent)="onCreateEvent()"
      />

      <ef-filter-chips
        [options]="filterOptions"
        [activeId]="activeFilter()"
        ariaLabel="Event status filters"
        (activeChange)="setFilter($event)"
      />

      <section class="space-y-4" aria-label="Events list">
        @for (event of filteredEvents(); track event.id) {
          <ef-event-card
            [event]="event"
            [canEdit]="canEditEvent(event)"
            (editEvent)="onEditEvent($event)"
            (manageAttendees)="onManageAttendees($event)"
            (viewEvent)="onViewEvent($event)"
          />
        } @empty {
          <p class="rounded-3xl bg-white p-6 text-center text-sm text-slate-500 ring-1 ring-slate-100">
            No events match your search.
          </p>
        }
      </section>
    </ef-admin-layout>
  `,
})
export class EventsDashboardPage implements OnInit {
  private readonly adminNav = inject(AdminNavigationService);
  private readonly router = inject(Router);
  private readonly auth = inject(AppwriteAuthService);

  protected readonly summary = MOCK_EVENTS_SUMMARY;
  protected readonly sparkline = MOCK_EVENTS_SPARKLINE;
  protected readonly filterOptions = FILTER_OPTIONS.map((option) => ({ ...option }));
  protected readonly searchQuery = signal('');
  protected readonly activeFilter = signal<EventFilter>('all');
  protected readonly currentUserId = signal<string | null>(null);

  protected readonly filteredEvents = computed(() =>
    filterEvents(MOCK_EVENTS, this.activeFilter(), this.searchQuery()),
  );

  ngOnInit(): void {
    void this.bootstrap();
  }

  private async bootstrap(): Promise<void> {
    const user = await this.auth.getCurrentUser();
    this.currentUserId.set(user?.$id ?? null);
  }

  protected canEditEvent(event: EventItem): boolean {
    return isEventOwnedByUser(event, this.currentUserId());
  }

  protected setFilter(filter: string): void {
    if (filter === 'all' || filter === 'published' || filter === 'closed') {
      this.activeFilter.set(filter);
    }
  }

  protected onNavigate(tabId: string): void {
    this.adminNav.navigate(tabId);
  }

  protected onCreateEvent(): void {
    // Placeholder: flujo de creación en otro paso
  }

  protected onEditEvent(eventId: string): void {
    void this.router.navigate(['/events', eventId, 'edit']);
  }

  protected onViewEvent(eventId: string): void {
    void this.router.navigate(['/events', eventId]);
  }

  protected onManageAttendees(eventId: string): void {
    void this.router.navigate(['/events', eventId, 'attendees']);
  }
}
