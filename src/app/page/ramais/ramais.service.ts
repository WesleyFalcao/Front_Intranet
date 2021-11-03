import { Injectable, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { RamaisRepository } from "src/app/repositories/ramais.repository";
import { ContatosUteisRepository } from "src/app/repositories/ramaisuteis.repository";
import { RamaisParams } from "src/app/models/ramais/ramais.params";

@Injectable({
    providedIn: "root"
})
export class RamaisService { 
    
    constructor(
        private ramaisRepository : RamaisRepository,
        private ramaisuteisRepository : ContatosUteisRepository
    ) {
    }
    
    Get_Ramais(objParams: RamaisParams) {
        return this.ramaisRepository.Get_Ramais({page:objParams.page, pageLength:(objParams.pageLength-1) * objParams.page, nm_Search: objParams.nm_Search})
    }

    Get_RamaisUteis(objParams: RamaisParams){
        return this.ramaisuteisRepository.Get_RamaisUteis(objParams)
    }

}
