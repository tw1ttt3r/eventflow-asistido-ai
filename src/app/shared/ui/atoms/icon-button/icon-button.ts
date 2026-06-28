import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'ef-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="inline-flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
      [attr.aria-label]="ariaLabel()"
      (click)="pressed.emit()"
    >
      <ng-content />
    </button>
  `,
})
export class EfIconButton {
  readonly ariaLabel = input.required<string>();

  readonly pressed = output<void>();
}
