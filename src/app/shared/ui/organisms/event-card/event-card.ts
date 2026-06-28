import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { EfBadge } from '../../atoms/badge/badge';
import { EfButton } from '../../atoms/button/button';
import type { EventItem } from '../../../../features/events/events.model';

@Component({
  selector: 'ef-event-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfBadge, EfButton],
  template: `
    <article class="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div class="flex gap-4">
        <div
          class="size-20 shrink-0 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300"
          [style.background]="thumbnailGradient()"
          aria-hidden="true"
        ></div>

        <div class="min-w-0 flex-1">
          <div class="flex items-start justify-between gap-2">
            <h3 class="line-clamp-2 text-sm font-bold leading-snug text-slate-900">{{ event().title }}</h3>
            <ef-badge [tone]="event().status">
              {{ event().status === 'published' ? 'Published' : 'Closed' }}
            </ef-badge>
          </div>

          <p class="mt-2 text-xs text-slate-500">
            {{ event().dateLabel }} · {{ event().timeLabel }}
          </p>
          <p class="text-xs text-slate-500">{{ event().venue }}</p>
          <p class="mt-2 text-xs text-slate-400">Tickets left: {{ event().ticketsLeft }}</p>
        </div>
      </div>

      <div class="mt-4 flex justify-end gap-2">
        <ef-button variant="soft" [fullWidth]="false" size="sm" (pressed)="editEvent.emit(event().id)">
          Edit
        </ef-button>
        <ef-button variant="blue" [fullWidth]="false" size="sm" (pressed)="viewAttendees.emit(event().id)">
          Attendees
        </ef-button>
      </div>
    </article>
  `,
})
export class EventCard {
  readonly event = input.required<EventItem>();

  readonly editEvent = output<string>();
  readonly viewAttendees = output<string>();

  protected thumbnailGradient(): string {
    const hue = this.event().imageHue;
    return `linear-gradient(135deg, hsl(${hue} 45% 78%), hsl(${hue} 35% 55%))`;
  }
}
