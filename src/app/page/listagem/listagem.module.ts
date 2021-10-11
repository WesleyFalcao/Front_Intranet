import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem.component';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListagemComponent, ScrollDirective,],

  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ListagemComponent
  ]
})
export class ListagemModule { }
