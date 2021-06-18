import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ordenes } from '../Ordenes';
import { OrdenessService } from '../ordeness.service';

@Component({
  selector: 'app-ordenesc',
  templateUrl: './ordenesc.component.html'
})
export class OrdenescComponent implements OnInit {

  public idCliente: string;

  ordenes: Ordenes[]=[]; 
  ordenes1: Ordenes[]=[];


  

  constructor(private activatedRoute: ActivatedRoute,
              private ordenesService: OrdenessService) { }

  ngOnInit(): void {

    this.cargarOrden()

  }

  cargarOrden(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.idCliente =id;
      this.ordenesService.getOrdenesAll()
      .subscribe(orde => {
        this.ordenes = orde;
        console.log('consul::', orde);
        console.log('todos:',this.ordenes);
        
        this.ordenes.forEach(element => {
          // console.log('foir:',element);
          if(element.idCliente == id){
            console.log('foir:',element);
             this.ordenes1.push(element);
          }
        });
        
      });
      
     
      console.log('id cliente:',id);
      console.log('todos1:',this.ordenes);  
      
    });    

    
  }

}
