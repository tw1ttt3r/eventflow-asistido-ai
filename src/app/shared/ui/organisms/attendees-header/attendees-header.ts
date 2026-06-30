import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';

@Component({
  selector: 'ef-attendees-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIconButton],
  template: `
    <header class="space-y-3">
      <div class="grid grid-cols-[2.5rem_1fr_5rem] items-center gap-3">
        <ef-icon-button ariaLabel="Volver al evento" (pressed)="backPress.emit()">
          <svg viewBox="0 0 20 20" class="size-5" aria-hidden="true">
            <path
              d="M12.5 4.5 7 10l5.5 5.5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ef-icon-button>

        <div class="flex items-center justify-end gap-1">
          <ef-icon-button ariaLabel="Filtrar asistentes" (pressed)="filterPress.emit()">
            <svg viewBox="0 0 20 20" class="size-4" aria-hidden="true">
              <path
                d="M4 6h12M6 10h8M8 14h4"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </ef-icon-button>
          <ef-icon-button ariaLabel="Más opciones" (pressed)="morePress.emit()">
            <svg viewBox="0 0 20 20" class="size-4" aria-hidden="true">
              <circle cx="5" cy="10" r="1.2" fill="currentColor" />
              <circle cx="10" cy="10" r="1.2" fill="currentColor" />
              <circle cx="15" cy="10" r="1.2" fill="currentColor" />
            </svg>
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
