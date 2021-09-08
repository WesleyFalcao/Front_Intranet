import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos.component';
import { ShellModule } from 'src/app/components/shell/shell.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaModule } from 'src/app/components/lista/lista.module';



@NgModule({
  declarations: [DocumentosComponent],
  imports: [
    CommonModule,
    ShellModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ListaModule,
    

  ],
  exports: [
    DocumentosComponent
    
  ]

})
export class DocumentosModule { }
