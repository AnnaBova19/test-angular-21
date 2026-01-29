import { Injectable, inject } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth0 = inject(Auth0Service);

  user$ = this.auth0.user$;
  isAuthenticated$ = this.auth0.isAuthenticated$;
  loginWithRedirect = this.auth0.loginWithRedirect;
  logout = this.auth0.logout;
  getAccessTokenSilently = this.auth0.getAccessTokenSilently;
}

