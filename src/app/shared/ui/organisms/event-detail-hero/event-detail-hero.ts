import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import type { EventDetail } from '@features/events/event-detail.model';
import { EfIcon } from '@shared/ui/atoms/icon/icon';

@Component({
  selector: 'ef-event-detail-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon],
  template: `
    <section class="relative">
      <div
        class="h-52 rounded-3xl"
        [style.background]="heroGradient()"
        aria-hidden="true"
      ></div>

      <article
        class="relative -mt-16 mx-1 rounded-3xl bg-white p-5 shadow-md ring-1 ring-slate-100"
      >
        <div class="flex items-start justify-between gap-3">
          <h1 class="text-xl font-bold leading-snug text-slate-900">{{ event().title }}</h1>
          <div class="shrink-0 text-right">
            <p class="text-lg font-bold text-slate-900">{{ event().priceAmount }}</p>
            <p class="text-xs text-slate-500">{{ event().priceUnit }}</p>
          </div>
        </div>

        <div class="mt-3 flex flex-wrap gap-2">
          @for (tag of event().tags; track tag) {
            <span class="rounded-full bg-ef-lavender px-2.5 py-0.5 text-xs font-semibold text-ef-purple">
              {{ tag }}
            </span>
          }
        </div>

        <ul class="mt-4 space-y-3 text-sm text-slate-600">
          <li class="flex items-start gap-2">
            <ef-icon name="calendar" size="sm" iconClass="mt-0.5 text-ef-blue" />
            <div>
              <p>{{ event().dateLabel }} · {{ event().timeRangeLabel }}</p>
              <p class="text-xs text-slate-400">Timezone: {{ event().timezone }}</p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <ef-icon name="map-pin" size="sm" iconClass="mt-0.5 text-ef-blue" />
            <div class="min-w-0 flex-1">
              <p class="font-medium text-slate-800">{{ event().venue }}</p>
              <p class="text-xs text-slate-500">{{ event().address }}</p>
            </div>
            <div
              class="size-14 shrink-0 rounded-xl bg-gradient-to-br from-ef-blue/20 to-ef-purple/20 ring-1 ring-slate-100"
              aria-hidden="true"
            ></div>
          </li>
        </ul>
      </article>
    </section>
  `,
})
export class EventDetailHero {
  readonly event = input.required<EventDetail>();

  protected readonly heroGradient = computed(() => {
    const hue = this.event().imageHue;
    return `linear-gradient(160deg, hsl(${hue} 35% 25%), hsl(${hue} 50% 55%) 45%, hsl(${hue + 40} 45% 65%))`;
  });
}
