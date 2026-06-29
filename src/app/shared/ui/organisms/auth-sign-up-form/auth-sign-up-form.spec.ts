import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AuthSignUpForm } from '@shared/ui/organisms/auth-sign-up-form/auth-sign-up-form';

type AuthSignUpFormHarness = AuthSignUpForm & {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  submitForm(): void;
};

describe('AuthSignUpForm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSignUpForm],
    }).compileComponents();
  });

  it('should emit submitted with current form values', () => {
    const fixture = TestBed.createComponent(AuthSignUpForm);
    const submitted = vi.fn();
    const cmp = fixture.componentInstance as AuthSignUpFormHarness;

    fixture.componentRef.setInput('submitting', false);
    cmp.submitted.subscribe(submitted);

    cmp.fullName = 'Jane Doe';
    cmp.email = 'jane@example.com';
    cmp.password = 'Secret123!';
    cmp.confirmPassword = 'Secret123!';
    cmp.submitForm();

    expect(submitted).toHaveBeenCalledWith({
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      password: 'Secret123!',
      confirmPassword: 'Secret123!',
    });
  });

  it('should emit switchToLogin when link is pressed', () => {
    const fixture = TestBed.createComponent(AuthSignUpForm);
    const switchToLogin = vi.fn();

    fixture.componentRef.setInput('submitting', false);
    fixture.componentInstance.switchToLogin.subscribe(switchToLogin);
    fixture.detectChanges();

    const link = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button[type="button"]'),
    ).find((button) => button.textContent?.includes('Log in')) as HTMLButtonElement | undefined;
    link?.click();

    expect(switchToLogin).toHaveBeenCalledOnce();
  });
});
