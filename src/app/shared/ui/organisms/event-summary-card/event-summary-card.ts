import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import type { EventRegistrationDetail } from '@features/events/event-registration.model';

@Component({
  selector: 'ef-event-summary-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
              <svg viewBox="0 0 20 20" class="size-4 shrink-0 text-ef-blue" aria-hidden="true">
                <rect x="3" y="4" width="14" height="13" rx="2" fill="currentColor" opacity="0.15" />
                <path
                  d="M6 3v2M14 3v2M3 8h14"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                />
              </svg>
              {{ event().dateLabel }} · {{ event().timeLabel }}
            </li>
            <li class="flex items-center gap-2">
              <svg viewBox="0 0 20 20" class="size-4 shrink-0 text-ef-blue" aria-hidden="true">
                <path
                  d="M10 4.5c-2.2 0-4 1.6-4 3.6 0 2.8 4 7.4 4 7.4s4-4.6 4-7.4c0-2-1.8-3.6-4-3.6Z"
                  fill="currentColor"
                  opacity="0.2"
                />
                <circle cx="10" cy="8" r="1.5" fill="currentColor" />
              </svg>
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
