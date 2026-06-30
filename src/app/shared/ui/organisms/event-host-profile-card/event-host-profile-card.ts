import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { EventDetailHost } from '@features/events/event-detail.model';
import { EfLink } from '@shared/ui/atoms/link/link';

@Component({
  selector: 'ef-event-host-profile-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfLink],
  template: `
    <section class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div class="flex items-start gap-4">
        <div
          class="flex size-16 shrink-0 items-center justify-center rounded-full bg-ef-lavender text-xl font-bold text-ef-purple"
          aria-hidden="true"
        >
          {{ host().initials }}
        </div>
        <div class="min-w-0 flex-1">
          <div class="flex items-start justify-between gap-2">
            <div>
              <h2 class="text-base font-bold text-slate-900">{{ host().name }}</h2>
              <p class="text-sm text-slate-500">{{ host().title }}</p>
            </div>
            <ef-link (pressed)="viewProfilePress.emit()">View profile</ef-link>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ host().bio }}</p>
        </div>
      </div>
    </section>
  `,
})
export class EventHostProfileCard {
  readonly host = input.required<EventDetailHost>();

  readonly viewProfilePress = output<void>();
}
