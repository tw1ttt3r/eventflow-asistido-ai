import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

export type EfToggleTone = 'purple' | 'success';

@Component({
  selector: 'ef-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      role="switch"
      [attr.aria-checked]="checked()"
      [attr.aria-label]="ariaLabel()"
      class="relative inline-flex h-6 w-11 shrink-0 rounded-full transition"
      [class.bg-ef-purple]="checked() && tone() === 'purple'"
      [class.bg-emerald-500]="checked() && tone() === 'success'"
      [class.bg-slate-200]="!checked()"
      (click)="checked.set(!checked())"
    >
      <span
        class="pointer-events-none inline-block size-5 translate-y-0.5 rounded-full bg-white shadow transition"
        [class.translate-x-5]="checked()"
        [class.translate-x-0.5]="!checked()"
      ></span>
    </button>
  `,
})
export class EfToggle {
  readonly checked = model(false);
  readonly ariaLabel = input('Toggle');
  readonly tone = input<EfToggleTone>('purple');
}
