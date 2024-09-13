import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-items.interface';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html'
})


export class SidebarComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  ngOnInit(): void {

    this.menuItems = [
      {
        label: 'Por Capital',
        icon:'location_city',
        routerLink: 'countries/by-capital'
      },
      {
        label: 'Por Pais',
        icon:'travel_explore ',
        routerLink: 'countries/by-country'
      },
      {
        label: 'Por Región',
        icon:'south_america',
        routerLink: 'countries/by-region'
      }

    ]
  }

}






