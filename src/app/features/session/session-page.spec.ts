import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { SessionPage } from '@features/session/session-page';

describe('SessionPage (profile)', () => {
  const authMock = {
    getCurrentUser: vi.fn().mockResolvedValue({
      $id: 'user-1',
      name: 'Jane Doe',
      email: 'jane@example.com',
    }),
    logout: vi.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    authMock.getCurrentUser.mockClear();
    authMock.logout.mockClear();

    await TestBed.configureTestingModule({
      imports: [SessionPage],
      providers: [
        provideRouter([
          { path: 'session', component: SessionPage },
          { path: 'events', component: class {} },
        ]),
        { provide: AppwriteAuthService, useValue: authMock },
      ],
    }).compileComponents();
  });

  it('should render profile details', async () => {
    const fixture = TestBed.createComponent(SessionPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    await vi.waitFor(() => {
      expect((fixture.nativeElement as HTMLElement).textContent).toContain('Account');
    });

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Jane Doe');
    expect(compiled.textContent).toContain('jane@example.com');
    expect(compiled.textContent).toContain('JD');
  });

  it('should logout and redirect to auth', async () => {
    const fixture = TestBed.createComponent(SessionPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    await vi.waitFor(() => {
      expect((fixture.nativeElement as HTMLElement).textContent).toContain('Cerrar sesión');
    });

    const logoutButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Cerrar sesión'));

    expect(logoutButton).toBeTruthy();
    logoutButton?.click();
    await fixture.whenStable();

    expect(authMock.logout).toHaveBeenCalledOnce();
    expect(navigateSpy).toHaveBeenCalledWith(['/auth']);
  });
});
