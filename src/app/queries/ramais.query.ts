import {
    Injectable
} from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class RamaisQuery{

    constructor() { }

    Get_Ramais() {
        return {

            header: [
                // {
                //     // field: '$nr_CPF',
                //     // type: 'String!'
                // }
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