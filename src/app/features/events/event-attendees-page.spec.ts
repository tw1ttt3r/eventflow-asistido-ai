import { TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { of } from 'rxjs';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { EventAttendeesPage } from '@features/events/event-attendees-page';
import { MOCK_SESSION_USER_ID } from '@mock/events.mock';

function provideActivatedRoute(eventId: string) {
  const paramMap = convertToParamMap({ id: eventId });

  return {
    provide: ActivatedRoute,
    useValue: {
      snapshot: { paramMap },
      paramMap: of(paramMap),
    },
  };
}

describe('EventAttendeesPage', () => {
  const authMock = {
    getCurrentUser: vi.fn().mockResolvedValue({
      $id: MOCK_SESSION_USER_ID,
      name: 'Jane Doe',
      email: 'jane@example.com',
    }),
  };

  beforeEach(() => {
    TestBed.resetTestingModule();
    authMock.getCurrentUser.mockClear();
  });

  async function createPage(eventId: string) {
    await TestBed.configureTestingModule({
      imports: [EventAttendeesPage],
      providers: [
        provideRouter([
          { path: 'events', component: class {} },
          { path: 'events/:id', component: class {} },
          { path: 'events/:id/edit', component: class {} },
        ]),
        provideActivatedRoute(eventId),
        { provide: AppwriteAuthService, useValue: authMock },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(EventAttendeesPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  it('should render attendees for an owned event', async () => {
    const fixture = await createPage('1');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Attendees');
    expect(compiled.textContent).toContain('Design Systems Workshop');
    expect(compiled.textContent).toContain('Aria Patel');
    expect(compiled.textContent).toContain('4 total · 2 checked-in · 2 not checked');
  });

  it('should filter attendees by check-in status', async () => {
    const fixture = await createPage('1');
    const cmp = fixture.componentInstance as EventAttendeesPage & {
      setFilter(filter: string): void;
    };

    cmp.setFilter('checked-in');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Aria Patel');
    expect(compiled.textContent).not.toContain('Mateo Ruiz');
  });

  it('should show read-only check-in status badges', async () => {
    const fixture = await createPage('1');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Checked-in');
    expect(compiled.textContent).toContain('Not checked-in');
    expect(compiled.querySelector('button[role="switch"]')).toBeNull();
    expect(compiled.textContent).toContain('2 checked-in');
  });

  it('should deny access for events not owned by the user', async () => {
    const fixture = await createPage('2');

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Evento no disponible');
  });

  it('should navigate back to event detail', async () => {
    const fixture = await createPage('1');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const backButton = (fixture.nativeElement as HTMLElement).querySelector(
      'button[aria-label="Volver al evento"]',
    ) as HTMLButtonElement;
    backButton.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events', '1']);
  });

  it('should search attendees by name or email', async () => {
    const fixture = await createPage('1');
    const cmp = fixture.componentInstance as EventAttendeesPage & {
      searchQuery: { set(value: string): void };
    };

    cmp.searchQuery.set('noah');
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Noah Kim');
    expect((fixture.nativeElement as HTMLElement).textContent).not.toContain('Aria Patel');
  });

  it('should navigate to event edit from manage action', async () => {
    const fixture = await createPage('1');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const manageButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'Manage');
    manageButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events', '1', 'edit']);
  });
});
