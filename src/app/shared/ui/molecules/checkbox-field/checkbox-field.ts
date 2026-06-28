import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EfCheckbox } from '../../atoms/checkbox/checkbox';

@Component({
  selector: 'ef-checkbox-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, EfCheckbox],
  template: `
    <label [attr.for]="fieldId()" class="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
      <ef-checkbox [id]="fieldId()" [(checked)]="checked" />
      <span>{{ label() }}</span>
    </label>
  `,
})
export class CheckboxField {
  readonly fieldId = input.required<string>();
  readonly label = input.required<string>();

  readonly checked = model(false);
}
