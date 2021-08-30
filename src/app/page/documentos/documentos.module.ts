import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos.component';
import { ShellModule } from 'src/app/components/shell/shell.module';



@NgModule({
  declarations: [DocumentosComponent],
  imports: [
    CommonModule,
    ShellModule

  ],
  exports: [
    DocumentosComponent
  ]
})
export class DocumentosModule { }
