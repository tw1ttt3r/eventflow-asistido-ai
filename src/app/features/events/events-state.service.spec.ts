import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';

import { EventsStateService } from '@features/events/events-state.service';
import { createEventEditDraft } from '@features/events/event-edit.model';
import { applyFormToEventEdit } from '@features/events/event-edit.model';
import { MOCK_SESSION_USER_ID } from '@mock/events.mock';

describe('EventsStateService', () => {
  it('should expose mock events by default', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(EventsStateService);

    expect(service.events()).toHaveLength(4);
    expect(service.summary().total).toBe(4);
  });

  it('should add and sync created events', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(EventsStateService);
    const draft = createEventEditDraft('evt-99', 'Jane Doe');
    const created = applyFormToEventEdit(draft, {
      title: 'Created Event',
      description: 'Description',
      bannerUrl: null,
      dateLabel: 'Oct 01, 2026',
      timeRangeLabel: '5:00 PM – 7:00 PM',
      status: 'published',
      location: 'Main Hall',
      capacity: 25,
    });

    service.syncFromEdit(created, MOCK_SESSION_USER_ID);

    expect(service.events()[0]?.title).toBe('Created Event');
    expect(service.summary().total).toBe(5);
  });
});
