import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';

/** Bloquea `/auth` si ya hay sesión activa → redirige a `/events`. */
export const guestGuard: CanActivateFn = async () => {
  const auth = inject(AppwriteAuthService);
  const router = inject(Router);

  const user = await auth.getCurrentUser();
  if (user) {
    return router.createUrlTree(['/events']);
  }

  return true;
};
