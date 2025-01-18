import { Routes } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideoHomeComponent } from './components/video-home/video-home.component';

export const routes: Routes = [
  {
    path: '',
    component: VideoHomeComponent,
    children: [
      { path: '', component: VideoListComponent },
      { path: 'details:id', component: VideoDetailsComponent },
    ],
  },
];
