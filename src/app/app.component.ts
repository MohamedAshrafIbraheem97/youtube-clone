import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { ThemeService } from '@core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { VideoCardComponent } from './video/component/video-card/video-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AsyncPipe, VideoCardComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'youtube-clone';
  public themeService = inject(ThemeService);

  theme$ = this.themeService.theme$; // Directly assign the observable
}
