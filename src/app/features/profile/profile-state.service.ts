import { Injectable, signal } from '@angular/core';

import {
  applyEditFormToProfile,
  type ProfileEditFormValue,
  type UserProfile,
  type UserProfileDashboard,
} from '@features/profile/profile.model';
import { MOCK_USER_PROFILE_DASHBOARD } from '@mock/profile.mock';

@Injectable({ providedIn: 'root' })
export class ProfileStateService {
  private readonly dashboardState = signal<UserProfileDashboard>(structuredClone(MOCK_USER_PROFILE_DASHBOARD));

  readonly dashboard = this.dashboardState.asReadonly();

  updateProfile(value: ProfileEditFormValue): UserProfile {
    const current = this.dashboardState();
    const updatedProfile = applyEditFormToProfile(current.profile, value);

    this.dashboardState.set({
      ...current,
      profile: updatedProfile,
    });

    return updatedProfile;
  }
}
