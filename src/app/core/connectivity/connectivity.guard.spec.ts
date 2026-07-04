import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { describe, expect, it } from 'vitest';

import { connectivityGuard } from '@core/connectivity/connectivity.guard';

describe('connectivityGuard', () => {
  it('should allow navigation when browser is online', async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
    }).compileComponents();

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });

    const result = await TestBed.runInInjectionContext(() => connectivityGuard(null!, null!));

    expect(result).toBe(true);
  });

  it('should redirect to offline when browser is offline', async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
    }).compileComponents();

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: false });

    const result = await TestBed.runInInjectionContext(() => connectivityGuard(null!, null!));
    const router = TestBed.inject(Router);

    expect(result?.toString()).toBe(router.createUrlTree(['/offline']).toString());

    Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });
  });
});
