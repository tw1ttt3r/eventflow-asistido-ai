import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ef-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    <input
      [id]="id()"
      type="checkbox"
      [(ngModel)]="checked"
      class="size-4 rounded border-slate-300 text-ef-purple focus:ring-ef-purple/30"
    />
  `,
})
export class EfCheckbox {
  readonly id = input.required<string>();

  readonly checked = model(false);
}
