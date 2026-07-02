import { describe, expect, it } from 'vitest';

import {
  buildHostMailto,
  formatTicketCodeSuffix,
  generateTicketCode,
  parseRegistrationHost,
  resolveEventRouteId,
} from '@features/tickets/digital-ticket.model';

describe('digital-ticket.model', () => {
  it('should format ticket code suffix for display', () => {
    expect(formatTicketCodeSuffix('EF-4A7C-9B2F')).toBe('EF-4A7C-');
  });

  it('should parse host contact from registration copy', () => {
    expect(
      parseRegistrationHost('Hosted by Maya Solano — Sound healer and community facilitator'),
    ).toEqual({
      name: 'Maya Solano',
      email: 'maya.solano@eventflow.com',
    });
  });

  it('should generate eventflow ticket codes', () => {
    const code = generateTicketCode('event-5');
    expect(code).toMatch(/^EF-[0-9A-F]{4}-[0-9A-F]{4}$/);
  });

  it('should resolve event route id from registration ticket id', () => {
    expect(
      resolveEventRouteId({
        id: 'tkt-reg-5',
        eventId: '5',
        ticketCode: 'EF-TEST-CODE',
        categoryLabel: 'Workshop',
        seriesLabel: 'Sunset Sound Bath',
        admitCountLabel: 'Admit 1',
        eventTitle: 'Sunset Sound Bath',
        attendeeName: 'Alex',
        ticketTypeLabel: 'General',
        whenLabel: 'Sat • Apr 24 • 6:30 PM',
        whereLabel: 'Riverside Studio',
        imageHue: 280,
        qrSeed: 'EF-TEST-CODE',
        host: { name: 'Maya', email: 'maya@eventflow.com' },
      }),
    ).toBe('5');
  });

  it('should build host mailto link', () => {
    const href = buildHostMailto({
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
    });

    expect(href).toContain('mailto:rachel.kim@eventflow.com');
    expect(href).toContain('Design%20Systems%20Lab');
  });
});
