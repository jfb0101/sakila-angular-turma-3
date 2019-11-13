import { Injectable } from '@angular/core'
import API_URL from '../../app/apiUrl'
import { Http } from "@angular/http"
import { Film } from '../types/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {


  constructor(private http:Http) { 
  }

  async listAll():Promise<Film[]> {
    const response = 
      await this.http.get(`${API_URL}/Films`).toPromise()

    return response.json()
  }

  async saveOrUpdate() {

  }
}
