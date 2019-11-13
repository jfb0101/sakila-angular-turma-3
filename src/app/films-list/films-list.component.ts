import { Component, OnInit } from '@angular/core';
import { Film } from '../types/Film';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  constructor() { }

  private filmsList:Film[] = []

  ngOnInit() {

    this.filmsList.push({
      filmId: 1, title: 'Harry Potter', releaseYear: 2017
    })

    this.filmsList.push({
      filmId: 2, title: 'Logan', releaseYear: 2018
    })

  }

}
