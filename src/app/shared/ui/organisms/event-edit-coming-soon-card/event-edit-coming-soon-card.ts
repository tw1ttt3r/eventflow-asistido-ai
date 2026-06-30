import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import type { EventItem } from '@features/events/events.model';
import { EfBadge } from '@shared/ui/atoms/badge/badge';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfButton } from '@shared/ui/atoms/button/button';
import { Subheading } from '@shared/ui/atoms/subheading/subheading';
import { InfoNoticeRow } from '@shared/ui/molecules/info-notice-row/info-notice-row';

@Component({
  selector: 'ef-event-edit-coming-soon-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfBadge, EfButton, EfIcon, Subheading, InfoNoticeRow],
  template: `
    <section
      class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100"
      aria-labelledby="event-edit-coming-soon-title"
    >
      <div
        class="relative bg-gradient-to-br from-ef-lavender via-white to-ef-blue/10 px-6 pb-8 pt-10 text-center"
      >
        <div
          class="pointer-events-none absolute -right-6 -top-6 size-28 rounded-full bg-ef-purple/10 blur-2xl"
          aria-hidden="true"
        ></div>
        <div
          class="pointer-events-none absolute -bottom-8 -left-4 size-24 rounded-full bg-ef-blue/10 blur-2xl"
          aria-hidden="true"
        ></div>

        <div
          class="relative mx-auto flex size-20 items-center justify-center rounded-3xl bg-white shadow-md ring-1 ring-slate-100"
          aria-hidden="true"
        >
          <ef-icon name="edit-document" size="xl" iconClass="text-ef-purple" />
        </div>

        <h2
          id="event-edit-coming-soon-title"
          class="relative mt-6 font-serif text-2xl font-bold leading-tight text-slate-900"
        >
          Editing coming soon
        </h2>
        <ef-subheading class="relative mx-auto mt-3 max-w-sm">
          Event editing is not available yet. This screen will be updated once the organizer edit
          mockup is ready.
        </ef-subheading>
      </div>

      <div class="space-y-4 px-5 pb-5">
        <article class="rounded-2xl bg-ef-surface p-4 ring-1 ring-slate-100">
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Selected event</p>

          <div class="flex gap-4">
            <div
              class="size-16 shrink-0 rounded-2xl"
              [style.background]="thumbnailGradient()"
              aria-hidden="true"
            ></div>

            <div class="min-w-0 flex-1 text-left">
              <div class="flex items-start justify-between gap-2">
                <h3 class="line-clamp-2 text-sm font-bold leading-snug text-slate-900">
                  {{ event().title }}
                </h3>
                <ef-badge [tone]="event().status">
                  {{ event().status === 'published' ? 'Published' : 'Closed' }}
                </ef-badge>
              </div>
              <p class="mt-2 text-xs text-slate-500">
                {{ event().dateLabel }} · {{ event().timeLabel }}
              </p>
              <p class="text-xs text-slate-500">{{ event().venue }}</p>
            </div>
          </div>
        </article>

        <ef-info-notice-row
          variant="duration"
          text="You can still manage attendees or review the public page while editing is in development."
        />

        <div class="grid grid-cols-2 gap-3">
          <ef-button variant="soft" [fullWidth]="true" (pressed)="attendeesPress.emit()">
            Attendees
          </ef-button>
          <ef-button variant="outline" [fullWidth]="true" (pressed)="viewPagePress.emit()">
            View page
          </ef-button>
        </div>

        <ef-button variant="purple" (pressed)="backPress.emit()">Back to events</ef-button>
      </div>
    </section>
  `,
})
export class EventEditComingSoonCard {
  readonly event = input.required<EventItem>();

  readonly backPress = output<void>();
  readonly attendeesPress = output<void>();
  readonly viewPagePress = output<void>();

  protected readonly thumbnailGradient = computed(() => {
    const hue = this.event().imageHue;
    return `linear-gradient(135deg, hsl(${hue} 45% 78%), hsl(${hue} 35% 55%))`;
  });
}
