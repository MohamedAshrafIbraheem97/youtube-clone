import { AuthService as Auth0Service, User } from '@auth0/auth0-angular';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth0Service = inject(Auth0Service);
  private _router = inject(Router);

  public login() {
    this._auth0Service.loginWithRedirect();
  }

  // Register
  public register() {
    this._auth0Service.loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup', // Show the sign-up form
      },
    });
  }

  // Logout
  logout() {
    this._auth0Service.logout({
      logoutParams: { returnTo: window.location.origin },
    });
  }

  // Check if the user is authenticated
  get isAuthenticated$() {
    return this._auth0Service.isAuthenticated$;
  }

  // Get user profile
  get user$() {
    return this._auth0Service.user$;
  }

  // Redirect to home after login
  handleAuthCallback() {
    this._auth0Service.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this._router.navigate(['/home']); // Redirect to home page
      }
    });
  }
}
