import { transition } from '@angular/animations';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { DocumentosParams } from 'src/app/models/documento/documento.params';
import { PaginatedFormParams } from 'src/app/models/genericos/paginated.model';
import { RamaisParams } from 'src/app/models/ramais/ramais.params';
import { DocumentosRepository } from 'src/app/repositories/documentos.repository';
import { DocumentosService } from './documentos.service';

@Component({
    selector: 'app-documentos',
    templateUrl: './documentos.component.html',
    styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

    nm_search: string

    objArrayDocumentos = []
    objArrayGrupoCEQ = []

    ArrayTitulos = [

        { nm_Titulo: "", nm_Classe: "w-1/12" },
        { nm_Titulo: "Nome", nm_Classe: "w-4/12 " },
        { nm_Titulo: "Processos", nm_Classe: "w-2/12" },
        { nm_Titulo: "Data", nm_Classe: "w-1/12" },
        { nm_Titulo: "Código", nm_Classe: "w-2/12" },

    ]

    b_Mostrar_Modal: boolean = false
    nr_Page: number = 1
    nr_Page_Length: number = 100
    nm_Search: string = ""

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
    
    async Buscar_Documentos() {
        const objParams: PaginatedFormParams = { nr_Page: this.nr_Page, nr_Page_Length: this.nr_Page_Length, nm_Search: this.nm_Search }
        this.objArrayDocumentos = await this.documentosService.Get_Documentos(objParams)
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
        console.log(this.objArrayGrupoCEQ)
    }

    Mostrar_Modal() {
        this.b_Mostrar_Modal = true
    }
}
