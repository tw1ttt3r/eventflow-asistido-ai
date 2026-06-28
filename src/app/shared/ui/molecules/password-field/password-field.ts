import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EfInput } from '../../atoms/input/input';
import { Label } from '../../atoms/label/label';
import { EfToggle } from '../../atoms/toggle/toggle';
import {
  computePasswordStrength,
  passwordStrengthLabel,
  type PasswordStrengthLevel,
} from '../../password-strength.util';

@Component({
  selector: 'ef-password-strength',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (level() !== 'empty') {
      <p class="text-xs text-slate-500">
        Password strength:
        <span class="font-semibold" [class]="strengthClass()">{{ label() }}</span>
      </p>
    }
  `,
})
export class PasswordStrength {
  readonly level = input<PasswordStrengthLevel>('empty');

  protected readonly label = computed(() => passwordStrengthLabel(this.level()));

  protected readonly strengthClass = computed(() => {
    switch (this.level()) {
      case 'weak':
        return 'text-rose-500';
      case 'fair':
        return 'text-amber-500';
      case 'good':
        return 'text-emerald-600';
      case 'strong':
        return 'text-emerald-700';
      default:
        return 'text-slate-500';
    }
  });
}

@Component({
  selector: 'ef-password-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, Label, EfInput, EfToggle, PasswordStrength],
  template: `
    <div class="space-y-2">
      <ef-label [htmlFor]="fieldId()">{{ label() }}</ef-label>
      <ef-input
        [id]="fieldId()"
        [type]="showPassword() ? 'text' : 'password'"
        [placeholder]="placeholder()"
        [autocomplete]="autocomplete()"
        [(value)]="value"
      />
      <div class="flex flex-wrap items-center justify-between gap-3">
        @if (showStrength()) {
          <ef-password-strength [level]="strength()" />
        }
        <label class="ml-auto flex items-center gap-2 text-xs text-slate-500">
          <ef-toggle [(checked)]="showPassword" ariaLabel="Show password" />
          Show password
        </label>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class PasswordField {
  readonly fieldId = input.required<string>();
  readonly label = input.required<string>();
  readonly placeholder = input('');
  readonly autocomplete = input<string | undefined>(undefined);
  readonly showStrength = input(true);

  readonly value = model('');
  protected readonly showPassword = model(false);

  protected readonly strength = computed(() => computePasswordStrength(this.value()));
}
