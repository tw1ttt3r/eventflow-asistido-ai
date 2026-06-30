import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'ef-attendees-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-ef-surface px-4 py-5">
      <div class="mx-auto flex w-full max-w-lg flex-col gap-4">
        <ng-content />
      </div>
    </div>
  `,
})
export class AttendeesLayout {
  readonly backPress = output<void>();
}
