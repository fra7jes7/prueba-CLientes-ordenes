import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a angular';

  curso: String ='Curso con angular 7 y spring 5';
  profesor: String = 'Franklin Lema';
}
