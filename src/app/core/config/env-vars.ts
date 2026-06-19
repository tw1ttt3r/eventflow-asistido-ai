/** Lee variables inyectadas en build/serve vía `NG_APP_*` y `ng --define`. */

export type NgAppVars = Readonly<Record<string, string>>;

export function readNgAppVars(): NgAppVars {
  return typeof NG_APP_VARS !== 'undefined' ? NG_APP_VARS : {};
}

export function readNgAppVar(value: string | undefined, fallback = ''): string {
  return value !== undefined && value !== '' ? value : fallback;
}

export function getNgAppVar(key: string, fallback = ''): string {
  const vars = readNgAppVars();
  return readNgAppVar(vars[key], fallback);
}

export function setValueByPath<T extends object>(target: T, path: string, value: string): void {
  const segments = path.split('.');
  let current: Record<string, unknown> = target as Record<string, unknown>;

  for (let index = 0; index < segments.length - 1; index += 1) {
    const segment = segments[index];
    const next = current[segment];
    if (typeof next !== 'object' || next === null) {
      current[segment] = {};
    }
    current = current[segment] as Record<string, unknown>;
  }

  current[segments.at(-1)!] = value;
}

export function getValueByPath(target: object, path: string): string | undefined {
  const segments = path.split('.');
  let current: unknown = target;

  for (const segment of segments) {
    if (typeof current !== 'object' || current === null) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[segment];
  }

  return typeof current === 'string' ? current : undefined;
}
