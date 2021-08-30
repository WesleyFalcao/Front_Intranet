import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    ListaComponent
  ]
})
export class ListaModule { }
