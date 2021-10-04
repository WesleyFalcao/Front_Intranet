import { Injectable } from "@angular/core";
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

    Get_Documentos( ) {
        return this.documentosRepository.Get_Documentos()
    }
}
