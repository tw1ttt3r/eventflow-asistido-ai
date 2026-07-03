export interface EventRegistrationDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  dateLabel: string;
  timeLabel: string;
  venue: string;
  spotsLeft: number;
  priceLabel: string;
  imageHue: number;
  whatToBring: string;
  host: string;
  duration: string;
  doorsOpen: string;
}

export interface RegistrationFormValue {
  fullName: string;
  email: string;
  phone: string;
  termsAccepted: boolean;
}

const MAX_EMAIL_LENGTH = 254;
const MIN_PHONE_LENGTH = 7;
const MAX_PHONE_LENGTH = 20;

function hasWhitespace(text: string): boolean {
  for (const char of text) {
    if (char === ' ' || char === '\t' || char === '\n' || char === '\r') {
      return true;
    }
  }
  return false;
}

function isPhoneCharacter(char: string, index: number): boolean {
  if (char === '+' && index === 0) {
    return true;
  }

  return (
    (char >= '0' && char <= '9') ||
    char === ' ' ||
    char === '(' ||
    char === ')' ||
    char === '-'
  );
}

export function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > MAX_EMAIL_LENGTH || hasWhitespace(trimmed)) {
    return false;
  }

  const atIndex = trimmed.indexOf('@');
  if (atIndex <= 0 || atIndex !== trimmed.lastIndexOf('@')) {
    return false;
  }

  const local = trimmed.slice(0, atIndex);
  const domain = trimmed.slice(atIndex + 1);
  if (!local || !domain) {
    return false;
  }

  const dotIndex = domain.indexOf('.');
  return dotIndex > 0 && dotIndex < domain.length - 1;
}

export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed === '') {
    return true;
  }

  if (trimmed.length < MIN_PHONE_LENGTH || trimmed.length > MAX_PHONE_LENGTH) {
    return false;
  }

  let hasDigit = false;
  for (let index = 0; index < trimmed.length; index++) {
    const char = trimmed[index];
    if (!isPhoneCharacter(char, index)) {
      return false;
    }
    if (char >= '0' && char <= '9') {
      hasDigit = true;
    }
  }

  return hasDigit;
}

export function isValidFullName(value: string): boolean {
  return value.trim().length >= 2;
}

export function validateRegistrationForm(value: RegistrationFormValue): string | null {
  if (!isValidFullName(value.fullName)) {
    return 'Indica tu nombre completo.';
  }

  if (!value.email.trim()) {
    return 'Indica tu correo electrónico.';
  }

  if (!isValidEmail(value.email)) {
    return 'Introduce un correo electrónico válido.';
  }

  if (!isValidPhone(value.phone)) {
    return 'Formato de teléfono no válido.';
  }

  if (!value.termsAccepted) {
    return 'Debes aceptar los términos del evento.';
  }

  return null;
}
