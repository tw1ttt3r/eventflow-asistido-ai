import type { EventRegistrationDetail } from '@features/events/event-registration.model';

export const MOCK_EVENT_REGISTRATIONS: EventRegistrationDetail[] = [
  {
    id: '5',
    title: 'Sunset Sound Bath',
    subtitle: 'Community Wellness',
    description:
      'An evening of guided sound healing with crystal bowls and gentle movement to unwind and connect.',
    dateLabel: 'Sat, Apr 24',
    timeLabel: '6:30 PM',
    venue: 'Riverside Studio, Downtown',
    spotsLeft: 5,
    priceLabel: 'Free',
    imageHue: 280,
    whatToBring: 'Yoga mat, water bottle, and a light blanket for extra comfort.',
    host: 'Hosted by Maya Solano — Sound healer and community facilitator',
    duration: '90 minutes',
    doorsOpen: 'Doors open at 6:00 PM',
  },
  {
    id: '1',
    title: 'Intro to Hand Lettering',
    subtitle: 'Beginner Workshop',
    description:
      'Learn foundational strokes, spacing, and layout techniques in a relaxed studio setting.',
    dateLabel: 'Mar 24, 2026',
    timeLabel: '10:00 AM',
    venue: 'Studio 3, Harbor House',
    spotsLeft: 12,
    priceLabel: 'Free',
    imageHue: 210,
    whatToBring: 'Notebook, pencil, and your favorite quote to letter.',
    host: 'Hosted by Lena Ortiz — Lettering artist and workshop facilitator',
    duration: '2 hours',
    doorsOpen: 'Doors open at 9:45 AM',
  },
  {
    id: '3',
    title: 'Pottery Night',
    subtitle: 'Wheel Throwing Basics',
    description: 'Hands-on introduction to centering clay and shaping your first bowl on the wheel.',
    dateLabel: 'Apr 12, 2026',
    timeLabel: '7:00 PM',
    venue: 'Makers Lab',
    spotsLeft: 6,
    priceLabel: 'Free',
    imageHue: 30,
    whatToBring: 'Apron or clothes you do not mind getting clay on.',
    host: 'Hosted by Marco Reyes — Ceramicist and studio instructor',
    duration: '2.5 hours',
    doorsOpen: 'Doors open at 6:45 PM',
  },
  {
    id: '4',
    title: 'Sunrise Yoga in the Park',
    subtitle: 'Outdoor Session',
    description: 'Start the day with gentle flow and breathwork surrounded by nature.',
    dateLabel: 'May 01, 2026',
    timeLabel: '6:00 AM',
    venue: 'Riverside Park',
    spotsLeft: 20,
    priceLabel: 'Free',
    imageHue: 160,
    whatToBring: 'Yoga mat, water bottle, and light layers for cool mornings.',
    host: 'Hosted by Priya Nair — Certified yoga instructor',
    duration: '75 minutes',
    doorsOpen: 'Check-in from 5:45 AM',
  },
];

export function findEventRegistration(eventId: string): EventRegistrationDetail | undefined {
  return MOCK_EVENT_REGISTRATIONS.find((event) => event.id === eventId);
}
