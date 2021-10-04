import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './page/documentos/documentos.component';
import { ListagemComponent } from './page/listagem/listagem.component';


const routes: Routes = [

  {
    path: '',
    component: DocumentosComponent
  },
  
  {
    path: 'ramais',
    component: ListagemComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
