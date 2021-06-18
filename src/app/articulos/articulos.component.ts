import { Component, OnInit } from '@angular/core';
import { Articulo } from './Articulo';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html'

})

export class ArticulosComponent implements OnInit {

  articulo: Articulo[];

  constructor( private articuloService:ArticulosService) { }

  ngOnInit(): void {

    this.articuloService.getArticulosAll()
    .subscribe(
      res => {
        console.log('res:',res)
        this.articulo = res;
      }
    );

  }

}
