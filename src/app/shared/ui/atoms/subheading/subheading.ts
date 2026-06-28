import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ef-subheading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="text-sm leading-relaxed text-slate-500 sm:text-base">
      <ng-content />
    </p>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Subheading {}
