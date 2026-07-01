import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';

import { ChangePasswordForm } from '@shared/ui/organisms/change-password-form/change-password-form';

describe('ChangePasswordForm', () => {
  it('should show validation error for weak password', async () => {
    TestBed.configureTestingModule({ imports: [ChangePasswordForm] });

    const fixture = TestBed.createComponent(ChangePasswordForm);
    fixture.detectChanges();

    const cmp = fixture.componentInstance as ChangePasswordForm & {
      currentPassword: { set(value: string): void };
      newPassword: { set(value: string): void };
      confirmPassword: { set(value: string): void };
      submitForm(): void;
    };

    cmp.currentPassword.set('current-pass');
    cmp.newPassword.set('short');
    cmp.confirmPassword.set('short');
    cmp.submitForm();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('at least 8 characters');
  });

  it('should emit cancelled when cancel button is pressed', async () => {
    TestBed.configureTestingModule({ imports: [ChangePasswordForm] });

    const fixture = TestBed.createComponent(ChangePasswordForm);
    const cancelled = vi.fn();
    fixture.componentInstance.cancelled.subscribe(cancelled);
    fixture.detectChanges();

    const cancelButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Cancel')) as HTMLButtonElement | undefined;
    cancelButton?.click();

    expect(cancelled).toHaveBeenCalledOnce();
  });

  it('should emit submitted for valid password change', async () => {
    TestBed.configureTestingModule({ imports: [ChangePasswordForm] });

    const fixture = TestBed.createComponent(ChangePasswordForm);
    const submitted = vi.fn();
    fixture.componentInstance.submitted.subscribe(submitted);
    fixture.detectChanges();

    const cmp = fixture.componentInstance as ChangePasswordForm & {
      currentPassword: { set(value: string): void };
      newPassword: { set(value: string): void };
      confirmPassword: { set(value: string): void };
      submitForm(): void;
    };

    cmp.currentPassword.set('CurrentPass1!');
    cmp.newPassword.set('NewSecure1!');
    cmp.confirmPassword.set('NewSecure1!');
    cmp.submitForm();
    fixture.detectChanges();

    expect(submitted).toHaveBeenCalledOnce();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Password updated successfully');
  });
});
