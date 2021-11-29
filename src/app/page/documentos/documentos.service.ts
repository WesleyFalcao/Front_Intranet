import { Injectable } from "@angular/core";
import { DocumentosParams } from "src/app/models/documento/documento.params";
import { DocumentosRepository } from "src/app/repositories/documentos.repository";
import { DataService } from "src/app/services/data.service";

@Injectable({
    providedIn: "root"
})
export class DocumentosService {

    constructor(
        private documentosRepository : DocumentosRepository
        
    ) {    
    }

    Get_Documentos(objParams: DocumentosParams) {
        return this.documentosRepository.Get_Documentos(objParams)
    }

    Get_GrupoCEQ()
    {
       return this.documentosRepository.Get_GrupoCEQ()
    }
}
