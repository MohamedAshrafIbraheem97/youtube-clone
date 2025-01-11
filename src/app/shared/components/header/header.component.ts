import { Component, inject } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private _themeService = inject(ThemeService);

  /**
   * @description toggle theme
   */
  public onToggleTheme() {
    this._themeService.toggleTheme();
  }
}
