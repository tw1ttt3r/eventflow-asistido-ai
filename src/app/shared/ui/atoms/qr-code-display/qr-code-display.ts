import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

const GRID_SIZE = 21;

function isTopLeftFinderBorder(x: number, y: number): boolean {
  return x < 7 && y < 7 && (x === 0 || y === 0 || x === 6 || y === 6);
}

function isTopRightFinderBorder(x: number, y: number, gridSize: number): boolean {
  return (
    x >= gridSize - 7 &&
    y < 7 &&
    (x === gridSize - 7 || y === 0 || x === gridSize - 1 || y === 6)
  );
}

function isBottomLeftFinderBorder(x: number, y: number, gridSize: number): boolean {
  return (
    x < 7 &&
    y >= gridSize - 7 &&
    (x === 0 || y === gridSize - 7 || x === 6 || y === gridSize - 1)
  );
}

function isFinderCore(x: number, y: number, gridSize: number): boolean {
  return (
    (x >= 2 && x <= 4 && y >= 2 && y <= 4) ||
    (x >= gridSize - 5 && x <= gridSize - 3 && y >= 2 && y <= 4) ||
    (x >= 2 && x <= 4 && y >= gridSize - 5 && y <= gridSize - 3)
  );
}

function shouldFillFinderCell(x: number, y: number, gridSize: number): boolean {
  return (
    isTopLeftFinderBorder(x, y) ||
    isTopRightFinderBorder(x, y, gridSize) ||
    isBottomLeftFinderBorder(x, y, gridSize) ||
    isFinderCore(x, y, gridSize)
  );
}

function hashSeed(seed: string, x: number, y: number): number {
  let value = x * 374761 + y * 668265;

  for (let index = 0; index < seed.length; index++) {
    const codePoint = seed.codePointAt(index) ?? 0;
    value = (value + codePoint * (index + 11)) % 1_000_003;
    if (codePoint > 0xffff) {
      index++;
    }
  }

  return value;
}

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
        if (shouldFillFinderCell(x, y, GRID_SIZE)) {
          cells.push({ x, y });
          continue;
        }

        cells.push(hashSeed(seed, x, y) % 3 === 0 ? { x, y } : null);
      }
    }

    return cells;
  });
}
