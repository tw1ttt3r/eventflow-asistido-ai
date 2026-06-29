import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { createAppwriteClient } from '@core/appwrite/appwrite.client';
import { resolveAppwriteConfig } from '@core/appwrite/appwrite.config';
import { APPWRITE_CLIENT, APPWRITE_CONFIG } from '@core/appwrite/appwrite.tokens';
import { APP_CONFIG, createAppConfig } from '@core/config/app-config';
import { routes } from '@app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_CONFIG, useFactory: createAppConfig },
    {
      provide: APPWRITE_CONFIG,
      useFactory: (env: ReturnType<typeof createAppConfig>) => resolveAppwriteConfig(env),
      deps: [APP_CONFIG],
    },
    {
      provide: APPWRITE_CLIENT,
      useFactory: createAppwriteClient,
      deps: [APPWRITE_CONFIG],
    },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
