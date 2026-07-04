import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';

import { OfflineConnectivityService } from '@features/offline/offline-connectivity.service';
import { OfflinePage } from '@features/offline/offline-page';

type OfflinePageHarness = OfflinePage & {
  retryConnection(): Promise<void>;
};

describe('OfflinePage', () => {
  it('should render offline status without saved content or secondary actions', () => {
    TestBed.configureTestingModule({
      imports: [OfflinePage],
      providers: [provideRouter([]), OfflineConnectivityService],
    });

    const fixture = TestBed.createComponent(OfflinePage);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('You are offline');
    expect(element.textContent).toContain('Retry connection');
    expect(element.textContent).toContain('EventFlow • Offline mode');
    expect(element.textContent).not.toContain('Saved for offline');
    expect(element.textContent).not.toContain('View saved tickets');
    expect(element.textContent).not.toContain('Open network settings');
  });

  it('should navigate to previous route when retry succeeds online', async () => {
    const connectivity = {
      lastCheckedLabel: () => 'Last checked 1m ago',
      tickLastCheckedLabel: vi.fn(),
      refreshStatus: vi.fn().mockReturnValue(true),
      returnUrl: vi.fn().mockReturnValue('/events'),
    };

    TestBed.configureTestingModule({
      imports: [OfflinePage],
      providers: [
        provideRouter([
          { path: 'offline', component: OfflinePage },
          { path: 'events', component: class {} },
        ]),
        { provide: OfflineConnectivityService, useValue: connectivity },
      ],
    });

    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigateByUrl');

    const fixture = TestBed.createComponent(OfflinePage);
    const page = fixture.componentInstance as OfflinePageHarness;
    fixture.detectChanges();

    await page.retryConnection();

    expect(connectivity.refreshStatus).toHaveBeenCalled();
    expect(connectivity.returnUrl).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith('/events');
  });
});
