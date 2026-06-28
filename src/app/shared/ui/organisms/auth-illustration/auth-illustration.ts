import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ef-auth-illustration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="mx-auto w-full max-w-md" aria-hidden="true">
      <svg viewBox="0 0 400 220" class="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="200" cy="190" rx="150" ry="18" class="fill-slate-200/80" />
        <rect x="90" y="110" width="220" height="70" rx="12" class="fill-ef-blue/20" />
        <circle cx="140" cy="95" r="28" class="fill-ef-purple/30" />
        <circle cx="140" cy="95" r="18" class="fill-ef-purple/50" />
        <rect x="118" y="120" width="44" height="60" rx="10" class="fill-ef-purple" />
        <circle cx="260" cy="88" r="24" class="fill-ef-blue/40" />
        <rect x="242" y="112" width="36" height="68" rx="10" class="fill-ef-blue" />
        <circle cx="200" cy="82" r="22" class="fill-violet-300" />
        <rect x="184" y="104" width="32" height="76" rx="10" class="fill-violet-500" />
        <rect x="130" y="145" width="140" height="8" rx="4" class="fill-white/70" />
        <rect x="150" y="160" width="100" height="6" rx="3" class="fill-white/50" />
      </svg>
    </figure>
  `,
})
export class AuthIllustration {}
