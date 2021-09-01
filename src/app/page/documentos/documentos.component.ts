import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

  nm_search: string 

  ArrayLista = [

    { nome: "Documentos do SGQ", }, 
    { nome: "Linhas de Cuidados", }, 
    { nome: "Mapa de Processo HU", }, 
    { nome: "Documentos da Acreditação", }, 
    { nome: "Protocolos Médicos", }, 
    { nome: "Normas de Especialidade", }, 
    { nome: "Segurança do Paciente", }, 
 
  ]

  ArrayDocumentos = [

    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/pdf.svg", nm_Documento: "Gerenciamento de Demandas de TI", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "IT-NF-001" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/pdf.svg", nm_Documento: "Sistemática de Backup", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "PR-NF-004" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/pdf.svg", nm_Documento: "Aquisição de Equipamentos na Modalidade Leasing Operacional - Tecnologia da Informação", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "IT-NF-004" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/pdf.svg", nm_Documento: "Tabela de Registro: Tecnologia de Informação", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "OD-NF-001" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/pdf.svg", nm_Documento: "Aquisição de Equipamentos em Regime de Leasing Operacional", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "PR-NF-005" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/pdf.svg", nm_Documento: "Plano de Continuidade de Negócio", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "IT-NF-005" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/icondoc.svg", nm_Documento: "Levantamento de Requisitos (Requisição de Mudanças)", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "FM-INF-002" },
    { nm_Processo: " Tecnologia da Informação ", nm_Caminho_Imagem: "assets/imagens/pdf.svg", nm_Documento: "Política de Segurança de Informação", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "POL-DIR-007" },


  ]

  ArrayTitulos = [
    { nm_Titulo: "", nm_Classe: "md:w-1/12"},
    { nm_Titulo: "Nome", nm_Classe: "md:w-6/12"},
    { nm_Titulo: "Processos", nm_Classe: "md:w-2/12"},
    { nm_Titulo: "Data", nm_Classe: "md:w-1/12"},
    { nm_Titulo: "Código", nm_Classe: "md:w-2/12"},
    
  ]

  lista = [
    { nm_Documento: "SGQ" },
    { nm_Documento: "Linha de Cuidados" },
    { nm_Documento: "Mapa de processos HU" },
    { nm_Documento: "Documentos de Acreditação" },
    { nm_Documento: "Protocolos Médicos" },
    { nm_Documento: "Normas de Especialidade" },
    { nm_Documento: "Segurança do Paciente" }
  ];

  lista2 = [
    { nm_Documento: "Unimed Matriz" },
    { nm_Documento: "Hospital Unimed" }
  ]

  lista3 = [
    {nm_Documento: "Objetivos Operacionais"}
  ]

  sm_Mostrarmodal: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  buscar() { 
    console.log(this.nm_search)
    this.ArrayDocumentos = this.ArrayDocumentos.filter(doc=> doc.nm_Documento.toUpperCase().indexOf(this.nm_search.toUpperCase())>0)
  }
}
