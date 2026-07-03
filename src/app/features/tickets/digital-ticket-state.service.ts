import { Injectable, signal } from '@angular/core';

import type {
  EventRegistrationDetail,
  RegistrationFormValue,
} from '@features/events/event-registration.model';
import {
  generateTicketCode,
  parseRegistrationHost,
  type DigitalTicketDetail,
} from '@features/tickets/digital-ticket.model';
import { MOCK_DIGITAL_TICKETS } from '@mock/digital-ticket.mock';

@Injectable({ providedIn: 'root' })
export class DigitalTicketStateService {
  private readonly issuedTickets = signal<Record<string, DigitalTicketDetail>>({});

  getTicket(ticketId: string): DigitalTicketDetail | undefined {
    return this.issuedTickets()[ticketId] ?? MOCK_DIGITAL_TICKETS[ticketId];
  }

  issueFromRegistration(
    event: EventRegistrationDetail,
    form: RegistrationFormValue,
  ): DigitalTicketDetail {
    const ticketId = `tkt-reg-${event.id}`;
    const existing = this.getTicket(ticketId);
    if (existing) {
      return existing;
    }

    const ticketCode = generateTicketCode(event.id);
    const ticket: DigitalTicketDetail = {
      id: ticketId,
      eventId: event.id,
      ticketCode,
      categoryLabel: event.subtitle,
      seriesLabel: event.title,
      admitCountLabel: 'Admit 1',
      eventTitle: event.title,
      attendeeName: form.fullName.trim(),
      ticketTypeLabel: event.priceLabel === 'Free' ? 'General' : event.priceLabel,
      whenLabel: `${event.dateLabel} • ${event.timeLabel}`,
      whereLabel: event.venue,
      imageHue: event.imageHue,
      qrSeed: ticketCode,
      host: parseRegistrationHost(event.host),
    };

    this.issuedTickets.update((state) => ({ ...state, [ticketId]: ticket }));
    return ticket;
  }

  reset(): void {
    this.issuedTickets.set({});
  }
}
