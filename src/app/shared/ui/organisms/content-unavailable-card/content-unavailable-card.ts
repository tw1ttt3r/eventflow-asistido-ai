import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { ContentUnavailableCopy } from '@features/content-unavailable/content-unavailable.model';
import { EfButton } from '@shared/ui/atoms/button/button';
import { Subheading } from '@shared/ui/atoms/subheading/subheading';
import { ContentUnavailableIllustration } from '@shared/ui/organisms/content-unavailable-illustration/content-unavailable-illustration';

@Component({
  selector: 'ef-content-unavailable-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContentUnavailableIllustration, Subheading, EfButton],
  template: `
    <section
      class="overflow-hidden rounded-3xl bg-white px-6 pb-8 pt-8 shadow-sm ring-1 ring-slate-100"
      aria-labelledby="content-unavailable-title"
    >
      <ef-content-unavailable-illustration />

      <h1
        id="content-unavailable-title"
        class="mt-6 text-center font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl"
      >
        {{ copy().title }}
      </h1>
      <ef-subheading class="mx-auto mt-3 max-w-md text-center">{{ copy().description }}</ef-subheading>

      <div class="mt-6">
        <ef-button variant="purple" (pressed)="goHomePress.emit()">{{ copy().goHomeLabel }}</ef-button>
      </div>
    </section>
  `,
})
export class ContentUnavailableCard {
  readonly copy = input.required<ContentUnavailableCopy>();

  readonly goHomePress = output<void>();
}
