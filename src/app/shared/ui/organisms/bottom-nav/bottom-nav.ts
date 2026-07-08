import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export interface BottomNavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'ef-bottom-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav
      class="fixed inset-x-0 bottom-0 z-10 border-t border-slate-200 bg-white/95 backdrop-blur"
      aria-label="Main navigation"
    >
      <div class="mx-auto grid max-w-lg grid-cols-2 px-4 py-3">
        @for (item of items(); track item.id) {
          <button
            type="button"
            class="flex flex-col items-center gap-1 text-xs font-semibold transition"
            [class.text-ef-blue]="activeId() === item.id"
            [class.text-slate-400]="activeId() !== item.id"
            (click)="navigate.emit(item.id)"
          >
            <span
              class="size-2 rounded-full"
              [class.bg-ef-blue]="activeId() === item.id"
              [class.bg-transparent]="activeId() !== item.id"
            ></span>
            {{ item.label }}
          </button>
        }
      </div>
    </nav>
  `,
})
export class BottomNav {
  readonly items = input.required<BottomNavItem[]>();
  readonly activeId = input.required<string>();

  readonly navigate = output<string>();
}
