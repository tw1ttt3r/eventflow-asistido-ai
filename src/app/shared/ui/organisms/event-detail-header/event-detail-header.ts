import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { BrandName } from '@shared/ui/atoms/brand-name/brand-name';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';
import { LogoMark } from '@shared/ui/atoms/logo-mark/logo-mark';

@Component({
  selector: 'ef-event-detail-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIconButton, LogoMark, BrandName],
  template: `
    <header class="grid grid-cols-[2.5rem_1fr_5rem] items-center gap-3">
      <ef-icon-button ariaLabel="Volver a eventos" (pressed)="backPress.emit()">
        <svg viewBox="0 0 20 20" class="size-5" aria-hidden="true">
          <path
            d="M12.5 4.5 7 10l5.5 5.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ef-icon-button>

      <div class="flex items-center justify-center gap-2">
        <ef-logo-mark [size]="28" />
        <ef-brand-name />
      </div>

      <div class="flex items-center justify-end gap-1">
        <ef-icon-button ariaLabel="Compartir evento" (pressed)="sharePress.emit()">
          <svg viewBox="0 0 20 20" class="size-4" aria-hidden="true">
            <path
              d="M14 7l-5-3-5 3M9 4v9M6 14h8"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ef-icon-button>
        <ef-icon-button ariaLabel="Más opciones" (pressed)="morePress.emit()">
          <svg viewBox="0 0 20 20" class="size-4" aria-hidden="true">
            <circle cx="5" cy="10" r="1.2" fill="currentColor" />
            <circle cx="10" cy="10" r="1.2" fill="currentColor" />
            <circle cx="15" cy="10" r="1.2" fill="currentColor" />
          </svg>
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
