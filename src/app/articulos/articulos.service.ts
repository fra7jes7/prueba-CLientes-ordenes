import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Articulo } from './Articulo';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private urlEndPoint: string = "http://localhost:8182/api/articulos";

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private router: Router) { }

  getArticulosAll(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.urlEndPoint)
  }

  create(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(this.urlEndPoint, articulo, { headers: this.httpHeaders })
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
