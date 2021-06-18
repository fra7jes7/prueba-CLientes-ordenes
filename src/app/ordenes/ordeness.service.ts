import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Cliente } from '../clientes/cliente';
import { Observable, throwError } from 'rxjs';
import { Articulo } from '../articulos/Articulo';
import { Ordenes } from './Ordenes';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { OrdenesArticulos } from './OrdenesArticulos';

@Injectable({
  providedIn: 'root'
})
export class OrdenessService {
  
  private urlEndPoint: string = "http://localhost:8182/api/clientes";
  private urlEndPoint1: string = "http://localhost:8182/api/articulos";
  private urlEndPoint3: string = "http://localhost:8182/api/ordenes";
  private urlEndPoint4: string = "http://localhost:8182/api/ordenesarticulos";
  private urlEndPoint5: string = "http://localhost:8182/api/ordeness";
  private urlEndPoint6: string = "http://localhost:8182/api/ordenesArticulos";
  private urlEndPoint7: string = "http://localhost:8182/api/articulo/";

  constructor(private http: HttpClient, private router: Router) { }
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  getClientesAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint)
  }

  getArticulosAll(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.urlEndPoint1)    
  }

  getArticulosId(id: Number): Observable<Articulo> {
    return this.http.get<Articulo>(this.urlEndPoint7+id)    
  }

  getOrdenesAll(): Observable<Ordenes[]> {
    return this.http.get<Ordenes[]>(this.urlEndPoint5)
  }

  getOrdenesArtiAll(): Observable<OrdenesArticulos[]> {
    return this.http.get<OrdenesArticulos[]>(this.urlEndPoint6)
  }

  create(orden: Ordenes): Observable<Ordenes> {
    return this.http.post<Ordenes>(this.urlEndPoint3, orden, { headers: this.httpHeaders })
    .pipe(
      catchError(e => {

        if(e.status == 400){
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  createOrdenesArticulos(orden: OrdenesArticulos): Observable<OrdenesArticulos> {
    return this.http.post<OrdenesArticulos>(this.urlEndPoint4, orden, { headers: this.httpHeaders })
    .pipe(
      catchError(e => {

        if(e.status == 400){
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

}
