import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { ProfileMyEvent } from '@features/profile/profile.model';
import { EfButton } from '@shared/ui/atoms/button/button';

@Component({
  selector: 'ef-my-event-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfButton],
  template: `
    <article class="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div class="flex gap-3">
        <div
          class="size-14 shrink-0 rounded-full ring-2 ring-white"
          [style.background]="thumbnailGradient(event().imageHue)"
          aria-hidden="true"
        ></div>

        <div class="min-w-0 flex-1">
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-serif text-sm font-bold leading-snug text-slate-900">
              {{ event().title }}
            </h3>
            <span
              class="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
              [class.bg-ef-blue/10]="event().status === 'registered'"
              [class.text-ef-blue]="event().status === 'registered'"
              [class.bg-slate-100]="event().status === 'attended'"
              [class.text-slate-600]="event().status === 'attended'"
            >
              {{ statusLabel() }}
            </span>
          </div>

          <p class="mt-1 text-xs text-slate-500">
            {{ event().dateLabel }} · {{ event().timeLabel }}
          </p>
          <p class="mt-0.5 text-xs text-slate-500">{{ event().venueLabel }}</p>
        </div>
      </div>

      <div class="mt-3 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
        <p class="min-w-0 truncate text-xs">
          <span class="text-slate-500">{{ event().rolePrefix }}:</span>
          <span
            [class.text-ef-purple]="event().roleHighlight"
            [class.font-semibold]="event().roleHighlight"
            [class.text-slate-600]="!event().roleHighlight"
          >
            {{ event().roleName }}
          </span>
        </p>

        @switch (event().actionKind) {
          @case ('view-ticket') {
            <ef-button
              variant="blue"
              size="sm"
              [fullWidth]="false"
              (pressed)="viewTicketPress.emit(event().ticketId ?? event().id)"
            >
              {{ event().actionLabel }}
            </ef-button>
          }
          @case ('label') {
            <span class="shrink-0 text-xs text-slate-500">{{ event().actionLabel }}</span>
          }
        }
      </div>
    </article>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MyEventCard {
  readonly event = input.required<ProfileMyEvent>();

  readonly viewTicketPress = output<string>();

  protected statusLabel(): string {
    return this.event().status === 'registered' ? 'Registered' : 'Attended';
  }

  protected thumbnailGradient(hue: number): string {
    return `linear-gradient(135deg, hsl(${hue} 45% 78%), hsl(${hue} 35% 55%))`;
  }
}
