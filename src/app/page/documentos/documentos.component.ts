import { transition } from '@angular/animations';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DocumentosService } from './documentos.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

  nm_search: string
  nm_searchInput = new FormControl()

  ArrayDocumentos = []

  ArrayTitulos = [
    { nm_Titulo: "", nm_Classe: "w-1/12"},
    { nm_Titulo: "Nome", nm_Classe: "w-6/12 lg:pl-16 xl:pl-20"},
    { nm_Titulo: "Processos", nm_Classe: "w-2/12 lg:pl-1"},
    { nm_Titulo: "Data", nm_Classe: "w-1/12 xl:mr-4"},
    { nm_Titulo: "Código", nm_Classe: "w-2/12 lg:pl-9 xl:mr-9"},

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

  constructor(
    private documentosService : DocumentosService
  ) {}

  ngOnInit(): void {

    this.nm_searchInput.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(async(input) =>{
      this.Buscar()
    }
    )}

  mudar_estado(item: any){
    if(item.items.length !=0){
      item.open =!item.open
    }
  } 
  
  async Buscar() {
    console.log(this.nm_search)
    this.ArrayDocumentos = await this.documentosService.Get_Documentos()
    
  }

  Mostrar_Modal(){
    this.b_Mostrar_Modal=true
  }
 
}
