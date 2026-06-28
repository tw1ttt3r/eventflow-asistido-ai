import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EfInput, type EfInputType } from '../../atoms/input/input';
import { Label } from '../../atoms/label/label';

@Component({
  selector: 'ef-form-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, Label, EfInput],
  template: `
    <div class="space-y-2">
      <ef-label [htmlFor]="fieldId()">{{ label() }}</ef-label>
      <ef-input
        [id]="fieldId()"
        [type]="type()"
        [placeholder]="placeholder()"
        [autocomplete]="autocomplete()"
        [(value)]="value"
      />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class FormField {
  readonly fieldId = input.required<string>();
  readonly label = input.required<string>();
  readonly type = input<EfInputType>('text');
  readonly placeholder = input('');
  readonly autocomplete = input<string | undefined>(undefined);

  readonly value = model('');
}
