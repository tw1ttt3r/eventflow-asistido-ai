import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type EfBadgeTone = 'published' | 'closed';

@Component({
  selector: 'ef-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold"
      [class.bg-ef-blue/15]="tone() === 'published'"
      [class.text-ef-blue]="tone() === 'published'"
      [class.bg-slate-100]="tone() === 'closed'"
      [class.text-slate-500]="tone() === 'closed'"
    >
      <ng-content />
    </span>
  `,
})
export class EfBadge {
  readonly tone = input<EfBadgeTone>('published');
}
