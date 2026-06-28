import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ef-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
      <ng-content />
    </h1>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Heading {
  readonly level = input<'h1'>('h1');
}
