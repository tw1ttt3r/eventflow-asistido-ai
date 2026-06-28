import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrandName } from '../../atoms/brand-name/brand-name';
import { LogoMark } from '../../atoms/logo-mark/logo-mark';

@Component({
  selector: 'ef-app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoMark, BrandName],
  template: `
    <header class="flex items-center justify-center gap-3">
      <ef-logo-mark />
      <ef-brand-name />
    </header>
  `,
})
export class AppHeader {}
