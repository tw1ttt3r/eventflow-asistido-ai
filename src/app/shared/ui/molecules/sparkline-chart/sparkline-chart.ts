import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ef-sparkline-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 320 80" class="h-20 w-full" aria-hidden="true">
      <polyline fill="none" stroke="#cbd5e1" stroke-width="2" [attr.points]="totalsLine()" />
      <polyline fill="none" stroke="#1e293b" stroke-width="2.5" [attr.points]="publishedLine()" />
    </svg>
  `,
})
export class SparklineChart {
  readonly totalsLine = input.required<string>();
  readonly publishedLine = input.required<string>();
}
