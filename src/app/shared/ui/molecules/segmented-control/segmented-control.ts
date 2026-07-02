import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

export interface SegmentedOption<T extends string> {
  value: T;
  label: string;
}

@Component({
  selector: 'ef-segmented-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="grid gap-1 rounded-2xl bg-slate-100 p-1"
      [style.grid-template-columns]="'repeat(' + options().length + ', minmax(0, 1fr))'"
      role="radiogroup"
      [attr.aria-label]="ariaLabel()"
    >
      @for (option of options(); track option.value) {
        <button
          type="button"
          role="radio"
          class="rounded-xl px-3 py-2.5 text-xs font-semibold transition"
          [class.bg-ef-blue]="value() === option.value"
          [class.text-white]="value() === option.value"
          [class.shadow-sm]="value() === option.value"
          [class.text-slate-600]="value() !== option.value"
          [attr.aria-checked]="value() === option.value"
          (click)="value.set(option.value)"
        >
          {{ option.label }}
        </button>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SegmentedControl<T extends string> {
  readonly options = input.required<SegmentedOption<T>[]>();
  readonly ariaLabel = input('Options');
  readonly value = model.required<T>();
}
