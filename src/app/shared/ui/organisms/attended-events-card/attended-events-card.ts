import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import type { ProfileAttendedEvent } from '@features/profile/profile.model';
import { AttendedEventRow } from '@shared/ui/molecules/attended-event-row/attended-event-row';
import { SectionHeader } from '@shared/ui/molecules/section-header/section-header';

@Component({
  selector: 'ef-attended-events-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, AttendedEventRow],
  template: `
    <section class="h-full rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <ef-section-header
        title="Attended"
        [subtitle]="subtitle()"
        [count]="events().length"
      />

      <div class="mt-4 space-y-4">
        @for (event of events(); track event.id) {
          <ef-attended-event-row [event]="event" />
        }
      </div>
    </section>
  `,
})
export class AttendedEventsCard {
  readonly events = input.required<ProfileAttendedEvent[]>();

  protected readonly subtitle = computed(() => {
    const count = this.events().length;
    return count === 1 ? '1 event attended recently' : `${count} events attended recently`;
  });
}
