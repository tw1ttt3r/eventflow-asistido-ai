/** Alias de variables `.env` → claves `NG_APP_*` para el bundle Angular. */
export const ENV_TO_NG_APP_ALIASES = {
  SONAR_HOST_URL: 'NG_APP_SONAR_HOST_URL',
  SONAR_PROJECT_KEY: 'NG_APP_SONAR_PROJECT_KEY',
};

const SONAR_NG_APP_PREFIX = 'NG_APP_SONAR_';

export function isProductionNgCommand(ngArgs) {
  const command = ngArgs[0];
  const configIndex = ngArgs.indexOf('--configuration');
  const configuration = configIndex >= 0 ? ngArgs[configIndex + 1] : undefined;

  if (command === 'serve') {
    return configuration === 'production';
  }

  if (command === 'build') {
    return configuration !== 'development';
  }

  return false;
}

export function stripSonarFromNgAppVars(ngAppVars) {
  for (const key of Object.keys(ngAppVars)) {
    if (key.startsWith(SONAR_NG_APP_PREFIX)) {
      delete ngAppVars[key];
    }
  }

  return ngAppVars;
}

export function applyEnvToNgAppAliases(ngAppVars, processEnv = process.env, { includeSonar = true } = {}) {
  const aliases = includeSonar ? ENV_TO_NG_APP_ALIASES : {};

  for (const [sourceKey, targetKey] of Object.entries(aliases)) {
    const value = processEnv[sourceKey];
    if (value !== undefined && value !== '' && ngAppVars[targetKey] === undefined) {
      ngAppVars[targetKey] = value;
    }
  }

  return ngAppVars;
}
