import type { Attendee, EventAttendeesContext } from '@features/events/attendees.model';

const WORKSHOP_ATTENDEES: Attendee[] = [
  {
    id: 'a1',
    fullName: 'Aria Patel',
    email: 'aria.patel@example.com',
    initials: 'AP',
    avatarHue: 210,
    checkedIn: true,
  },
  {
    id: 'a2',
    fullName: 'Mateo Ruiz',
    email: 'mateo.ruiz@example.com',
    initials: 'MR',
    avatarHue: 30,
    checkedIn: false,
  },
  {
    id: 'a3',
    fullName: 'Lila Nguyen',
    email: 'lila.nguyen@example.com',
    initials: 'LN',
    avatarHue: 280,
    checkedIn: true,
  },
  {
    id: 'a4',
    fullName: 'Noah Kim',
    email: 'noah.kim@example.com',
    initials: 'NK',
    avatarHue: 160,
    checkedIn: false,
  },
];

const EVENT_CONTEXTS: EventAttendeesContext[] = [
  {
    eventId: '1',
    eventTitle: 'Design Systems Workshop',
    eventDateLabel: 'Mar 28',
  },
  {
    eventId: '3',
    eventTitle: 'Pottery Night: Wheel Throwing Basics',
    eventDateLabel: 'Apr 12, 2026',
  },
];

const ATTENDEES_BY_EVENT: Record<string, Attendee[]> = {
  '1': WORKSHOP_ATTENDEES.map((attendee) => ({ ...attendee })),
  '3': [
    {
      id: 'p1',
      fullName: 'Sofia Chen',
      email: 'sofia.chen@example.com',
      initials: 'SC',
      avatarHue: 200,
      checkedIn: true,
    },
    {
      id: 'p2',
      fullName: 'Diego Alvarez',
      email: 'diego.alvarez@example.com',
      initials: 'DA',
      avatarHue: 25,
      checkedIn: false,
    },
    {
      id: 'p3',
      fullName: 'Emma Walsh',
      email: 'emma.walsh@example.com',
      initials: 'EW',
      avatarHue: 320,
      checkedIn: true,
    },
  ],
};

export function findEventAttendeesContext(eventId: string): EventAttendeesContext | undefined {
  return EVENT_CONTEXTS.find((context) => context.eventId === eventId);
}

export function findEventAttendees(eventId: string): Attendee[] {
  return (ATTENDEES_BY_EVENT[eventId] ?? []).map((attendee) => ({ ...attendee }));
}
