import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PaginatorModule } from '../paginator/paginator.module';

@NgModule({
  declarations: [
    ListagemComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    PaginatorModule,
  ],
  exports: [
    ListagemComponent
  ]
})
export class ListagemModule{ }
