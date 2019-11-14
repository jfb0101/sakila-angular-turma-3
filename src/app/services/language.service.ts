import { Injectable } from '@angular/core';
import { Language } from '../types/Language';
import { Http } from '@angular/http';
import API_URL from '../apiUrl';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http:Http) { }

  async listAll():Promise<Language[]> {
    const response = 
      await this.http.get(`${API_URL}/Languages`).toPromise()
    
    return response.json()
  }
}
