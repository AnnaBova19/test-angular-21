import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const auth0 = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = await firstValueFrom(auth0.isAuthenticated$);

  if (isAuthenticated) {
    return true;
  }

  await auth0.loginWithRedirect({
    appState: { returnTo: state.url },
  });

  return false;
};
