import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';


import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent  implements OnInit {

  public country? : Country;


  constructor(
     private activatedRoute: ActivatedRoute,
     private router : Router,
     private countryService: CountriesService,
    ){}

  ngOnInit(): void {

   this.activatedRoute.params
   .pipe(
      switchMap( ({ id }) => this.countryService.searchCountryByAlphaCode( id ))
   )
   .subscribe( country => {
      if (!country) return this.router.navigateByUrl('')
       return this.country = country

   })


    // this.activatedRoute.params
    // .subscribe (({ id }) => {
    //   this.countryService.searchCountryByAlphaCode( id)
    //   .subscribe( country => {
    //     console.log({ country })
    //   });
    // });


  }

}
