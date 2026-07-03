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
        @case ('chevron-right') {
          <path
            d="M7.5 4.5 13 10l-5.5 5.5"
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
        @case ('edit') {
          <rect x="4" y="4" width="12" height="12" rx="2" fill="currentColor" opacity="0.15" />
          <path
            d="M12.5 5.5l2 2M7 11l-3 3 2 2 3-3 5.5-5.5-2-2L7 11z"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('qr-code') {
          <rect x="4" y="4" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.5" />
          <rect x="4" y="13" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.5" />
          <path d="M13 13h2v2h-2zM17 13h3v3h-3zM13 17h3v3h-3zM17 17v3" fill="currentColor" opacity="0.4" />
        }
        @case ('presentation') {
          <rect x="3" y="5" width="14" height="9" rx="1.5" fill="currentColor" opacity="0.15" />
          <path d="M3 8h14M7 12h6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
          <path d="M10 14v3M6 17h8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
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
        @case ('eye') {
          <path
            d="M2.5 10s3-5.5 7.5-5.5S17.5 10 17.5 10s-3 5.5-7.5 5.5S2.5 10 2.5 10Z"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
        }
        @case ('camera') {
          <rect x="3" y="6" width="14" height="10" rx="2" fill="currentColor" opacity="0.15" />
          <path
            d="M7 6l1.5-2h3L13 6M3 9h14"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="10" cy="11" r="2.5" fill="none" stroke="currentColor" stroke-width="1.4" />
        }
        @case ('image') {
          <rect x="3" y="5" width="14" height="10" rx="2" fill="currentColor" opacity="0.15" />
          <circle cx="7.5" cy="9" r="1.2" fill="currentColor" />
          <path
            d="M3 13l3.5-3.5 2.5 2.5L13 8l4 4"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('trash') {
          <path
            d="M5 6h10M8 6V4.5h4V6M7 6v8.5h6V6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M8.5 9v4M11.5 9v4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
        }
        @case ('more-vertical') {
          <circle cx="10" cy="5" r="1.2" fill="currentColor" />
          <circle cx="10" cy="10" r="1.2" fill="currentColor" />
          <circle cx="10" cy="15" r="1.2" fill="currentColor" />
        }
        @case ('wifi-off') {
          <path
            d="M2.5 8.5 6 12M6 8.5 9.5 12M9.5 8.5 13 12M13 8.5 16.5 12M16.5 8.5 20 12"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <path
            d="M4 16.5 20 2.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        }
        @case ('home') {
          <path
            d="M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 19v-8.5Z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M9.5 20.5V14a2.5 2.5 0 0 1 5 0v6.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('settings') {
          <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.6" />
          <path
            d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M5.6 18.4l1.6-1.6M16.8 7.2l1.6-1.6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        }
        @case ('ticket') {
          <path
            d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5V10a2 2 0 0 0 0 4v2.5A2.5 2.5 0 0 1 16.5 19h-9A2.5 2.5 0 0 1 5 16.5V14a2 2 0 0 0 0-4V7.5Z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5V10a2 2 0 0 0 0 4v2.5A2.5 2.5 0 0 1 16.5 19h-9A2.5 2.5 0 0 1 5 16.5V14a2 2 0 0 0 0-4V7.5Z"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path d="M12 8v8" stroke="currentColor" stroke-width="1.4" stroke-dasharray="2 2" />
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
