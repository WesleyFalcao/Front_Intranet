import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './page/documentos/documentos.component';
import { RamaisComponent } from './page/ramais/ramais.component';


const routes: Routes = [

  {
    path: '',
    component: DocumentosComponent
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
