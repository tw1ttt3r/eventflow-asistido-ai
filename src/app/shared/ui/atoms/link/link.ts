import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'ef-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (href()) {
      <a
        [href]="href()"
        class="font-semibold text-ef-purple underline-offset-2 transition hover:underline"
      >
        <ng-content />
      </a>
    } @else {
      <button
        type="button"
        class="font-semibold text-ef-purple underline-offset-2 transition hover:underline"
        (click)="pressed.emit()"
      >
        <ng-content />
      </button>
    }
  `,
})
export class EfLink {
  readonly href = input<string | undefined>(undefined);

  readonly pressed = output<void>();
}
