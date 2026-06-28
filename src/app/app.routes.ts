import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';
import { guestGuard } from './core/auth/guest.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadComponent: () => import('./features/auth/auth-page').then((m) => m.AuthPage),
  },
  {
    path: 'session',
    canActivate: [authGuard],
    loadComponent: () => import('./features/session/session-page').then((m) => m.SessionPage),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/fallback/fallback-redirect-page').then((m) => m.FallbackRedirectPage),
  },
];
