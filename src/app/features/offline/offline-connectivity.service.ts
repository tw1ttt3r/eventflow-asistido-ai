import { afterNextRender, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

import {
  isBrowserOnline,
  OFFLINE_ROUTE,
  shouldRedirectToOffline,
} from '@core/connectivity/connectivity.util';

function formatLastCheckedMinutes(minutes: number): string {
  if (minutes <= 1) {
    return 'Last checked 1m ago';
  }
  return `Last checked ${minutes}m ago`;
}

@Injectable({ providedIn: 'root' })
export class OfflineConnectivityService {
  private readonly router = inject(Router);
  private readonly teardown = new AbortController();

  private lastCheckedAt = Date.now();
  private listenersRegistered = false;

  readonly isOnline = signal(isBrowserOnline());
  readonly lastCheckedLabel = signal(formatLastCheckedMinutes(2));
  readonly lastOnlineUrl = signal<string | null>(null);

  constructor() {
    afterNextRender(() => {
      this.registerListeners();
      this.evaluateConnectivity();
    });
  }

  refreshStatus(): boolean {
    this.lastCheckedAt = Date.now();
    this.syncFromNavigator();
    this.lastCheckedLabel.set(formatLastCheckedMinutes(1));
    return this.isOnline();
  }

  tickLastCheckedLabel(): void {
    const minutes = Math.max(1, Math.floor((Date.now() - this.lastCheckedAt) / 60_000));
    this.lastCheckedLabel.set(formatLastCheckedMinutes(minutes));
  }

  returnUrl(): string {
    return this.lastOnlineUrl() ?? '/events';
  }

  private registerListeners(): void {
    const browserWindow = globalThis.window;
    if (browserWindow === undefined || this.listenersRegistered) {
      return;
    }

    const { signal: abortSignal } = this.teardown;

    browserWindow.addEventListener('offline', () => this.handleOffline(), { signal: abortSignal });
    browserWindow.addEventListener('online', () => this.handleOnline(), { signal: abortSignal });

    this.listenersRegistered = true;
  }

  private handleOffline(): void {
    this.syncFromNavigator();
    this.redirectToOfflineIfNeeded();
  }

  private handleOnline(): void {
    this.lastCheckedAt = Date.now();
    this.syncFromNavigator();
    this.lastCheckedLabel.set(formatLastCheckedMinutes(1));
  }

  private evaluateConnectivity(): void {
    this.syncFromNavigator();

    if (!this.isOnline()) {
      this.redirectToOfflineIfNeeded();
    }
  }

  private redirectToOfflineIfNeeded(): void {
    const currentUrl = this.router.url;

    if (!shouldRedirectToOffline(currentUrl)) {
      return;
    }

    this.lastOnlineUrl.set(currentUrl);
    void this.router.navigate([OFFLINE_ROUTE]);
  }

  private syncFromNavigator(): void {
    this.isOnline.set(isBrowserOnline());
  }
}
