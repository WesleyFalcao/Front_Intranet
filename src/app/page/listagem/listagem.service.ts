import { Injectable } from "@angular/core";
import { RamaisRepository } from "src/app/repositories/ramais.repository";
import { DataService } from "src/app/services/data.service";


@Injectable({
    providedIn: "root"
})
export class RamaisService {

    constructor(
        private ramaisRepository : RamaisRepository
    ) {
    }

    Get_Ramais() {
        return this.ramaisRepository.Get_Ramais()
    }
}
