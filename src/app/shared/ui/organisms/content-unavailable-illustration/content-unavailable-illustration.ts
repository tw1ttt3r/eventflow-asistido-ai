import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ef-content-unavailable-illustration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="mx-auto flex size-36 items-center justify-center rounded-full bg-sky-50" aria-hidden="true">
      <svg viewBox="0 0 120 120" class="size-24" xmlns="http://www.w3.org/2000/svg">
        <rect x="28" y="34" width="52" height="34" rx="8" class="fill-ef-blue/25" />
        <rect x="36" y="42" width="36" height="6" rx="3" class="fill-white/80" />
        <rect x="36" y="52" width="24" height="4" rx="2" class="fill-white/60" />
        <rect x="48" y="58" width="44" height="34" rx="8" class="fill-ef-purple/20" />
        <rect x="56" y="66" width="28" height="6" rx="3" class="fill-white/80" />
        <rect x="56" y="76" width="18" height="4" rx="2" class="fill-white/60" />
        <circle cx="82" cy="36" r="14" class="fill-white stroke-ef-blue/30" stroke-width="2" />
        <path
          d="M76 36h12M82 30v12"
          class="stroke-ef-blue"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      </svg>
    </figure>
  `,
})
export class ContentUnavailableIllustration {}
