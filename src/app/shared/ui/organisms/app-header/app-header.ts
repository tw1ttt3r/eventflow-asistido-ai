import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BrandName } from '@shared/ui/atoms/brand-name/brand-name';
import { LogoMark } from '@shared/ui/atoms/logo-mark/logo-mark';

@Component({
  selector: 'ef-app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoMark, BrandName, RouterLink],
  template: `
    <header class="flex items-center justify-center gap-3">
      <a routerLink="/events" class="flex items-center gap-3" aria-label="Go to home">
        <ef-logo-mark />
        <ef-brand-name />
      </a>
    </header>
  `,
})
export class AppHeader {}
