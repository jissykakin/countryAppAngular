import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styles:[
    `img {
      width : 25px;
    }`
  ]

})
export class CountriesTableComponent {

  @Input()
  public countries: Country[] = [];

  public pageSize = 15;
  public page = 1;

  get totalPages() {
    return Math.ceil(this.countries.length / this.pageSize);

  }


  // Function to handle page change
  onPageChange(pageNumber: number): void {
    this.page = pageNumber;
  }

}
