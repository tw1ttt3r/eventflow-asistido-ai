import { Injectable, signal } from '@angular/core';

import {
  applyFormToEventEdit,
  type EventEditData,
  type EventEditFormValue,
} from '@features/events/event-edit.model';
import { findEventEdit } from '@mock/event-edit.mock';

@Injectable({ providedIn: 'root' })
export class EventEditStateService {
  private readonly editByEventId = signal<Record<string, EventEditData>>({});

  getEditData(eventId: string): EventEditData | undefined {
    const cached = this.editByEventId()[eventId];
    if (cached) {
      return cached;
    }
    return findEventEdit(eventId);
  }

  updateEdit(eventId: string, value: EventEditFormValue): EventEditData | undefined {
    const current = this.getEditData(eventId);
    if (!current) {
      return undefined;
    }

    const updated = applyFormToEventEdit(current, value);
    this.editByEventId.update((state) => ({ ...state, [eventId]: updated }));
    return updated;
  }

  reset(eventId: string): void {
    this.editByEventId.update((state) => {
      const next = { ...state };
      delete next[eventId];
      return next;
    });
  }
}
