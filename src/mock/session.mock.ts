import type { Models } from 'appwrite';

/** ID alineado con `createdByUserId` en `MOCK_EVENTS` (eventos 1 y 3). */
export const MOCK_SESSION_USER_ID = 'user-1';

/** Usuario de sesión local para desarrollo y pruebas sin Appwrite. */
export const MOCK_SESSION_USER = {
  $id: MOCK_SESSION_USER_ID,
  $createdAt: '2026-01-01T00:00:00.000Z',
  $updatedAt: '2026-01-01T00:00:00.000Z',
  name: 'Jane Doe',
  email: 'jane@example.com',
  registration: '2026-01-01T00:00:00.000Z',
  status: true,
  labels: [],
  passwordUpdate: '2026-01-01T00:00:00.000Z',
  phone: '',
  emailVerification: true,
  phoneVerification: false,
  mfa: false,
  prefs: {},
  targets: [],
  accessedAt: '2026-01-01T00:00:00.000Z',
} satisfies Models.User<Models.Preferences>;
