import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppwriteAuthService } from '../../core/appwrite/appwrite-auth.service';
import { SessionPage } from './session-page';

describe('SessionPage', () => {
  const authMock = {
    getCurrentUser: vi.fn().mockResolvedValue({
      $id: 'user-1',
      name: 'Jane Doe',
      email: 'jane@example.com',
    }),
    logout: vi.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    authMock.getCurrentUser.mockClear();
    authMock.logout.mockClear();

    await TestBed.configureTestingModule({
      imports: [SessionPage],
      providers: [
        provideRouter([
          { path: 'session', component: SessionPage },
          { path: 'auth', component: class {} },
        ]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: {
                get: (key: string) => (key === 'flow' ? 'register' : null),
              },
            },
          },
        },
        { provide: AppwriteAuthService, useValue: authMock },
      ],
    }).compileComponents();
  });

  it('should show session details for register flow', async () => {
    const fixture = TestBed.createComponent(SessionPage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    await vi.waitFor(() => {
      expect((fixture.nativeElement as HTMLElement).textContent).toContain('¡Cuenta creada!');
    });

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('jane@example.com');
  });

});
