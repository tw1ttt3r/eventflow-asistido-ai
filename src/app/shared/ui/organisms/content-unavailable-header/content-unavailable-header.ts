import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { BrandName } from '@shared/ui/atoms/brand-name/brand-name';
import { EfButton } from '@shared/ui/atoms/button/button';
import { EfIcon } from '@shared/ui/atoms/icon/icon';

@Component({
  selector: 'ef-content-unavailable-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BrandName, EfIcon, EfButton],
  template: `
    <header class="flex items-center justify-between">
      <div class="flex items-center gap-2" aria-label="EventFlow">
        <ef-icon name="calendar-brand" size="lg" iconClass="text-ef-purple" />
        <ef-brand-name />
      </div>

      <ef-button variant="soft" size="sm" [fullWidth]="false" (pressed)="explorePress.emit()">
        Explore
      </ef-button>
    </header>
  `,
})
export class ContentUnavailableHeader {
  readonly explorePress = output<void>();
}
