import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem.component';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';

@NgModule({
  declarations: [ListagemComponent, ScrollDirective,],

  imports: [
    CommonModule

  ],
  exports: [
    ListagemComponent
  ]
})
export class ListagemModule { }
