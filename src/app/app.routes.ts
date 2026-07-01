import { Routes } from '@angular/router';

import { authGuard } from '@core/auth/auth.guard';
import { guestGuard } from '@core/auth/guest.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadComponent: () => import('@features/auth/auth-page').then((m) => m.AuthPage),
  },
  {
    path: 'events',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@features/events/events-dashboard-page').then((m) => m.EventsDashboardPage),
  },
  {
    path: 'events/:id/register',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@features/events/event-registration-page').then((m) => m.EventRegistrationPage),
  },
  {
    path: 'events/:id/attendees',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@features/events/event-attendees-page').then((m) => m.EventAttendeesPage),
  },
  {
    path: 'events/:id/edit',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@features/events/event-edit-page').then((m) => m.EventEditPage),
  },
  {
    path: 'events/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@features/events/event-detail-page').then((m) => m.EventDetailPage),
  },
  {
    path: 'session',
    canActivate: [authGuard],
    loadComponent: () => import('@features/session/session-page').then((m) => m.SessionPage),
  },
  {
    path: 'session/edit',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@features/profile/profile-edit-page').then((m) => m.ProfileEditPage),
  },
  {
    path: 'session/change-password',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@features/profile/profile-change-password-page').then((m) => m.ProfileChangePasswordPage),
  },
  {
    path: '**',
    loadComponent: () =>
      import('@features/fallback/fallback-redirect-page').then((m) => m.FallbackRedirectPage),
  },
];
