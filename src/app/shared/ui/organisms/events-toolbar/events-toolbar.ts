import { ChangeDetectionStrategy, Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EfButton } from '@shared/ui/atoms/button/button';
import { EfInput } from '@shared/ui/atoms/input/input';

@Component({
  selector: 'ef-events-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, EfInput, EfButton],
  template: `
    <div class="space-y-3">
      <ef-input
        id="events-search"
        type="text"
        placeholder="Search events by title or venue"
        [(value)]="query"
      />
      <ef-button variant="blue" [fullWidth]="true" (pressed)="createEvent.emit()">
        Create Event
      </ef-button>
    </div>
  `,
})
export class EventsToolbar {
  readonly query = model('');

  readonly createEvent = output<void>();
}
