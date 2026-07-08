import { describe, expect, it } from 'vitest';

import {
  applyFormToEventEdit,
  createEventEditDraft,
  eventEditToFormValue,
  generateEventId,
  mapEventEditToEventItem,
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
    const valid = {
      title: 'Title',
      description: 'Desc',
      bannerUrl: null,
      dateLabel: 'Tue',
      timeRangeLabel: '6 PM',
      status: 'published' as const,
      location: 'Studio',
      capacity: 10,
    };

    expect(validateEventEditForm({ ...valid, title: '' })).toBe('Title is required');
    expect(validateEventEditForm({ ...valid, description: '' })).toBe('Description is required');
    expect(validateEventEditForm({ ...valid, description: 'x'.repeat(1501) })).toBe(
      'Description must be 1500 characters or fewer',
    );
    expect(validateEventEditForm({ ...valid, dateLabel: '' })).toBe('Date is required');
    expect(validateEventEditForm({ ...valid, timeRangeLabel: '' })).toBe('Time is required');
    expect(validateEventEditForm({ ...valid, location: '' })).toBe('Location is required');
    expect(validateEventEditForm({ ...valid, capacity: 0 })).toBe('Capacity must be at least 1');
    expect(validateEventEditForm(valid)).toBeNull();
  });


  it('should apply form and recalculate spots left', () => {
    const form = eventEditToFormValue(base);
    const updated = applyFormToEventEdit(base, { ...form, capacity: 50 });

    expect(updated.capacity).toBe(50);
    expect(updated.spotsLeft).toBe(22);
    expect(updated.registrationStats.available).toBe(22);
  });

  it('should build create draft and map to list item', () => {
    const draft = createEventEditDraft('evt-test', 'Jane Doe');
    const form = {
      title: 'New Workshop',
      description: 'Hands-on session',
      bannerUrl: null,
      dateLabel: 'Sep 01, 2026',
      timeRangeLabel: '6:00 PM – 8:00 PM',
      status: 'published' as const,
      location: 'Studio A',
      capacity: 30,
    };
    const created = applyFormToEventEdit(draft, form);
    const item = mapEventEditToEventItem(created, 'user-1');

    expect(draft.status).toBe('draft');
    expect(created.title).toBe('New Workshop');
    expect(item.timeLabel).toBe('6:00 PM');
    expect(item.venue).toBe('Studio A');
  });

  it('should generate unique event ids', () => {
    const first = generateEventId();
    const second = generateEventId();

    expect(first).toMatch(/^evt-/);
    expect(second).toMatch(/^evt-/);
    expect(first).not.toBe(second);
  });
});
