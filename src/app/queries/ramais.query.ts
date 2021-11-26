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
                    field: '$objParam',
                    type: 'RamalParams',
                },
               
            ],
            query: `
                ramais:ramais(objParam:$objParam)
  
                {nm_Pessoa, ds_Email, nr_Ramal, nr_Telefone, nm_Departamento},
            `
        }
    }
}

// ${(page-1) * pageLenght