import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';

import { ContentUnavailablePage } from '@features/content-unavailable/content-unavailable-page';

type ContentUnavailablePageHarness = ContentUnavailablePage & {
  goHome(): void;
};

@Component({ template: '' })
class TestRouteComponent {}

describe('ContentUnavailablePage', () => {
  it('should render content unavailable copy and go home action', () => {
    TestBed.configureTestingModule({
      imports: [ContentUnavailablePage],
      providers: [provideRouter([])],
    });

    const fixture = TestBed.createComponent(ContentUnavailablePage);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Content unavailable');
    expect(element.textContent).toContain('Go back home');
    expect(element.textContent).toContain('© 2026 EventFlow');
    expect(element.textContent).not.toContain('Try again');
    expect(element.textContent).not.toContain('View cached content');
  });

  it('should navigate home from explore and go back home actions', () => {
    TestBed.configureTestingModule({
      imports: [ContentUnavailablePage],
      providers: [
        provideRouter([
          { path: 'content-unavailable', component: ContentUnavailablePage },
          { path: 'events', component: TestRouteComponent },
        ]),
      ],
    });

    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate');

    const fixture = TestBed.createComponent(ContentUnavailablePage);
    const page = fixture.componentInstance as ContentUnavailablePageHarness;
    fixture.detectChanges();

    page.goHome();
    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });
});
