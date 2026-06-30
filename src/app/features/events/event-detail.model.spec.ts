import { describe, expect, it } from 'vitest';

import { getBookedPercent, getSpotsLeft } from '@features/events/event-detail.model';
import { MOCK_EVENT_DETAILS } from '@mock/event-detail.mock';

describe('event detail helpers', () => {
  const rooftop = MOCK_EVENT_DETAILS[0]!;

  it('should compute spots left and booked percent', () => {
    expect(getSpotsLeft(rooftop)).toBe(12);
    expect(getBookedPercent(rooftop)).toBe(76);
  });

  it('should return zero percent when capacity is zero', () => {
    expect(getBookedPercent({ ...rooftop, capacity: 0, spotsBooked: 0 })).toBe(0);
  });
});
