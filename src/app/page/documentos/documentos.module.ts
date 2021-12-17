import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarModule } from 'src/app/components/search-bar/searchbar.module';
import { ItemsCEQModule } from 'src/app/components/itens-ceq/itens-ceq.module';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ListagemModule } from 'src/app/components/listagem/listagem.module';
import { DocumentosComponent } from './documentos.component';
import { ListagemVirtualModule } from 'src/app/components/listagem-virtual/listagem-virtual.module';

@NgModule({
  declarations: [DocumentosComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule,
    SearchBarModule,
    ItemsCEQModule,
    PaginatorModule,
    PipesModule,
    ListagemModule,
    ListagemVirtualModule
  ],
  exports: [
    DocumentosComponent 
  ]
})
export class DocumentosModule { }
