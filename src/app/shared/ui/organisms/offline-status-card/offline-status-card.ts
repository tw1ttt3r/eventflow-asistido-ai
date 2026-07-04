import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { EfButton } from '@shared/ui/atoms/button/button';
import { Subheading } from '@shared/ui/atoms/subheading/subheading';
import { OfflineIllustration } from '@shared/ui/organisms/offline-illustration/offline-illustration';

@Component({
  selector: 'ef-offline-status-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [OfflineIllustration, Subheading, EfButton],
  template: `
    <section
      class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100"
      aria-labelledby="offline-status-title"
    >
      <div class="relative px-5 pb-6 pt-5">
        <div class="mb-4 flex justify-end">
          <span
            class="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
          >
            <span class="size-1.5 rounded-full bg-sky-500" aria-hidden="true"></span>
            {{ lastCheckedLabel() }}
          </span>
        </div>

        <ef-offline-illustration />

        <h1
          id="offline-status-title"
          class="mt-4 text-center font-serif text-2xl font-bold leading-tight text-slate-900"
        >
          {{ title() }}
        </h1>
        <ef-subheading class="mx-auto mt-3 max-w-sm text-center">{{ description() }}</ef-subheading>

        <div class="mt-6">
          <ef-button variant="purple" [disabled]="retrying()" (pressed)="retryPress.emit()">
            {{ retrying() ? 'Checking connection…' : 'Retry connection' }}
          </ef-button>
        </div>
      </div>
    </section>
  `,
})
export class OfflineStatusCard {
  readonly lastCheckedLabel = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly retrying = input(false);

  readonly retryPress = output<void>();
}
