import type { EventItem, EventsSparkline } from '@features/events/events.model';

export type EventEditStatus = 'published' | 'draft' | 'closed';

export interface EventEditRegistrationStats {
  registered: number;
  available: number;
  capacity: number;
  sparkline: EventsSparkline;
}

export interface EventEditAudit {
  updatedBy: string;
  updatedAtLabel: string;
  version: number;
}

export interface EventEditData {
  eventId: string;
  title: string;
  description: string;
  bannerHue: number;
  bannerUrl: string | null;
  dateLabel: string;
  timeRangeLabel: string;
  status: EventEditStatus;
  location: string;
  capacity: number;
  spotsLeft: number;
  registrationStats: EventEditRegistrationStats;
  audit: EventEditAudit;
}

export interface EventEditFormValue {
  title: string;
  description: string;
  bannerUrl: string | null;
  dateLabel: string;
  timeRangeLabel: string;
  status: EventEditStatus;
  location: string;
  capacity: number;
}

export const EVENT_EDIT_DESCRIPTION_MAX = 1500;

export function eventEditToFormValue(data: EventEditData): EventEditFormValue {
  return {
    title: data.title,
    description: data.description,
    bannerUrl: data.bannerUrl,
    dateLabel: data.dateLabel,
    timeRangeLabel: data.timeRangeLabel,
    status: data.status,
    location: data.location,
    capacity: data.capacity,
  };
}

export function applyFormToEventEdit(data: EventEditData, value: EventEditFormValue): EventEditData {
  const capacity = Math.max(0, value.capacity);
  const registered = data.registrationStats.registered;
  const available = Math.max(0, capacity - registered);

  return {
    ...data,
    title: value.title.trim(),
    description: value.description.trim(),
    bannerUrl: value.bannerUrl,
    dateLabel: value.dateLabel.trim(),
    timeRangeLabel: value.timeRangeLabel.trim(),
    status: value.status,
    location: value.location.trim(),
    capacity,
    spotsLeft: available,
    registrationStats: {
      ...data.registrationStats,
      capacity,
      available,
    },
  };
}

export function validateEventEditForm(value: EventEditFormValue): string | null {
  if (!value.title.trim()) {
    return 'Title is required';
  }
  if (!value.description.trim()) {
    return 'Description is required';
  }
  if (value.description.length > EVENT_EDIT_DESCRIPTION_MAX) {
    return `Description must be ${EVENT_EDIT_DESCRIPTION_MAX} characters or fewer`;
  }
  if (!value.dateLabel.trim()) {
    return 'Date is required';
  }
  if (!value.timeRangeLabel.trim()) {
    return 'Time is required';
  }
  if (!value.location.trim()) {
    return 'Location is required';
  }
  if (!Number.isFinite(value.capacity) || value.capacity < 1) {
    return 'Capacity must be at least 1';
  }
  return null;
}

export function mapEditStatusToListStatus(status: EventEditStatus): 'published' | 'closed' {
  return status === 'closed' ? 'closed' : 'published';
}

export const EMPTY_EVENT_REGISTRATION_SPARKLINE: EventsSparkline = {
  totalsLine: '0,70 320,70',
  publishedLine: '0,70 320,70',
};

export function extractTimeLabel(timeRangeLabel: string): string {
  const parts = timeRangeLabel.split(/[–-]/);
  return parts[0]?.trim() || timeRangeLabel.trim();
}

export function createEventEditDraft(eventId: string, organizerName: string): EventEditData {
  return {
    eventId,
    title: '',
    description: '',
    bannerHue: 270,
    bannerUrl: null,
    dateLabel: '',
    timeRangeLabel: '',
    status: 'draft',
    location: '',
    capacity: 20,
    spotsLeft: 20,
    registrationStats: {
      registered: 0,
      available: 20,
      capacity: 20,
      sparkline: EMPTY_EVENT_REGISTRATION_SPARKLINE,
    },
    audit: {
      updatedBy: organizerName,
      updatedAtLabel: 'Unsaved draft',
      version: 1,
    },
  };
}

export function mapEventEditToEventItem(data: EventEditData, createdByUserId: string): EventItem {
  return {
    id: data.eventId,
    title: data.title,
    dateLabel: data.dateLabel,
    timeLabel: extractTimeLabel(data.timeRangeLabel),
    venue: data.location,
    status: mapEditStatusToListStatus(data.status),
    ticketsLeft: data.spotsLeft,
    imageHue: data.bannerHue,
    createdByUserId,
  };
}

let createEventIdCounter = 0;

export function generateEventId(): string {
  createEventIdCounter += 1;
  return `evt-${Date.now().toString(36)}-${createEventIdCounter}`;
}
