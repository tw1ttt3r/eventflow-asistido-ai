import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { isBrowserOnline, OFFLINE_ROUTE } from '@core/connectivity/connectivity.util';

/** Bloquea cualquier ruta salvo `/offline` cuando no hay conexión. */
export const connectivityGuard: CanActivateFn = () => {
  if (isBrowserOnline()) {
    return true;
  }

  return inject(Router).createUrlTree([OFFLINE_ROUTE]);
};
