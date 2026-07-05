import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { ProfileStateService } from '@features/profile/profile-state.service';
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
          { path: 'session/edit', component: class {} },
          { path: 'session/change-password', component: class {} },
          { path: 'session/tickets/:ticketId', component: class {} },
          { path: 'events', component: class {} },
        ]),
        { provide: AppwriteAuthService, useValue: authMock },
        ProfileStateService,
      ],
    }).compileComponents();
  });

  it('should render profile dashboard for Jane Doe', async () => {
    const fixture = TestBed.createComponent(SessionPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Jane Doe');
    expect(compiled.textContent).toContain('My Events');
    expect(compiled.textContent).toContain('Product Design Workshop');
    expect(compiled.textContent).toContain('Registered');
    expect(compiled.textContent).toContain('Golden Hour Photo Walk');
    expect(compiled.textContent).not.toContain('Digital Tickets');
    expect(compiled.textContent).not.toContain('Upcoming Events');
  });

  it('should navigate home when header logo is pressed', async () => {
    const fixture = TestBed.createComponent(SessionPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);

    fixture.detectChanges();
    await fixture.whenStable();

    const logoLink = (fixture.nativeElement as HTMLElement).querySelector(
      'a[aria-label="Go to home"]',
    ) as HTMLAnchorElement;
    logoLink.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledOnce();
  });

  it('should navigate to edit profile', async () => {
    const fixture = TestBed.createComponent(SessionPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const editButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Edit Profile')) as HTMLButtonElement | undefined;
    editButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/session', 'edit']);
  });

  it('should navigate to change password', async () => {
    const fixture = TestBed.createComponent(SessionPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const changePasswordButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Change Password')) as HTMLButtonElement | undefined;
    changePasswordButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/session', 'change-password']);
  });

  it('should navigate to digital ticket from upcoming events', async () => {
    const fixture = TestBed.createComponent(SessionPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const viewTicketButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('View Ticket')) as HTMLButtonElement | undefined;
    viewTicketButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/session', 'tickets', 'tkt-2']);
  });

  it('should switch to attended tab and show past events', async () => {
    const fixture = TestBed.createComponent(SessionPage);

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const attendedTab = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'Attended') as HTMLButtonElement | undefined;
    attendedTab?.click();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Community Pottery Class');
    expect(compiled.textContent).toContain('Intro to Python: Mini Lab');
  });

  it('should handle placeholder actions without errors', async () => {
    const fixture = TestBed.createComponent(SessionPage);
    fixture.detectChanges();
    await fixture.whenStable();

    const page = fixture.componentInstance as SessionPage & {
      onPlaceholder(action: string): void;
      onNavigate(tabId: string): void;
    };

    expect(() => page.onNavigate('events')).not.toThrow();
    expect(() => page.onPlaceholder('View summary')).not.toThrow();
  });

  it('should logout and redirect to auth', async () => {
    const fixture = TestBed.createComponent(SessionPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const logoutButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Logout')) as HTMLButtonElement | undefined;
    logoutButton?.click();
    await fixture.whenStable();

    expect(authMock.logout).toHaveBeenCalledOnce();
    expect(navigateSpy).toHaveBeenCalledWith(['/auth']);
  });
});
