import { Component } from '@angular/core';
import { VideoListComponent } from '../video-list/video-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-video-home',
  imports: [RouterOutlet],
  templateUrl: './video-home.component.html',
  styleUrl: './video-home.component.scss',
})
export class VideoHomeComponent {}
