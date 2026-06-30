import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { APPWRITE_CONFIG } from '@core/appwrite/appwrite.tokens';
import { AppwriteAuthService } from '@core/appwrite/appwrite-auth.service';
import { AppwriteService } from '@core/appwrite/appwrite.service';
import { APP_CONFIG } from '@core/config/app-config';
import type { Environment } from '@env/environment.model';
import { MOCK_SESSION_USER } from '@mock/session.mock';

describe('AppwriteAuthService', () => {
  const mockUser = {
    $id: 'user-1',
    name: 'Jane Doe',
    email: 'jane@example.com',
  };

  const productionConfig: Environment = {
    production: true,
    apiUrl: '',
    appName: '',
    apiKey: '',
    version: '0.0.0',
    appwrite: { endpoint: '', projectId: '', projectName: '' },
  };

  const devConfigWithoutMock: Environment = {
    production: false,
    apiUrl: '',
    appName: '',
    apiKey: '',
    version: '0.0.0',
    appwrite: { endpoint: '', projectId: '', projectName: '' },
    mockSessionUser: false,
  };

  const devConfigWithMock: Environment = {
    ...devConfigWithoutMock,
    mockSessionUser: true,
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
    mockAccount.deleteSession.mockClear();

    TestBed.configureTestingModule({
      providers: [
        AppwriteAuthService,
        { provide: APP_CONFIG, useValue: productionConfig },
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

  it('should return current user when session exists', async () => {
    const service = TestBed.inject(AppwriteAuthService);

    const user = await service.getCurrentUser();

    expect(mockAccount.get).toHaveBeenCalledOnce();
    expect(user?.email).toBe('jane@example.com');
  });

  it('should return null when get fails', async () => {
    mockAccount.get.mockRejectedValueOnce(new Error('Unauthorized'));
    const service = TestBed.inject(AppwriteAuthService);

    await expect(service.getCurrentUser()).resolves.toBeNull();
  });

  it('should logout and delete current session', async () => {
    const service = TestBed.inject(AppwriteAuthService);

    await service.logout();

    expect(mockAccount.deleteSession).toHaveBeenCalledWith({ sessionId: 'current' });
  });

  it('should skip logout when Appwrite is not configured', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        AppwriteAuthService,
        { provide: APP_CONFIG, useValue: devConfigWithoutMock },
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

    await service.logout();
    expect(mockAccount.deleteSession).not.toHaveBeenCalled();
    expect(await service.getCurrentUser()).toBeNull();
    expect(service.isConfigured()).toBe(false);
  });

  it('should return mock session user in development when enabled', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        AppwriteAuthService,
        { provide: APP_CONFIG, useValue: devConfigWithMock },
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

    await expect(service.getCurrentUser()).resolves.toEqual(MOCK_SESSION_USER);
    expect(mockAccount.get).not.toHaveBeenCalled();
  });

  it('should throw when Appwrite is not configured', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        AppwriteAuthService,
        { provide: APP_CONFIG, useValue: devConfigWithoutMock },
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
