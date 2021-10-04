import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell/shell.component';
import { ShellModule } from './components/shell/shell.module';
import { ListaModule } from './components/lista/lista.module';
import { DocumentosComponent } from './page/documentos/documentos.component';
import { DocumentosModule } from './page/documentos/documentos.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListagemComponent } from './page/listagem/listagem.component';
import { ListagemModule } from './page/listagem/listagem.module';
import { GraphQLModule } from './graphql.module';


@NgModule({
  declarations: [
    AppComponent,  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    DocumentosModule,
    CommonModule,
    ListagemModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
