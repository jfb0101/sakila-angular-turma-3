import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { HttpModule } from '@angular/http';
import { CreateEditFilmComponent } from './components/create-edit-film/create-edit-film.component';
import { FormsModule } from "@angular/forms";
import { CitySelectorComponent } from './components/city-selector/city-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    CreateEditFilmComponent,
    CitySelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
