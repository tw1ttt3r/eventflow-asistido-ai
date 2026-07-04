import type { IconDefinition } from '@shared/ui/atoms/icon/icon.types';

export const NAVIGATION_ICONS = {
  'chevron-left': { viewBox: '0 0 20 20' },
  'chevron-right': { viewBox: '0 0 20 20' },
  home: { viewBox: '0 0 24 24' },
  settings: { viewBox: '0 0 24 24' },
} satisfies Record<string, IconDefinition>;
