import { Injectable, computed, signal } from '@angular/core';

import type { EventEditData } from '@features/events/event-edit.model';
import { mapEventEditToEventItem } from '@features/events/event-edit.model';
import {
  buildEventsSparkline,
  summarizeEvents,
  type EventItem,
} from '@features/events/events.model';
import { MOCK_EVENTS } from '@mock/events.mock';

@Injectable({ providedIn: 'root' })
export class EventsStateService {
  private readonly eventsState = signal<EventItem[]>(structuredClone(MOCK_EVENTS));

  readonly events = this.eventsState.asReadonly();
  readonly summary = computed(() => summarizeEvents(this.events()));
  readonly sparkline = computed(() => buildEventsSparkline(this.events()));

  getEvent(eventId: string): EventItem | undefined {
    return this.events().find((event) => event.id === eventId);
  }

  addEvent(event: EventItem): void {
    this.eventsState.update((events) => [event, ...events]);
  }

  syncFromEdit(data: EventEditData, createdByUserId: string): void {
    const item = mapEventEditToEventItem(data, createdByUserId);
    this.eventsState.update((events) => {
      const index = events.findIndex((event) => event.id === data.eventId);
      if (index === -1) {
        return [item, ...events];
      }

      const next = [...events];
      next[index] = item;
      return next;
    });
  }
}
