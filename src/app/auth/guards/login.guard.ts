import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const loginGuard: CanActivateFn = () => {
  const _authService = inject(AuthService);
  const _router = inject(Router);

  return _authService.isAuthenticated$.pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        return _router.createUrlTree(['/home']);
      } else return true;
    })
  );
};
