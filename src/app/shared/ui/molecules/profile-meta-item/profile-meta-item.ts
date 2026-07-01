import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ef-profile-meta-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <dt class="text-xs text-slate-500">{{ label() }}</dt>
      <dd class="mt-0.5 text-sm font-semibold text-slate-900">
        <ng-content />
      </dd>
    </div>
  `,
})
export class ProfileMetaItem {
  readonly label = input.required<string>();
}
