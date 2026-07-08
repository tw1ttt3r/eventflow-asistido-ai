import { describe, expect, it } from 'vitest';

import { routes } from '@app/app.routes';

describe('app.routes', () => {
  it('should define core application routes', () => {
    const paths = routes.map((route) => route.path);

    expect(paths).toContain('');
    expect(paths).toContain('auth');
    expect(paths).toContain('events');
    expect(paths).toContain('events/new');
    expect(paths).toContain('events/:id/edit');
    expect(paths).toContain('session');
    expect(paths).toContain('offline');
    expect(paths).toContain('content-unavailable');
    expect(paths).toContain('**');
  });

  it('should protect events routes with auth and connectivity guards', () => {
    const eventsRoute = routes.find((route) => route.path === 'events');
    const createRoute = routes.find((route) => route.path === 'events/new');

    expect(eventsRoute?.canActivate).toEqual(
      expect.arrayContaining([expect.any(Function), expect.any(Function)]),
    );
    expect(createRoute?.canActivate).toEqual(
      expect.arrayContaining([expect.any(Function), expect.any(Function)]),
    );
  });
});
