import {
    Injectable
} from "@angular/core";
import { RamaisParams } from "../models/ramais/ramais.params";

@Injectable({
    providedIn: "root"
})

export class RamaisQuery{

    constructor() { }

    Get_Ramais() {
        return {

            header: [
                {
                    field: '$pageLength',
                    type: 'Int!',
                },
                {
                    field: '$page',
                    type: 'Int!',
                },
                {
                    field: '$searchString',
                    type: 'String!'
                }
            ],
            query: `
                ramais: intranet_test_Pessoa(limit: $pageLength, offset: $page, where: {nome: {_like: $searchString}}) {
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

// ${(page-1) * pageLenght