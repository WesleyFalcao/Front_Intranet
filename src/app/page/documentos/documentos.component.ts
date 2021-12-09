import { transition } from '@angular/animations';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, Input, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getDescription } from 'graphql';
import { debounce, debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { DocumentosParams } from 'src/app/models/documento/documento.params';
import { PaginatedFormParams } from 'src/app/models/genericos/paginated.model';
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
    objArrayTitulos = [

        { nm_Titulo: "Nome", nm_Classe: "w-4/12 text-center pl-24" },
        { nm_Titulo: "Código", nm_Classe: "w-2/12 text-center" },
        { nm_Titulo: "Processos", nm_Classe: "w-3/12 text-center pl-16" },
        { nm_Titulo: "Revisão", nm_Classe: "w-1/12 text-center pr-24" },
        { nm_Titulo: "Data", nm_Classe: "w-2/12 text-center pr-14" },
    ]

    nm_search: string
    b_Mostrar_Modal: boolean = false
    nr_Page_Length: number = 50
    nm_Search: string = ""
    nr_Page: number = 1
    nr_Registros: number = 0
    modelChanged = new FormControl()

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
        const objParams: DocumentosParams = { nr_Page: this.nr_Page, nr_Page_Length: this.nr_Page_Length, nm_Search: this.nm_Search }
        const objRetorno = await this.documentosService.Get_Documentos(objParams)
        this.objArrayDocumentos = objRetorno.data
        this.nr_Registros = objRetorno.nr_Registros
    }

    async Buscar_Arquivo(cd_Documento: number) {
        let token = await this.documentosService.Get_Token_Arquivo(cd_Documento)
        console.log(token)
        window.open(environment.CONS_URL_APIBASE + "Documentos?token=" + token.ds_Token, '_blank')
    }

    async Buscar_GrupoCEQ() {
        this.objArrayGrupoCEQ = await this.documentosService.Get_GrupoCEQ()

        for (let pai of this.objArrayGrupoCEQ) {
            pai.subgrupos = []

            for (let filho of this.objArrayGrupoCEQ) {
                filho.subgrupos = []

                for (let neto of this.objArrayGrupoCEQ) {
                    if (filho.cd_Grupo_CEQ == neto.cd_Grupo_Pai) {
                        filho.subgrupos.push(neto)
                        pai.subgrupos = pai.subgrupos.filter(f => f.cd_Grupo_Pai != neto.cd_Grupo_CEQ)
                    }
                }

                if (pai.cd_Grupo_CEQ == filho.cd_Grupo_Pai) {
                    pai.subgrupos.push(filho)
                }
            }
        }
        this.objArrayGrupoCEQ = this.objArrayGrupoCEQ.filter(f => f.cd_Grupo_Pai == 0)

    }

    Mostrar_Modal() {

        this.b_Mostrar_Modal = true

        this.objArrayGrupoCEQ.forEach(a => {

            a._open = false

            for (let filho of a.subgrupos) {
                filho._open = false
            }

            for (let neto of a.filho.subgrupos) {
                neto._open = false
            }

            console.log(a)
        });
    }
}
