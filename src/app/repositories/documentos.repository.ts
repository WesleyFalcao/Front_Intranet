import { Injectable } from "@angular/core";
import { DocumentosParams } from "../models/documento/documento.params";
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
    
    async Get_Documentos(objParam: DocumentosParams) {
        
        this.subjectService.subject_Exibindo_Loading.next(true)
        const query = this.documentosQuery.Get_Documentos()
        const response = await this.apiService.Query([query], {objParam}, this.httpOptions)
        this.subjectService.subject_Exibindo_Loading.next(false)
        return response.documentos_qualidade
    }

    async Get_GrupoCEQ(){
        
        this.subjectService.subject_Exibindo_Loading.next(true)
        const query = this.documentosQuery.Get_GrupoCEQ()
        const response = await this.apiService.Query([query], null, this.httpOptions)
        this.subjectService.subject_Exibindo_Loading.next(false)
        return response.grupoceq
    }
}
