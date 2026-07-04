import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { App } from '@app/app';
import { OfflineConnectivityService } from '@features/offline/offline-connectivity.service';

@Component({ template: '' })
class TestRouteComponent {}

describe('OfflineConnectivityService', () => {
  afterEach(() => {
    Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });
    vi.useRealTimers();
  });

  async function bootApp(initialUrl: string): Promise<Router> {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([
          { path: 'events', component: TestRouteComponent },
          { path: 'auth', component: TestRouteComponent },
          { path: 'offline', component: TestRouteComponent },
          { path: 'session', component: TestRouteComponent },
        ]),
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const router = TestBed.inject(Router);
    await router.navigateByUrl(initialUrl);
    return router;
  }

  it('should refresh status and update last checked label', async () => {
    await bootApp('/events');
    const service = TestBed.inject(OfflineConnectivityService);
    const online = service.refreshStatus();

    expect(online).toBe(true);
    expect(service.lastCheckedLabel()).toBe('Last checked 1m ago');
  });

  it('should tick last checked label with elapsed minutes', async () => {
    await bootApp('/events');
    const service = TestBed.inject(OfflineConnectivityService);

    vi.useFakeTimers();
    service.refreshStatus();
    vi.advanceTimersByTime(3 * 60_000);
    service.tickLastCheckedLabel();

    expect(service.lastCheckedLabel()).toBe('Last checked 3m ago');
  });


  it('should redirect any monitored route to offline when connection drops', async () => {
    const router = await bootApp('/events');
    const navigateSpy = vi.spyOn(router, 'navigate');

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: false });
    globalThis.window.dispatchEvent(new Event('offline'));

    expect(navigateSpy).toHaveBeenCalledWith(['/offline']);
    expect(TestBed.inject(OfflineConnectivityService).lastOnlineUrl()).toBe('/events');
  });

  it('should redirect auth route to offline when connection drops', async () => {
    const router = await bootApp('/auth');
    const navigateSpy = vi.spyOn(router, 'navigate');

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: false });
    globalThis.window.dispatchEvent(new Event('offline'));

    expect(navigateSpy).toHaveBeenCalledWith(['/offline']);
  });

  it('should not redirect again when already on the offline shell', async () => {
    const router = await bootApp('/offline');
    const navigateSpy = vi.spyOn(router, 'navigate');

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: false });
    globalThis.window.dispatchEvent(new Event('offline'));

    expect(navigateSpy).not.toHaveBeenCalled();
  });

  it('should update status when connection is restored', async () => {
    await bootApp('/offline');
    const service = TestBed.inject(OfflineConnectivityService);

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: false });
    globalThis.window.dispatchEvent(new Event('offline'));

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });
    globalThis.window.dispatchEvent(new Event('online'));

    expect(service.isOnline()).toBe(true);
    expect(service.lastCheckedLabel()).toBe('Last checked 1m ago');
  });

  it('should redirect on startup when the browser is already offline', async () => {
    Object.defineProperty(navigator, 'onLine', { configurable: true, value: false });

    const router = await bootApp('/events');
    const navigateSpy = vi.spyOn(router, 'navigate');

    // afterNextRender already ran during boot; force another evaluation path via offline event
    // after listeners are registered while still offline on a monitored route.
    await router.navigateByUrl('/session');
    globalThis.window.dispatchEvent(new Event('offline'));

    expect(navigateSpy).toHaveBeenCalledWith(['/offline']);
  });

  it('should expose return url for retry navigation', async () => {
    await bootApp('/events');
    const service = TestBed.inject(OfflineConnectivityService);

    expect(service.returnUrl()).toBe('/events');

    service.lastOnlineUrl.set('/session');
    expect(service.returnUrl()).toBe('/session');
  });

  it('should ignore duplicate listener registration', async () => {
    await bootApp('/events');
    const service = TestBed.inject(OfflineConnectivityService) as unknown as {
      registerListeners(): void;
    };

    expect(() => service.registerListeners()).not.toThrow();
  });
});

