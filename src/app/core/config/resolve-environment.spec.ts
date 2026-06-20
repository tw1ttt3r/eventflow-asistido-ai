import { describe, expect, it } from 'vitest';

import { readNgAppVar, parseEnvBoolean, setValueByPath, getValueByPath } from './env-vars';
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
  sonar: {
    hostUrl: '',
    projectKey: '',
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

describe('parseEnvBoolean', () => {
  it('should parse common truthy and falsy strings', () => {
    expect(parseEnvBoolean('true', false)).toBe(true);
    expect(parseEnvBoolean('1', false)).toBe(true);
    expect(parseEnvBoolean('false', true)).toBe(false);
    expect(parseEnvBoolean('0', true)).toBe(false);
    expect(parseEnvBoolean(undefined, true)).toBe(true);
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
      NG_APP_SONAR_HOST_URL: 'http://localhost:9000',
      NG_APP_SONAR_PROJECT_KEY: 'eventflow-asistido-ai',
    });

    expect(resolved.apiUrl).toBe('http://localhost:3000');
    expect(resolved.appName).toBe('Eventflow');
    expect(resolved.apiKey).toBe('secret-key');
    expect(resolved.appwrite.endpoint).toBe('https://nyc.cloud.appwrite.io/v1');
    expect(resolved.appwrite.projectId).toBe('abc123');
    expect(resolved.sonar?.hostUrl).toBe('http://localhost:9000');
    expect(resolved.sonar?.projectKey).toBe('eventflow-asistido-ai');
    expect(readEnvField(resolved, 'NG_APP_APP_NAME')).toBe('Eventflow');
  });

  it('should omit sonar fields in production', () => {
    const resolved = resolveEnvironment(
      emptyBase,
      {
        NG_APP_SONAR_HOST_URL: 'http://localhost:9000',
        NG_APP_SONAR_PROJECT_KEY: 'eventflow-asistido-ai',
        NG_APP_API_URL: 'https://api.prod.example',
      },
      { production: true },
    );

    expect(resolved.production).toBe(true);
    expect(resolved.sonar).toBeUndefined();
    expect(resolved.apiUrl).toBe('https://api.prod.example');
    expect(readEnvField(resolved, 'NG_APP_SONAR_PROJECT_KEY')).toBe('');
  });

  it('should set production from options (APP_PRODUCTION at build time)', () => {
    const resolved = resolveEnvironment(emptyBase, {}, { production: true });
    expect(resolved.production).toBe(true);
  });
});
