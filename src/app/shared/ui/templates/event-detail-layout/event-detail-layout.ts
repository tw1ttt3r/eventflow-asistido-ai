import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { EventDetailHeader } from '@shared/ui/organisms/event-detail-header/event-detail-header';

@Component({
  selector: 'ef-event-detail-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EventDetailHeader],
  template: `
    <div class="min-h-screen bg-ef-surface pb-28">
      <div class="mx-auto w-full max-w-lg space-y-4 px-4 py-4">
        <ef-event-detail-header (backPress)="backPress.emit()" />

        <main class="space-y-4">
          <ng-content />
        </main>
      </div>
    </div>
  `,
})
export class EventDetailLayout {
  readonly backPress = output<void>();
}
