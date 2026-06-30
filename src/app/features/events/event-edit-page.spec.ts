import { TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { of } from 'rxjs';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { EventEditPage } from '@features/events/event-edit-page';
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

describe('EventEditPage', () => {
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
      imports: [EventEditPage],
      providers: [
        provideRouter([
          { path: 'events', component: class {} },
          { path: 'events/:id', component: class {} },
          { path: 'events/:id/attendees', component: class {} },
        ]),
        provideActivatedRoute(eventId),
        { provide: AppwriteAuthService, useValue: authMock },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(EventEditPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  it('should render coming soon state for an owned event', async () => {
    const fixture = await createPage('1');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Edit event');
    expect(compiled.textContent).toContain('Editing coming soon');
    expect(compiled.textContent).toContain('Intro to Hand Lettering');
    expect(compiled.querySelector('#event-edit-title')).toBeNull();
  });

  it('should deny access for events not owned by the user', async () => {
    const fixture = await createPage('2');

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Evento no disponible');
  });

  it('should navigate back to events dashboard', async () => {
    const fixture = await createPage('1');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const backButton = (fixture.nativeElement as HTMLElement).querySelector(
      'button[aria-label="Volver a eventos"]',
    ) as HTMLButtonElement;
    backButton.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should navigate to attendees and public page shortcuts', async () => {
    const fixture = await createPage('1');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const compiled = fixture.nativeElement as HTMLElement;

    const attendeesButton = Array.from(compiled.querySelectorAll('button')).find((button) =>
      button.textContent?.includes('Attendees'),
    );
    attendeesButton?.click();
    await fixture.whenStable();
    expect(navigateSpy).toHaveBeenCalledWith(['/events', '1', 'attendees']);

    const viewButton = Array.from(compiled.querySelectorAll('button')).find((button) =>
      button.textContent?.includes('View page'),
    );
    viewButton?.click();
    await fixture.whenStable();
    expect(navigateSpy).toHaveBeenCalledWith(['/events', '1']);
  });
});
