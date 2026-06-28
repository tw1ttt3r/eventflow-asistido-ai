import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { AdminHeader } from '../../organisms/admin-header/admin-header';
import { BottomNav, type BottomNavItem } from '../../organisms/bottom-nav/bottom-nav';

@Component({
  selector: 'ef-admin-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AdminHeader, BottomNav],
  template: `
    <div class="min-h-screen bg-ef-surface pb-24">
      <div class="mx-auto flex w-full max-w-lg flex-col gap-5 px-4 py-5">
        <ef-admin-header />

        <main class="space-y-5">
          <ng-content />
        </main>
      </div>

      <ef-bottom-nav
        [items]="navItems()"
        [activeId]="activeNav()"
        (navigate)="navigate.emit($event)"
      />
    </div>
  `,
})
export class AdminLayout {
  readonly navItems = input<BottomNavItem[]>([
    { id: 'dash', label: 'Dash' },
    { id: 'events', label: 'Events' },
    { id: 'account', label: 'Account' },
  ]);
  readonly activeNav = input('events');

  readonly navigate = output<string>();
}
