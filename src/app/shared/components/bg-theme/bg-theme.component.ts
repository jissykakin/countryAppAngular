import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';


@Component({
  selector: 'shared-bg-theme',
  templateUrl: './bg-theme.component.html',
  styleUrl: './bg-theme.component.css'
})
export class BgThemeComponent {

  public items2: { field: string }[] = [
    { field: 'Option 1' },
    { field: 'Option 2' },
    { field: 'Option 3' }
];



constructor( private themeService : ThemeService ){}

public themeSelect : string = 'auto';
toggleDarkTheme(theme : string ): void {
  // document.body.classList.toggle('dark-theme');


  this.themeService.toggleTheme( theme );
  this.themeSelect = this.themeService.getCurrentTheme();
  console.log(this.themeSelect);

}

}
