import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export type EfButtonVariant = 'purple' | 'blue';

@Component({
  selector: 'ef-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [type]="type()"
      [disabled]="disabled()"
      class="w-full rounded-full px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      [class.bg-ef-purple]="variant() === 'purple'"
      [class.bg-ef-blue]="variant() === 'blue'"
      (click)="pressed.emit()"
    >
      <ng-content />
    </button>
  `,
})
export class EfButton {
  readonly variant = input<EfButtonVariant>('purple');
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input(false);

  readonly pressed = output<void>();
}
