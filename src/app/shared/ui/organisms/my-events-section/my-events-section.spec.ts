import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MyEventsSection } from '@shared/ui/organisms/my-events-section/my-events-section';
import { MOCK_MY_EVENTS } from '@mock/my-events.mock';

describe('MyEventsSection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyEventsSection],
    }).compileComponents();
  });

  it('should render upcoming events by default', () => {
    const fixture = TestBed.createComponent(MyEventsSection);
    fixture.componentRef.setInput('events', MOCK_MY_EVENTS);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('My Events');
    expect(compiled.textContent).toContain('Product Design Workshop');
    expect(compiled.textContent).not.toContain('Community Pottery Class');
  });

  it('should switch to attended tab and show empty state when filtered list is empty', () => {
    const fixture = TestBed.createComponent(MyEventsSection);
    fixture.componentRef.setInput('events', MOCK_MY_EVENTS.filter((event) => event.tab === 'upcoming'));
    fixture.detectChanges();

    const attendedTab = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.trim() === 'Attended') as HTMLButtonElement;
    attendedTab.click();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('No attended events yet');
  });

  it('should forward ticket actions', () => {
    const fixture = TestBed.createComponent(MyEventsSection);
    const viewTicketSpy = vi.fn();
    fixture.componentRef.setInput('events', MOCK_MY_EVENTS);
    fixture.componentInstance.viewTicketPress.subscribe(viewTicketSpy);
    fixture.detectChanges();

    const ticketButton = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    ).find((button) => button.textContent?.includes('View Ticket')) as HTMLButtonElement;
    ticketButton.click();
    expect(viewTicketSpy).toHaveBeenCalledWith('tkt-2');
  });

  it('should show upcoming empty state when no events exist', () => {
    const fixture = TestBed.createComponent(MyEventsSection);
    fixture.componentRef.setInput('events', []);
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('No upcoming events yet');
  });
});
