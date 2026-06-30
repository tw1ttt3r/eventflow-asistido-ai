import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { EventDetail } from '@features/events/event-detail.model';

@Component({
  selector: 'ef-event-about-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="space-y-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <h2 class="text-base font-bold text-slate-900">About the event</h2>
      <p class="text-sm leading-relaxed text-slate-600">{{ event().about }}</p>

      <div class="grid gap-3 sm:grid-cols-2">
        <div class="rounded-2xl bg-ef-surface px-4 py-3">
          <h3 class="text-xs font-semibold uppercase tracking-wide text-slate-400">Who should attend</h3>
          <p class="mt-2 text-sm text-slate-600">{{ event().whoShouldAttend }}</p>
        </div>
        <div class="rounded-2xl bg-ef-surface px-4 py-3">
          <h3 class="text-xs font-semibold uppercase tracking-wide text-slate-400">What to bring</h3>
          <p class="mt-2 text-sm text-slate-600">{{ event().whatToBring }}</p>
        </div>
      </div>
    </section>
  `,
})
export class EventAboutCard {
  readonly event = input.required<EventDetail>();
}
