import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { RegistrationFooter } from '@shared/ui/organisms/registration-footer/registration-footer';
import { RegistrationHeader } from '@shared/ui/organisms/registration-header/registration-header';

@Component({
  selector: 'ef-registration-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RegistrationHeader, RegistrationFooter],
  template: `
    <div class="min-h-screen bg-ef-surface px-4 py-5">
      <div class="mx-auto flex w-full max-w-lg flex-col gap-5">
        <ef-registration-header
          [spotsLeft]="spotsLeft()"
          [showSpotsBadge]="showSpotsBadge()"
          (backPress)="backPress.emit()"
        />

        <main class="space-y-4">
          <ng-content />
        </main>

        <ef-registration-footer />
      </div>
    </div>
  `,
})
export class RegistrationLayout {
  readonly spotsLeft = input(0);
  readonly showSpotsBadge = input(true);

  readonly backPress = output<void>();
}
