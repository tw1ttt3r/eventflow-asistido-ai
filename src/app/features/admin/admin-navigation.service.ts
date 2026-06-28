import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

const ADMIN_TAB_ROUTES: Record<string, string> = {
  dash: '/events',
  events: '/events',
  account: '/session',
};

@Injectable({ providedIn: 'root' })
export class AdminNavigationService {
  private readonly router = inject(Router);

  navigate(tabId: string): void {
    const route = ADMIN_TAB_ROUTES[tabId];
    if (route) {
      void this.router.navigate([route]);
    }
  }
}
