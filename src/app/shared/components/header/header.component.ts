import { AsyncPipe, DOCUMENT } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '@core/services/theme.service';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LANGUAGES } from 'src/app/transloco-loader';

@Component({
  selector: 'app-header',
  imports: [RouterLink, AsyncPipe, TranslocoPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private _themeService = inject(ThemeService);
  private _translocoService = inject(TranslocoService);
  public authService = inject(AuthService);
  private _document = inject(DOCUMENT);

  drawerId = input<string>(''); // Default empty string

  private _currentLanguage = signal(this._translocoService.getActiveLang());

  // Computed signal for the alternative language
  otherLanguage = computed(() =>
    this._currentLanguage() === LANGUAGES.ar ? LANGUAGES.en : LANGUAGES.ar
  );
  private _textDirection = computed(() =>
    this._currentLanguage() === LANGUAGES.ar ? 'rtl' : 'ltr'
  );

  userImage!: string;

  ngOnInit(): void {
    this.changeLayourDirection();
    this.getUser();
  }

  /**
   * @description toggle theme
   */
  public onToggleTheme() {
    this._themeService.toggleTheme();
  }

  getUser() {
    this.authService.user$.subscribe((user) => {
      this.userImage = user?.picture ?? '';
    });
  }

  public onLogout() {
    this.authService.logout();
  }

  changeLanguage() {
    const selectedLanguage = this.otherLanguage();
    this._currentLanguage.set(selectedLanguage);
    this._translocoService.setActiveLang(selectedLanguage);
    this.changeLayourDirection();
  }

  changeLayourDirection() {
    console.log(this._document);
    this._document.documentElement.setAttribute('dir', this._textDirection());
    this._document.documentElement.setAttribute(
      'lang',
      this._currentLanguage()
    );
  }
}
