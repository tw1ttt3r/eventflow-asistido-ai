import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { getProfileInitials } from '@features/profile/profile.model';

@Component({
  selector: 'ef-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (imageUrl(); as url) {
      <img
        [src]="url"
        [alt]="alt()"
        class="rounded-full object-cover ring-2 ring-white"
        [class]="sizeClass()"
      />
    } @else {
      <div
        class="flex items-center justify-center rounded-full font-bold text-white ring-2 ring-white"
        [class]="sizeClass()"
        [style.background]="gradient()"
        aria-hidden="true"
      >
        {{ initials() }}
      </div>
    }
  `,
})
export class EfAvatar {
  readonly fullName = input.required<string>();
  readonly imageUrl = input<string | null>(null);
  readonly hue = input(270);
  readonly size = input<'md' | 'lg'>('lg');
  readonly alt = input('Profile photo');

  protected readonly initials = computed(() => getProfileInitials(this.fullName()));

  protected readonly sizeClass = computed(() =>
    this.size() === 'lg' ? 'size-20 text-xl' : 'size-14 text-base',
  );

  protected readonly gradient = computed(() => {
    const hue = this.hue();
    return `linear-gradient(135deg, hsl(${hue} 55% 60%), hsl(${hue} 45% 42%))`;
  });
}
