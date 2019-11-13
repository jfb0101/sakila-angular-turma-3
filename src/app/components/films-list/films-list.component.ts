import { Component, OnInit } from '@angular/core';
import { Film } from '../../types/Film';
import { FilmService } from 'src/app/services/film-service.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  constructor(private filmService:FilmService) { }

  private filmsList:Film[] = []

  async ngOnInit() {
    this.filmsList = await this.filmService.listAll()
  }

}
