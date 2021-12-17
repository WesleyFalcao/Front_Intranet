import { transition } from '@angular/animations';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, Input, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getDescription } from 'graphql';
import { debounce, debounceTime, distinctUntilChanged, startWith, throttleTime } from 'rxjs/operators';
import { DocumentosParams } from 'src/app/models/documento/documento.params';
import { PaginatedFormParams } from 'src/app/models/genericos/paginated.model';
import { CamposListagem } from 'src/app/models/listagem/campos-listagem.model';
import { RamaisParams } from 'src/app/models/ramais/ramais.params';
import { DocumentosRepository } from 'src/app/repositories/documentos.repository';
import { environment } from 'src/environments/environment';
import { DocumentosService } from './documentos.service';

@Component({
    selector: 'app-documentos',
    templateUrl: './documentos.component.html',
    styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

    objArrayDocumentos = []
    objArrayGrupoCEQ = []
    objArrayRetorno = []
    objArrayCampos: CamposListagem[] = [

        { nm_Exibicao: "Nome", nm_Classe: "w-4/12 text-center pl-24", nm_Atibruto: "nm_Documento"        },
        { nm_Exibicao: "Código", nm_Classe: "w-2/12 text-center", nm_Atibruto: "cd_Documento"            },
        { nm_Exibicao: "Processos", nm_Classe: "w-3/12 text-center pl-16", nm_Atibruto: "nm_Processo"    },
        { nm_Exibicao: "Revisão", nm_Classe: "w-1/12 text-center pr-24", nm_Atibruto: "nr_Revisao"       },
        { nm_Exibicao: "Data", nm_Classe: "w-2/12 text-center pr-14", nm_Atibruto: "dt_Documento"        },
    ]

    b_Open_Doc: boolean = true
    nm_search: string
    b_Mostrar_Modal: boolean = false
    nr_Page_Length: number = 50
    nm_Search: string = ""
    nr_Page: number = 1
    nr_Registros: number = 0
    modelChanged = new FormControl()
    cd_Setor_CEQ: number = 0
    b_Nao_Exibir: boolean = false

    constructor(
        private documentosService: DocumentosService
    ) { }

    async ngOnInit() {

        this.Buscar_GrupoCEQ()
        this.Buscar_Documentos()
        this.modelChanged.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(async (input) => {
            this.nr_Page = 1
            this.nm_Search = input
            if (this.nm_Search != null && this.nm_Search.length > 1) {

                this.objArrayDocumentos = []
            }
            this.Buscar_Documentos()
        })
    }

    /** @description Avança uma pagina */
    Mudar_Pagina(nr_Page: number) {
        this.nr_Page = nr_Page
        this.Buscar_Documentos()
    }

    async Buscar_Documentos() {
        const objParams: DocumentosParams = {nr_Page: this.nr_Page, nr_Page_Length: this.nr_Page_Length, nm_Search: this.nm_Search, cd_Setor_CEQ: this.cd_Setor_CEQ}
        const objRetorno = await this.documentosService.Get_Documentos(objParams)
        this.objArrayDocumentos = objRetorno.data
        this.nr_Registros = objRetorno.nr_Registros
    }

    async Filter_Menu(objNeto: any){
        this.cd_Setor_CEQ = objNeto.cd_Setor_CEQ
        this.Buscar_Documentos()
    }

    async Buscar_Arquivo(cd_Documento: number) {
        let token = await this.documentosService.Get_Token_Arquivo(cd_Documento)
        console.log(token)
        window.open(environment.CONS_URL_APIBASE + "Documentos?token=" + token.ds_Token, '_blank')
    }

    async Buscar_GrupoCEQ() {

        const [objArrayGrupoCEQ, objArrayMenuCEQ] = await this.documentosService.Get_GrupoCEQ()

        let objArrayAux = objArrayGrupoCEQ.filter(pai => pai.cd_Grupo_Pai == 0)

        objArrayAux.forEach(pai => {

            pai.subgrupos = objArrayGrupoCEQ.filter(filho => filho.cd_Grupo_Pai == pai.cd_Grupo_CEQ)
            pai.subgrupos.forEach(neto => {

                neto.subgrupos = objArrayGrupoCEQ.filter(filho => filho.cd_Grupo_Pai == neto.cd_Grupo_CEQ)
                objArrayMenuCEQ.forEach(nomeNeto => nomeNeto.nm_Grupo_CEQ = nomeNeto.nm_Setor_CEQ)
                neto.subgrupos.push(...objArrayMenuCEQ.filter(menu => menu.cd_Grupo_CEQ == neto.cd_Grupo_CEQ))
            });
        })
        this.objArrayGrupoCEQ = objArrayAux
    }

    Mostrar_Modal() {
        this.b_Mostrar_Modal = true
    }

    Exibir_Listagem() {
        if(window.innerWidth > 1024){
            this.b_Nao_Exibir = true
        }
    }
}
