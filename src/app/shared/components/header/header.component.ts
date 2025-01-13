import { Component, inject, output } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  onBurgerIconClicked = output();
  private _themeService = inject(ThemeService);

  /**
   * @description toggle theme
   */
  public onToggleTheme() {
    this._themeService.toggleTheme();
  }

  onToggleSideNav() {
    this.onBurgerIconClicked.emit();
  }
}
