import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import { BrandName } from '@shared/ui/atoms/brand-name/brand-name';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';

@Component({
  selector: 'ef-admin-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BrandName, EfIcon, EfIconButton],
  template: `
    <header class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <ef-icon name="calendar-brand" size="lg" iconClass="text-ef-purple" />
        <ef-brand-name />
      </div>

      <div class="flex items-center gap-2">
        <ef-icon-button ariaLabel="Notifications">
          <ef-icon name="bell" size="md" />
        </ef-icon-button>
        <ef-icon-button ariaLabel="Account" (pressed)="goToProfile()">
          <ef-icon name="user" size="md" />
        </ef-icon-button>
      </div>
    </header>
  `,
})
export class AdminHeader {
  private readonly adminNav = inject(AdminNavigationService);

  protected goToProfile(): void {
    this.adminNav.navigate('account');
  }
}
