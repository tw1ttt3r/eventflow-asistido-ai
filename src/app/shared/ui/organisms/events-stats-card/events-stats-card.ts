import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { EventsSparkline } from '@features/events/events.model';
import { SparklineChart } from '@shared/ui/molecules/sparkline-chart/sparkline-chart';

@Component({
  selector: 'ef-events-stats-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SparklineChart],
  template: `
    <section class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-sm text-slate-500">Events</p>
          <p class="mt-1 text-3xl font-bold text-slate-900">{{ total() }} total</p>
        </div>
        <div class="text-right">
          <p class="text-sm text-slate-500">Published</p>
          <p class="mt-1 text-3xl font-bold text-ef-blue">
            {{ published() }}
            <span class="text-lg font-semibold">({{ publishedPercent() }}%)</span>
          </p>
        </div>
      </div>
      <ef-sparkline-chart
        [totalsLine]="sparkline().totalsLine"
        [publishedLine]="sparkline().publishedLine"
      />
    </section>
  `,
})
export class EventsStatsCard {
  readonly total = input.required<number>();
  readonly published = input.required<number>();
  readonly publishedPercent = input.required<number>();
  readonly sparkline = input.required<EventsSparkline>();
}
