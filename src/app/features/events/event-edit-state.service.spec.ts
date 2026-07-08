import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';

import { EventEditStateService } from '@features/events/event-edit-state.service';
import { eventEditToFormValue } from '@features/events/event-edit.model';
import { MOCK_EVENT_EDIT } from '@mock/event-edit.mock';

describe('EventEditStateService', () => {
  it('should return mock edit data when not cached', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(EventEditStateService);

    expect(service.getEditData('1')?.title).toContain('Design Systems Workshop');
  });

  it('should update and cache edit data', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(EventEditStateService);
    const base = MOCK_EVENT_EDIT['1']!;
    const form = eventEditToFormValue(base);

    const updated = service.updateEdit('1', { ...form, title: 'Cached title' });

    expect(updated?.title).toBe('Cached title');
    expect(service.getEditData('1')?.title).toBe('Cached title');
  });

  it('should reset cached edit data', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(EventEditStateService);
    const base = MOCK_EVENT_EDIT['1']!;
    const form = eventEditToFormValue(base);

    service.updateEdit('1', { ...form, title: 'Temporary title' });
    service.reset('1');

    expect(service.getEditData('1')?.title).toBe(base.title);
  });

  it('should create a new event edit record', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(EventEditStateService);
    const draft = MOCK_EVENT_EDIT['1']!;

    const created = service.createEvent('evt-new', draft, {
      title: 'Brand New Event',
      description: 'Fresh description',
      bannerUrl: null,
      dateLabel: 'Nov 01, 2026',
      timeRangeLabel: '4:00 PM – 6:00 PM',
      status: 'draft',
      location: 'Room B',
      capacity: 15,
    });

    expect(created.title).toBe('Brand New Event');
    expect(service.getEditData('evt-new')?.location).toBe('Room B');
  });
});
