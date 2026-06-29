import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { SegmentedControl, type SegmentedOption } from '@shared/ui/molecules/segmented-control/segmented-control';

@Component({
  selector: 'ef-auth-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SegmentedControl],
  template: `
    <section class="w-full max-w-xl rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
      <ef-segmented-control
        [options]="tabs()"
        [activeId]="activeTab()"
        ariaLabel="Authentication mode"
        (activeChange)="activeTabChange.emit($event)"
      />

      <div class="mt-8">
        <ng-content />
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class AuthCard {
  readonly tabs = input<SegmentedOption[]>([
    { id: 'sign-up', label: 'Sign Up' },
    { id: 'login', label: 'Login' },
  ]);
  readonly activeTab = input.required<string>();

  readonly activeTabChange = output<string>();
}
