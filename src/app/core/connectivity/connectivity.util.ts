export function isBrowserOnline(): boolean {
  return typeof navigator === 'undefined' ? true : navigator.onLine;
}

export const OFFLINE_ROUTE = '/offline';

export function isOfflineShellRoute(url: string): boolean {
  return url.startsWith(OFFLINE_ROUTE);
}

export function shouldRedirectToOffline(url: string): boolean {
  return isBrowserOnline() ? false : !isOfflineShellRoute(url);
}
