import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { ThemeService } from '@core/services/theme.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { VideoCardComponent } from './video/component/video-card/video-card.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AsyncPipe, NgClass, VideoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'youtube-clone';
  public themeService = inject(ThemeService);

  isSideNavOpened = signal<boolean>(true);

  theme$ = this.themeService.theme$; // Directly assign the observable

  onToggleSideNav() {
    this.isSideNavOpened.update((prev) => !prev);
  }
}
