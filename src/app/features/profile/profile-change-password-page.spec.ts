import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import { ProfileChangePasswordPage } from '@features/profile/profile-change-password-page';

describe('ProfileChangePasswordPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileChangePasswordPage],
      providers: [
        provideRouter([
          { path: 'session', component: class {} },
          { path: 'session/change-password', component: ProfileChangePasswordPage },
        ]),
        AdminNavigationService,
      ],
    }).compileComponents();
  });

  it('should render change password form', async () => {
    const fixture = TestBed.createComponent(ProfileChangePasswordPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Change Password');
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Update password');
  });

  it('should navigate back to profile on cancel', async () => {
    const fixture = TestBed.createComponent(ProfileChangePasswordPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    fixture.detectChanges();
    await fixture.whenStable();

    const page = fixture.componentInstance as ProfileChangePasswordPage & {
      backToProfile(): void;
    };
    page.backToProfile();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/session']);
  });

  it('should navigate back via header back button', async () => {
    const fixture = TestBed.createComponent(ProfileChangePasswordPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const backButton = (fixture.nativeElement as HTMLElement).querySelector(
      'button[aria-label="Back to profile"]',
    ) as HTMLButtonElement;
    backButton.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/session']);
  });

  it('should submit password change via form emit', async () => {
    const fixture = TestBed.createComponent(ProfileChangePasswordPage);
    fixture.detectChanges();
    await fixture.whenStable();

    const page = fixture.componentInstance as ProfileChangePasswordPage & {
      onSubmit(): void;
    };

    expect(() => page.onSubmit()).not.toThrow();
  });
});
