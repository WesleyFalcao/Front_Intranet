import { Injectable, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { RamaisRepository } from "src/app/repositories/ramais.repository";
import { RamaisParams } from "src/app/models/ramais/ramais.params";

@Injectable({
    providedIn: "root"
})
export class RamaisService { 
    
    constructor(
        private ramaisRepository : RamaisRepository,
 
    ) {
    }
    
    Get_Ramais(objParams: RamaisParams) {
        return this.ramaisRepository.Get_Ramais(objParams)
    }
}
