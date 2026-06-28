import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type EfTextTone = 'default' | 'muted' | 'legal';

@Component({
  selector: 'ef-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p
      class="text-sm leading-relaxed"
      [class.text-slate-600]="tone() === 'default'"
      [class.text-slate-500]="tone() === 'muted'"
      [class.text-center]="align() === 'center'"
      [class.text-xs]="tone() === 'legal'"
      [class.text-slate-400]="tone() === 'legal'"
    >
      <ng-content />
    </p>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class EfText {
  readonly tone = input<EfTextTone>('default');
  readonly align = input<'start' | 'center'>('start');
}
