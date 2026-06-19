import { describe, expect, it } from 'vitest';

import { readNgAppVar, setValueByPath, getValueByPath } from './env-vars';
import { readEnvField, resolveEnvironment } from './resolve-environment';
import type { Environment } from '../../../environments/environment.model';

const emptyBase: Environment = {
  production: false,
  apiUrl: '',
  appName: '',
  apiKey: '',
  version: '0.0.0',
  appwrite: {
    endpoint: '',
    projectId: '',
    projectName: '',
  },
};

describe('readNgAppVar', () => {
  it('should return value when defined and non-empty', () => {
    expect(readNgAppVar('https://api.example', '')).toBe('https://api.example');
  });

  it('should return fallback when undefined or empty', () => {
    expect(readNgAppVar(undefined, 'fallback')).toBe('fallback');
    expect(readNgAppVar('', 'fallback')).toBe('fallback');
  });
});

describe('setValueByPath / getValueByPath', () => {
  it('should set and read nested properties', () => {
    const target = { appwrite: { endpoint: '' } };
    setValueByPath(target, 'appwrite.endpoint', 'https://appwrite.io/v1');
    expect(getValueByPath(target, 'appwrite.endpoint')).toBe('https://appwrite.io/v1');
  });
});

describe('resolveEnvironment', () => {
  it('should keep base values when vars are empty', () => {
    const resolved = resolveEnvironment(emptyBase, {});
    expect(resolved.apiUrl).toBe('');
    expect(resolved.appwrite.projectId).toBe('');
  });

  it('should map registry keys directly into Environment fields', () => {
    const resolved = resolveEnvironment(emptyBase, {
      NG_APP_API_URL: 'http://localhost:3000',
      NG_APP_APP_NAME: 'Eventflow',
      NG_APP_API_KEY: 'secret-key',
      NG_APP_APPWRITE_ENDPOINT: 'https://nyc.cloud.appwrite.io/v1',
      NG_APP_APPWRITE_PROJECT_ID: 'abc123',
      NG_APP_APPWRITE_PROJECT_NAME: 'Eventflow',
    });

    expect(resolved.apiUrl).toBe('http://localhost:3000');
    expect(resolved.appName).toBe('Eventflow');
    expect(resolved.apiKey).toBe('secret-key');
    expect(resolved.appwrite.endpoint).toBe('https://nyc.cloud.appwrite.io/v1');
    expect(resolved.appwrite.projectId).toBe('abc123');
    expect(readEnvField(resolved, 'NG_APP_APP_NAME')).toBe('Eventflow');
  });
});
