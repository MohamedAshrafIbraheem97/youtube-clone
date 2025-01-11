import { Injectable, signal } from '@angular/core';
import { themeKeys } from '@core/configs/theme.config';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // BehaviorSubject to hold and manage the current theme
  private _theme = new BehaviorSubject<string>(themeKeys.youtubeLight);

  constructor() {
    const savedTheme = localStorage.getItem('theme') || themeKeys.youtubeLight;
    this._theme.next(savedTheme); // Set initial value based on localStorage
  }

  /**
   * @description get the selected theme as an observable
   */
  get theme$(): Observable<string> {
    return this._theme.asObservable(); // Expose it as observable
  }

  /**
   * @description toggle the theme to the selected theme
   * @returns selected theme
   */
  public toggleTheme() {
    const newTheme =
      this._theme.value === themeKeys.youtubeLight
        ? themeKeys.youtubeDark
        : themeKeys.youtubeLight;
    this._theme.next(newTheme); // Update the BehaviorSubject value
    localStorage.setItem('theme', newTheme); // Save the theme in localStorage
  }
}
