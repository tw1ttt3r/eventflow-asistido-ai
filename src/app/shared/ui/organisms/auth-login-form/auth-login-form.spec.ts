import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AuthLoginForm } from '@shared/ui/organisms/auth-login-form/auth-login-form';

type AuthLoginFormHarness = AuthLoginForm & {
  email: string;
  password: string;
  rememberMe: { set(value: boolean): void };
  submitForm(): void;
};

describe('AuthLoginForm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLoginForm],
    }).compileComponents();
  });

  it('should emit submitted with current form values', () => {
    const fixture = TestBed.createComponent(AuthLoginForm);
    const submitted = vi.fn();
    const cmp = fixture.componentInstance as AuthLoginFormHarness;

    fixture.componentRef.setInput('submitting', false);
    cmp.submitted.subscribe(submitted);

    cmp.email = 'user@test.com';
    cmp.password = 'Secret123!';
    cmp.rememberMe.set(true);
    cmp.submitForm();

    expect(submitted).toHaveBeenCalledWith({
      email: 'user@test.com',
      password: 'Secret123!',
      rememberMe: true,
    });
  });

  it('should emit switchToSignUp when link is pressed', () => {
    const fixture = TestBed.createComponent(AuthLoginForm);
    const switchToSignUp = vi.fn();

    fixture.componentRef.setInput('submitting', false);
    fixture.componentInstance.switchToSignUp.subscribe(switchToSignUp);
    fixture.detectChanges();

    const link = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button[type="button"]'),
    ).find((button) => button.textContent?.includes('Create account')) as HTMLButtonElement | undefined;
    link?.click();

    expect(switchToSignUp).toHaveBeenCalledOnce();
  });

  it('should emit forgotPassword from auth actions row', () => {
    const fixture = TestBed.createComponent(AuthLoginForm);
    const forgotPassword = vi.fn();

    fixture.componentRef.setInput('submitting', false);
    fixture.componentInstance.forgotPassword.subscribe(forgotPassword);
    fixture.detectChanges();

    const buttons = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button[type="button"]'),
    ) as HTMLButtonElement[];
    const forgotButton = buttons.find((button) => button.textContent?.includes('Forgot'));

    forgotButton?.click();

    expect(forgotPassword).toHaveBeenCalledOnce();
  });
});
