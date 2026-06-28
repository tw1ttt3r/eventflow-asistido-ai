import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AppwriteAuthService } from '../appwrite/appwrite-auth.service';

/** Bloquea `/auth` si ya hay sesión activa → redirige a `/session`. */
export const guestGuard: CanActivateFn = async () => {
  const auth = inject(AppwriteAuthService);
  const router = inject(Router);

  const user = await auth.getCurrentUser();
  if (user) {
    return router.createUrlTree(['/session'], { queryParams: { flow: 'login' } });
  }

  return true;
};
