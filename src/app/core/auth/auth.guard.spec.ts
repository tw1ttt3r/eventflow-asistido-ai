import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { authGuard } from '@core/auth/auth.guard';

describe('authGuard', () => {
  const authMock = {
    getCurrentUser: vi.fn(),
  };

  beforeEach(() => {
    authMock.getCurrentUser.mockReset();

    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        { provide: AppwriteAuthService, useValue: authMock },
      ],
    });
  });

  it('should allow access when user is authenticated', async () => {
    authMock.getCurrentUser.mockResolvedValue({ $id: 'user-1' });

    const result = await TestBed.runInInjectionContext(() => authGuard({} as never, {} as never));

    expect(result).toBe(true);
  });

  it('should redirect to auth when there is no session', async () => {
    authMock.getCurrentUser.mockResolvedValue(null);

    const router = TestBed.inject(Router);
    const result = await TestBed.runInInjectionContext(() => authGuard({} as never, {} as never));

    expect(result?.toString()).toBe(router.createUrlTree(['/auth']).toString());
  });
});
