import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ef-count-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="inline-flex size-7 items-center justify-center rounded-full bg-ef-blue/15 text-xs font-bold text-ef-blue"
      aria-hidden="true"
    >
      {{ count() }}
    </span>
  `,
})
export class EfCountBadge {
  readonly count = input.required<number>();
}
