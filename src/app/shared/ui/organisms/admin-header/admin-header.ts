import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import { BrandName } from '@shared/ui/atoms/brand-name/brand-name';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';

@Component({
  selector: 'ef-admin-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BrandName, EfIconButton],
  template: `
    <header class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <svg viewBox="0 0 24 24" class="size-7 text-ef-purple" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="3" fill="currentColor" opacity="0.15" />
          <rect x="3" y="5" width="18" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" />
          <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <ef-brand-name />
      </div>

      <div class="flex items-center gap-2">
        <ef-icon-button ariaLabel="Notifications">
          <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5" />
            <path d="M10 20a2 2 0 0 0 4 0" />
          </svg>
        </ef-icon-button>
        <ef-icon-button ariaLabel="Account" (pressed)="goToProfile()">
          <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 19a7 7 0 0 1 14 0" />
          </svg>
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
