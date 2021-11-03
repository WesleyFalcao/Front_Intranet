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
                    field: '$page',
                    type: 'Float',
                },
                {
                    field: '$pageLength',
                    type: 'Float',
                },
                {
                    field: '$nm_Search',
                    type: 'String'
                }
            ],
            query: `
                ramais:Ramal(objParam:{page:$page, pageLength:$pageLength,nm_Search:$nm_Search})
  
                {nm_Pessoa, ds_Email, nr_Ramal, nr_Telefone, nm_Departamento},
            `
        }
    }
}

// ${(page-1) * pageLenght