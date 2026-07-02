import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EfAvatar } from '@shared/ui/atoms/avatar/avatar';
import { BrandName } from '@shared/ui/atoms/brand-name/brand-name';
import { EfIcon } from '@shared/ui/atoms/icon/icon';

@Component({
  selector: 'ef-ticket-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon, BrandName, EfAvatar, RouterLink],
  template: `
    <div class="min-h-screen bg-ef-surface px-4 py-5">
      <div class="mx-auto flex w-full max-w-lg flex-col gap-5">
        <header class="flex items-center justify-between gap-3">
          <a routerLink="/events" class="flex items-center gap-2" aria-label="Go to home">
            <ef-icon name="calendar-brand" size="lg" iconClass="text-ef-purple" />
            <ef-brand-name />
          </a>

          <button
            type="button"
            class="rounded-full transition hover:opacity-90"
            [attr.aria-label]="profileAriaLabel()"
            (click)="profilePress.emit()"
          >
            <ef-avatar
              [fullName]="profileName()"
              [imageUrl]="profileAvatarUrl()"
              [hue]="profileHue()"
              size="md"
            />
          </button>
        </header>

        <main class="space-y-4">
          <ng-content />
        </main>

        <footer class="flex items-center justify-between gap-3 pb-2 text-xs text-slate-400">
          <div class="flex items-center gap-2" aria-hidden="true">
            <span class="size-2 rounded-full bg-slate-300"></span>
            <span class="size-2 rounded-full bg-slate-300"></span>
            <span class="size-2 rounded-full bg-slate-300"></span>
          </div>
          <p>EventFlow · Secure Checkout</p>
        </footer>
      </div>
    </div>
  `,
})
export class TicketLayout {
  readonly profileName = input('Jane Doe');
  readonly profileAvatarUrl = input<string | null>(null);
  readonly profileHue = input(270);
  readonly profileAriaLabel = input('Go to account');

  readonly profilePress = output<void>();
}
