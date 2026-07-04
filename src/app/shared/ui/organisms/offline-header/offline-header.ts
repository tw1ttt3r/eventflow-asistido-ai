import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrandName } from '@shared/ui/atoms/brand-name/brand-name';
import { EfIcon } from '@shared/ui/atoms/icon/icon';

@Component({
  selector: 'ef-offline-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BrandName, EfIcon],
  template: `
    <header class="flex items-center justify-between">
      <div class="flex items-center gap-2" aria-label="EventFlow">
        <ef-icon name="calendar-brand" size="lg" iconClass="text-ef-purple" />
        <ef-brand-name />
      </div>

      <span
        class="inline-flex items-center gap-1.5 rounded-full bg-ef-lavender px-3 py-1.5 text-xs font-semibold text-ef-purple"
      >
        <ef-icon name="wifi-off" size="sm" iconClass="text-ef-purple" />
        Offline
      </span>
    </header>
  `,
})
export class OfflineHeader {}
