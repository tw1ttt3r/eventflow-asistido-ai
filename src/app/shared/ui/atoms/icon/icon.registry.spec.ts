import { describe, expect, it } from 'vitest';

import { ICON_REGISTRY } from '@shared/ui/atoms/icon/icon.registry';
import type { IconName } from '@shared/ui/atoms/icon/icon.types';

describe('icon.registry', () => {
  const iconNames: IconName[] = [
    'chevron-left',
    'more-horizontal',
    'filter-lines',
    'search',
    'plus',
    'share',
    'calendar',
    'map-pin',
    'check-circle',
    'info-lines',
    'alert-circle',
    'info-circle',
    'user-verified',
    'clock',
    'calendar-x',
    'edit-document',
    'users-group',
    'calendar-brand',
    'bell',
    'user',
    'chevron-right',
    'edit',
    'qr-code',
    'presentation',
    'eye',
    'camera',
    'image',
    'trash',
    'more-vertical',
  ];

  it('should define every icon name', () => {
    for (const name of iconNames) {
      expect(ICON_REGISTRY[name].viewBox).toBeTruthy();
    }
  });
});
