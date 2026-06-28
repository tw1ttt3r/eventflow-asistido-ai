import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { AdminNavigationService } from '../admin/admin-navigation.service';
import { filterEvents, type EventFilter } from './events.model';
import { MOCK_EVENTS, MOCK_EVENTS_SPARKLINE, MOCK_EVENTS_SUMMARY } from '../../../mock/events.mock';
import { AdminLayout } from '../../shared/ui/templates/admin-layout/admin-layout';
import { EventCard } from '../../shared/ui/organisms/event-card/event-card';
import { EventsStatsCard } from '../../shared/ui/organisms/events-stats-card/events-stats-card';
import { EventsToolbar } from '../../shared/ui/organisms/events-toolbar/events-toolbar';
import { FilterChips } from '../../shared/ui/molecules/filter-chips/filter-chips';

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
            (editEvent)="onEditEvent($event)"
            (viewAttendees)="onViewAttendees($event)"
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
export class EventsDashboardPage {
  private readonly adminNav = inject(AdminNavigationService);

  protected readonly summary = MOCK_EVENTS_SUMMARY;
  protected readonly sparkline = MOCK_EVENTS_SPARKLINE;
  protected readonly filterOptions = FILTER_OPTIONS.map((option) => ({ ...option }));
  protected readonly searchQuery = signal('');
  protected readonly activeFilter = signal<EventFilter>('all');

  protected readonly filteredEvents = computed(() =>
    filterEvents(MOCK_EVENTS, this.activeFilter(), this.searchQuery()),
  );

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

  protected onEditEvent(_eventId: string): void {
    // Placeholder: edición de evento
  }

  protected onViewAttendees(_eventId: string): void {
    // Placeholder: vista de asistentes
  }
}
