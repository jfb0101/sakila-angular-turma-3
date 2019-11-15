import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/types/Film';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/types/Language';
import { FilmService } from 'src/app/services/film-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-edit-film',
  templateUrl: './create-edit-film.component.html',
  styleUrls: ['./create-edit-film.component.css']
})
export class CreateEditFilmComponent implements OnInit {

  constructor(
    private languageService:LanguageService,
      private filmService:FilmService,
      private router: Router,
      private activatedRoute: ActivatedRoute) { }

  private film:Film = new Film
  private languageList:Language[]

  @Input()
  private filmIdToEdit:number

  async ngOnInit() {
    this.languageList  = await this.languageService.listAll()

    this.activatedRoute.params.subscribe(async params => {
      
      this.filmIdToEdit = params['filmIdToEdit']

      if (this.filmIdToEdit != null) {
        this.film = await this.filmService.get(
          this.filmIdToEdit)
      } else {
        this.film = new Film()
      }
    })
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
