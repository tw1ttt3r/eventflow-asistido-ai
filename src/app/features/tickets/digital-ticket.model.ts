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

const HOSTED_BY_PREFIX = 'hosted by ';

export function formatTicketCodeSuffix(ticketCode: string): string {
  const parts = ticketCode.split('-');
  if (parts.length >= 2) {
    return `${parts[0]}-${parts[1]}-`;
  }
  return `${ticketCode.slice(0, 6)}-`;
}

function indexOfHostNameSeparator(text: string): number {
  const emDash = text.indexOf('—');
  const hyphen = text.indexOf('-');
  const candidates = [emDash, hyphen].filter((index) => index >= 0);
  return candidates.length === 0 ? -1 : Math.min(...candidates);
}

function extractHostName(remainder: string): string {
  const separatorIndex = indexOfHostNameSeparator(remainder);
  const raw = separatorIndex === -1 ? remainder : remainder.slice(0, separatorIndex);
  const trimmed = raw.trim();
  return trimmed || 'Event host';
}

function slugifyHostName(name: string): string {
  let slug = '';
  let previousWasSeparator = false;

  for (const char of name.toLowerCase()) {
    const isAlphanumeric = (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
    if (isAlphanumeric) {
      slug += char;
      previousWasSeparator = false;
      continue;
    }

    if (!previousWasSeparator && slug.length > 0) {
      slug += '.';
      previousWasSeparator = true;
    }
  }

  while (slug.startsWith('.')) {
    slug = slug.slice(1);
  }
  while (slug.endsWith('.')) {
    slug = slug.slice(0, -1);
  }

  return slug;
}

export function parseRegistrationHost(hostLine: string): DigitalTicketHost {
  const prefixIndex = hostLine.toLowerCase().indexOf(HOSTED_BY_PREFIX);
  const name =
    prefixIndex === -1
      ? 'Event host'
      : extractHostName(hostLine.slice(prefixIndex + HOSTED_BY_PREFIX.length));

  return {
    name,
    email: `${slugifyHostName(name) || 'host'}@eventflow.com`,
  };
}

export function generateTicketCode(seed: string): string {
  let hash = 0;
  const input = `${seed}-${Date.now()}`;

  for (let index = 0; index < input.length; index++) {
    const codePoint = input.codePointAt(index) ?? 0;
    hash = (hash * 31 + codePoint) % 1_000_000;
    if (codePoint > 0xffff) {
      index++;
    }
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

function stripPrefix(value: string, prefix: string): string {
  return value.slice(prefix.length);
}

function resolveFromRegistrationTicketId(ticketId: string): string | null {
  if (!ticketId.startsWith('tkt-reg-')) {
    return null;
  }
  return stripPrefix(ticketId, 'tkt-reg-');
}

function resolveFromEventId(eventId: string): string | null {
  if (eventId.startsWith('up-reg-')) {
    return stripPrefix(eventId, 'up-reg-');
  }

  if (eventId.startsWith('up-')) {
    return PROFILE_UPCOMING_EVENT_ROUTE[eventId] ?? null;
  }

  return eventId;
}

export function resolveEventRouteId(ticket: DigitalTicketDetail): string | null {
  const fromTicketId = resolveFromRegistrationTicketId(ticket.id);
  if (fromTicketId) {
    return fromTicketId;
  }

  if (!ticket.eventId) {
    return null;
  }

  return resolveFromEventId(ticket.eventId);
}
