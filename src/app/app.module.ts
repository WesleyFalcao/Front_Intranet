import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RamaisModule } from './page/ramais/ramais.module';
import { GraphQLModule } from './graphql.module';
import { AvisoCriticaModule } from './components/aviso-critica/aviso-critica.module';
import { LoadingModule } from './components/loading/loading.module';
import { ErrorModule } from './page/error/error.module';
import { SnackbarModule } from './components/snackbar/snackbar.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './helpers/interceptor/interceptor.module';
import { ModalBackgroundModule } from './components/modal-service/modal-background/modal-background.module';
import { ModalServiceModule } from './components/modal-service/modal-service.module';
import { SearchBarModule } from './components/search-bar/searchbar.module';
import { ItemsCEQModule } from './components/itens-ceq/itens-ceq.module';
import { PaginatorModule } from './components/paginator/paginator.module';
import { PipesModule } from './pipes/pipes.module';
import { ListagemModule } from './components/listagem/listagem.module';
import { DocumentosModule } from './page/documentos/documentos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AvisoCriticaModule,
    AppRoutingModule,
    ModalBackgroundModule,
    DocumentosModule,
    LoadingModule,
    CommonModule,
    GraphQLModule,
    RamaisModule,
    ErrorModule,
    SnackbarModule,
    ModalServiceModule,
    SearchBarModule,
    ItemsCEQModule,
    PaginatorModule,
    PipesModule,
    ListagemModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
