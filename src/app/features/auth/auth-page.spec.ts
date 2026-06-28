import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { AuthPage } from '@features/auth/auth-page';

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
      providers: [{ provide: AppwriteAuthService, useValue: authMock }],
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

    const loginTab = (fixture.nativeElement as HTMLElement).querySelector(
      '[role="tab"][aria-selected="false"]',
    ) as HTMLButtonElement;
    loginTab.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Sign in');
  });
});
