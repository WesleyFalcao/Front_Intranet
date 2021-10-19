import { Injectable } from "@angular/core";
import { DocumentosQuery } from "../queries/documentos.query";
import { ApiService } from "../services/api.service";
import { SubjectService } from "../services/subject.service";
import { RamaisUteisQuery } from "../queries/ramaisuteis.query";

@Injectable({
    providedIn: "root"
})

export class ContatosUteisRepository {

    /** @description Options da Requisição */
    httpOptions: any;

    constructor(
        private subjectService: SubjectService,
        private apiService: ApiService,
        private ramaisuteis: RamaisUteisQuery
    ) 
    {
    }

    async Get_RamaisUteis(objParams) {
        this.subjectService.subject_Exibindo_Loading.next(true)

        const query = this.ramaisuteis.Get_RamaisUteis(objParams)
        const response = await this.apiService.Query([query], objParams, this.httpOptions)

        this.subjectService.subject_Exibindo_Loading.next(false)

        return response.ramais
    }

}
