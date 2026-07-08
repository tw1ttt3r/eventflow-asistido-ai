import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { EventCreatePage } from '@features/events/event-create-page';
import { EventEditStateService } from '@features/events/event-edit-state.service';
import { EventsStateService } from '@features/events/events-state.service';
import { MOCK_SESSION_USER_ID } from '@mock/events.mock';

describe('EventCreatePage', () => {
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

  async function createPage() {
    await TestBed.configureTestingModule({
      imports: [EventCreatePage],
      providers: [
        provideRouter([
          { path: 'events', component: class {} },
          { path: 'events/new', component: EventCreatePage },
        ]),
        { provide: AppwriteAuthService, useValue: authMock },
        EventEditStateService,
        EventsStateService,
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(EventCreatePage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  it('should render create event form', async () => {
    const fixture = await createPage();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Create Event');
    expect(compiled.textContent).toContain('Create event');
    expect(compiled.textContent).not.toContain('Delete event');
  });

  it('should navigate back to events dashboard', async () => {
    const fixture = await createPage();
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const backButton = (fixture.nativeElement as HTMLElement).querySelector(
      'button[aria-label="Back to events"]',
    ) as HTMLButtonElement;
    backButton.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should create event and return to dashboard', async () => {
    const fixture = await createPage();
    const router = TestBed.inject(Router);
    const eventsState = TestBed.inject(EventsStateService);
    const editState = TestBed.inject(EventEditStateService);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const compiled = fixture.nativeElement as HTMLElement;
    const initialCount = eventsState.events().length;

    (compiled.querySelector('#event-edit-title') as HTMLInputElement).value = 'New Pottery Class';
    (compiled.querySelector('#event-edit-title') as HTMLInputElement).dispatchEvent(new Event('input'));
    (compiled.querySelector('#event-edit-description') as HTMLTextAreaElement).value =
      'Learn wheel throwing in a relaxed studio setting.';
    (compiled.querySelector('#event-edit-description') as HTMLTextAreaElement).dispatchEvent(
      new Event('input'),
    );
    (compiled.querySelector('#event-edit-date') as HTMLInputElement).value = 'Aug 01, 2026';
    (compiled.querySelector('#event-edit-date') as HTMLInputElement).dispatchEvent(new Event('input'));
    (compiled.querySelector('#event-edit-time') as HTMLInputElement).value = '7:00 PM – 9:00 PM';
    (compiled.querySelector('#event-edit-time') as HTMLInputElement).dispatchEvent(new Event('input'));
    (compiled.querySelector('#event-edit-location') as HTMLInputElement).value = 'Clay Studio';
    (compiled.querySelector('#event-edit-location') as HTMLInputElement).dispatchEvent(
      new Event('input'),
    );
    fixture.detectChanges();

    const createButton = Array.from(compiled.querySelectorAll('button')).find((button) =>
      button.textContent?.includes('Create event'),
    ) as HTMLButtonElement;
    createButton.click();
    await fixture.whenStable();

    expect(eventsState.events()).toHaveLength(initialCount + 1);
    expect(eventsState.events()[0]?.title).toBe('New Pottery Class');
    expect(editState.getEditData(eventsState.events()[0]!.id)?.title).toBe('New Pottery Class');
    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });
});
