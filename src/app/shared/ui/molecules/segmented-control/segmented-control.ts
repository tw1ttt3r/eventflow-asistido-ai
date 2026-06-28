import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export interface SegmentedOption {
  id: string;
  label: string;
}

@Component({
  selector: 'ef-segmented-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="grid grid-cols-2 gap-1 rounded-full bg-ef-lavender p-1"
      role="tablist"
      [attr.aria-label]="ariaLabel()"
    >
      @for (option of options(); track option.id) {
        <button
          type="button"
          role="tab"
          [attr.aria-selected]="activeId() === option.id"
          class="rounded-full px-4 py-2.5 text-sm font-semibold transition"
          [class.bg-ef-purple]="activeId() === option.id && option.id === 'sign-up'"
          [class.bg-ef-blue]="activeId() === option.id && option.id === 'login'"
          [class.text-white]="activeId() === option.id"
          [class.text-slate-600]="activeId() !== option.id"
          [class.hover:bg-white/60]="activeId() !== option.id"
          (click)="activeChange.emit(option.id)"
        >
          {{ option.label }}
        </button>
      }
    </div>
  `,
})
export class SegmentedControl {
  readonly options = input.required<SegmentedOption[]>();
  readonly activeId = input.required<string>();
  readonly ariaLabel = input('Secciones');

  readonly activeChange = output<string>();
}
