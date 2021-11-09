import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AvisoCriticaModule } from './components/aviso-critica/aviso-critica.module';
import { LoadingModule } from './loading/loading.module';
import { ErrorModule } from './page/error/error.module';
import { SnackbarModule } from './components/snackbar/snackbar.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './helpers/interceptor/interceptor.module';



@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AvisoCriticaModule,
    AppRoutingModule,
    DocumentosModule,
    LoadingModule,
    CommonModule,
    GraphQLModule,
    ScrollingModule,
    RamaisModule,
    ErrorModule,
    SnackbarModule,


  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorService,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
