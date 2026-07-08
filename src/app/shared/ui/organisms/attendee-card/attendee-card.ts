import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { EfBadge } from '@shared/ui/atoms/badge/badge';
import { EfLink } from '@shared/ui/atoms/link/link';
import type { Attendee } from '@features/events/attendees.model';

@Component({
  selector: 'ef-attendee-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfBadge, EfLink],
  template: `
    <article class="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div class="flex items-start gap-3">
        <div
          class="flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          [style.background]="avatarGradient()"
          aria-hidden="true"
        >
          {{ attendee().initials }}
        </div>

        <div class="min-w-0 flex-1">
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0">
              <h2 class="truncate text-sm font-bold text-slate-900">{{ attendee().fullName }}</h2>
              <ef-link [href]="'mailto:' + attendee().email">{{ attendee().email }}</ef-link>
            </div>
            <div class="flex shrink-0 items-center gap-2">
              <ef-badge [tone]="checkedIn() ? 'checked-in' : 'not-checked-in'">
                {{ checkedIn() ? 'Checked-in' : 'Not checked-in' }}
              </ef-badge>
            </div>
          </div>
        </div>
      </div>
    </article>
  `,
})
export class AttendeeCard {
  readonly attendee = input.required<Attendee>();
  readonly checkedIn = input(false);

  protected avatarGradient(): string {
    const hue = this.attendee().avatarHue;
    return `linear-gradient(135deg, hsl(${hue} 55% 55%), hsl(${hue} 45% 40%))`;
  }
}
