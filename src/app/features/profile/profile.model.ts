export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  location: string;
  memberSinceShort: string;
  memberSinceDate: string;
  avatarHue: number;
  avatarUrl: string | null;
}

export interface ProfileUpcomingEvent {
  id: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  imageHue: number;
  ticketId?: string;
}

export interface ProfileAttendedEvent {
  id: string;
  title: string;
  dateLabel: string;
  icon: 'users-group' | 'presentation';
  checkedIn: boolean;
}

export interface ProfileDigitalTicket {
  id: string;
  label: string;
  quantityLabel: string;
  validUntilLabel: string;
}

export interface UserProfileDashboard {
  profile: UserProfile;
  upcoming: ProfileUpcomingEvent[];
  attended: ProfileAttendedEvent[];
  tickets: ProfileDigitalTicket[];
}

export interface ProfileEditFormValue {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  location: string;
  avatarUrl: string | null;
}

export interface ChangePasswordFormValue {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export function profileToEditForm(profile: UserProfile): ProfileEditFormValue {
  return {
    fullName: profile.fullName,
    email: profile.email,
    phone: profile.phone,
    role: profile.role,
    location: profile.location,
    avatarUrl: profile.avatarUrl,
  };
}

export function applyEditFormToProfile(
  profile: UserProfile,
  value: ProfileEditFormValue,
): UserProfile {
  return {
    ...profile,
    fullName: value.fullName.trim(),
    email: value.email.trim(),
    phone: value.phone.trim(),
    role: value.role.trim(),
    location: value.location.trim(),
    avatarUrl: value.avatarUrl,
  };
}

export function getProfileInitials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0]?.[0] ?? ''}${parts[1]?.[0] ?? ''}`.toUpperCase();
  }
  return fullName.slice(0, 2).toUpperCase();
}

export function validateProfileEditForm(value: ProfileEditFormValue): string | null {
  if (!value.fullName.trim()) {
    return 'Full name is required';
  }
  if (!value.email.trim() || !value.email.includes('@')) {
    return 'Enter a valid email address';
  }
  return null;
}

export function validateChangePasswordForm(value: ChangePasswordFormValue): string | null {
  if (!value.currentPassword) {
    return 'Current password is required';
  }
  if (value.newPassword.length < 8) {
    return 'New password must be at least 8 characters';
  }
  if (value.newPassword !== value.confirmPassword) {
    return 'Passwords do not match';
  }
  if (value.currentPassword === value.newPassword) {
    return 'New password must differ from current password';
  }
  return null;
}
