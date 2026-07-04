import type { ContentUnavailableCopy } from '@features/content-unavailable/content-unavailable.model';

export const MOCK_CONTENT_UNAVAILABLE: ContentUnavailableCopy = {
  title: 'Content unavailable',
  description:
    "We couldn't load this event or ticket right now. It might be temporarily unavailable, or your connection dropped. Return to the home screen to keep browsing EventFlow.",
  goHomeLabel: 'Go back home',
};
