import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Country } from 'src/app/types/Country';
import { City } from 'src/app/types/City';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css']
})
export class CitySelectorComponent implements OnInit {

  constructor(private countryService:CountryService,
    private cityService:CityService) { }

  countryList:Country[] = []
  cityList:City[] = []

  countryIdSelected: number
  cityIdSelected:number

  @Output('onCitySelected')
  citySelectedEmitter: EventEmitter<number> = 
    new EventEmitter<number>()

  async ngOnInit() {
    this.countryList = await this.countryService.listAll()
  }

  async updateCityList() {
    this.cityList = await this.cityService.listByCountry(
      this.countryIdSelected
    )
  }

  onCitySelected() {
    this.citySelectedEmitter.emit(this.cityIdSelected)  
  }

}
