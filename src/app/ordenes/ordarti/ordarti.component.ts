import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../articulos/Articulo';
import { ActivatedRoute } from '@angular/router';
import { OrdenessService } from '../ordeness.service';
import { OrdenesArticulos } from '../OrdenesArticulos';

@Component({
  selector: 'app-ordarti',
  templateUrl: './ordarti.component.html'
})
export class OrdartiComponent implements OnInit {

  articulo: Articulo[] =[];
  ordenesArticulos:OrdenesArticulos[] =[];
  ordenesArticulosVal:OrdenesArticulos[] =[];

  //public const numOrden:number;


  constructor(private activatedRoute: ActivatedRoute,
    private ordenesService: OrdenessService) { }

  ngOnInit(): void {
    this.cargarOrden()
  }

  cargarOrden(): void {
    this.activatedRoute.params.subscribe(params => {
      let idOrd = params['idOr'];
      let idCli = params['idCli'];
      console.log('idOrd:',idOrd);  //orden
      console.log('idCli:',idCli);  //orden
     
      this.ordenesService.getOrdenesArtiAll()
      .subscribe(json => {
        console.log('json:',json);
        this.ordenesArticulos = json;
        console.log('ordenesArticulos1::', this.ordenesArticulos);
                    
            this.ordenesArticulos.forEach(element => {
              // console.log('foir:',element);
              if(element.idArticulo == idOrd ){
                console.log('foir:',element);
                this.ordenesArticulosVal.push(element);
              
              }
            });
            //consultar por id
            
            console.log('ordenesArticulosVal:',this.ordenesArticulosVal);

            this.ordenesArticulosVal.forEach(element => {

              this.ordenesService.getArticulosId(element.idOrdenes)
              .subscribe(json => {
                console.log('json:',json);
                this.articulo.push(json);
                // console.log('ordenesArticulos1::', this.ordenesArticulos);
                        
              
              
            });

         });
      
    });    

    
  });
  }
}
