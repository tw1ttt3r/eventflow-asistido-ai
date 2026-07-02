import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { DigitalTicketHost } from '@features/tickets/digital-ticket.model';
import { EfIcon } from '@shared/ui/atoms/icon/icon';

@Component({
  selector: 'ef-digital-ticket-help-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon],
  template: `
    <section class="rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
      <div class="flex items-center justify-between gap-3 px-4 py-3">
        <div>
          <p class="text-sm text-slate-500">Need help?</p>
          <button
            type="button"
            class="mt-0.5 text-sm font-semibold text-ef-purple"
            (click)="contactPress.emit()"
          >
            Contact host • refunds &amp; policies
          </button>
        </div>
        <div
          class="flex size-10 shrink-0 items-center justify-center rounded-full bg-ef-lavender text-ef-purple"
          aria-hidden="true"
        >
          <ef-icon name="info-circle" size="sm" />
        </div>
      </div>

      @if (expanded()) {
        <div class="space-y-3 border-t border-slate-100 px-4 py-4 text-sm">
          <div>
            <p class="text-xs text-slate-500">Host</p>
            <p class="font-semibold text-slate-900">{{ host().name }}</p>
            <a class="font-medium text-ef-purple" [href]="mailtoHref()">{{ host().email }}</a>
          </div>
          <p class="text-slate-600">
            Refunds are available up to 48 hours before the event. Late cancellations may be reviewed
            by the host on a case-by-case basis.
          </p>
          <a class="font-semibold text-ef-purple" [href]="policiesHref()" target="_blank" rel="noopener">
            Read full refunds &amp; policies
          </a>
        </div>
      }
    </section>
  `,
})
export class DigitalTicketHelpCard {
  readonly host = input.required<DigitalTicketHost>();
  readonly mailtoHref = input.required<string>();
  readonly policiesHref = input('https://eventflow.com/policies/refunds');
  readonly expanded = input(false);

  readonly contactPress = output<void>();
}
