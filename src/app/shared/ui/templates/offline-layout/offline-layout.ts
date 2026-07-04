import { ChangeDetectionStrategy, Component } from '@angular/core';

import { OfflineBottomBar } from '@shared/ui/organisms/offline-bottom-bar/offline-bottom-bar';
import { OfflineHeader } from '@shared/ui/organisms/offline-header/offline-header';

@Component({
  selector: 'ef-offline-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [OfflineHeader, OfflineBottomBar],
  template: `
    <div class="min-h-screen bg-ef-surface pb-28">
      <div class="mx-auto flex w-full max-w-lg flex-col gap-5 px-4 py-5">
        <ef-offline-header />

        <main>
          <ng-content />
        </main>
      </div>

      <ef-offline-bottom-bar />
    </div>
  `,
})
export class OfflineLayout {}
