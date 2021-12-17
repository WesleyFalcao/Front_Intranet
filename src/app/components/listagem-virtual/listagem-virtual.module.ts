import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemVirtualComponent } from './listagem-virtual.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    ListagemVirtualComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ScrollingModule
  ],
  exports: [
    ListagemVirtualComponent
  ]
})
export class ListagemVirtualModule { }
