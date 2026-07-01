import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { ProfileAttendedEvent } from '@features/profile/profile.model';
import { EfBadge } from '@shared/ui/atoms/badge/badge';
import { EfIcon } from '@shared/ui/atoms/icon/icon';

@Component({
  selector: 'ef-attended-event-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon, EfBadge],
  template: `
    <div class="flex items-start gap-3">
      <span
        class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-ef-lavender text-ef-purple"
        aria-hidden="true"
      >
        <ef-icon [name]="event().icon" size="sm" />
      </span>
      <div class="min-w-0 flex-1">
        <p class="text-sm font-semibold text-slate-900">{{ event().title }}</p>
        <p class="text-xs text-slate-500">{{ event().dateLabel }}</p>
      </div>
      @if (event().checkedIn) {
        <ef-badge tone="checked-in">Checked-in</ef-badge>
      }
    </div>
  `,
})
export class AttendedEventRow {
  readonly event = input.required<ProfileAttendedEvent>();
}
