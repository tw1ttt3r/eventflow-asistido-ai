import { TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { of } from 'rxjs';

import { DigitalTicketPage } from '@features/tickets/digital-ticket-page';
import { ProfileStateService } from '@features/profile/profile-state.service';
import { DigitalTicketStateService } from '@features/tickets/digital-ticket-state.service';

function provideActivatedRoute(ticketId: string) {
  const paramMap = convertToParamMap({ ticketId });

  return {
    provide: ActivatedRoute,
    useValue: {
      snapshot: { paramMap },
      paramMap: of(paramMap),
    },
  };
}

describe('DigitalTicketPage', () => {
  beforeEach(() => {
    TestBed.resetTestingModule();
    vi.restoreAllMocks();
  });

  async function createPage(ticketId: string) {
    await TestBed.configureTestingModule({
      imports: [DigitalTicketPage],
      providers: [
        provideRouter([
          { path: 'session', component: class {} },
          { path: 'session/tickets/:ticketId', component: DigitalTicketPage },
          { path: 'events/:id', component: class {} },
        ]),
        provideActivatedRoute(ticketId),
        ProfileStateService,
        DigitalTicketStateService,
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(DigitalTicketPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  it('should render digital ticket for tkt-1', async () => {
    const fixture = await createPage('tkt-1');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('EventFlow');
    expect(compiled.textContent).toContain('Design Systems Lab');
    expect(compiled.textContent).toContain('Jane Doe');
    expect(compiled.textContent).toContain('General');
    expect(compiled.textContent).toContain('Ticket ID: EF-4A7C-');
    expect(compiled.textContent).toContain('Download Ticket');
    expect(compiled.textContent).toContain('View event page');
    expect(compiled.textContent).toContain('Add to Wallet (stub)');
  });

  it('should navigate home when logo is pressed', async () => {
    const fixture = await createPage('tkt-1');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);

    const logoLink = (fixture.nativeElement as HTMLElement).querySelector(
      'a[aria-label="Go to home"]',
    ) as HTMLAnchorElement;
    logoLink.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledOnce();
  });

  it('should navigate to event page from cta', async () => {
    const fixture = await createPage('tkt-1');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const viewEventButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('View event page')) as HTMLButtonElement;
    viewEventButton.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/events', '1']);
  });

  it('should show unavailable state for unknown ticket', async () => {
    const fixture = await createPage('missing');

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Evento no disponible');
  });

  it('should navigate to session from profile avatar', async () => {
    const fixture = await createPage('tkt-1');
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const profileButton = (fixture.nativeElement as HTMLElement).querySelector(
      'button[aria-label="Go to account"]',
    ) as HTMLButtonElement;
    profileButton.click();
    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/session']);
  });

  it('should expand host contact panel', async () => {
    const fixture = await createPage('tkt-1');
    const compiled = fixture.nativeElement as HTMLElement;

    const contactButton = Array.from(compiled.querySelectorAll('button')).find((button) =>
      button.textContent?.includes('Contact host'),
    ) as HTMLButtonElement;
    contactButton.click();
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Rachel Kim');
    expect(compiled.textContent).toContain('rachel.kim@eventflow.com');
    expect(compiled.textContent).toContain('Refunds are available');
  });

  it('should download ticket pdf file', async () => {
    const fixture = await createPage('tkt-1');
    const page = fixture.componentInstance as DigitalTicketPage & {
      downloadTicket(): Promise<void>;
    };

    await page.downloadTicket();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Ticket PDF downloaded');
  });

  it('should download wallet pass stub', async () => {
    const fixture = await createPage('tkt-1');
    const compiled = fixture.nativeElement as HTMLElement;
    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});

    const walletButton = Array.from(compiled.querySelectorAll('button')).find((button) =>
      button.textContent?.includes('Add to Wallet'),
    ) as HTMLButtonElement;
    walletButton.click();
    fixture.detectChanges();

    expect(clickSpy).toHaveBeenCalled();
    expect(compiled.textContent).toContain('Wallet stub downloaded');

    clickSpy.mockRestore();
  });
});
