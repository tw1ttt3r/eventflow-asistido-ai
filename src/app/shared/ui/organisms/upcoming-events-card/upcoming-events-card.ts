import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import type { ProfileUpcomingEvent } from '@features/profile/profile.model';
import { EfButton } from '@shared/ui/atoms/button/button';
import { SectionHeader } from '@shared/ui/molecules/section-header/section-header';

@Component({
  selector: 'ef-upcoming-events-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, EfButton],
  template: `
    <section class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <ef-section-header
        title="Upcoming Events"
        [subtitle]="subtitle()"
        [clickable]="true"
        (headerPress)="seeAllPress.emit()"
      />

      @for (event of events(); track event.id) {
        <article class="mt-4 flex gap-4">
          <div
            class="size-20 shrink-0 rounded-2xl"
            [style.background]="thumbnailGradient(event.imageHue)"
            aria-hidden="true"
          ></div>
          <div class="min-w-0 flex-1">
            <h3 class="font-serif text-base font-bold text-slate-900">{{ event.title }}</h3>
            <p class="mt-1 text-xs text-slate-500">{{ event.dateLabel }} · {{ event.timeLabel }}</p>
            <div class="mt-3">
              <ef-button variant="purple" [fullWidth]="false" size="sm" (pressed)="viewTicketPress.emit(event.id)">
                View Ticket
              </ef-button>
            </div>
          </div>
        </article>
      } @empty {
        <p class="mt-4 text-sm text-slate-500">No upcoming events.</p>
      }
    </section>
  `,
})
export class UpcomingEventsCard {
  readonly events = input.required<ProfileUpcomingEvent[]>();

  readonly seeAllPress = output<void>();
  readonly viewTicketPress = output<string>();

  protected readonly subtitle = computed(() => {
    const count = this.events().length;
    return count === 1 ? '1 upcoming event' : `${count} upcoming events`;
  });

  protected thumbnailGradient(hue: number): string {
    return `linear-gradient(135deg, hsl(${hue} 45% 78%), hsl(${hue} 35% 55%))`;
  }
}
