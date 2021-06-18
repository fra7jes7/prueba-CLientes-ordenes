import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    let page = 0;
    // this.clienteService.getClientes(page)
    this.clienteService.getClientesAll()
    .subscribe(response => {
    console.log('response:',response)
        this.clientes = response;
        //this.paginador = response;
      });
  }

  

  

  delete(cliente: Cliente): void {
    swal.fire({
      title: '¿Esta seguro?',
      text: `¿Seguro que desea eliminar ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si eliminar!',
      cancelButtonText: 'No, Cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            swal.fire(
              'Cliente eliminado!',
              `Cliente ${cliente.nombre} eliminado con éxito`,
              'success'
            )
          }
        )

      }
    });
  }

}
