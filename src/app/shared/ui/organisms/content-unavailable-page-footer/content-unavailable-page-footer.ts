import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ef-content-unavailable-page-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="py-6 text-center text-sm text-slate-400">
      <p>
        © 2026 EventFlow
        <span aria-hidden="true"> · </span>
        <a href="https://eventflow.com/terms" target="_blank" rel="noopener noreferrer" class="text-ef-purple">
          Terms
        </a>
      </p>
    </footer>
  `,
})
export class ContentUnavailablePageFooter {}
