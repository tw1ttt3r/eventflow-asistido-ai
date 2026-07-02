import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BrandName } from '@shared/ui/atoms/brand-name/brand-name';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';
import { LogoMark } from '@shared/ui/atoms/logo-mark/logo-mark';

@Component({
  selector: 'ef-event-detail-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon, EfIconButton, LogoMark, BrandName, RouterLink],
  template: `
    <header class="grid grid-cols-[2.5rem_1fr_5rem] items-center gap-3">
      <ef-icon-button ariaLabel="Volver a eventos" (pressed)="backPress.emit()">
        <ef-icon name="chevron-left" size="md" />
      </ef-icon-button>

      <a routerLink="/events" class="flex items-center justify-center gap-2" aria-label="Go to home">
        <ef-logo-mark [size]="28" />
        <ef-brand-name />
      </a>

      <div class="flex items-center justify-end gap-1">
        <ef-icon-button ariaLabel="Compartir evento" (pressed)="sharePress.emit()">
          <ef-icon name="share" size="sm" />
        </ef-icon-button>
        <ef-icon-button ariaLabel="Más opciones" (pressed)="morePress.emit()">
          <ef-icon name="more-horizontal" size="sm" />
        </ef-icon-button>
      </div>
    </header>
  `,
})
export class EventDetailHeader {
  readonly backPress = output<void>();
  readonly sharePress = output<void>();
  readonly morePress = output<void>();
}
