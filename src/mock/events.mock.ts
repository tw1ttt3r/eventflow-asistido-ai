import type { EventItem, EventsSparkline, EventsSummary } from '@features/events/events.model';
import { buildEventsSparkline, summarizeEvents } from '@features/events/events.model';
import { MOCK_SESSION_USER_ID } from '@mock/session.mock';

export { MOCK_SESSION_USER_ID };

export const MOCK_EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Intro to Hand Lettering: Beginner Workshop',
    dateLabel: 'Mar 24, 2026',
    timeLabel: '10:00 AM',
    venue: 'Studio 3, Harbor House',
    status: 'published',
    ticketsLeft: 12,
    imageHue: 210,
    createdByUserId: MOCK_SESSION_USER_ID,
  },
  {
    id: '2',
    title: 'Startup Founders Networking — Downtown Loft',
    dateLabel: 'Apr 02, 2026',
    timeLabel: '6:30 PM',
    venue: 'Downtown Loft, 5th Ave',
    status: 'closed',
    ticketsLeft: 0,
    imageHue: 260,
    createdByUserId: 'user-2',
  },
  {
    id: '3',
    title: 'Pottery Night: Wheel Throwing Basics',
    dateLabel: 'Apr 12, 2026',
    timeLabel: '7:00 PM',
    venue: 'Makers Lab',
    status: 'published',
    ticketsLeft: 6,
    imageHue: 30,
    createdByUserId: MOCK_SESSION_USER_ID,
  },
  {
    id: '4',
    title: 'Sunrise Yoga in the Park',
    dateLabel: 'May 01, 2026',
    timeLabel: '6:00 AM',
    venue: 'Riverside Park',
    status: 'published',
    ticketsLeft: 20,
    imageHue: 160,
    createdByUserId: 'user-3',
  },
];

/** Resumen derivado de `MOCK_EVENTS`. */
export const MOCK_EVENTS_SUMMARY: EventsSummary = summarizeEvents(MOCK_EVENTS);

/** Sparkline derivada de la evolución acumulada de `MOCK_EVENTS`. */
export const MOCK_EVENTS_SPARKLINE: EventsSparkline = buildEventsSparkline(MOCK_EVENTS);
