import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';

import { FormsModule } from '@angular/forms';


import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ForArticulosComponent } from './articulos/for-articulos.component';
import { OrdenescComponent } from './ordenes/ordenesc/ordenesc.component';
import { ForordenesComponent } from './ordenes/forordenes/forordenes.component';
import { OrdartiComponent } from './ordenes/ordarti/ordarti.component';




registerLocaleData(localeES,'es');


const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'articulos', component: ArticulosComponent},
  {path: 'clientes/form', component: FormComponent },
  {path: 'articulos/for-articulos', component: ForArticulosComponent },
  {path: 'ordenes/forordenes/forordenes', component: ForordenesComponent },
  {path: 'ordenes/ordenesc/ordenesc/:id', component: OrdenescComponent },
  {path: 'ordenes/ordarti/ordarti/:idOr/:idCli', component: OrdartiComponent },
  {path: 'clientes/form/:id', component: FormComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    ArticulosComponent,
    ForArticulosComponent,
    OrdenescComponent,
    ForordenesComponent,
    OrdartiComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService,{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
