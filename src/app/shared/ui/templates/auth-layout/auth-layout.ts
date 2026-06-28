import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AppHeader } from '../../organisms/app-header/app-header';
import { AuthFooter } from '../../organisms/auth-footer/auth-footer';
import { AuthIllustration } from '../../organisms/auth-illustration/auth-illustration';

@Component({
  selector: 'ef-auth-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AppHeader, AuthIllustration, AuthFooter],
  template: `
    <div class="min-h-screen bg-ef-surface px-4 py-8 sm:py-12">
      <div class="mx-auto flex w-full max-w-xl flex-col items-center gap-8">
        <ef-app-header />

        <ng-content />

        <ef-auth-illustration />

        <ef-auth-footer />
      </div>
    </div>
  `,
})
export class AuthLayout {}
