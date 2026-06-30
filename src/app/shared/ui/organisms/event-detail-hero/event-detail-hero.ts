import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import type { EventDetail } from '@features/events/event-detail.model';

@Component({
  selector: 'ef-event-detail-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
            <svg viewBox="0 0 20 20" class="mt-0.5 size-4 shrink-0 text-ef-blue" aria-hidden="true">
              <rect x="3" y="4" width="14" height="13" rx="2" fill="currentColor" opacity="0.15" />
              <path d="M6 3v2M14 3v2M3 8h14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
            </svg>
            <div>
              <p>{{ event().dateLabel }} · {{ event().timeRangeLabel }}</p>
              <p class="text-xs text-slate-400">Timezone: {{ event().timezone }}</p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <svg viewBox="0 0 20 20" class="mt-0.5 size-4 shrink-0 text-ef-blue" aria-hidden="true">
              <path d="M10 4.5c-2.2 0-4 1.6-4 3.6 0 2.8 4 7.4 4 7.4s4-4.6 4-7.4c0-2-1.8-3.6-4-3.6Z" fill="currentColor" opacity="0.2" />
              <circle cx="10" cy="8" r="1.5" fill="currentColor" />
            </svg>
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
