import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { BrandName } from '@shared/ui/atoms/brand-name/brand-name';
import { EfBadge } from '@shared/ui/atoms/badge/badge';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';
import { LogoMark } from '@shared/ui/atoms/logo-mark/logo-mark';

@Component({
  selector: 'ef-registration-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoMark, BrandName, EfBadge, EfIcon, EfIconButton],
  template: `
    <header class="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3">
      <ef-icon-button ariaLabel="Volver a eventos" (pressed)="backPress.emit()">
        <ef-icon name="chevron-left" size="md" />
      </ef-icon-button>

      <div class="flex items-center justify-center gap-2">
        <ef-logo-mark [size]="32" />
        <ef-brand-name />
      </div>

      @if (showSpotsBadge()) {
        <ef-badge tone="spots">{{ spotsLeft() }} spots left</ef-badge>
      } @else {
        <span class="size-10" aria-hidden="true"></span>
      }
    </header>
  `,
})
export class RegistrationHeader {
  readonly spotsLeft = input(0);
  readonly showSpotsBadge = input(true);

  readonly backPress = output<void>();
}
