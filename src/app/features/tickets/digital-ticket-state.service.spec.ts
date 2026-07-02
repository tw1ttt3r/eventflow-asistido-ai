import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';

import { DigitalTicketStateService } from '@features/tickets/digital-ticket-state.service';
import { findEventRegistration } from '@mock/event-registration.mock';

describe('DigitalTicketStateService', () => {
  it('should return seeded mock tickets', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(DigitalTicketStateService);

    expect(service.getTicket('tkt-1')?.eventTitle).toContain('Design Systems Lab');
  });

  it('should issue a ticket from registration', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(DigitalTicketStateService);
    const event = findEventRegistration('5')!;

    const ticket = service.issueFromRegistration(event, {
      fullName: 'Alexandra Rivera',
      email: 'alex@example.com',
      phone: '',
      termsAccepted: true,
    });

    expect(ticket.id).toBe('tkt-reg-5');
    expect(ticket.attendeeName).toBe('Alexandra Rivera');
    expect(ticket.host.email).toBe('maya.solano@eventflow.com');
    expect(service.getTicket('tkt-reg-5')?.ticketCode).toMatch(/^EF-/);
  });

  it('should return the same ticket when re-issuing for the same event', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(DigitalTicketStateService);
    const event = findEventRegistration('5')!;
    const form = {
      fullName: 'Alexandra Rivera',
      email: 'alex@example.com',
      phone: '',
      termsAccepted: true,
    };

    const first = service.issueFromRegistration(event, form);
    const second = service.issueFromRegistration(event, form);

    expect(second.ticketCode).toBe(first.ticketCode);
  });
});
