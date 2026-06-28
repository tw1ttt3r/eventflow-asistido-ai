import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppwriteAuthService } from '../appwrite/appwrite-auth.service';
import { guestGuard } from './guest.guard';

describe('guestGuard', () => {
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

  it('should allow access when there is no session', async () => {
    authMock.getCurrentUser.mockResolvedValue(null);

    const result = await TestBed.runInInjectionContext(() => guestGuard({} as never, {} as never));

    expect(result).toBe(true);
  });

  it('should redirect to session when user is authenticated', async () => {
    authMock.getCurrentUser.mockResolvedValue({
      $id: 'user-1',
      email: 'jane@example.com',
    });

    const router = TestBed.inject(Router);
    const result = await TestBed.runInInjectionContext(() => guestGuard({} as never, {} as never));

    expect(result?.toString()).toBe(router.createUrlTree(['/events']).toString());
  });
});
