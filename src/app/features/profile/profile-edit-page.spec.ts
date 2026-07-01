import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import { ProfileEditPage } from '@features/profile/profile-edit-page';
import { ProfileStateService } from '@features/profile/profile-state.service';

describe('ProfileEditPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEditPage],
      providers: [
        provideRouter([
          { path: 'session', component: class {} },
          { path: 'session/edit', component: ProfileEditPage },
        ]),
        ProfileStateService,
        AdminNavigationService,
      ],
    }).compileComponents();
  });

  it('should render edit profile form', async () => {
    const fixture = TestBed.createComponent(ProfileEditPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Edit Profile');
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Change photo');
    expect((fixture.nativeElement as HTMLElement).querySelector('#profile-full-name')).toBeTruthy();
  });

  it('should navigate back to profile on cancel', async () => {
    const fixture = TestBed.createComponent(ProfileEditPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const cancelButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Cancel')) as HTMLButtonElement | undefined;
    cancelButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/session']);
  });

  it('should navigate back via header back button', async () => {
    const fixture = TestBed.createComponent(ProfileEditPage);
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

  it('should submit via save changes button', async () => {
    const fixture = TestBed.createComponent(ProfileEditPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const profileState = TestBed.inject(ProfileStateService);

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const fullNameInput = (fixture.nativeElement as HTMLElement).querySelector(
      '#profile-full-name',
    ) as HTMLInputElement;
    fullNameInput.value = 'Jane Updated';
    fullNameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const saveButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Save changes')) as HTMLButtonElement | undefined;
    saveButton?.click();
    await fixture.whenStable();

    expect(profileState.dashboard().profile.fullName).toBe('Jane Updated');
    expect(navigateSpy).toHaveBeenCalledWith(['/session']);
  });

  it('should save and return to profile', async () => {
    const fixture = TestBed.createComponent(ProfileEditPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const profileState = TestBed.inject(ProfileStateService);

    fixture.detectChanges();
    await fixture.whenStable();

    const page = fixture.componentInstance as ProfileEditPage & {
      onSave(value: {
        fullName: string;
        email: string;
        phone: string;
        role: string;
        location: string;
        avatarUrl: string | null;
      }): void;
    };

    page.onSave({
      fullName: 'Jane D.',
      email: 'jane@example.com',
      phone: '+1 (415) 555-0198',
      role: 'Product Designer',
      location: 'San Francisco, CA',
      avatarUrl: null,
    });

    expect(profileState.dashboard().profile.fullName).toBe('Jane D.');
    expect(navigateSpy).toHaveBeenCalledWith(['/session']);
  });
});
