import { ChangeDetectionStrategy, Component, model, output } from '@angular/core';

import { CheckboxField } from '@shared/ui/molecules/checkbox-field/checkbox-field';
import { EfLink } from '@shared/ui/atoms/link/link';

@Component({
  selector: 'ef-auth-actions-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CheckboxField, EfLink],
  template: `
    <div class="flex items-center justify-between gap-4">
      <ef-checkbox-field fieldId="remember-me" label="Remember me" [(checked)]="rememberMe" />
      <ef-link (pressed)="forgotPress.emit()">Forgot?</ef-link>
    </div>
  `,
})
export class AuthActionsRow {
  readonly rememberMe = model(false);

  readonly forgotPress = output<void>();
}
