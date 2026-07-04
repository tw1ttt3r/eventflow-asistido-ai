import { describe, expect, it } from 'vitest';

import {
  isBrowserOnline,
  isOfflineShellRoute,
  shouldRedirectToOffline,
} from '@core/connectivity/connectivity.util';

describe('connectivity.util', () => {
  it('should read browser online status from navigator', () => {
    Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });
    expect(isBrowserOnline()).toBe(true);

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: false });
    expect(isBrowserOnline()).toBe(false);

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });
  });

  it('should detect the offline shell route', () => {
    expect(isOfflineShellRoute('/offline')).toBe(true);
    expect(isOfflineShellRoute('/offline?retry=1')).toBe(true);
    expect(isOfflineShellRoute('/events')).toBe(false);
  });

  it('should only redirect when offline and outside the offline shell', () => {
    Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });
    expect(shouldRedirectToOffline('/events')).toBe(false);

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: false });
    expect(shouldRedirectToOffline('/events')).toBe(true);
    expect(shouldRedirectToOffline('/offline')).toBe(false);

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });
  });
});
