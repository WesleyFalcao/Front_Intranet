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

                { nm_Documento, nm_Arquivo, dt_Documento, nr_Revisao, cd_Processo, nm_Processo, cd_Filial, nr_Grupo, cd_Setor }  
            `
        }  //cd_Documento,
    }

    Get_GrupoCEQ(){
        return{
            header: [],
            
            query: `
                grupoceq{cd_Grupo_CEQ, cd_Grupo_Pai, nm_Grupo_CEQ}
            `
        }
    }
}