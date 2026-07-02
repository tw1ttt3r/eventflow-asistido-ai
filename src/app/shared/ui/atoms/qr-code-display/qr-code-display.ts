import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

const GRID_SIZE = 21;

@Component({
  selector: 'ef-qr-code-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg [attr.viewBox]="'0 0 ' + GRID_SIZE + ' ' + GRID_SIZE" class="size-44" aria-hidden="true">
      <rect width="100%" height="100%" fill="#ffffff" />
      @for (cell of cells(); track $index) {
        @if (cell) {
          <rect [attr.x]="cell.x" [attr.y]="cell.y" width="1" height="1" fill="#0f172a" />
        }
      }
    </svg>
  `,
})
export class QrCodeDisplay {
  readonly seed = input.required<string>();

  protected readonly GRID_SIZE = GRID_SIZE;

  protected readonly cells = computed(() => {
    const seed = this.seed();
    const cells: Array<{ x: number; y: number } | null> = [];

    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        const inFinder =
          (x < 7 && y < 7) ||
          (x >= GRID_SIZE - 7 && y < 7) ||
          (x < 7 && y >= GRID_SIZE - 7);
        const onFinderBorder =
          inFinder &&
          (x === 0 ||
            y === 0 ||
            x === GRID_SIZE - 1 ||
            y === GRID_SIZE - 1 ||
            x === 6 ||
            y === 6 ||
            (x < 7 && y === 6) ||
            (y < 7 && x === 6) ||
            (x >= GRID_SIZE - 7 && y === 6) ||
            (y < 7 && x === GRID_SIZE - 7) ||
            (x < 7 && y === GRID_SIZE - 7));
        const inFinderCore =
          inFinder &&
          ((x >= 2 && x <= 4 && y >= 2 && y <= 4) ||
            (x >= GRID_SIZE - 5 && x <= GRID_SIZE - 3 && y >= 2 && y <= 4) ||
            (x >= 2 && x <= 4 && y >= GRID_SIZE - 5 && y <= GRID_SIZE - 3));

        if (onFinderBorder || inFinderCore) {
          cells.push({ x, y });
          continue;
        }

        const hash = this.hash(seed, x, y);
        cells.push(hash % 3 === 0 ? { x, y } : null);
      }
    }

    return cells;
  });

  private hash(seed: string, x: number, y: number): number {
    let value = x * 374761 + y * 668265;
    for (let index = 0; index < seed.length; index++) {
      value = (value + seed.charCodeAt(index) * (index + 11)) % 1000003;
    }
    return value;
  }
}
