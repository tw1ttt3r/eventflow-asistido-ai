import { describe, expect, it } from 'vitest';

import { computePasswordStrength, passwordStrengthLabel } from '@shared/ui/password-strength.util';

describe('password-strength.util', () => {
  it('should return empty for blank password', () => {
    expect(computePasswordStrength('')).toBe('empty');
    expect(passwordStrengthLabel('empty')).toBe('');
  });

  it('should score stronger passwords higher', () => {
    expect(computePasswordStrength('abc')).toBe('weak');
    expect(computePasswordStrength('abcdefgh')).toBe('weak');
    expect(computePasswordStrength('abcdefghA')).toBe('fair');
    expect(computePasswordStrength('Abcdefgh1')).toBe('good');
    expect(computePasswordStrength('Abcdefgh1!')).toBe('strong');
  });
});
