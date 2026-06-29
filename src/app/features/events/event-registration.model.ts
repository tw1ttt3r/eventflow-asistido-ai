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

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  return trimmed === '' || PHONE_PATTERN.test(trimmed);
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
