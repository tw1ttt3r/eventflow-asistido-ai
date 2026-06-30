import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { EventDetail } from '@features/events/event-detail.model';

@Component({
  selector: 'ef-event-host-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="flex items-center gap-3 rounded-3xl bg-white px-4 py-3.5 shadow-sm ring-1 ring-slate-100">
      <div
        class="flex size-10 shrink-0 items-center justify-center rounded-full bg-ef-lavender text-sm font-bold text-ef-purple"
        aria-hidden="true"
      >
        {{ event().host.initials }}
      </div>
      <div class="min-w-0 flex-1">
        <p class="text-sm font-semibold text-slate-800">Hosted by {{ event().host.name }}</p>
        <p class="text-xs text-slate-500">{{ event().host.title }}</p>
      </div>
      <p class="shrink-0 text-right text-xs font-medium text-slate-500">
        {{ event().priceAmount === '$0' ? 'Free' : event().priceAmount }}
        @if (event().walkInsAccepted) {
          <span> · Walk-ins accepted</span>
        }
      </p>
    </section>
  `,
})
export class EventHostBanner {
  readonly event = input.required<EventDetail>();
}
