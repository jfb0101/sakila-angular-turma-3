import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { CreateEditFilmComponent } from './components/create-edit-film/create-edit-film.component';

const routes: Routes = [
  {path: '', component: FilmsListComponent},
  {path: 'films',component: FilmsListComponent},
  {path: 'create-edit-film', 
    component: CreateEditFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
