import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListaModule } from 'src/app/components/lista/lista.module';

@NgModule({
  declarations: [HomeComponent],

  imports: [
    CommonModule,
    ListaModule
  ],
  exports: [
    HomeComponent

  ]
})
export class HomeModule { }
