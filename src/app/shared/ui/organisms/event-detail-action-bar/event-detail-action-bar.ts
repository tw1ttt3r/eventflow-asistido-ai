import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { EfButton } from '@shared/ui/atoms/button/button';

@Component({
  selector: 'ef-event-detail-action-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfButton],
  template: `
    <div
      class="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur"
    >
      <div class="mx-auto flex w-full max-w-lg items-center gap-3">
        <ef-button variant="soft" [fullWidth]="false" (pressed)="savePress.emit()">
          Save
        </ef-button>
        <ef-button variant="purple" (pressed)="registerPress.emit()">
          Register — Reserve Spot
        </ef-button>
      </div>
    </div>
  `,
})
export class EventDetailActionBar {
  readonly savePress = output<void>();
  readonly registerPress = output<void>();
}
