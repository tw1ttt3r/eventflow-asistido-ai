import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export type EfButtonVariant = 'purple' | 'blue' | 'outline' | 'soft' | 'destructive';

@Component({
  selector: 'ef-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [type]="type()"
      [disabled]="disabled()"
      class="rounded-full px-6 py-3.5 text-sm font-bold transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      [class.w-full]="fullWidth()"
      [class.bg-ef-purple]="variant() === 'purple'"
      [class.text-white]="variant() === 'purple' || variant() === 'blue'"
      [class.bg-ef-blue]="variant() === 'blue'"
      [class.border]="variant() === 'outline' || variant() === 'destructive'"
      [class.border-ef-blue/30]="variant() === 'outline'"
      [class.bg-white]="variant() === 'outline' || variant() === 'destructive'"
      [class.text-ef-blue]="variant() === 'outline'"
      [class.border-rose-200]="variant() === 'destructive'"
      [class.text-rose-600]="variant() === 'destructive'"
      [class.bg-ef-lavender]="variant() === 'soft'"
      [class.text-ef-purple]="variant() === 'soft'"
      [class.px-4]="size() === 'sm'"
      [class.py-2]="size() === 'sm'"
      [class.text-xs]="size() === 'sm'"
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
  readonly fullWidth = input(true);
  readonly size = input<'md' | 'sm'>('md');

  readonly pressed = output<void>();
}
