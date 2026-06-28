import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { APPWRITE_CONFIG } from './appwrite.tokens';
import { AppwriteAuthService } from './appwrite-auth.service';
import { AppwriteService } from './appwrite.service';

describe('AppwriteAuthService', () => {
  const mockUser = {
    $id: 'user-1',
    name: 'Jane Doe',
    email: 'jane@example.com',
  };

  const mockAccount = {
    create: vi.fn().mockResolvedValue(mockUser),
    createEmailPasswordSession: vi.fn().mockResolvedValue({ $id: 'session-1' }),
    get: vi.fn().mockResolvedValue(mockUser),
    deleteSession: vi.fn().mockResolvedValue(undefined),
  };

  beforeEach(() => {
    mockAccount.create.mockClear();
    mockAccount.createEmailPasswordSession.mockClear();
    mockAccount.get.mockClear();

    TestBed.configureTestingModule({
      providers: [
        AppwriteAuthService,
        {
          provide: APPWRITE_CONFIG,
          useValue: {
            endpoint: 'https://fra.cloud.appwrite.io/v1',
            projectId: 'test-project',
            projectName: 'Eventflow',
          },
        },
        {
          provide: AppwriteService,
          useValue: { account: mockAccount },
        },
      ],
    });
  });

  it('should register and start a session', async () => {
    const service = TestBed.inject(AppwriteAuthService);

    const user = await service.registerWithEmail({
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'Secret123!',
    });

    expect(mockAccount.create).toHaveBeenCalledOnce();
    expect(mockAccount.createEmailPasswordSession).toHaveBeenCalledOnce();
    expect(user.email).toBe('jane@example.com');
  });

  it('should login with email and password', async () => {
    const service = TestBed.inject(AppwriteAuthService);

    const user = await service.loginWithEmail({
      email: 'jane@example.com',
      password: 'Secret123!',
    });

    expect(mockAccount.createEmailPasswordSession).toHaveBeenCalledOnce();
    expect(user.name).toBe('Jane Doe');
  });

  it('should throw when Appwrite is not configured', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        AppwriteAuthService,
        {
          provide: APPWRITE_CONFIG,
          useValue: { endpoint: '', projectId: '', projectName: '' },
        },
        {
          provide: AppwriteService,
          useValue: { account: mockAccount },
        },
      ],
    });

    const service = TestBed.inject(AppwriteAuthService);

    await expect(
      service.loginWithEmail({ email: 'jane@example.com', password: 'Secret123!' }),
    ).rejects.toThrow(/no configurado/i);
  });
});
