import { AppwriteException } from 'appwrite';
import { describe, expect, it } from 'vitest';

import { toAuthErrorMessage } from '@core/appwrite/appwrite-auth-error';

describe('toAuthErrorMessage', () => {
  it('should map known Appwrite error types', () => {
    const error = new AppwriteException('raw', 400, 'user_invalid_credentials', 'auth');

    expect(toAuthErrorMessage(error)).toBe('Correo o contraseña incorrectos.');
  });

  it('should fall back to Appwrite message for unknown types', () => {
    const error = new AppwriteException('Custom message', 400, 'unknown_type', 'auth');

    expect(toAuthErrorMessage(error)).toBe('Custom message');
  });

  it('should return Error message for generic errors', () => {
    expect(toAuthErrorMessage(new Error('Network down'))).toBe('Network down');
  });

  it('should return default message for unknown values', () => {
    expect(toAuthErrorMessage('boom')).toBe('Ocurrió un error inesperado. Inténtalo de nuevo.');
  });
});
