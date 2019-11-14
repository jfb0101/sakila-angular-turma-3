import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/types/Film';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/types/Language';
import { FilmService } from 'src/app/services/film-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-edit-film',
  templateUrl: './create-edit-film.component.html',
  styleUrls: ['./create-edit-film.component.css']
})
export class CreateEditFilmComponent implements OnInit {

  constructor(private languageService:LanguageService,
      private filmService:FilmService,
      private router: Router) { }

  private film:Film
  private languageList:Language[]

  async ngOnInit() {
    this.film = new Film()

    this.languageList  = await this.languageService.listAll()

  }

  async save() {
    try {
      await this.filmService.saveOrUpdate(this.film)
      this.router.navigate(['/films'])
    } catch (error) {
      console.error(error)
      alert('Failed')
    }
  }

}
