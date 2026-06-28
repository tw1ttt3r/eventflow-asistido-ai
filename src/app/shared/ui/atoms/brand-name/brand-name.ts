import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ef-brand-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="font-serif text-2xl font-bold tracking-tight text-slate-900">EventFlow</span>
  `,
})
export class BrandName {}
