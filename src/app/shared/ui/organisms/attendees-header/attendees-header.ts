import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';

@Component({
  selector: 'ef-attendees-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon, EfIconButton],
  template: `
    <header class="space-y-3">
      <ef-icon-button ariaLabel="Volver al evento" (pressed)="backPress.emit()">
        <ef-icon name="chevron-left" size="md" />
      </ef-icon-button>

      <div>
        <h1 class="text-2xl font-bold text-slate-900">Attendees</h1>
        <p class="mt-1 text-sm text-slate-500">
          Event: {{ eventTitle() }} · {{ eventDateLabel() }}
        </p>
      </div>
    </header>
  `,
})
export class AttendeesHeader {
  readonly eventTitle = input.required<string>();
  readonly eventDateLabel = input.required<string>();

  readonly backPress = output<void>();
}
