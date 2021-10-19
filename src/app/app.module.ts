import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell/shell.component';
import { ShellModule } from './components/shell/shell.module';
import { DocumentosComponent } from './page/documentos/documentos.component';
import { DocumentosModule } from './page/documentos/documentos.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RamaisComponent } from './page/ramais/ramais.component';
import { RamaisModule } from './page/ramais/ramais.module';
import { GraphQLModule } from './graphql.module';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { FirstLetterNamePipe } from './pipes/first-letter-name.pipe';
import {ScrollingModule} from '@angular/cdk/scrolling';



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
    GraphQLModule,
    ScrollingModule,
    RamaisModule,
    
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
