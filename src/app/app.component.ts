import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countryApp';

  constructor(public themeService: ThemeService) {
  }
}
