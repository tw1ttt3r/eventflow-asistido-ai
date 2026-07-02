import type { DigitalTicketDetail } from '@features/tickets/digital-ticket.model';

export const MOCK_DIGITAL_TICKETS: Record<string, DigitalTicketDetail> = {
  'tkt-1': {
    id: 'tkt-1',
    eventId: 'up-1',
    ticketCode: 'EF-4A7C-9B2F',
    categoryLabel: 'Community Meetup',
    seriesLabel: 'Design Systems & Networking',
    admitCountLabel: 'Admit 1',
    eventTitle: 'Design Systems Lab: Building Products People Love',
    attendeeName: 'Jane Doe',
    ticketTypeLabel: 'General',
    whenLabel: 'Sat • Apr 23, 2026 • 6:30 PM',
    whereLabel: 'Blue Oak Studio — 412 Harbor Ave, Oakland, CA',
    imageHue: 210,
    qrSeed: 'EF-4A7C-9B2F',
    host: {
      name: 'Rachel Kim',
      email: 'rachel.kim@eventflow.com',
    },
  },
  'tkt-2': {
    id: 'tkt-2',
    eventId: '3',
    ticketCode: 'EF-8D1E-3C4A',
    categoryLabel: 'Workshop',
    seriesLabel: 'Design Thinking Intensive',
    admitCountLabel: 'Admit 1',
    eventTitle: 'Design Thinking Workshop: From Insight to Prototype',
    attendeeName: 'Jane Doe',
    ticketTypeLabel: 'Workshop Entry',
    whenLabel: 'Sat • Jul 10, 2026 • 10:00 AM',
    whereLabel: 'Harbor House Studio — 88 Pier Ave, Oakland, CA',
    imageHue: 250,
    qrSeed: 'EF-8D1E-3C4A',
    host: {
      name: 'Lena Ortiz',
      email: 'lena.ortiz@eventflow.com',
    },
  },
  'tkt-3': {
    id: 'tkt-3',
    eventId: '3',
    ticketCode: 'EF-2F9B-7E1D',
    categoryLabel: 'Add-on',
    seriesLabel: 'Networking Lounge Access',
    admitCountLabel: 'Admit 1',
    eventTitle: 'Post-Event Networking Lounge',
    attendeeName: 'Jane Doe',
    ticketTypeLabel: 'Networking Add-on',
    whenLabel: 'Sat • Jul 10, 2026 • 12:30 PM',
    whereLabel: 'Harbor House Studio — Lounge, Oakland, CA',
    imageHue: 280,
    qrSeed: 'EF-2F9B-7E1D',
    host: {
      name: 'Marco Reyes',
      email: 'marco.reyes@eventflow.com',
    },
  },
};

/** Maps upcoming-event ids from profile to ticket ids. */
export const UPCOMING_EVENT_TICKET_MAP: Record<string, string> = {
  'up-1': 'tkt-1',
};

export function findDigitalTicket(ticketId: string): DigitalTicketDetail | undefined {
  return MOCK_DIGITAL_TICKETS[ticketId];
}

export function resolveTicketId(id: string): string {
  if (id.startsWith('up-reg-')) {
    return `tkt-reg-${id.replace('up-reg-', '')}`;
  }
  return UPCOMING_EVENT_TICKET_MAP[id] ?? id;
}
