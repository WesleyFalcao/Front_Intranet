import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

  nm_search: string


  ArrayDocumentos = [

    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/PDF-purpe.svg", nm_Documento: "Gerenciamento de Demandas de TI", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "IT-NF-001" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/PDF-purpe.svg", nm_Documento: "Sistemática de Backup", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "PR-NF-004" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/PDF-purpe.svg", nm_Documento: "Aquisição de Equipamentos na Modalidade Leasing Operacional - Tec. Informação", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "IT-NF-004" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/PDF-purpe.svg", nm_Documento: "Tabela de Registro: Tecnologia de Informação", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "OD-NF-001" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/PDF-purpe.svg", nm_Documento: "Aquisição de Equipamentos em Regime de Leasing Operacional", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "PR-NF-005" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/PDF-purpe.svg", nm_Documento: "Plano de Continuidade de Negócio", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "IT-NF-005" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/Doc-Purpe.svg", nm_Documento: "Levantamento de Requisitos (Requisição de Mudanças)", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "FM-INF-002" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/PDF-purpe.svg", nm_Documento: "Política de Segurança de Informação", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "POL-DIR-007" },


  ]

  ArrayTitulos = [
    { nm_Titulo: "", nm_Classe: "md:w-1/12" },
    { nm_Titulo: "Nome", nm_Classe: "md:w-6/12" },
    { nm_Titulo: "Processos", nm_Classe: "md:pl-8 lg:pr-14 xl:pl-12 md:w-2/12" },
    { nm_Titulo: "Data", nm_Classe: "xl:mr-2 md:w-1/12" },
    { nm_Titulo: "Código", nm_Classe: "lg:pr-8 md:w-2/12" },

  ]

  lista = [
    {
      nm_Documento: "SGQ", open: false, items: [
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },

      ]
    },

    {
      nm_Documento: "Linha de Cuidados", open: false, items: [
        { nm_Documento: "teste" },
      ]
    },

    {
      nm_Documento: "Documentos de Acreditação", open: false, items: [
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
      ]
    },

    {
      nm_Documento: "Protocolos Médicos", open: false, items: [
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
        { nm_Documento: "teste" },
      ]
    },

    {
      nm_Documento: "Normas de Especialidade", open: false, items: [
        { nm_Documento: "teste" },
      ]
    },


    { nm_Documento: "Mapa de processos HU", open: false, items: [] },

    { nm_Documento: "Segurança do Paciente", open: false, items: [] }
  ];

  lista2 = [
    { nm_Documento: "Unimed Matriz" },
    { nm_Documento: "Hospital Unimed" }
  ]

  lista3 = [
    { nm_Documento: "Objetivos Operacionais" }
  ]

  b_Mostrar_Modal: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  mudar_estado(item: any){
    if(item.items.length !=0){
      item.open =!item.open
    }
  }

  buscar() {
    console.log(this.nm_search)
    this.ArrayDocumentos = this.ArrayDocumentos.filter(doc => doc.nm_Documento.toUpperCase().indexOf(this.nm_search.toUpperCase()) > 0)
  }
}
