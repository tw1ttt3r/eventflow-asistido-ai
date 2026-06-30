import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { getBookedPercent, getSpotsLeft, type EventDetail } from '@features/events/event-detail.model';

@Component({
  selector: 'ef-event-availability-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div class="flex items-center justify-between gap-3">
        <h2 class="text-sm font-semibold text-slate-800">Available Spots</h2>
        <p class="text-sm font-bold text-ef-purple">
          {{ spotsLeft() }}
          <span class="font-normal text-slate-400">/ {{ event().capacity }}</span>
        </p>
      </div>
      <p class="mt-1 text-xs text-slate-500">Limited capacity — reserve your spot</p>

      <div class="mt-4 h-2 overflow-hidden rounded-full bg-ef-lavender">
        <div
          class="h-full rounded-full bg-ef-purple transition-all"
          [style.width.%]="bookedPercent()"
        ></div>
      </div>
      <p class="mt-2 text-xs text-slate-500">
        {{ bookedPercent() }}% booked · {{ spotsLeft() }} spots left
      </p>
    </section>
  `,
})
export class EventAvailabilityCard {
  readonly event = input.required<EventDetail>();

  protected readonly spotsLeft = computed(() => getSpotsLeft(this.event()));
  protected readonly bookedPercent = computed(() => getBookedPercent(this.event()));
}
