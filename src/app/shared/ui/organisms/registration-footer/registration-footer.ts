import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EfLink } from '@shared/ui/atoms/link/link';

@Component({
  selector: 'ef-registration-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfLink],
  template: `
    <footer class="flex items-center justify-between gap-4 text-xs text-slate-400">
      <span>© 2026 EventFlow</span>
      <div class="flex items-center gap-4">
        <ef-link href="#">Contact</ef-link>
        <ef-link href="#">Privacy</ef-link>
      </div>
    </footer>
  `,
})
export class RegistrationFooter {}
