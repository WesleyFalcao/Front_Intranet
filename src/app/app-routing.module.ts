import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './page/documentos/documentos.component';
import { ErrorComponent } from './page/error/error.component';
import { RamaisComponent } from './page/ramais/ramais.component';


const routes: Routes = [

  {
    path: 'documentos',
    component: DocumentosComponent
  },
  {
    path: "error",
    component: ErrorComponent,
    data: { animation: "ErrorPage" },
},
  {
    path: 'ramais',
    component: RamaisComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
