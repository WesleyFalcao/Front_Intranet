import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarModule } from 'src/app/components/search-bar/searchbar.module';
import { ItemsCEQModule } from 'src/app/components/itens-ceq/itens-ceq.module';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';


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
    PaginatorModule
  ],
  exports: [
    DocumentosComponent 
  ]
})
export class DocumentosModule { }
