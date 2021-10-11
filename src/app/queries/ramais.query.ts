import {
    Injectable
} from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class RamaisQuery{

    constructor() { }

    Get_Ramais(page: number, pageLenght: number, searchString: string) {
        return {

            header: [
                // {
                //     // field: '$nr_CPF',
                //     // type: 'String!'
                // }
            ],
            query: `
            ramais: intranet_test_Pessoa(limit: ${pageLenght}, offset: ${(page-1) * pageLenght}, where: {nome: {_like: "%${searchString}%"}}) {
                cd_Ramal: id
                nm_Colaborador: nome
                nr_Ramal: ramal
                ds_Email: email
                cd_Setor: departamento
              }
            `
        }
    }
}