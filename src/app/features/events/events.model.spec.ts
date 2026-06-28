import { describe, expect, it } from 'vitest';

import { buildEventsSparkline, filterEvents, summarizeEvents } from '@features/events/events.model';
import { MOCK_EVENTS } from '@mock/events.mock';

describe('summarizeEvents', () => {
  it('should derive totals from mock events', () => {
    const summary = summarizeEvents(MOCK_EVENTS);

    expect(summary.total).toBe(4);
    expect(summary.published).toBe(3);
    expect(summary.publishedPercent).toBe(75);
  });
});

describe('buildEventsSparkline', () => {
  it('should build cumulative lines from mock events', () => {
    const sparkline = buildEventsSparkline(MOCK_EVENTS);

    expect(sparkline.totalsLine).toContain('0,');
    expect(sparkline.publishedLine).toContain('0,');
    expect(sparkline.totalsLine.split(' ').length).toBe(5);
    expect(sparkline.publishedLine.split(' ').length).toBe(5);
  });
});

describe('filterEvents', () => {
  it('should filter by status', () => {
    expect(filterEvents(MOCK_EVENTS, 'published', '').length).toBe(3);
    expect(filterEvents(MOCK_EVENTS, 'closed', '').length).toBe(1);
  });

  it('should filter by search query', () => {
    const results = filterEvents(MOCK_EVENTS, 'all', 'yoga');
    expect(results).toHaveLength(1);
    expect(results[0]?.title).toContain('Yoga');
  });
});
