import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClienteService } from '../../clientes/cliente.service';
import { Articulo } from '../../articulos/Articulo';
import { OrdenessService } from '../ordeness.service';
import { Ordenes } from '../Ordenes';
import { OrdenesArticulos } from '../OrdenesArticulos';
import swal from 'sweetalert2';

@Component({
  selector: 'app-forordenes',
  templateUrl: './forordenes.component.html'
})
export class ForordenesComponent implements OnInit {
  
  public clientes: Cliente[];
  public clienteSelect: Cliente = new Cliente;

  public articulo: Articulo[];

  public articulo1: Articulo[] = [];

  public articulosSelect: string[]=[];

  public fecha: Date;
  
  public ordenes: Ordenes = new Ordenes;
  public ordenesIng: Ordenes = new Ordenes;

  public ordenArt: OrdenesArticulos = new OrdenesArticulos;

  

  public stock: number=0;
 

  constructor( private clienteService: ClienteService,
                private ordenesService: OrdenessService) { }

  ngOnInit(): void {

    this.clienteService.getClientesAll()
    .subscribe(response => {
        this.clientes = response;
        console.log('lista:',this.clientes)
      });

      this.ordenesService.getArticulosAll()
    .subscribe(
      res => {
        console.log('articulo:',res)
        this.articulo = res;
      }
    );
  }

  crearOrden() : void{
    // console.log('clienteSeleccionado',this.clienteSelect.id)
    console.log('articulos',this.articulosSelect)
    console.log('fecha',this.fecha)

    //consultar stock

    
    

    this.ordenesService.getArticulosAll()
    .subscribe(json => 
      {this.articulo1=json;
        this.articulo1.forEach(elementbase => {

          this.articulosSelect.forEach(elementSe => {
            // if(){
              console.log('id--arti',elementSe);
            // }
      
          });
          
        });
        
        });


        this.ordenes.fecha = this.fecha;
        this.ordenes.idCliente = this.clienteSelect.id;
    
        this.ordenesService.create(this.ordenes)
        .subscribe(json => 
          {this.ordenesIng=json;
            console.log('Retor>',this.ordenesIng.id);
            
            this.articulosSelect.forEach(element => {
            
            this.ordenArt.idArticulo=Number(element);
            this.ordenArt.idOrdenes = this.ordenesIng.id;
            this.ordenArt.cantidad = this.stock;

            this.ordenesService.createOrdenesArticulos(this.ordenArt)
            .subscribe(json => {

              console.log(json);
              swal.fire( `${json.mensaje}`);
            }
           
              );
            })
          });



    
  }

}
