import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { EventsDashboardPage } from '@features/events/events-dashboard-page';

describe('EventsDashboardPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsDashboardPage],
    }).compileComponents();
  });

  it('should render dashboard heading and events', async () => {
    const fixture = TestBed.createComponent(EventsDashboardPage);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('4 total');
    expect(compiled.textContent).toContain('3');
    expect(compiled.textContent).toContain('(75%)');
    expect(compiled.textContent).toContain('Intro to Hand Lettering');
    expect(compiled.textContent).toContain('Create Event');
  });
});
