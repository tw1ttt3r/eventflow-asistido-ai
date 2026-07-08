import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MyEventCard } from '@shared/ui/molecules/my-event-card/my-event-card';
import { MOCK_MY_EVENTS } from '@mock/my-events.mock';

describe('MyEventCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyEventCard],
    }).compileComponents();
  });

  it('should render registered event with view ticket action', () => {
    const fixture = TestBed.createComponent(MyEventCard);
    const viewTicketSpy = vi.fn();
    fixture.componentRef.setInput('event', MOCK_MY_EVENTS[0]!);
    fixture.componentInstance.viewTicketPress.subscribe(viewTicketSpy);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Product Design Workshop');
    expect(compiled.textContent).toContain('Registered');
    expect(compiled.textContent).toContain('View Ticket');

    const button = Array.from(compiled.querySelectorAll('button')).find((item) =>
      item.textContent?.includes('View Ticket'),
    ) as HTMLButtonElement;
    button.click();

    expect(viewTicketSpy).toHaveBeenCalledWith('tkt-2');
  });

  it('should render label action for events without ticket', () => {
    const fixture = TestBed.createComponent(MyEventCard);
    fixture.componentRef.setInput('event', MOCK_MY_EVENTS[1]!);
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('No ticket required');
  });

  it('should render summary label for attended events', () => {
    const fixture = TestBed.createComponent(MyEventCard);
    fixture.componentRef.setInput('event', MOCK_MY_EVENTS[2]!);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Community Pottery Class');
    expect(compiled.textContent).toContain('Summary');
    expect(compiled.querySelectorAll('button')).toHaveLength(0);
  });

  it('should render attended badge and certificate label', () => {
    const fixture = TestBed.createComponent(MyEventCard);
    fixture.componentRef.setInput('event', MOCK_MY_EVENTS[3]!);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Attended');
    expect(compiled.textContent).toContain('Certificate');
  });
});
