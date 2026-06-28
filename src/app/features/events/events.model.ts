export type EventStatus = 'published' | 'closed';

export type EventFilter = 'all' | EventStatus;

export interface EventItem {
  id: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  venue: string;
  status: EventStatus;
  ticketsLeft: number;
  imageHue: number;
}

export interface EventsSummary {
  total: number;
  published: number;
  publishedPercent: number;
}

export interface EventsSparkline {
  totalsLine: string;
  publishedLine: string;
}

export function summarizeEvents(events: EventItem[]): EventsSummary {
  const total = events.length;
  const published = events.filter((event) => event.status === 'published').length;
  const publishedPercent = total === 0 ? 0 : Math.round((published / total) * 100);

  return { total, published, publishedPercent };
}

export function buildEventsSparkline(
  events: EventItem[],
  width = 320,
  height = 80,
): EventsSparkline {
  const sorted = [...events].sort(
    (left, right) => Date.parse(left.dateLabel) - Date.parse(right.dateLabel),
  );

  const cumulative = [{ total: 0, published: 0 }];
  let total = 0;
  let published = 0;

  for (const event of sorted) {
    total++;
    if (event.status === 'published') {
      published++;
    }
    cumulative.push({ total, published });
  }

  const maxValue = Math.max(...cumulative.map((point) => point.total), 1);
  const top = 15;
  const bottom = height - 10;
  const range = bottom - top;

  const toLine = (key: 'total' | 'published') =>
    cumulative
      .map((point, index) => {
        const x = cumulative.length === 1 ? 0 : (index / (cumulative.length - 1)) * width;
        const y = bottom - (point[key] / maxValue) * range;
        return `${x},${y}`;
      })
      .join(' ');

  return {
    totalsLine: toLine('total'),
    publishedLine: toLine('published'),
  };
}

export function filterEvents(events: EventItem[], filter: EventFilter, query: string): EventItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  return events.filter((event) => {
    const matchesFilter = filter === 'all' || event.status === filter;
    const matchesQuery =
      !normalizedQuery ||
      event.title.toLowerCase().includes(normalizedQuery) ||
      event.venue.toLowerCase().includes(normalizedQuery);

    return matchesFilter && matchesQuery;
  });
}
