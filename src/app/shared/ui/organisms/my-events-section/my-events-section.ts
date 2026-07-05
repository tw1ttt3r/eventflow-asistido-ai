import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';

import {
  filterMyEventsByTab,
  type MyEventsTab,
  type ProfileMyEvent,
} from '@features/profile/profile.model';
import { MyEventCard } from '@shared/ui/molecules/my-event-card/my-event-card';
import {
  SegmentedControl,
  type SegmentedOption,
} from '@shared/ui/molecules/segmented-control/segmented-control';

const MY_EVENTS_TABS: SegmentedOption<MyEventsTab>[] = [
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'attended', label: 'Attended' },
];

@Component({
  selector: 'ef-my-events-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SegmentedControl, MyEventCard],
  template: `
    <section class="space-y-4" aria-labelledby="my-events-heading">
      <h2 id="my-events-heading" class="font-serif text-lg font-bold text-slate-900">My Events</h2>

      <ef-segmented-control
        [(value)]="activeTab"
        [options]="tabOptions"
        ariaLabel="My events filter"
      />

      <div class="space-y-3">
        @for (event of visibleEvents(); track event.id) {
          <ef-my-event-card
            [event]="event"
            (viewTicketPress)="viewTicketPress.emit($event)"
            (viewSummaryPress)="viewSummaryPress.emit($event)"
          />
        } @empty {
          <p class="rounded-3xl bg-white p-5 text-sm text-slate-500 shadow-sm ring-1 ring-slate-100">
            @if (activeTab() === 'upcoming') {
              No upcoming events yet.
            } @else {
              No attended events yet.
            }
          </p>
        }
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MyEventsSection {
  readonly events = input.required<ProfileMyEvent[]>();

  readonly viewTicketPress = output<string>();
  readonly viewSummaryPress = output<string>();

  protected readonly tabOptions = MY_EVENTS_TABS;
  protected readonly activeTab = signal<MyEventsTab>('upcoming');

  protected readonly visibleEvents = computed(() =>
    filterMyEventsByTab(this.events(), this.activeTab()),
  );
}
