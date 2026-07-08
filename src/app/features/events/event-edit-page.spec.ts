import { TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { of } from 'rxjs';

import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { EventEditPage } from '@features/events/event-edit-page';
import { EventEditStateService } from '@features/events/event-edit-state.service';
import { EventsStateService } from '@features/events/events-state.service';
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
        ]),
        provideActivatedRoute(eventId),
        { provide: AppwriteAuthService, useValue: authMock },
        EventEditStateService,
        EventsStateService,
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(EventEditPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  it('should render edit form for an owned event', async () => {
    const fixture = await createPage('1');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Edit Event');
    expect(compiled.textContent).toContain('Event details');
    expect(compiled.textContent).toContain('Save changes');
    expect((compiled.querySelector('#event-edit-title') as HTMLInputElement).value).toContain(
      'Design Systems Workshop',
    );
    expect(compiled.querySelector('#event-edit-title')).toBeTruthy();
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
      'button[aria-label="Back to events"]',
    ) as HTMLButtonElement;
    backButton.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should save changes locally', async () => {
    const fixture = await createPage('1');
    const editState = TestBed.inject(EventEditStateService);
    const compiled = fixture.nativeElement as HTMLElement;

    const titleInput = compiled.querySelector('#event-edit-title') as HTMLInputElement;
    titleInput.value = 'Updated Workshop Title';
    titleInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const saveButton = Array.from(compiled.querySelectorAll('button')).find((button) =>
      button.textContent?.includes('Save changes'),
    ) as HTMLButtonElement;
    saveButton.click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(editState.getEditData('1')?.title).toBe('Updated Workshop Title');
    expect(compiled.textContent).toContain('Changes saved locally');
  });

  it('should navigate to public page from preview header action', async () => {
    const fixture = await createPage('1');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const previewButton = (fixture.nativeElement as HTMLElement).querySelector(
      'button[aria-label="Preview event"]',
    ) as HTMLButtonElement;
    previewButton.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events', '1']);
  });

  it('should cancel back to events from form', async () => {
    const fixture = await createPage('1');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const cancelButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Cancel')) as HTMLButtonElement;
    cancelButton.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should allow editing events created by the current user', async () => {
    await TestBed.configureTestingModule({
      imports: [EventEditPage],
      providers: [
        provideRouter([
          { path: 'events', component: class {} },
          { path: 'events/:id', component: class {} },
        ]),
        provideActivatedRoute('evt-owned-1'),
        { provide: AppwriteAuthService, useValue: authMock },
        EventEditStateService,
        EventsStateService,
      ],
    }).compileComponents();

    const eventsState = TestBed.inject(EventsStateService);
    const editState = TestBed.inject(EventEditStateService);
    const created = editState.createEvent(
      'evt-owned-1',
      {
        eventId: 'evt-owned-1',
        title: 'Owned Event',
        description: 'Created in tests',
        bannerHue: 120,
        bannerUrl: null,
        dateLabel: 'Sep 10, 2026',
        timeRangeLabel: '4:00 PM – 6:00 PM',
        status: 'published',
        location: 'Room C',
        capacity: 12,
        spotsLeft: 12,
        registrationStats: {
          registered: 0,
          available: 12,
          capacity: 12,
          sparkline: { totalsLine: '0,70 320,70', publishedLine: '0,70 320,70' },
        },
        audit: {
          updatedBy: 'Jane Doe',
          updatedAtLabel: 'Now',
          version: 1,
        },
      },
      {
        title: 'Owned Event',
        description: 'Created in tests',
        bannerUrl: null,
        dateLabel: 'Sep 10, 2026',
        timeRangeLabel: '4:00 PM – 6:00 PM',
        status: 'published',
        location: 'Room C',
        capacity: 12,
      },
    );
    eventsState.syncFromEdit(created, MOCK_SESSION_USER_ID);

    const fixture = TestBed.createComponent(EventEditPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Edit Event');
    expect(compiled.textContent).not.toContain('Evento no disponible');
    expect(editState.getEditData('evt-owned-1')?.title).toBe('Owned Event');
  });
});
