import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/types/Film';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/types/Language';

@Component({
  selector: 'app-create-edit-film',
  templateUrl: './create-edit-film.component.html',
  styleUrls: ['./create-edit-film.component.css']
})
export class CreateEditFilmComponent implements OnInit {

  constructor(private languageService:LanguageService) { }

  private film:Film
  private languageList:Language[]

  async ngOnInit() {
    this.film = new Film()

    this.languageList  = await this.languageService.listAll()

  }

  save() {
    console.log(this.film)
  }

}
