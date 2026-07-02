import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';

@Component({
  selector: 'ef-event-edit-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon, EfIconButton],
  template: `
    <header class="space-y-3">
      <div class="flex items-start gap-3">
        <ef-icon-button ariaLabel="Back to events" (pressed)="backPress.emit()">
          <ef-icon name="chevron-left" size="md" />
        </ef-icon-button>

        <div class="min-w-0 flex-1">
          <h1 class="text-2xl font-bold text-slate-900">Edit Event</h1>
          <p class="mt-1 text-sm text-slate-500">Update event details and publish changes</p>
        </div>

        <div class="flex shrink-0 items-center gap-1">
          <ef-icon-button ariaLabel="Preview event" (pressed)="previewPress.emit()">
            <ef-icon name="eye" size="sm" />
          </ef-icon-button>
          <ef-icon-button ariaLabel="More options" (pressed)="morePress.emit()">
            <ef-icon name="more-vertical" size="sm" />
          </ef-icon-button>
        </div>
      </div>
    </header>
  `,
})
export class EventEditHeader {
  readonly backPress = output<void>();
  readonly previewPress = output<void>();
  readonly morePress = output<void>();
}
