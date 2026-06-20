import { TestBed } from '@angular/core/testing';
import { Client } from 'appwrite';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { APPWRITE_CLIENT, APPWRITE_CONFIG } from './appwrite.tokens';
import { AppwriteService } from './appwrite.service';

describe('AppwriteService', () => {
  const mockConfig = {
    endpoint: 'https://fra.cloud.appwrite.io/v1',
    projectId: 'test-project',
    projectName: 'Eventflow',
  };

  beforeEach(() => {
    const ping = vi.fn().mockResolvedValue({});

    TestBed.configureTestingModule({
      providers: [
        AppwriteService,
        { provide: APPWRITE_CONFIG, useValue: mockConfig },
        {
          provide: APPWRITE_CLIENT,
          useValue: { ping } satisfies Pick<Client, 'ping'>,
        },
      ],
    });
  });

  it('should report configured when endpoint and projectId exist', () => {
    const service = TestBed.inject(AppwriteService);
    expect(service.isConfigured()).toBe(true);
    expect(service.configuration.projectId).toBe('test-project');
  });

  it('should call client.ping when configured', async () => {
    const service = TestBed.inject(AppwriteService);
    const client = TestBed.inject(APPWRITE_CLIENT);

    await service.ping();

    expect(client.ping).toHaveBeenCalledOnce();
  });

  it('should throw when Appwrite is not configured', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        AppwriteService,
        {
          provide: APPWRITE_CONFIG,
          useValue: { endpoint: '', projectId: '', projectName: 'Eventflow' },
        },
        {
          provide: APPWRITE_CLIENT,
          useValue: { ping: vi.fn() },
        },
      ],
    });

    const service = TestBed.inject(AppwriteService);

    await expect(service.ping()).rejects.toThrow(/no configurado/i);
  });
});
