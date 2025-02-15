import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';
import { environment } from 'src/environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideAuth0({
      clientId: environment.clientId,
      domain: environment.domain,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
