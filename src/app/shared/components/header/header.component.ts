import { AsyncPipe } from '@angular/common';
import { Component, inject, input, Input, OnInit, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '@core/services/theme.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  drawerId = input<string>(''); // Default empty string
  private _themeService = inject(ThemeService);
  public authService = inject(AuthService);
  userImage!: string;

  ngOnInit(): void {
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
}
