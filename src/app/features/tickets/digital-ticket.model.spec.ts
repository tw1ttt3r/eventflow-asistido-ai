import { describe, expect, it } from 'vitest';

import {
  buildHostMailto,
  formatTicketCodeSuffix,
  generateTicketCode,
  parseRegistrationHost,
  resolveEventRouteId,
} from '@features/tickets/digital-ticket.model';

function ticketFixture(
  overrides: Partial<Parameters<typeof resolveEventRouteId>[0]> = {},
): Parameters<typeof resolveEventRouteId>[0] {
  return {
    id: 'tkt-1',
    ticketCode: 'EF-4A7C-9B2F',
    categoryLabel: 'Meetup',
    seriesLabel: 'Series',
    admitCountLabel: 'Admit 1',
    eventTitle: 'Design Systems Lab',
    attendeeName: 'Jane Doe',
    ticketTypeLabel: 'General',
    whenLabel: 'Sat • Apr 23, 2026 • 6:30 PM',
    whereLabel: 'Oakland',
    imageHue: 210,
    qrSeed: 'EF-4A7C-9B2F',
    host: { name: 'Rachel Kim', email: 'rachel.kim@eventflow.com' },
    ...overrides,
  };
}

describe('digital-ticket.model', () => {
  it('should format ticket code suffix for display', () => {
    expect(formatTicketCodeSuffix('EF-4A7C-9B2F')).toBe('EF-4A7C-');
    expect(formatTicketCodeSuffix('PLAIN')).toBe('PLAIN-');
  });

  it('should parse host contact from registration copy', () => {
    expect(
      parseRegistrationHost('Hosted by Maya Solano — Sound healer and community facilitator'),
    ).toEqual({
      name: 'Maya Solano',
      email: 'maya.solano@eventflow.com',
    });

    expect(parseRegistrationHost('Hosted by Ada-Lovelace')).toEqual({
      name: 'Ada',
      email: 'ada@eventflow.com',
    });

    expect(parseRegistrationHost('No host prefix')).toEqual({
      name: 'Event host',
      email: 'event.host@eventflow.com',
    });

    expect(parseRegistrationHost('Hosted by ---')).toEqual({
      name: 'Event host',
      email: 'event.host@eventflow.com',
    });

    expect(parseRegistrationHost('Hosted by .Maya.')).toEqual({
      name: '.Maya.',
      email: 'maya@eventflow.com',
    });
  });

  it('should generate eventflow ticket codes', () => {
    const code = generateTicketCode('event-5');
    expect(code).toMatch(/^EF-[0-9A-F]{4}-[0-9A-F]{4}$/);

    const emojiCode = generateTicketCode('event-🎵');
    expect(emojiCode).toMatch(/^EF-[0-9A-F]{4}-[0-9A-F]{4}$/);
  });

  it('should resolve event route id from registration ticket id', () => {
    expect(resolveEventRouteId(ticketFixture({ id: 'tkt-reg-5', eventId: '5' }))).toBe('5');
  });

  it('should resolve event route ids from profile and registration event ids', () => {
    expect(resolveEventRouteId(ticketFixture({ id: 'tkt-2', eventId: 'up-reg-9' }))).toBe('9');
    expect(resolveEventRouteId(ticketFixture({ id: 'tkt-2', eventId: 'up-1' }))).toBe('1');
    expect(resolveEventRouteId(ticketFixture({ id: 'tkt-2', eventId: 'up-missing' }))).toBeNull();
    expect(resolveEventRouteId(ticketFixture({ id: 'tkt-2', eventId: '42' }))).toBe('42');
    expect(resolveEventRouteId(ticketFixture({ id: 'tkt-2', eventId: undefined }))).toBeNull();
  });

  it('should build host mailto link', () => {
    const href = buildHostMailto(ticketFixture());

    expect(href).toContain('mailto:rachel.kim@eventflow.com');
    expect(href).toContain('Design%20Systems%20Lab');
  });
});

