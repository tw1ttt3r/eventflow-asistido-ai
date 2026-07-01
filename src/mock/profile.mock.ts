import type { UserProfileDashboard } from '@features/profile/profile.model';
import { MOCK_SESSION_USER_ID } from '@mock/session.mock';

export const MOCK_USER_PROFILE_DASHBOARD: UserProfileDashboard = {
  profile: {
    id: MOCK_SESSION_USER_ID,
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1 (415) 555-0198',
    role: 'Product Designer',
    location: 'San Francisco, CA',
    memberSinceShort: 'January 2026',
    memberSinceDate: 'January 12, 2026',
    avatarHue: 270,
    avatarUrl: null,
  },
  upcoming: [
    {
      id: 'up-1',
      title: 'Design Thinking Workshop',
      dateLabel: 'Sat, Jul 10',
      timeLabel: '10:00 AM',
      imageHue: 210,
    },
  ],
  attended: [
    {
      id: 'att-1',
      title: 'Community Meetup',
      dateLabel: 'May 18, 2026',
      icon: 'users-group',
      checkedIn: true,
    },
    {
      id: 'att-2',
      title: 'UX Portfolio Review',
      dateLabel: 'Apr 02, 2026',
      icon: 'presentation',
      checkedIn: true,
    },
  ],
  tickets: [
    {
      id: 'tkt-1',
      label: 'Conference Pass',
      quantityLabel: '1x',
      validUntilLabel: 'Jul 10, 2026',
    },
    {
      id: 'tkt-2',
      label: 'Workshop Entry',
      quantityLabel: '1x',
      validUntilLabel: 'Jul 10, 2026',
    },
    {
      id: 'tkt-3',
      label: 'Networking Add-on',
      quantityLabel: '1x',
      validUntilLabel: 'Jul 10, 2026',
    },
  ],
};
