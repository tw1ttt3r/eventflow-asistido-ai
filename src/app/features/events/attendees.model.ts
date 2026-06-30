export type AttendeeFilter = 'all' | 'checked-in' | 'not-checked-in';

export interface Attendee {
  id: string;
  fullName: string;
  email: string;
  initials: string;
  avatarHue: number;
  checkedIn: boolean;
}

export interface EventAttendeesContext {
  eventId: string;
  eventTitle: string;
  eventDateLabel: string;
}

export interface AttendeesSummary {
  total: number;
  checkedIn: number;
  notCheckedIn: number;
}

export function filterAttendees(
  attendees: Attendee[],
  filter: AttendeeFilter,
  query: string,
): Attendee[] {
  const normalizedQuery = query.trim().toLowerCase();

  return attendees
    .filter((attendee) => {
      if (filter === 'checked-in') {
        return attendee.checkedIn;
      }

      if (filter === 'not-checked-in') {
        return !attendee.checkedIn;
      }

      return true;
    })
    .filter((attendee) => {
      if (!normalizedQuery) {
        return true;
      }

      return (
        attendee.fullName.toLowerCase().includes(normalizedQuery) ||
        attendee.email.toLowerCase().includes(normalizedQuery)
      );
    })
    .sort((left, right) => left.fullName.localeCompare(right.fullName));
}

export function summarizeAttendees(attendees: Attendee[]): AttendeesSummary {
  const checkedIn = attendees.filter((attendee) => attendee.checkedIn).length;

  return {
    total: attendees.length,
    checkedIn,
    notCheckedIn: attendees.length - checkedIn,
  };
}
