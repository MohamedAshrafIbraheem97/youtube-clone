import { Routes } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { authGuard } from './auth/guards/auth.guard';
import { loginGuard } from './auth/guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routes').then((c) => c.routes),
    canActivate: [loginGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./video/video.routes').then((c) => c.routes),
    canActivate: [authGuard],
  },
  { path: '**', component: NotfoundComponent },
];
