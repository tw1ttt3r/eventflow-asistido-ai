import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ef-offline-bottom-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer
      class="fixed inset-x-0 bottom-0 z-10 border-t border-slate-200 bg-white/95 backdrop-blur"
      aria-label="Offline mode"
    >
      <div class="mx-auto flex max-w-lg justify-end px-5 py-4">
        <p class="text-xs font-medium text-slate-400">EventFlow • Offline mode</p>
      </div>
    </footer>
  `,
})
export class OfflineBottomBar {}
