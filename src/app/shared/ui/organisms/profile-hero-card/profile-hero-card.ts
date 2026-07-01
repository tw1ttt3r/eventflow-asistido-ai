import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { UserProfile } from '@features/profile/profile.model';
import { EfAvatar } from '@shared/ui/atoms/avatar/avatar';
import { EfButton } from '@shared/ui/atoms/button/button';
import { EfIcon } from '@shared/ui/atoms/icon/icon';
import { EfIconButton } from '@shared/ui/atoms/icon-button/icon-button';
import { EfLink } from '@shared/ui/atoms/link/link';
import { ProfileMetaItem } from '@shared/ui/molecules/profile-meta-item/profile-meta-item';

@Component({
  selector: 'ef-profile-hero-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EfAvatar, EfIcon, EfIconButton, EfLink, ProfileMetaItem, EfButton],
  template: `
    <section class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div class="flex gap-4">
        <ef-avatar
          [fullName]="profile().fullName"
          [imageUrl]="profile().avatarUrl"
          [hue]="profile().avatarHue"
          size="lg"
        />

        <div class="min-w-0 flex-1">
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0">
              <h1 class="font-serif text-xl font-bold text-slate-900">{{ profile().fullName }}</h1>
              <p class="mt-0.5 text-xs text-slate-500">Member since {{ profile().memberSinceShort }}</p>
              <p class="mt-1 text-sm text-slate-600">
                {{ profile().role }} · {{ profile().location }}
              </p>
            </div>
            <ef-icon-button ariaLabel="Edit profile" (pressed)="editPress.emit()">
              <ef-icon name="edit" size="sm" iconClass="text-ef-purple" />
            </ef-icon-button>
          </div>
        </div>
      </div>

      <dl class="mt-5 space-y-3 border-t border-slate-100 pt-4">
        <ef-profile-meta-item label="Email">
          <ef-link [href]="'mailto:' + profile().email">{{ profile().email }}</ef-link>
        </ef-profile-meta-item>
        <ef-profile-meta-item label="Phone">{{ profile().phone }}</ef-profile-meta-item>
        <ef-profile-meta-item label="Member since">{{ profile().memberSinceDate }}</ef-profile-meta-item>
      </dl>

      <div class="mt-5 grid grid-cols-2 gap-3">
        <ef-button variant="purple" [fullWidth]="true" (pressed)="editPress.emit()">Edit Profile</ef-button>
        <ef-button variant="soft" [fullWidth]="true" (pressed)="changePasswordPress.emit()">
          Change Password
        </ef-button>
      </div>

      <div class="mt-3">
        <ef-button variant="blue" [disabled]="loggingOut()" (pressed)="logoutPress.emit()">
          {{ loggingOut() ? 'Logging out…' : 'Logout' }}
        </ef-button>
      </div>
    </section>
  `,
})
export class ProfileHeroCard {
  readonly profile = input.required<UserProfile>();
  readonly loggingOut = input(false);

  readonly editPress = output<void>();
  readonly changePasswordPress = output<void>();
  readonly logoutPress = output<void>();
}
