import { describe, expect, it } from 'vitest';

import {
  applyEditFormToProfile,
  filterMyEventsByTab,
  getProfileInitials,
  profileToEditForm,
  validateChangePasswordForm,
  validateProfileEditForm,
} from '@features/profile/profile.model';
import { MOCK_MY_EVENTS } from '@mock/my-events.mock';
import { MOCK_USER_PROFILE_DASHBOARD } from '@mock/profile.mock';

describe('profile.model', () => {
  it('should derive initials from full name', () => {
    expect(getProfileInitials('Jane Doe')).toBe('JD');
  });

  it('should validate profile edit form', () => {
    const valid = {
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      phone: '',
      role: '',
      location: '',
      avatarUrl: null,
    };

    expect(validateProfileEditForm({ ...valid, fullName: '' })).toBe('Full name is required');
    expect(validateProfileEditForm({ ...valid, email: '' })).toBe('Enter a valid email address');
    expect(validateProfileEditForm({ ...valid, email: 'invalid' })).toBe(
      'Enter a valid email address',
    );
    expect(validateProfileEditForm(valid)).toBeNull();
  });

  it('should validate change password form', () => {
    expect(
      validateChangePasswordForm({
        currentPassword: '',
        newPassword: 'long-enough',
        confirmPassword: 'long-enough',
      }),
    ).toBe('Current password is required');

    expect(
      validateChangePasswordForm({
        currentPassword: 'old-pass',
        newPassword: 'short',
        confirmPassword: 'short',
      }),
    ).toBe('New password must be at least 8 characters');

    expect(
      validateChangePasswordForm({
        currentPassword: 'old-pass',
        newPassword: 'long-enough',
        confirmPassword: 'different',
      }),
    ).toBe('Passwords do not match');

    expect(
      validateChangePasswordForm({
        currentPassword: 'same-pass',
        newPassword: 'same-pass',
        confirmPassword: 'same-pass',
      }),
    ).toBe('New password must differ from current password');

    expect(
      validateChangePasswordForm({
        currentPassword: 'old-pass',
        newPassword: 'new-password',
        confirmPassword: 'new-password',
      }),
    ).toBeNull();
  });


  it('should map and apply profile edit form', () => {
    const profile = MOCK_USER_PROFILE_DASHBOARD.profile;
    const form = profileToEditForm(profile);
    const updated = applyEditFormToProfile(profile, { ...form, fullName: 'Jane Updated' });

    expect(updated.fullName).toBe('Jane Updated');
  });

  it('should filter my events by tab', () => {
    const upcoming = filterMyEventsByTab(MOCK_MY_EVENTS, 'upcoming');
    const attended = filterMyEventsByTab(MOCK_MY_EVENTS, 'attended');

    expect(upcoming).toHaveLength(2);
    expect(attended).toHaveLength(2);
    expect(upcoming.every((event) => event.tab === 'upcoming')).toBe(true);
    expect(attended.every((event) => event.tab === 'attended')).toBe(true);
  });
});
