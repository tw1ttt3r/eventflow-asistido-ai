export interface EventDetailHost {
  name: string;
  title: string;
  bio: string;
  initials: string;
}

export interface SimilarEventItem {
  id: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  imageHue: number;
}

export interface EventDetail {
  id: string;
  title: string;
  priceAmount: string;
  priceUnit: string;
  tags: string[];
  dateLabel: string;
  timeRangeLabel: string;
  timezone: string;
  venue: string;
  address: string;
  capacity: number;
  spotsBooked: number;
  imageHue: number;
  walkInsAccepted: boolean;
  about: string;
  whoShouldAttend: string;
  whatToBring: string;
  host: EventDetailHost;
  similarEvents: SimilarEventItem[];
}

export function getSpotsLeft(event: EventDetail): number {
  return Math.max(event.capacity - event.spotsBooked, 0);
}

export function getBookedPercent(event: EventDetail): number {
  if (event.capacity === 0) {
    return 0;
  }

  return Math.round((event.spotsBooked / event.capacity) * 100);
}
