import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { EfIcon } from '@shared/ui/atoms/icon/icon';
import type { IconName } from '@shared/ui/atoms/icon/icon.types';

export type InfoNoticeVariant = 'info' | 'host' | 'duration';

const NOTICE_ICONS: Record<InfoNoticeVariant, IconName> = {
  info: 'info-circle',
  host: 'user-verified',
  duration: 'clock',
};

@Component({
  selector: 'ef-info-notice-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon],
  template: `
    <div class="flex items-start gap-3 rounded-2xl bg-white px-4 py-3.5 ring-1 ring-slate-100">
      <span
        class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full"
        [class.bg-ef-blue/10]="variant() === 'info' || variant() === 'duration'"
        [class.text-ef-blue]="variant() === 'info' || variant() === 'duration'"
        [class.bg-ef-lavender]="variant() === 'host'"
        [class.text-ef-purple]="variant() === 'host'"
        aria-hidden="true"
      >
        <ef-icon [name]="iconName()" size="sm" />
      </span>
      <p class="text-sm leading-relaxed text-slate-600">{{ text() }}</p>
    </div>
  `,
})
export class InfoNoticeRow {
  readonly variant = input.required<InfoNoticeVariant>();
  readonly text = input.required<string>();

  protected iconName(): IconName {
    return NOTICE_ICONS[this.variant()];
  }
}
