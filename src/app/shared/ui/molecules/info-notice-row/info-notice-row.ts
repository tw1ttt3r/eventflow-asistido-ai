import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type InfoNoticeVariant = 'info' | 'host' | 'duration';

@Component({
  selector: 'ef-info-notice-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-start gap-3 rounded-2xl bg-white px-4 py-3.5 ring-1 ring-slate-100">
      <span
        class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full"
        [class.bg-ef-blue/10]="variant() === 'info' || variant() === 'duration'"
        [class.text-ef-blue]="variant() === 'info' || variant() === 'duration'"
        [class.bg-ef-lavender]="variant() === 'host'"
        [class.text-ef-purple]="variant() === 'host'"
        aria-hidden="true"
      >
        @switch (variant()) {
          @case ('info') {
            <svg viewBox="0 0 20 20" class="size-4">
              <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.2" />
              <path
                d="M10 6v1M10 9v5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>
          }
          @case ('host') {
            <svg viewBox="0 0 20 20" class="size-4">
              <circle cx="10" cy="7" r="3" fill="currentColor" opacity="0.25" />
              <path
                d="M4.5 16c.8-2.5 2.8-4 5.5-4s4.7 1.5 5.5 4"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M14.5 6.5l1 1 2.5-2.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          @case ('duration') {
            <svg viewBox="0 0 20 20" class="size-4">
              <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="1.5" />
              <path
                d="M10 6v4l2.5 2.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        }
      </span>
      <p class="text-sm leading-relaxed text-slate-600">{{ text() }}</p>
    </div>
  `,
})
export class InfoNoticeRow {
  readonly variant = input.required<InfoNoticeVariant>();
  readonly text = input.required<string>();
}
