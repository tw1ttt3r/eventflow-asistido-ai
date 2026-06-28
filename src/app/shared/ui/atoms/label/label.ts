import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ef-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label [attr.for]="htmlFor()" class="text-sm font-semibold text-slate-800">
      <ng-content />
    </label>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Label {
  readonly htmlFor = input.required<string>();
}
