import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type FieldFeedbackTone = 'success' | 'info' | 'error';

@Component({
  selector: 'ef-field-feedback',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p
      class="flex items-center gap-1.5 text-xs font-medium"
      [class.text-emerald-600]="tone() === 'success'"
      [class.text-ef-blue]="tone() === 'info'"
      [class.text-rose-600]="tone() === 'error'"
    >
      @switch (tone()) {
        @case ('success') {
          <svg viewBox="0 0 16 16" class="size-3.5 shrink-0" aria-hidden="true">
            <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
            <path
              d="M5 8.2 6.8 10l4.2-4"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        @case ('info') {
          <svg viewBox="0 0 16 16" class="size-3.5 shrink-0" aria-hidden="true">
            <rect x="2" y="4" width="12" height="9" rx="1.5" fill="currentColor" opacity="0.15" />
            <path
              d="M3.5 5.5h9M3.5 8h9M3.5 10.5h5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
        }
        @case ('error') {
          <svg viewBox="0 0 16 16" class="size-3.5 shrink-0" aria-hidden="true">
            <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
            <path
              d="M8 4.5v4M8 10.5v.5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        }
      }
      {{ message() }}
    </p>
  `,
})
export class FieldFeedback {
  readonly tone = input.required<FieldFeedbackTone>();
  readonly message = input.required<string>();
}
