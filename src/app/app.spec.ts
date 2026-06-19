import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { APPWRITE_CLIENT, APPWRITE_CONFIG } from './core/appwrite/appwrite.tokens';
import { AppwriteService } from './core/appwrite/appwrite.service';
import { APP_CONFIG } from './core/config/app-config';
import { App } from './app';

const mockEnv = {
  production: false,
  apiUrl: 'http://localhost:3000',
  appName: 'Eventflow Asistido (dev)',
  apiKey: '',
  version: '0.0.0',
  appwrite: {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: 'test-project',
    projectName: 'Eventflow Asistido (dev)',
  },
};

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: APP_CONFIG, useValue: mockEnv },
        {
          provide: APPWRITE_CONFIG,
          useValue: mockEnv.appwrite,
        },
        {
          provide: APPWRITE_CLIENT,
          useValue: { ping: vi.fn().mockResolvedValue({}) },
        },
        AppwriteService,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render development status and app name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('En desarrollo');
    expect(compiled.textContent).toContain('Eventflow Asistido (dev)');
    expect(compiled.textContent).toContain('http://localhost:3000');
    expect(compiled.textContent).toContain('Appwrite');
  });
});
