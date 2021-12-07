import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class DocumentosQuery {

    constructor() { }

    Get_Documentos() {
        return {

            header: [
                {
                    field: '$objParam',
                    type: 'DocumentosParams'
                }
            ],
            query: `
                documentos_qualidade(objParam:$objParam)
                {  
                    data{ nm_Documento, cd_Qualidade, cd_Documento, nm_Arquivo, dt_Documento, nr_Revisao, cd_Processo, nm_Processo, cd_Filial, nr_Grupo, cd_Setor,}
                    nr_Registros  
                }
            `
        }
    }

    Get_GrupoCEQ() {
        return {
            header: [],

            query: `
                grupoceq{cd_Grupo_CEQ, cd_Grupo_Pai, nm_Grupo_CEQ}
            `
        }
    }

    Get_Arquivo() {
        return {
            header: [
                {
                    field: '$cd_Documento',
                    type: 'Float!'
                }
            ],

            query: `
                token_arquivo(cd_Documento:$cd_Documento)

                {ds_Token}
            `
        }
    }
}