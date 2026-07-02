import { describe, expect, it } from 'vitest';

import {
  applyFormToEventEdit,
  eventEditToFormValue,
  validateEventEditForm,
} from '@features/events/event-edit.model';
import { MOCK_EVENT_EDIT } from '@mock/event-edit.mock';

describe('event-edit.model', () => {
  const base = MOCK_EVENT_EDIT['1']!;

  it('should map edit data to form value', () => {
    const form = eventEditToFormValue(base);
    expect(form.title).toContain('Design Systems Workshop');
    expect(form.status).toBe('published');
  });

  it('should validate required fields', () => {
    expect(
      validateEventEditForm({
        title: '',
        description: 'Desc',
        bannerUrl: null,
        dateLabel: 'Tue',
        timeRangeLabel: '6 PM',
        status: 'published',
        location: 'Studio',
        capacity: 10,
      }),
    ).toBe('Title is required');
  });

  it('should apply form and recalculate spots left', () => {
    const form = eventEditToFormValue(base);
    const updated = applyFormToEventEdit(base, { ...form, capacity: 50 });

    expect(updated.capacity).toBe(50);
    expect(updated.spotsLeft).toBe(22);
    expect(updated.registrationStats.available).toBe(22);
  });
});
