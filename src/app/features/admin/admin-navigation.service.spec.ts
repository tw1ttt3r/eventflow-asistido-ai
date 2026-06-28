import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AdminNavigationService } from '@features/admin/admin-navigation.service';

describe('AdminNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), AdminNavigationService],
    });
  });

  it('should navigate to known admin tabs', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const service = TestBed.inject(AdminNavigationService);

    service.navigate('events');
    expect(navigateSpy).toHaveBeenCalledWith(['/events']);

    service.navigate('account');
    expect(navigateSpy).toHaveBeenCalledWith(['/session']);

    service.navigate('dash');
    expect(navigateSpy).toHaveBeenCalledWith(['/events']);
  });

  it('should ignore unknown tab ids', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const service = TestBed.inject(AdminNavigationService);

    service.navigate('unknown');

    expect(navigateSpy).not.toHaveBeenCalled();
  });
});
