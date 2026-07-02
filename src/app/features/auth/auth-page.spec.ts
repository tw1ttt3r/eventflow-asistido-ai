import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { AuthPage } from '@features/auth/auth-page';
import type { LoginFormValue } from '@shared/ui/organisms/auth-login-form/auth-login-form';
import type { SignUpFormValue } from '@shared/ui/organisms/auth-sign-up-form/auth-sign-up-form';

type AuthPageHarness = AuthPage & {
  onSignUp(value: SignUpFormValue): Promise<void>;
  onLogin(value: LoginFormValue): Promise<void>;
  setActiveTab(tab: string): void;
};

describe('AuthPage', () => {
  const authMock = {
    getCurrentUser: vi.fn().mockResolvedValue(null),
    registerWithEmail: vi.fn().mockResolvedValue({ name: 'Jane Doe', email: 'jane@example.com' }),
    loginWithEmail: vi.fn().mockResolvedValue({ name: 'Jane Doe', email: 'jane@example.com' }),
  };

  beforeEach(async () => {
    authMock.registerWithEmail.mockClear();
    authMock.loginWithEmail.mockClear();

    await TestBed.configureTestingModule({
      imports: [AuthPage],
      providers: [
        provideRouter([{ path: 'events', component: class {} }]),
        { provide: AppwriteAuthService, useValue: authMock },
      ],
    }).compileComponents();
  });

  it('should render sign up by default', async () => {
    const fixture = TestBed.createComponent(AuthPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Create your EventFlow account');
    expect(compiled.textContent).toContain('Sign Up');
  });

  it('should switch to login tab', async () => {
    const fixture = TestBed.createComponent(AuthPage);
    fixture.detectChanges();

    const loginTab = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('[role="radio"]'),
    ).find((button) => button.textContent?.includes('Login')) as HTMLButtonElement;
    loginTab.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Sign in');
  });

  it('should validate sign up fields', async () => {
    const fixture = TestBed.createComponent(AuthPage);
    const page = fixture.componentInstance as AuthPageHarness;

    await page.onSignUp({
      fullName: '',
      email: '',
      password: 'short',
      confirmPassword: 'other',
    });
    fixture.detectChanges();

    expect(authMock.registerWithEmail).not.toHaveBeenCalled();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Indica tu nombre completo.');
  });

  it('should register and navigate on valid sign up', async () => {
    const fixture = TestBed.createComponent(AuthPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const page = fixture.componentInstance as AuthPageHarness;

    await page.onSignUp({
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      password: 'Secret123!',
      confirmPassword: 'Secret123!',
    });
    fixture.detectChanges();

    expect(authMock.registerWithEmail).toHaveBeenCalledOnce();
    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should show auth error when sign up fails', async () => {
    authMock.registerWithEmail.mockRejectedValueOnce(new Error('Registration failed'));
    const fixture = TestBed.createComponent(AuthPage);
    const page = fixture.componentInstance as AuthPageHarness;

    await page.onSignUp({
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      password: 'Secret123!',
      confirmPassword: 'Secret123!',
    });
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Registration failed');
  });

  it('should validate login fields', async () => {
    const fixture = TestBed.createComponent(AuthPage);
    const page = fixture.componentInstance as AuthPageHarness;

    page.setActiveTab('login');
    fixture.detectChanges();

    await page.onLogin({ email: '', password: '', rememberMe: false });
    fixture.detectChanges();

    expect(authMock.loginWithEmail).not.toHaveBeenCalled();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Indica tu correo electrónico.');
  });

  it('should login and navigate on valid credentials', async () => {
    const fixture = TestBed.createComponent(AuthPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const page = fixture.componentInstance as AuthPageHarness;

    page.setActiveTab('login');
    fixture.detectChanges();

    await page.onLogin({
      email: 'jane@example.com',
      password: 'Secret123!',
      rememberMe: true,
    });
    fixture.detectChanges();

    expect(authMock.loginWithEmail).toHaveBeenCalledOnce();
    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should show auth error when login fails', async () => {
    authMock.loginWithEmail.mockRejectedValueOnce(new Error('Invalid credentials'));
    const fixture = TestBed.createComponent(AuthPage);
    const page = fixture.componentInstance as AuthPageHarness;

    page.setActiveTab('login');
    fixture.detectChanges();

    await page.onLogin({
      email: 'jane@example.com',
      password: 'wrong',
      rememberMe: false,
    });
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Invalid credentials');
  });

  it('should ignore invalid tab ids', () => {
    const fixture = TestBed.createComponent(AuthPage);
    const page = fixture.componentInstance as AuthPageHarness;

    page.setActiveTab('invalid');
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Create your EventFlow account');
  });
});
