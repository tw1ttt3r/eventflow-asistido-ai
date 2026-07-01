import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { ProfileDigitalTicket } from '@features/profile/profile.model';
import { EfIcon } from '@shared/ui/atoms/icon/icon';

@Component({
  selector: 'ef-ticket-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon],
  template: `
    <div class="flex items-center gap-3">
      <div
        class="flex h-16 w-12 shrink-0 items-center justify-center rounded-2xl bg-ef-blue/10 text-ef-blue"
        aria-hidden="true"
      >
        <ef-icon name="qr-code" size="md" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="text-sm font-semibold text-slate-900">
          {{ ticket().label }} · {{ ticket().quantityLabel }}
        </p>
        <p class="text-xs text-slate-500">Valid {{ ticket().validUntilLabel }}</p>
      </div>
    </div>
  `,
})
export class TicketRow {
  readonly ticket = input.required<ProfileDigitalTicket>();
}
