import { Component, inject, input, Input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  drawerId = input<string>(''); // Default empty string
  private _themeService = inject(ThemeService);

  /**
   * @description toggle theme
   */
  public onToggleTheme() {
    this._themeService.toggleTheme();
  }
}
