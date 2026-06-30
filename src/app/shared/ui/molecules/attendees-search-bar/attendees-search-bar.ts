import { ChangeDetectionStrategy, Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ef-attendees-search-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    <div class="flex items-center gap-3">
      <label class="relative min-w-0 flex-1">
        <span class="sr-only">Search name or email</span>
        <svg
          viewBox="0 0 20 20"
          class="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        >
          <circle cx="9" cy="9" r="5.5" fill="none" stroke="currentColor" stroke-width="1.5" />
          <path d="M13.5 13.5 17 17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <input
          type="search"
          placeholder="Search name or email"
          [(ngModel)]="query"
          class="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-ef-purple focus:outline-none focus:ring-2 focus:ring-ef-purple/20"
        />
      </label>

      <button
        type="button"
        class="flex size-12 shrink-0 items-center justify-center rounded-full bg-ef-blue text-white shadow-sm transition hover:opacity-95"
        aria-label="Add attendee"
        (click)="addPress.emit()"
      >
        <svg viewBox="0 0 20 20" class="size-5" aria-hidden="true">
          <path d="M10 5v10M5 10h10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  `,
})
export class AttendeesSearchBar {
  readonly query = model('');

  readonly addPress = output<void>();
}
