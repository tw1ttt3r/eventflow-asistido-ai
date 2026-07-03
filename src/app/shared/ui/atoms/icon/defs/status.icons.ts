import type { IconDefinition } from '@shared/ui/atoms/icon/icon.types';

export const STATUS_ICONS = {
  'check-circle': { viewBox: '0 0 16 16' },
  'info-lines': { viewBox: '0 0 16 16' },
  'alert-circle': { viewBox: '0 0 16 16' },
  'info-circle': { viewBox: '0 0 20 20' },
  'user-verified': { viewBox: '0 0 20 20' },
  clock: { viewBox: '0 0 20 20' },
  'wifi-off': { viewBox: '0 0 24 24' },
} satisfies Record<string, IconDefinition>;
