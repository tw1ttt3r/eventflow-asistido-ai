import { TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { of } from 'rxjs';

import { EventDetailPage } from '@features/events/event-detail-page';

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

describe('EventDetailPage', () => {
  beforeEach(() => {
    TestBed.resetTestingModule();
  });

  async function createPage(eventId: string) {
    await TestBed.configureTestingModule({
      imports: [EventDetailPage],
      providers: [
        provideRouter([
          { path: 'events', component: class {} },
          { path: 'events/:id/register', component: class {} },
        ]),
        provideActivatedRoute(eventId),
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(EventDetailPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  it('should render event detail for a known event', async () => {
    const fixture = await createPage('2');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Rooftop Mixer');
    expect(compiled.textContent).toContain('Available Spots');
    expect(compiled.textContent).toContain('About the event');
    expect(compiled.textContent).toContain('Marisol Vega');
    expect(compiled.textContent).toContain('Register — Reserve Spot');
  });

  it('should show unavailable state for unknown events', async () => {
    const fixture = await createPage('unknown');

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Evento no disponible');
  });

  it('should navigate back to events from header', async () => {
    const fixture = await createPage('2');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const backButton = (fixture.nativeElement as HTMLElement).querySelector(
      'button[aria-label="Volver a eventos"]',
    ) as HTMLButtonElement;
    backButton.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should navigate to registration from action bar', async () => {
    const fixture = await createPage('2');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const registerButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Register — Reserve Spot'));
    registerButton?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events', '2', 'register']);
  });

  it('should show saved confirmation when save is pressed', async () => {
    const fixture = await createPage('2');

    const saveButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'Save');
    saveButton?.click();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Event saved to your list.');
  });

  it('should navigate to similar event and events list', async () => {
    const fixture = await createPage('2');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const similarButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('Sunrise Yoga'));
    similarButton?.click();
    await fixture.whenStable();
    expect(navigateSpy).toHaveBeenCalledWith(['/events', '4']);

    const seeAllLink = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'See all');
    seeAllLink?.click();
    await fixture.whenStable();
    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should handle header actions and host profile link', async () => {
    const fixture = await createPage('2');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const cmp = fixture.componentInstance as EventDetailPage & {
      onShare(): void;
      onMore(): void;
      onViewProfile(): void;
    };

    (fixture.nativeElement as HTMLElement)
      .querySelector('button[aria-label="Compartir evento"]')
      ?.dispatchEvent(new Event('click'));
    (fixture.nativeElement as HTMLElement)
      .querySelector('button[aria-label="Más opciones"]')
      ?.dispatchEvent(new Event('click'));
    expect(() => cmp.onShare()).not.toThrow();
    expect(() => cmp.onMore()).not.toThrow();

    const profileLink = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'View profile');
    profileLink?.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/session']);
  });
});
