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

  async saveOrUpdate(film:Film) {
    if (film.filmId != null) {
      await this.http.patch(`${API_URL}/Films/${film.filmId}`,
        film).toPromise()
    } else {
      await this.http.post(`${API_URL}/Films`,
        film).toPromise()
    }
  }
}
