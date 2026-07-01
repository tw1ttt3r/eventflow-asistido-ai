import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { ProfileDigitalTicket } from '@features/profile/profile.model';
import { SectionHeader } from '@shared/ui/molecules/section-header/section-header';
import { TicketRow } from '@shared/ui/molecules/ticket-row/ticket-row';

@Component({
  selector: 'ef-digital-tickets-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, TicketRow],
  template: `
    <section class="relative h-full rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <ef-section-header
        title="Digital Tickets"
        subtitle="Secure & ready"
        [count]="tickets().length"
      />

      <div class="mt-4 space-y-4">
        @for (ticket of tickets(); track ticket.id) {
          <ef-ticket-row [ticket]="ticket" />
        }
      </div>

      @if (tickets()[0]; as firstTicket) {
        <button
          type="button"
          class="absolute bottom-4 right-4 flex size-14 items-center justify-center rounded-full bg-ef-blue text-sm font-bold text-white shadow-md transition hover:opacity-95"
          (click)="openPress.emit(firstTicket.id)"
        >
          Open
        </button>
      }
    </section>
  `,
})
export class DigitalTicketsCard {
  readonly tickets = input.required<ProfileDigitalTicket[]>();

  readonly openPress = output<string>();
}
