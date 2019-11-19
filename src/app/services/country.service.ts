import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import API_URL from "../apiUrl";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:Http) { }

  async listAll() {
    const response = 
    await this.http.get(`${API_URL}/Countries`).toPromise()
    
    return response.json()
  }
}
