import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { ContentUnavailableHeader } from '@shared/ui/organisms/content-unavailable-header/content-unavailable-header';
import { ContentUnavailablePageFooter } from '@shared/ui/organisms/content-unavailable-page-footer/content-unavailable-page-footer';

@Component({
  selector: 'ef-content-unavailable-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContentUnavailableHeader, ContentUnavailablePageFooter],
  template: `
    <div class="min-h-screen bg-ef-surface px-4 py-6 sm:py-10">
      <div class="mx-auto flex w-full max-w-lg flex-col gap-6">
        <ef-content-unavailable-header (explorePress)="explorePress.emit()" />

        <main>
          <ng-content />
        </main>

        <ef-content-unavailable-page-footer />
      </div>
    </div>
  `,
})
export class ContentUnavailableLayout {
  readonly explorePress = output<void>();
}
