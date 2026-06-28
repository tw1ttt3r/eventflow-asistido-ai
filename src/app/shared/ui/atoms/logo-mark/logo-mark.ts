import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ef-logo-mark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      class="shrink-0"
    >
      <rect x="4" y="8" width="32" height="24" rx="4" class="fill-ef-purple" />
      <rect x="8" y="12" width="24" height="16" rx="2" class="fill-white/90" />
      <circle cx="20" cy="20" r="4" class="fill-ef-purple" />
    </svg>
  `,
})
export class LogoMark {
  readonly size = input(40);
}
