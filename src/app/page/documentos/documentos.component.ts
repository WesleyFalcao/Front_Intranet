import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

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

    { nm_Processo: " Tecnologia da Informação ", nm_Documento: "Gerenciamento de Demandas de TI", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "IT-NF-001" },
    { nm_Processo: " Tecnologia da Informação ", nm_Documento: "Sistemática de Backup", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "PR-NF-004" },
    { nm_Processo: " Tecnologia da Informação ", nm_Documento: "Aquisição de Equipamentos na Modalidade Leasing Operacional - Tecnologia de Informação", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "IT-NF-004" },
    { nm_Processo: " Tecnologia da Informação ", nm_Documento: "Tabela de Registro: Tecnologia de Informação", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "OD-NF-001" },
    { nm_Processo: " Tecnologia da Informação ", nm_Documento: "Aquisição de Equipamentos em Regime de Leasing Operacional", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "PR-NF-005" },
    { nm_Processo: " Tecnologia da Informação ", nm_Documento: "Plano de Continuidade de Negócio", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "IT-NF-005" },
    { nm_Processo: " Tecnologia da Informação ", nm_Documento: "Levantamento de Requisitos (Requisição de Mudanças)", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "FM-INF-002" },
    { nm_Processo: " Tecnologia da Informação ", nm_Documento: "Política de Segurança de Informação", nr_Revisao: 0, dt_Revisao: "2021-08-30", nm_Codigo: "POL-DIR-007" },

  ]

  ArrayTitulos = [

    { nm_Titulo: "Nome"},
    { nm_Titulo: "Processos"},
    { nm_Titulo: "Código"},
    { nm_Titulo: "Revisão"},
    { nm_Titulo: "Data"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
