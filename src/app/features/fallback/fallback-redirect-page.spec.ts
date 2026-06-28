import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppwriteAuthService } from '../../core/appwrite/appwrite-auth.service';
import { FallbackRedirectPage } from './fallback-redirect-page';

describe('FallbackRedirectPage', () => {
  const authMock = {
    getCurrentUser: vi.fn(),
  };

  beforeEach(async () => {
    authMock.getCurrentUser.mockReset();

    await TestBed.configureTestingModule({
      imports: [FallbackRedirectPage],
      providers: [
        provideRouter([]),
        { provide: AppwriteAuthService, useValue: authMock },
      ],
    }).compileComponents();
  });

  it('should redirect to auth without session', async () => {
    authMock.getCurrentUser.mockResolvedValue(null);

    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const fixture = TestBed.createComponent(FallbackRedirectPage);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/auth']);
  });

  it('should redirect to session with active session', async () => {
    authMock.getCurrentUser.mockResolvedValue({ $id: 'user-1' });

    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const fixture = TestBed.createComponent(FallbackRedirectPage);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/session']);
  });
});
