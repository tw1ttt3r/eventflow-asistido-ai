import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MOCK_USER_PROFILE_DASHBOARD } from '@mock/profile.mock';
import { ProfileEditForm } from '@shared/ui/organisms/profile-edit-form/profile-edit-form';

type ProfileEditFormHarness = ProfileEditForm & {
  fullName: { set(value: string): void };
  email: { set(value: string): void };
  phone: { set(value: string): void };
  role: { set(value: string): void };
  location: { set(value: string): void };
  submitForm(): void;
  onPhotoSelected(event: Event): void;
};

describe('ProfileEditForm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEditForm],
    }).compileComponents();
  });

  it('should populate fields from profile input', async () => {
    const fixture = TestBed.createComponent(ProfileEditForm);
    fixture.componentRef.setInput('profile', MOCK_USER_PROFILE_DASHBOARD.profile);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const fullNameInput = compiled.querySelector('#profile-full-name') as HTMLInputElement;
    const emailInput = compiled.querySelector('#profile-email') as HTMLInputElement;
    expect(fullNameInput.value).toBe('Jane Doe');
    expect(emailInput.value).toBe('jane@example.com');
    expect(compiled.textContent).toContain('JD');
  });

  it('should show validation error when full name is empty', () => {
    const fixture = TestBed.createComponent(ProfileEditForm);
    const cmp = fixture.componentInstance as ProfileEditFormHarness;

    fixture.componentRef.setInput('profile', MOCK_USER_PROFILE_DASHBOARD.profile);
    fixture.detectChanges();

    cmp.fullName.set('');
    cmp.submitForm();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Full name is required');
  });

  it('should emit submitted with valid form values', () => {
    const fixture = TestBed.createComponent(ProfileEditForm);
    const submitted = vi.fn();
    const cmp = fixture.componentInstance as ProfileEditFormHarness;

    fixture.componentRef.setInput('profile', MOCK_USER_PROFILE_DASHBOARD.profile);
    fixture.componentInstance.submitted.subscribe(submitted);
    fixture.detectChanges();

    cmp.fullName.set('Jane Updated');
    cmp.email.set('jane.updated@example.com');
    cmp.phone.set('+1 (415) 555-0100');
    cmp.role.set('Lead Designer');
    cmp.location.set('Oakland, CA');
    cmp.submitForm();

    expect(submitted).toHaveBeenCalledWith({
      fullName: 'Jane Updated',
      email: 'jane.updated@example.com',
      phone: '+1 (415) 555-0100',
      role: 'Lead Designer',
      location: 'Oakland, CA',
      avatarUrl: null,
    });
  });

  it('should preview selected photo via blob url', () => {
    const fixture = TestBed.createComponent(ProfileEditForm);
    const cmp = fixture.componentInstance as ProfileEditFormHarness;
    const createObjectURL = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:mock-avatar');

    fixture.componentRef.setInput('profile', MOCK_USER_PROFILE_DASHBOARD.profile);
    fixture.detectChanges();

    const file = new File(['avatar'], 'avatar.png', { type: 'image/png' });
    const input = document.createElement('input');
    input.type = 'file';
    Object.defineProperty(input, 'files', { value: [file] });

    cmp.onPhotoSelected({ target: input } as unknown as Event);
    fixture.detectChanges();

    expect(createObjectURL).toHaveBeenCalledWith(file);
    expect((fixture.nativeElement as HTMLElement).querySelector('img')?.getAttribute('src')).toBe(
      'blob:mock-avatar',
    );

    createObjectURL.mockRestore();
  });

  it('should emit cancelled when cancel button is pressed', () => {
    const fixture = TestBed.createComponent(ProfileEditForm);
    const cancelled = vi.fn();

    fixture.componentRef.setInput('profile', MOCK_USER_PROFILE_DASHBOARD.profile);
    fixture.componentInstance.cancelled.subscribe(cancelled);
    fixture.detectChanges();

    const cancelButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Cancel')) as HTMLButtonElement | undefined;
    cancelButton?.click();

    expect(cancelled).toHaveBeenCalledOnce();
  });
});
