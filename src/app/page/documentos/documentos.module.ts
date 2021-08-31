import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos.component';
import { ShellModule } from 'src/app/components/shell/shell.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [DocumentosComponent],
  imports: [
    CommonModule,
    ShellModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    DocumentosComponent
  ]
})
export class DocumentosModule { }
