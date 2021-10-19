import { Injectable } from "@angular/core";
import { DocumentosQuery } from "../queries/documentos.query";
import { ApiService } from "../services/api.service";
import { SubjectService } from "../services/subject.service";

@Injectable({
    providedIn: "root"
})

export class DocumentosRepository {

    /** @description Options da Requisição */
    httpOptions: any;

    constructor(
        private subjectService: SubjectService,
        private apiService: ApiService,
        private documentosQuery: DocumentosQuery
    ) {
    }

    async Get_Documentos() {
        
        this.subjectService.subject_Exibindo_Loading.next(true)

        const query = this.documentosQuery.Get_Documentos()
        
        const response = await this.apiService.Query([query], null, this.httpOptions)

        this.subjectService.subject_Exibindo_Loading.next(false)

        return response.documentos
    }

    
}
