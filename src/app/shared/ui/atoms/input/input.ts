import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type EfInputType = 'text' | 'email' | 'password' | 'tel';

export type EfInputState = 'default' | 'success' | 'error';

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
      class="w-full rounded-full border bg-white px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60"
      [class.border-slate-200]="state() === 'default'"
      [class.focus:border-ef-purple]="state() === 'default'"
      [class.focus:ring-ef-purple/20]="state() === 'default'"
      [class.border-emerald-400]="state() === 'success'"
      [class.focus:border-emerald-400]="state() === 'success'"
      [class.focus:ring-emerald-400/20]="state() === 'success'"
      [class.border-rose-400]="state() === 'error'"
      [class.focus:border-rose-400]="state() === 'error'"
      [class.focus:ring-rose-400/20]="state() === 'error'"
    />
  `,
})
export class EfInput {
  readonly id = input.required<string>();
  readonly type = input<EfInputType>('text');
  readonly placeholder = input('');
  readonly disabled = input(false);
  readonly autocomplete = input<string | undefined>(undefined);
  readonly state = input<EfInputState>('default');

  readonly value = model('');
}
