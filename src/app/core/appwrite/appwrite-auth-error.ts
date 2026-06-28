import { AppwriteException } from 'appwrite';

const AUTH_ERROR_MESSAGES: Record<string, string> = {
  user_already_exists: 'Ya existe una cuenta con este correo.',
  user_invalid_credentials: 'Correo o contraseña incorrectos.',
  user_unauthorized: 'Correo o contraseña incorrectos.',
  user_password_mismatch: 'Las contraseñas no coinciden.',
  password_recently_used: 'Elige una contraseña distinta a las anteriores.',
  general_rate_limit_exceeded: 'Demasiados intentos. Espera un momento e inténtalo de nuevo.',
};

export function toAuthErrorMessage(error: unknown): string {
  if (error instanceof AppwriteException) {
    return AUTH_ERROR_MESSAGES[error.type] ?? error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Ocurrió un error inesperado. Inténtalo de nuevo.';
}
