import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ef-offline-illustration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="mx-auto w-full max-w-xs" aria-hidden="true">
      <svg viewBox="0 0 320 220" class="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="196" rx="118" ry="14" class="fill-slate-200/70" />
        <rect x="168" y="36" width="108" height="168" rx="18" class="fill-ef-blue/15" />
        <rect
          x="176"
          y="48"
          width="92"
          height="144"
          rx="12"
          class="fill-white stroke-ef-blue/25"
          stroke-width="2"
        />
        <rect x="188" y="64" width="68" height="34" rx="8" class="fill-ef-blue/20" />
        <rect x="188" y="106" width="68" height="34" rx="8" class="fill-ef-purple/15" />
        <circle cx="222" cy="158" r="14" class="fill-ef-blue/25" />
        <path
          d="M214 158h16M222 150v16"
          class="stroke-ef-blue"
          stroke-width="2"
          stroke-linecap="round"
        />
        <circle cx="88" cy="72" r="18" class="fill-ef-purple/30" />
        <rect x="62" y="88" width="52" height="88" rx="14" class="fill-ef-purple" />
        <rect x="72" y="104" width="32" height="8" rx="4" class="fill-white/70" />
        <rect x="72" y="120" width="24" height="6" rx="3" class="fill-white/50" />
        <path
          d="M44 58c18-14 38-20 58-18M52 74c14-8 30-12 46-10"
          class="stroke-ef-blue/40"
          stroke-width="3"
          stroke-linecap="round"
          fill="none"
        />
      </svg>
    </figure>
  `,
})
export class OfflineIllustration {}
