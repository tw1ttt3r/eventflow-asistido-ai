import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { EventStatus } from '@features/events/events.model';
import { EfBadge } from '@shared/ui/atoms/badge/badge';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';

@Component({
  selector: 'ef-event-edit-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon, EfIconButton, EfBadge],
  template: `
    <header class="space-y-3">
      <div class="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3">
        <ef-icon-button ariaLabel="Volver a eventos" (pressed)="backPress.emit()">
          <ef-icon name="chevron-left" size="md" />
        </ef-icon-button>

        <p class="text-center text-xs font-semibold uppercase tracking-wide text-slate-400">Organizer</p>

        <ef-badge [tone]="status()">
          {{ status() === 'published' ? 'Published' : 'Closed' }}
        </ef-badge>
      </div>

      <div>
        <h1 class="text-2xl font-bold text-slate-900">Edit event</h1>
        <p class="mt-1 text-sm text-slate-500">Organizer tools for this event</p>
      </div>
    </header>
  `,
})
export class EventEditHeader {
  readonly status = input<EventStatus>('published');

  readonly backPress = output<void>();
}
