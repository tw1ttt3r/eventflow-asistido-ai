import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { getIconDefinition } from '@shared/ui/atoms/icon/icon.registry';
import type { IconName, IconSize } from '@shared/ui/atoms/icon/icon.types';

const SIZE_CLASSES: Record<IconSize, string> = {
  xs: 'size-3.5',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-7',
  xl: 'size-10',
};

@Component({
  selector: 'ef-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.viewBox]="definition().viewBox"
      [class]="svgClasses()"
      [attr.fill]="fill()"
      [attr.stroke]="stroke()"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      @switch (name()) {
        @case ('chevron-left') {
          <path
            d="M12.5 4.5 7 10l5.5 5.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('more-horizontal') {
          <circle cx="5" cy="10" r="1.2" fill="currentColor" />
          <circle cx="10" cy="10" r="1.2" fill="currentColor" />
          <circle cx="15" cy="10" r="1.2" fill="currentColor" />
        }
        @case ('filter-lines') {
          <path
            d="M4 6h12M6 10h8M8 14h4"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        }
        @case ('search') {
          <circle cx="9" cy="9" r="5.5" fill="none" stroke="currentColor" stroke-width="1.5" />
          <path
            d="M13.5 13.5 17 17"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        }
        @case ('plus') {
          <path
            d="M10 5v10M5 10h10"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        }
        @case ('share') {
          <path
            d="M14 7l-5-3-5 3M9 4v9M6 14h8"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('calendar') {
          <rect x="3" y="4" width="14" height="13" rx="2" fill="currentColor" opacity="0.15" />
          <path
            d="M6 3v2M14 3v2M3 8h14"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
          />
        }
        @case ('map-pin') {
          <path
            d="M10 4.5c-2.2 0-4 1.6-4 3.6 0 2.8 4 7.4 4 7.4s4-4.6 4-7.4c0-2-1.8-3.6-4-3.6Z"
            fill="currentColor"
            opacity="0.2"
          />
          <circle cx="10" cy="8" r="1.5" fill="currentColor" />
        }
        @case ('check-circle') {
          <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
          <path
            d="M5 8.2 6.8 10l4.2-4"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('info-lines') {
          <rect x="2" y="4" width="12" height="9" rx="1.5" fill="currentColor" opacity="0.15" />
          <path
            d="M3.5 5.5h9M3.5 8h9M3.5 10.5h5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        }
        @case ('alert-circle') {
          <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
          <path
            d="M8 4.5v4M8 10.5v.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        }
        @case ('info-circle') {
          <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.2" />
          <path
            d="M10 6v1M10 9v5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        }
        @case ('user-verified') {
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
        }
        @case ('clock') {
          <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="1.5" />
          <path
            d="M10 6v4l2.5 2.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('calendar-x') {
          <rect x="8" y="12" width="32" height="28" rx="4" fill="currentColor" opacity="0.15" />
          <path
            d="M16 8v6M32 8v6M8 20h32"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M18 30l12 12M30 30 18 42"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
          />
        }
        @case ('edit-document') {
          <rect x="10" y="10" width="28" height="28" rx="4" fill="currentColor" opacity="0.15" />
          <path
            d="M18 30h16M18 24h10M18 18h14"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M32 14l4 4-4 4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('users-group') {
          <circle cx="9" cy="8" r="3" fill="currentColor" opacity="0.25" />
          <circle cx="16" cy="9" r="2.5" fill="currentColor" opacity="0.25" />
          <path
            d="M4 19c.8-2.8 2.8-4.5 5.5-4.5s4.7 1.7 5.5 4.5M14 19c.5-1.8 2-3 3.8-3"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        }
        @case ('calendar-brand') {
          <rect x="3" y="5" width="18" height="16" rx="3" fill="currentColor" opacity="0.15" />
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="3"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M3 10h18M8 3v4M16 3v4"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        }
        @case ('bell') {
          <path
            d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 20a2 2 0 0 0 4 0"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        }
        @case ('user') {
          <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8" />
          <path
            d="M5 19a7 7 0 0 1 14 0"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        }
      }
    </svg>
  `,
})
export class EfIcon {
  readonly name = input.required<IconName>();
  readonly size = input<IconSize>('md');
  readonly iconClass = input('');
  readonly fill = input<string | null>(null);
  readonly stroke = input<string | null>(null);

  protected readonly definition = computed(() => getIconDefinition(this.name()));

  protected readonly svgClasses = computed(() => {
    const classes = [SIZE_CLASSES[this.size()], 'shrink-0', this.iconClass()].filter(Boolean);
    return classes.join(' ');
  });
}
