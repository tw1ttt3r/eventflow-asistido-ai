import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { EfLink } from '../../atoms/link/link';

@Component({
  selector: 'ef-inline-link-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfLink],
  template: `
    <p class="text-center text-sm text-slate-600">
      {{ prefix() }}
      <ef-link (pressed)="linkPress.emit()">{{ linkLabel() }}</ef-link>
    </p>
  `,
})
export class InlineLinkRow {
  readonly prefix = input.required<string>();
  readonly linkLabel = input.required<string>();

  readonly linkPress = output<void>();
}
