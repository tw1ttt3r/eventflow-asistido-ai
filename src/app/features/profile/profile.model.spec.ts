import { describe, expect, it } from 'vitest';

import {
  applyEditFormToProfile,
  getProfileInitials,
  profileToEditForm,
  validateChangePasswordForm,
  validateProfileEditForm,
} from '@features/profile/profile.model';
import { MOCK_USER_PROFILE_DASHBOARD } from '@mock/profile.mock';

describe('profile.model', () => {
  it('should derive initials from full name', () => {
    expect(getProfileInitials('Jane Doe')).toBe('JD');
  });

  it('should validate profile edit form', () => {
    expect(
      validateProfileEditForm({
        fullName: '',
        email: 'jane@example.com',
        phone: '',
        role: '',
        location: '',
        avatarUrl: null,
      }),
    ).toBe('Full name is required');
  });

  it('should validate change password form', () => {
    expect(
      validateChangePasswordForm({
        currentPassword: 'old-pass',
        newPassword: 'short',
        confirmPassword: 'short',
      }),
    ).toBe('New password must be at least 8 characters');

    expect(
      validateChangePasswordForm({
        currentPassword: 'same-pass',
        newPassword: 'same-pass',
        confirmPassword: 'same-pass',
      }),
    ).toBe('New password must differ from current password');
  });

  it('should map and apply profile edit form', () => {
    const profile = MOCK_USER_PROFILE_DASHBOARD.profile;
    const form = profileToEditForm(profile);
    const updated = applyEditFormToProfile(profile, { ...form, fullName: 'Jane Updated' });

    expect(updated.fullName).toBe('Jane Updated');
  });
});
