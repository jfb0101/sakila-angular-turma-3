import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { CreateEditFilmComponent } from './components/create-edit-film/create-edit-film.component';
import { CreateEditCustomerComponent } from './components/create-edit-customer/create-edit-customer.component';

const routes: Routes = [
  {path: '', component: FilmsListComponent},
  {path: 'films',component: FilmsListComponent},
  {path: 'create-edit-film', 
    component: CreateEditFilmComponent},
  {path:'create-edit-film/:filmIdToEdit',
    component: CreateEditFilmComponent},
    {path: 'create-edit-customer',
    component: CreateEditCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
