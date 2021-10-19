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
                    field: '$limit',
                    type: 'Int!',
                },
                {
                    field: '$offset',
                    type: 'Int!',
                },
                {
                    field: '$like',
                    type: 'String!'
                }
            ],
            query: `
                ramais: intranet_test_Pessoa(limit: $limit, offset: $offset, where: {nome: {_like: $like}}) {
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