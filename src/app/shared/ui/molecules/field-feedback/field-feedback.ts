import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { EfIcon } from '@shared/ui/atoms/icon/icon';
import type { IconName } from '@shared/ui/atoms/icon/icon.types';

export type FieldFeedbackTone = 'success' | 'info' | 'error';

const FEEDBACK_ICONS: Record<FieldFeedbackTone, IconName> = {
  success: 'check-circle',
  info: 'info-lines',
  error: 'alert-circle',
};

@Component({
  selector: 'ef-field-feedback',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfIcon],
  template: `
    <p
      class="flex items-center gap-1.5 text-xs font-medium"
      [class.text-emerald-600]="tone() === 'success'"
      [class.text-ef-blue]="tone() === 'info'"
      [class.text-rose-600]="tone() === 'error'"
    >
      <ef-icon [name]="iconName()" size="xs" />
      {{ message() }}
    </p>
  `,
})
export class FieldFeedback {
  readonly tone = input.required<FieldFeedbackTone>();
  readonly message = input.required<string>();

  protected iconName(): IconName {
    return FEEDBACK_ICONS[this.tone()];
  }
}
