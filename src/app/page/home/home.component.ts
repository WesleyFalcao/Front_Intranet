import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
    {nm_Documento: "Objetivos Operacionais"},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
