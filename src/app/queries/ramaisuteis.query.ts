import { Injectable} from "@angular/core";
import { RamaisParams } from "../models/ramais/ramais.params";

@Injectable({
    providedIn: "root"
})

export class RamaisUteisQuery{

    constructor() { }

    Get_RamaisUteis(objParams: RamaisParams) {
        return {

            header: [
                // {
                //     // field: '$nr_CPF',
                //     // type: 'String!'
                // }
            ],
            query: `
            
            `
        }

    }



}