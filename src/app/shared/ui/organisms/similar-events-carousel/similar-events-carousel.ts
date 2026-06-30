import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { SimilarEventItem } from '@features/events/event-detail.model';
import { EfLink } from '@shared/ui/atoms/link/link';

@Component({
  selector: 'ef-similar-events-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfLink],
  template: `
    <section class="space-y-3">
      <div class="flex items-center justify-between gap-3 px-1">
        <h2 class="text-base font-bold text-slate-900">Similar events</h2>
        <ef-link (pressed)="seeAllPress.emit()">See all</ef-link>
      </div>

      <div class="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        @for (item of events(); track item.id) {
          <button
            type="button"
            class="w-36 shrink-0 text-left"
            (click)="eventPress.emit(item.id)"
          >
            <div
              class="h-28 rounded-2xl"
              [style.background]="cardGradient(item.imageHue)"
              aria-hidden="true"
            ></div>
            <p class="mt-2 line-clamp-2 text-sm font-semibold text-slate-900">{{ item.title }}</p>
            <p class="mt-0.5 text-xs text-slate-500">{{ item.dateLabel }} · {{ item.timeLabel }}</p>
          </button>
        }
      </div>
    </section>
  `,
})
export class SimilarEventsCarousel {
  readonly events = input.required<SimilarEventItem[]>();

  readonly eventPress = output<string>();
  readonly seeAllPress = output<void>();

  protected cardGradient(hue: number): string {
    return `linear-gradient(135deg, hsl(${hue} 45% 78%), hsl(${hue} 35% 55%))`;
  }
}
