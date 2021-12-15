import { PaginatedFormParams } from "../genericos/paginated.model";

export class DocumentosParams extends PaginatedFormParams{
    
    nm_Search: string
    cd_Setor_CEQ: number
}