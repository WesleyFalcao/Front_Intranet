import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './page/documentos/documentos.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [

  {
    path: '',
    component: DocumentosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
