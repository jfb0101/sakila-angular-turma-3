import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import API_URL from '../apiUrl';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:Http) { }

  async listByCountry(countryId:number) {
    const filter = {
      where: {
        countryId: countryId
      }
    }

    const url = 
      `${API_URL}/Cities?filter=${JSON.stringify(filter)}`
    
    const encodedUrl = encodeURI(url)

    const response = 
      await this.http.get(encodedUrl).toPromise()

    return response.json()
  }

  
}
