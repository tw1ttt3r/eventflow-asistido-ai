import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BrandName } from '@shared/ui/atoms/brand-name/brand-name';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';

@Component({
  selector: 'ef-admin-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BrandName, EfIcon, EfIconButton, RouterLink],
  template: `
    <header class="flex items-center justify-between">
      <a routerLink="/events" class="flex items-center gap-2" aria-label="Go to home">
        <ef-icon name="calendar-brand" size="lg" iconClass="text-ef-purple" />
        <ef-brand-name />
      </a>

      <div class="flex items-center gap-2">
        <ef-icon-button ariaLabel="Account" routerLink="/session">
          <ef-icon name="user" size="md" />
        </ef-icon-button>
      </div>
    </header>
  `,
})
export class AdminHeader {}
