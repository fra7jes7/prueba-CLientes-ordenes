import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Articulo } from './Articulo';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-for-articulos',
  templateUrl: './for-articulos.component.html'
})
export class ForArticulosComponent implements OnInit {

  public titulo: string = "Crear Articulo"
  public articulo: Articulo = new Articulo();
  public articuloN: Articulo = new Articulo();

  public errores: string[];

  constructor(
    private articuloService: ArticulosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public create(): void {
    // console.log("Clicked!")
    // console.log(this.articulo)

    this.articuloService.create(this.articulo)
      .subscribe(json => {
        this.articuloN = json;
        this.router.navigate(['/articulos'])
        console.log('ingresooo>',this.articuloN.nombre);
        Swal.fire('Nuevo articulo', `${this.articuloN.nombre}`, 'success')
      },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Codigo del error desde el backend ' + err.status);
          console.error(err.error.errors);
        }
      );
  }


}
