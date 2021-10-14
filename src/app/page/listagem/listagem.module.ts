import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem.component';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [ListagemComponent, ScrollDirective,],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    ListagemComponent

  ]
})
export class ListagemModule { }
