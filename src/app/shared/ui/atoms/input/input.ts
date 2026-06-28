import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type EfInputType = 'text' | 'email' | 'password';

@Component({
  selector: 'ef-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    <input
      [id]="id()"
      [type]="type()"
      [placeholder]="placeholder()"
      [disabled]="disabled()"
      [autocomplete]="autocomplete()"
      [(ngModel)]="value"
      class="w-full rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-ef-purple focus:outline-none focus:ring-2 focus:ring-ef-purple/20 disabled:cursor-not-allowed disabled:opacity-60"
    />
  `,
})
export class EfInput {
  readonly id = input.required<string>();
  readonly type = input<EfInputType>('text');
  readonly placeholder = input('');
  readonly disabled = input(false);
  readonly autocomplete = input<string | undefined>(undefined);

  readonly value = model('');
}
