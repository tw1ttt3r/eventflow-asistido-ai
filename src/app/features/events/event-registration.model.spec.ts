import { describe, expect, it } from 'vitest';

import {
  isValidEmail,
  isValidFullName,
  isValidPhone,
  validateRegistrationForm,
} from '@features/events/event-registration.model';

describe('event registration validation', () => {
  it('should validate full name, email and optional phone', () => {
    expect(isValidFullName('Alexandra Rivera')).toBe(true);
    expect(isValidFullName('A')).toBe(false);
    expect(isValidEmail('alex@example.com')).toBe(true);
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidPhone('')).toBe(true);
    expect(isValidPhone('+1 (555) 123-4567')).toBe(true);
    expect(isValidPhone('abc')).toBe(false);
  });

  it('should reject incomplete registration forms', () => {
    expect(
      validateRegistrationForm({
        fullName: '',
        email: 'alex@example.com',
        phone: '',
        termsAccepted: true,
      }),
    ).toBe('Indica tu nombre completo.');

    expect(
      validateRegistrationForm({
        fullName: 'Alexandra Rivera',
        email: '',
        phone: '',
        termsAccepted: true,
      }),
    ).toBe('Indica tu correo electrónico.');

    expect(
      validateRegistrationForm({
        fullName: 'Alexandra Rivera',
        email: 'alex@example.com',
        phone: 'bad-phone',
        termsAccepted: true,
      }),
    ).toBe('Formato de teléfono no válido.');

    expect(
      validateRegistrationForm({
        fullName: 'Alexandra Rivera',
        email: 'alex@example.com',
        phone: '',
        termsAccepted: false,
      }),
    ).toBe('Debes aceptar los términos del evento.');
  });

  it('should accept valid registration forms', () => {
    expect(
      validateRegistrationForm({
        fullName: 'Alexandra Rivera',
        email: 'alex@example.com',
        phone: '+1 (555) 123-4567',
        termsAccepted: true,
      }),
    ).toBeNull();
  });
});
