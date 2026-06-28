import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AppwriteAuthService } from '../appwrite/appwrite-auth.service';

/** Bloquea rutas protegidas si no hay sesión → redirige a `/auth`. */
export const authGuard: CanActivateFn = async () => {
  const auth = inject(AppwriteAuthService);
  const router = inject(Router);

  const user = await auth.getCurrentUser();
  if (!user) {
    return router.createUrlTree(['/auth']);
  }

  return true;
};
