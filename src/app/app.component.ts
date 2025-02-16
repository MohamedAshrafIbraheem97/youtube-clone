import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { ThemeService } from '@core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { VideoCardComponent } from './video/components/video-card/video-card.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService,
} from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    FooterComponent,
    TranslocoModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'youtube-clone';
  public themeService = inject(ThemeService);
  private _translocoService = inject(TranslocoService);

  theme$ = this.themeService.theme$; // Directly assign the observable

  ngOnInit(): void {
    this._translocoService.setActiveLang('en');
  }
}
