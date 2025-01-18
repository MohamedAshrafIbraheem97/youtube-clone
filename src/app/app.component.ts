import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { ThemeService } from '@core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { VideoCardComponent } from './video/components/video-card/video-card.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'youtube-clone';
  public themeService = inject(ThemeService);

  theme$ = this.themeService.theme$; // Directly assign the observable
}
