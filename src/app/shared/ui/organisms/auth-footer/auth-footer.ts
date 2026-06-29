import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EfText } from '@shared/ui/atoms/text/text';

@Component({
  selector: 'ef-auth-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfText],
  template: `
    <footer class="space-y-2 text-center">
      <ef-text tone="legal">
        By continuing, you agree to EventFlow's Terms of Service and Privacy Policy.
      </ef-text>
      <ef-text tone="legal">© 2026 EventFlow Inc.</ef-text>
    </footer>
  `,
})
export class AuthFooter {}
