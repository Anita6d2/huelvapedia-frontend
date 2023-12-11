import { Component } from '@angular/core';
import { LetraIncial } from '../../../palabras/interfaces/letra-inicial.type';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',

})
export class HomePageComponent {
  //public palabras: Palabras[] = [];
  public letras: LetraIncial[] = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public selectedLetra?: LetraIncial ;
  //public initialValue: Region = '';

  /*
  constructor (private countriesService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStorage.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStorage.byRegion.region;
    //this.selectedRegion = this.initialValue;
  }

  searchByRegion(region: Region):void{

    this.selectedRegion = region;

    this.countriesService.searchRegion(region)
    .subscribe(countries => {
      this.countries = countries;
    });
  }*/

}
