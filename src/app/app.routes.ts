import { Routes } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./video/video.routes').then((c) => c.routes),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/components/profile/profile.component').then(
        (c) => c.ProfileComponent
      ),
  },
  { path: '**', component: NotfoundComponent },
];
