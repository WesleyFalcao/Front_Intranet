import { Injectable } from "@angular/core";
import { DocumentosQuery } from "../queries/documentos.query";
import { RamaisQuery } from "../queries/ramais.query";
import { ApiService } from "../services/api.service";
import { SubjectService } from "../services/subject.service";

@Injectable({
    providedIn: "root"
})

export class RamaisRepository {

    /** @description Options da Requisição */
    httpOptions: any;

    constructor(
        private subjectService: SubjectService,
        private apiService: ApiService,
        private ramaisQuery: RamaisQuery
    ) 
    {
    }

    async Get_Ramais( page, pageLenght, searchString = null) {
        this.subjectService.subject_Exibindo_Loading.next(true)

        const query = this.ramaisQuery.Get_Ramais(page, pageLenght, searchString)
        const response = await this.apiService.Query([query], null, this.httpOptions)

        this.subjectService.subject_Exibindo_Loading.next(false)

        return response.ramais
    }

}
