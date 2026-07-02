export interface DigitalTicketHost {
  name: string;
  email: string;
}

export interface DigitalTicketDetail {
  id: string;
  eventId?: string;
  ticketCode: string;
  categoryLabel: string;
  seriesLabel: string;
  admitCountLabel: string;
  eventTitle: string;
  attendeeName: string;
  ticketTypeLabel: string;
  whenLabel: string;
  whereLabel: string;
  imageHue: number;
  qrSeed: string;
  host: DigitalTicketHost;
}

export function formatTicketCodeSuffix(ticketCode: string): string {
  const parts = ticketCode.split('-');
  if (parts.length >= 2) {
    return `${parts[0]}-${parts[1]}-`;
  }
  return `${ticketCode.slice(0, 6)}-`;
}

export function parseRegistrationHost(hostLine: string): DigitalTicketHost {
  const match = hostLine.match(/Hosted by ([^—-]+)/i);
  const name = match?.[1]?.trim() ?? 'Event host';
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '.')
    .replace(/^\.+|\.+$/g, '');

  return {
    name,
    email: `${slug || 'host'}@eventflow.com`,
  };
}

export function generateTicketCode(seed: string): string {
  let hash = 0;
  const input = `${seed}-${Date.now()}`;

  for (let index = 0; index < input.length; index++) {
    hash = (hash * 31 + input.charCodeAt(index)) % 1_000_000;
  }

  const partA = (hash % 0xffff).toString(16).toUpperCase().padStart(4, '0');
  const partB = ((hash >> 8) % 0xffff).toString(16).toUpperCase().padStart(4, '0');
  return `EF-${partA}-${partB}`;
}

export function buildHostMailto(ticket: DigitalTicketDetail): string {
  const subject = encodeURIComponent(`Question about ${ticket.eventTitle}`);
  const body = encodeURIComponent(
    `Hi ${ticket.host.name},\n\nI have a question about my ticket (${ticket.ticketCode}).\n\nThanks,\n${ticket.attendeeName}`,
  );
  return `mailto:${ticket.host.email}?subject=${subject}&body=${body}`;
}

const PROFILE_UPCOMING_EVENT_ROUTE: Record<string, string> = {
  'up-1': '1',
};

export function resolveEventRouteId(ticket: DigitalTicketDetail): string | null {
  if (ticket.id.startsWith('tkt-reg-')) {
    return ticket.id.slice('tkt-reg-'.length);
  }

  const eventId = ticket.eventId;
  if (!eventId) {
    return null;
  }

  if (eventId.startsWith('up-reg-')) {
    return eventId.slice('up-reg-'.length);
  }

  if (eventId.startsWith('up-')) {
    return PROFILE_UPCOMING_EVENT_ROUTE[eventId] ?? null;
  }

  return eventId;
}
