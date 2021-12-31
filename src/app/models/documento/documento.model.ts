export class Documento{
    cd_Documento: number
    cd_Filial: number
    cd_Processo: number
    cd_Qualidade: number
    cd_Grupo_CEQ: number
    cd_Setor: number
    cd_Setor_CEQ: number
    dt_Documento: Date = new Date()
    nm_Arquivo: number
    nm_Documento: string
    nm_Processo: string
    nr_Grupo: number
    nr_Revisao: number
    _open: boolean


}