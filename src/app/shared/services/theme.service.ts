import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = 'auto'; // Valor inicial del tema

  constructor() { }

  toggleTheme(theme : string) {
    this.currentTheme = theme;
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}
