import { TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { of } from 'rxjs';

import { EventRegistrationPage } from '@features/events/event-registration-page';

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

describe('EventRegistrationPage', () => {
  beforeEach(() => {
    TestBed.resetTestingModule();
  });

  async function createPage(eventId: string) {
    await TestBed.configureTestingModule({
      imports: [EventRegistrationPage],
      providers: [
        provideRouter([{ path: 'events', component: class {} }]),
        provideActivatedRoute(eventId),
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(EventRegistrationPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  it('should render registration details for a known event', async () => {
    const fixture = await createPage('5');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Sunset Sound Bath');
    expect(compiled.textContent).toContain('Register for this event');
    expect(compiled.textContent).toContain('5 spots left');
    expect(compiled.textContent).toContain('Yoga mat, water bottle');
  });

  it('should show not found for unknown events', async () => {
    const fixture = await createPage('unknown');

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Evento no disponible');
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Ver todos los eventos');
  });

  it('should navigate back to events from header back button', async () => {
    const fixture = await createPage('5');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const backButton = (fixture.nativeElement as HTMLElement).querySelector(
      'button[aria-label="Volver a eventos"]',
    ) as HTMLButtonElement;
    backButton.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should navigate back to events from save for later', async () => {
    const fixture = await createPage('5');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const saveButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Save for later'));
    saveButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should register successfully and show confirmation', async () => {
    const fixture = await createPage('5');
    const cmp = fixture.componentInstance as EventRegistrationPage & {
      onSubmit(value: {
        fullName: string;
        email: string;
        phone: string;
        termsAccepted: boolean;
      }): Promise<void>;
    };

    await cmp.onSubmit({
      fullName: 'Alexandra Rivera',
      email: 'alex@example.com',
      phone: '',
      termsAccepted: true,
    });
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain("You're registered, Alexandra!");
  });

  it('should navigate back from unavailable card actions', async () => {
    const fixture = await createPage('unknown');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const primaryButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Ver todos los eventos'));
    primaryButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should navigate back from not found state', async () => {
    const fixture = await createPage('unknown');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const cmp = fixture.componentInstance as EventRegistrationPage & {
      backToEvents(): void;
    };

    cmp.backToEvents();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });
});
