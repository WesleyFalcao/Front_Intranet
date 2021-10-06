import {
    Injectable
} from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class DocumentosQuery{

    constructor() { }

    Get_Documentos() {
        return {

            header: [
                // {
                //     // field: '$nr_CPF',
                //     // type: 'String!'
                // }
            ],
            query: `
            documentos: intranet_test_DocumentosCEQ {
                cd_Documento: id
                nr_Documento: codigo
                nm_Documento: nome
                cd_Processo: processo
              }
            `
        }

    }



}