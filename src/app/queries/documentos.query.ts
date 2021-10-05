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

    Get_Listagem(){
        return{
            header: [

            ],
            query: `
            ramais: intranet_test_Pessoa {
                cd_Ramal: id
                nm_Colaborador: nome
                nr_Ramal:ramal
                ds_Email:email
                cd_Setor:departamento
              }
            `
        }
    }
    


}