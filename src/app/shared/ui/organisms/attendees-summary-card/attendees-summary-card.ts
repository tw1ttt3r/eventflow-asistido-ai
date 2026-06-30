import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { EfButton } from '@shared/ui/atoms/button/button';
import type { AttendeesSummary } from '@features/events/attendees.model';

@Component({
  selector: 'ef-attendees-summary-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfButton],
  template: `
    <section class="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div class="flex items-start gap-3">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-ef-blue/10 text-ef-blue"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" class="size-5">
            <circle cx="9" cy="8" r="3" fill="currentColor" opacity="0.25" />
            <circle cx="16" cy="9" r="2.5" fill="currentColor" opacity="0.25" />
            <path
              d="M4 19c.8-2.8 2.8-4.5 5.5-4.5s4.7 1.7 5.5 4.5M14 19c.5-1.8 2-3 3.8-3"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div class="min-w-0 flex-1">
          <h2 class="text-sm font-bold text-slate-900">Attendees</h2>
          <p class="mt-0.5 text-xs text-slate-500">
            {{ summary().total }} total · {{ summary().checkedIn }} checked-in ·
            {{ summary().notCheckedIn }} not checked
          </p>
        </div>
      </div>

      <div class="mt-4 grid grid-cols-2 gap-3">
        <ef-button variant="blue" [fullWidth]="true" (pressed)="exportPress.emit()">Export</ef-button>
        <ef-button variant="soft" [fullWidth]="true" (pressed)="managePress.emit()">Manage</ef-button>
      </div>
    </section>
  `,
})
export class AttendeesSummaryCard {
  readonly summary = input.required<AttendeesSummary>();

  readonly exportPress = output<void>();
  readonly managePress = output<void>();
}
