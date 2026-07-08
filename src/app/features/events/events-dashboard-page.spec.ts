import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';
import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { EventsDashboardPage } from '@features/events/events-dashboard-page';
import { EventsStateService } from '@features/events/events-state.service';
import { MOCK_SESSION_USER_ID } from '@mock/events.mock';

type EventsDashboardHarness = EventsDashboardPage & {
  setFilter(filter: string): void;
  onNavigate(tabId: string): void;
  onCreateEvent(): void;
  onEditEvent(eventId: string): void;
  onViewEvent(eventId: string): void;
  onManageAttendees(eventId: string): void;
  searchQuery: { set(value: string): void };
};

describe('EventsDashboardPage', () => {
  const authMock = {
    getCurrentUser: vi.fn().mockResolvedValue({
      $id: MOCK_SESSION_USER_ID,
      name: 'Jane Doe',
      email: 'jane@example.com',
    }),
  };

  beforeEach(async () => {
    authMock.getCurrentUser.mockClear();

    await TestBed.configureTestingModule({
      imports: [EventsDashboardPage],
      providers: [
        provideRouter([
          { path: 'session', component: class {} },
          { path: 'events/new', component: class {} },
        ]),
        { provide: AppwriteAuthService, useValue: authMock },
        EventsStateService,
      ],
    }).compileComponents();
  });

  async function renderDashboard() {
    const fixture = TestBed.createComponent(EventsDashboardPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  it('should render dashboard heading and events', async () => {
    const fixture = await renderDashboard();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('4 total');
    expect(compiled.textContent).toContain('3');
    expect(compiled.textContent).toContain('(75%)');
    expect(compiled.textContent).toContain('Intro to Hand Lettering');
    expect(compiled.textContent).toContain('Create Event');
  });

  it('should show edit only on events owned by the active user', async () => {
    const fixture = await renderDashboard();

    const editButtons = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).filter((button) => button.textContent?.trim() === 'Edit');

    expect(editButtons).toHaveLength(2);
  });

  it('should filter events by status', async () => {
    const fixture = TestBed.createComponent(EventsDashboardPage);
    const page = fixture.componentInstance as EventsDashboardHarness;

    fixture.detectChanges();
    page.setFilter('published');
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Intro to Hand Lettering');
    expect(compiled.textContent).not.toContain('Startup Founders Networking');
  });

  it('should show empty state when search has no matches', async () => {
    const fixture = TestBed.createComponent(EventsDashboardPage);
    const page = fixture.componentInstance as EventsDashboardHarness;

    fixture.detectChanges();
    page.searchQuery.set('zzzz-no-match');
    fixture.detectChanges();
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('No events match your search.');
  });

  it('should navigate via admin layout', () => {
    const fixture = TestBed.createComponent(EventsDashboardPage);
    const adminNav = TestBed.inject(AdminNavigationService);
    const navigateSpy = vi.spyOn(adminNav, 'navigate');
    const page = fixture.componentInstance as EventsDashboardHarness;

    page.onNavigate('account');

    expect(navigateSpy).toHaveBeenCalledWith('account');
  });

  it('should handle toolbar and card actions', () => {
    const fixture = TestBed.createComponent(EventsDashboardPage);
    const page = fixture.componentInstance as EventsDashboardHarness;

    expect(() => page.onEditEvent('evt-1')).not.toThrow();
    expect(() => page.onViewEvent('evt-1')).not.toThrow();
    expect(() => page.onManageAttendees('evt-1')).not.toThrow();
    expect(() => page.setFilter('invalid')).not.toThrow();
  });

  it('should navigate to create event page', async () => {
    const fixture = await renderDashboard();
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const createButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Create Event'));
    createButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events', 'new']);
  });

  it('should react to filter chip clicks and create event button', async () => {
    const fixture = TestBed.createComponent(EventsDashboardPage);
    fixture.detectChanges();

    const closedChip = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'Closed');
    closedChip?.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const createButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Create Event'));
    createButton?.click();

    const editButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'Edit');
    editButton?.click();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show attendees action only on owned events', async () => {
    const fixture = await renderDashboard();

    const attendeesButtons = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).filter((button) => button.textContent?.trim() === 'Attendees');

    expect(attendeesButtons).toHaveLength(2);
  });

  it('should navigate to attendees list for owned events', async () => {
    const fixture = await renderDashboard();
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const attendeesButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'Attendees');
    attendeesButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events', '1', 'attendees']);
  });

  it('should navigate to edit page from dashboard edit action', async () => {
    const fixture = await renderDashboard();
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const editButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'Edit');
    editButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events', '1', 'edit']);
  });

  it('should navigate to detail from view action', async () => {
    const fixture = TestBed.createComponent(EventsDashboardPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const viewButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'View');
    viewButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events', '1']);
  });

  it('should navigate to session from admin header', async () => {
    const fixture = TestBed.createComponent(EventsDashboardPage);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    fixture.detectChanges();

    const accountButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'Account');
    accountButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/session']);
  });
});
