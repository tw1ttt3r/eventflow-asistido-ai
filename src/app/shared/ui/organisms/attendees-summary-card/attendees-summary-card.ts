import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { EfButton } from '@shared/ui/atoms/button/button';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import type { AttendeesSummary } from '@features/events/attendees.model';

@Component({
  selector: 'ef-attendees-summary-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfButton, EfIcon],
  template: `
    <section class="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div class="flex items-start gap-3">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-ef-blue/10 text-ef-blue"
          aria-hidden="true"
        >
          <ef-icon name="users-group" size="md" />
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
