import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sakila-angular EDITADO';

  citySelected(cityId:number) {
    console.log(`cidade selecionada: ${cityId}`)
  }
}
