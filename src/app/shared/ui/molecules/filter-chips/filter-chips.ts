import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export interface FilterChipOption {
  id: string;
  label: string;
}

@Component({
  selector: 'ef-filter-chips',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="grid gap-2"
      [class.grid-cols-2]="columns() === 2"
      [class.grid-cols-3]="columns() === 3"
      role="tablist"
      [attr.aria-label]="ariaLabel()"
    >
      @for (option of options(); track option.id) {
        <button
          type="button"
          role="tab"
          [attr.aria-selected]="activeId() === option.id"
          class="rounded-full border px-4 py-2 text-sm font-semibold transition"
          [class.border-transparent]="activeId() === option.id"
          [class.bg-ef-lavender]="activeId() === option.id"
          [class.text-ef-purple]="activeId() === option.id"
          [class.border-slate-200]="activeId() !== option.id"
          [class.bg-white]="activeId() !== option.id"
          [class.text-slate-600]="activeId() !== option.id"
          (click)="activeChange.emit(option.id)"
        >
          {{ option.label }}
        </button>
      }
    </div>
  `,
})
export class FilterChips {
  readonly options = input.required<FilterChipOption[]>();
  readonly activeId = input.required<string>();
  readonly columns = input<2 | 3>(3);
  readonly ariaLabel = input('Filtros');

  readonly activeChange = output<string>();
}
