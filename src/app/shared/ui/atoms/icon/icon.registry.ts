import { ACTION_ICONS } from '@shared/ui/atoms/icon/defs/action.icons';
import { EVENT_ICONS } from '@shared/ui/atoms/icon/defs/event.icons';
import { NAVIGATION_ICONS } from '@shared/ui/atoms/icon/defs/navigation.icons';
import { STATUS_ICONS } from '@shared/ui/atoms/icon/defs/status.icons';
import { USER_ICONS } from '@shared/ui/atoms/icon/defs/user.icons';
import type { IconDefinition, IconName } from '@shared/ui/atoms/icon/icon.types';

export const ICON_REGISTRY: Record<IconName, IconDefinition> = {
  ...NAVIGATION_ICONS,
  ...ACTION_ICONS,
  ...EVENT_ICONS,
  ...STATUS_ICONS,
  ...USER_ICONS,
};

export function getIconDefinition(name: IconName): IconDefinition {
  return ICON_REGISTRY[name];
}
