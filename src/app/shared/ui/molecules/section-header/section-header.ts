import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { EfCountBadge } from '@shared/ui/atoms/count-badge/count-badge';
import { EfIcon } from '@shared/ui/atoms/icon/icon';

@Component({
  selector: 'ef-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon, EfCountBadge],
  template: `
    <div class="flex items-start justify-between gap-3">
      @if (clickable()) {
        <button type="button" class="min-w-0 flex-1 text-left" (click)="headerPress.emit()">
          <div class="flex items-center gap-1">
            <h2 class="font-serif text-lg font-bold text-slate-900">{{ title() }}</h2>
            <ef-icon name="chevron-right" size="sm" iconClass="text-slate-400" />
          </div>
          @if (subtitle()) {
            <p class="mt-0.5 text-xs text-slate-500">{{ subtitle() }}</p>
          }
        </button>
      } @else {
        <div class="min-w-0 flex-1">
          <h2 class="font-serif text-lg font-bold text-slate-900">{{ title() }}</h2>
          @if (subtitle()) {
            <p class="mt-0.5 text-xs text-slate-500">{{ subtitle() }}</p>
          }
        </div>
      }
      @if (count() !== null) {
        <ef-count-badge [count]="count()!" />
      }
    </div>
  `,
})
export class SectionHeader {
  readonly title = input.required<string>();
  readonly subtitle = input('');
  readonly count = input<number | null>(null);
  readonly clickable = input(false);

  readonly headerPress = output<void>();
}
