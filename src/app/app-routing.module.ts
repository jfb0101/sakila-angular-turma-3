import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';

const routes: Routes = [
  {path: '', component: FilmsListComponent},
  {path: 'films',component: FilmsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
