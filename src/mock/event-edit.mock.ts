import type { EventEditData } from '@features/events/event-edit.model';
import { MOCK_SESSION_USER_ID } from '@mock/session.mock';

const REGISTRATION_SPARKLINE = {
  totalsLine: '0,70 40,55 80,45 120,38 160,32 200,28 240,22 280,18 320,15',
  publishedLine: '0,72 40,58 80,50 120,42 160,36 200,30 240,26 280,22 320,20',
};

export const MOCK_EVENT_EDIT: Record<string, EventEditData> = {
  '1': {
    eventId: '1',
    title: 'Design Systems Workshop: Building Consistent Experiences',
    description:
      'Join us for a hands-on workshop exploring design tokens, component libraries, and documentation patterns that keep product teams aligned at scale.',
    bannerHue: 210,
    bannerUrl: null,
    dateLabel: 'Tue, Aug 23, 2026',
    timeRangeLabel: '6:30 PM – 8:30 PM',
    status: 'published',
    location: 'CoLab Studio — 3rd Floor, 212 Market St',
    capacity: 40,
    spotsLeft: 12,
    registrationStats: {
      registered: 28,
      available: 12,
      capacity: 40,
      sparkline: REGISTRATION_SPARKLINE,
    },
    audit: {
      updatedBy: 'Rachel Kim',
      updatedAtLabel: 'Jun 12, 2026 at 09:14 AM',
      version: 3,
    },
  },
  '3': {
    eventId: '3',
    title: 'Pottery Night: Wheel Throwing Basics',
    description:
      'A relaxed evening learning wheel throwing fundamentals. All materials included — just bring an apron and curiosity.',
    bannerHue: 30,
    bannerUrl: null,
    dateLabel: 'Apr 12, 2026',
    timeRangeLabel: '7:00 PM – 9:00 PM',
    status: 'published',
    location: 'Makers Lab, 44 Clay Ave',
    capacity: 18,
    spotsLeft: 6,
    registrationStats: {
      registered: 12,
      available: 6,
      capacity: 18,
      sparkline: REGISTRATION_SPARKLINE,
    },
    audit: {
      updatedBy: 'Jane Doe',
      updatedAtLabel: 'May 02, 2026 at 04:22 PM',
      version: 2,
    },
  },
};

export function findEventEdit(eventId: string): EventEditData | undefined {
  return MOCK_EVENT_EDIT[eventId];
}

export function isEventEditOwned(eventId: string, userId: string | null | undefined): boolean {
  if (!userId) {
    return false;
  }
  const ownedIds = ['1', '3'];
  return ownedIds.includes(eventId) && userId === MOCK_SESSION_USER_ID;
}
