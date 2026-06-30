import { describe, expect, it } from 'vitest';

import { filterAttendees, summarizeAttendees } from '@features/events/attendees.model';

const SAMPLE = [
  {
    id: '1',
    fullName: 'Aria Patel',
    email: 'aria@example.com',
    initials: 'AP',
    avatarHue: 200,
    checkedIn: true,
  },
  {
    id: '2',
    fullName: 'Mateo Ruiz',
    email: 'mateo@example.com',
    initials: 'MR',
    avatarHue: 30,
    checkedIn: false,
  },
];

describe('attendees helpers', () => {
  it('should summarize attendee check-in stats', () => {
    expect(summarizeAttendees(SAMPLE)).toEqual({
      total: 2,
      checkedIn: 1,
      notCheckedIn: 1,
    });
  });

  it('should filter by status and search query', () => {
    expect(filterAttendees(SAMPLE, 'checked-in', '').map((item) => item.id)).toEqual(['1']);
    expect(filterAttendees(SAMPLE, 'all', 'mateo').map((item) => item.id)).toEqual(['2']);
  });
});
