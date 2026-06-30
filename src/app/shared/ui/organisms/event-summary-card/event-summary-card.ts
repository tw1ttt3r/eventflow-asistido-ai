import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import type { EventRegistrationDetail } from '@features/events/event-registration.model';
import { EfIcon } from '@shared/ui/atoms/icon/icon';

@Component({
  selector: 'ef-event-summary-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon],
  template: `
    <article class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div class="flex gap-4">
        <div class="min-w-0 flex-1 space-y-3">
          <h1 class="text-xl font-bold leading-snug text-slate-900">
            {{ event().title }} • {{ event().subtitle }}
          </h1>
          <p class="text-sm leading-relaxed text-slate-600">{{ event().description }}</p>

          <ul class="space-y-2 text-sm text-slate-500">
            <li class="flex items-center gap-2">
              <ef-icon name="calendar" size="sm" iconClass="text-ef-blue" />
              {{ event().dateLabel }} · {{ event().timeLabel }}
            </li>
            <li class="flex items-center gap-2">
              <ef-icon name="map-pin" size="sm" iconClass="text-ef-blue" />
              {{ event().venue }}
            </li>
          </ul>
        </div>

        <div
          class="size-20 shrink-0 rounded-2xl"
          [style.background]="thumbnailGradient()"
          aria-hidden="true"
        ></div>
      </div>
    </article>
  `,
})
export class EventSummaryCard {
  readonly event = input.required<EventRegistrationDetail>();

  protected readonly thumbnailGradient = computed(() => {
    const hue = this.event().imageHue;
    return `linear-gradient(135deg, hsl(${hue} 45% 78%), hsl(${hue} 35% 55%))`;
  });
}
