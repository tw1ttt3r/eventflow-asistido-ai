import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';

import { App } from '@app/app';
import { OfflineConnectivityService } from '@features/offline/offline-connectivity.service';

@Component({ template: '' })
class TestRouteComponent {}

describe('OfflineConnectivityService', () => {
  async function bootApp(initialUrl: string): Promise<Router> {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([
          { path: 'events', component: TestRouteComponent },
          { path: 'auth', component: TestRouteComponent },
          { path: 'offline', component: TestRouteComponent },
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

    expect(typeof online).toBe('boolean');
    expect(service.lastCheckedLabel()).toContain('Last checked');
  });

  it('should redirect any monitored route to offline when connection drops', async () => {
    const router = await bootApp('/events');
    const navigateSpy = vi.spyOn(router, 'navigate');

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: false });
    window.dispatchEvent(new Event('offline'));

    expect(navigateSpy).toHaveBeenCalledWith(['/offline']);
    expect(TestBed.inject(OfflineConnectivityService).lastOnlineUrl()).toBe('/events');

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });
  });

  it('should redirect auth route to offline when connection drops', async () => {
    const router = await bootApp('/auth');
    const navigateSpy = vi.spyOn(router, 'navigate');

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: false });
    window.dispatchEvent(new Event('offline'));

    expect(navigateSpy).toHaveBeenCalledWith(['/offline']);

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });
  });

  it('should expose return url for retry navigation', () => {
    const service = TestBed.inject(OfflineConnectivityService);
    service.lastOnlineUrl.set('/session');

    expect(service.returnUrl()).toBe('/session');
  });
});
