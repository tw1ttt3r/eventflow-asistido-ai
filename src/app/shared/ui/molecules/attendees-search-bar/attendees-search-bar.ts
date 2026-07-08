import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EfIcon } from '@shared/ui/atoms/icon/icon';

@Component({
  selector: 'ef-attendees-search-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, EfIcon],
  template: `
    <label class="relative block">
      <span class="sr-only">Search name or email</span>
      <ef-icon
        name="search"
        size="sm"
        iconClass="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />
      <input
        type="search"
        placeholder="Search name or email"
        [(ngModel)]="query"
        class="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-ef-purple focus:outline-none focus:ring-2 focus:ring-ef-purple/20"
      />
    </label>
  `,
})
export class AttendeesSearchBar {
  readonly query = model('');
}
