import type { OfflineStatusCopy } from '@features/offline/offline.model';

export const MOCK_OFFLINE_STATUS: OfflineStatusCopy = {
  lastCheckedLabel: 'Last checked 2m ago',
  title: 'You are offline',
  description:
    'Live event discovery and real-time updates are unavailable until your connection is restored. Use Retry connection when you are back online.',
};
