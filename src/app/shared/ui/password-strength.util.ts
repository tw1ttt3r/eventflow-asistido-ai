export type PasswordStrengthLevel = 'empty' | 'weak' | 'fair' | 'good' | 'strong';

export function computePasswordStrength(password: string): PasswordStrengthLevel {
  if (!password) {
    return 'empty';
  }

  let score = 0;
  if (password.length >= 8) {
    score++;
  }
  if (/[A-Z]/.test(password)) {
    score++;
  }
  if (/\d/.test(password)) {
    score++;
  }
  if (/[^A-Za-z\d]/.test(password)) {
    score++;
  }

  if (score <= 1) {
    return 'weak';
  }
  if (score === 2) {
    return 'fair';
  }
  if (score === 3) {
    return 'good';
  }

  return 'strong';
}

export function passwordStrengthLabel(level: PasswordStrengthLevel): string {
  switch (level) {
    case 'weak':
      return 'Weak';
    case 'fair':
      return 'Fair';
    case 'good':
      return 'Good';
    case 'strong':
      return 'Strong';
    default:
      return '';
  }
}
