import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';

@Component({
  selector: 'ef-attendees-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon, EfIconButton],
  template: `
    <header class="space-y-3">
      <div class="grid grid-cols-[2.5rem_1fr_5rem] items-center gap-3">
        <ef-icon-button ariaLabel="Volver al evento" (pressed)="backPress.emit()">
          <ef-icon name="chevron-left" size="md" />
        </ef-icon-button>

        <div class="flex items-center justify-end gap-1">
          <ef-icon-button ariaLabel="Filtrar asistentes" (pressed)="filterPress.emit()">
            <ef-icon name="filter-lines" size="sm" />
          </ef-icon-button>
          <ef-icon-button ariaLabel="Más opciones" (pressed)="morePress.emit()">
            <ef-icon name="more-horizontal" size="sm" />
          </ef-icon-button>
        </div>
      </div>

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
  readonly filterPress = output<void>();
  readonly morePress = output<void>();
}
