import { Component, inject } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { ThemeService } from '@core/services/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'youtube-clone';
  public themeService = inject(ThemeService);

  theme$ = this.themeService.theme$; // Directly assign the observable
}
