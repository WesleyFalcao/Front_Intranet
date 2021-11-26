import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarModule } from 'src/app/components/search-bar/searchbar.module';


@NgModule({
  declarations: [DocumentosComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule,
    SearchBarModule
    
  ],
  exports: [
    DocumentosComponent 
  ]
})
export class DocumentosModule { }
