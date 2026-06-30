import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export interface AttendeeFilterOption {
  id: string;
  label: string;
}

@Component({
  selector: 'ef-attendees-filter-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center gap-3">
      <div
        class="grid min-w-0 flex-1 grid-cols-3 gap-1 rounded-full bg-ef-lavender p-1"
        role="tablist"
        aria-label="Attendee status filters"
      >
        @for (option of options(); track option.id) {
          <button
            type="button"
            role="tab"
            [attr.aria-selected]="activeId() === option.id"
            class="rounded-full px-2 py-2 text-xs font-semibold transition sm:px-3 sm:text-sm"
            [class.bg-white]="activeId() === option.id"
            [class.text-slate-900]="activeId() === option.id"
            [class.shadow-sm]="activeId() === option.id"
            [class.text-slate-600]="activeId() !== option.id"
            (click)="activeChange.emit(option.id)"
          >
            {{ option.label }}
          </button>
        }
      </div>
      <p class="hidden shrink-0 text-xs text-slate-400 sm:block">{{ sortLabel() }}</p>
    </div>
  `,
})
export class AttendeesFilterBar {
  readonly options = input.required<AttendeeFilterOption[]>();
  readonly activeId = input.required<string>();
  readonly sortLabel = input('Sorted: Name A–Z');

  readonly activeChange = output<string>();
}
