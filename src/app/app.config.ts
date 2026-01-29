import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { CacheLocation } from '@auth0/auth0-spa-js';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAuth0({
      ...environment.auth0,
      cacheLocation: environment.auth0.cacheLocation as CacheLocation,
    }),
  ]
};

