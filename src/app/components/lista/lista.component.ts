import { Component, OnInit, Input } from '@angular/core';
import { Documento } from 'src/app/models/documento/documento';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() objArrayDocumentos: Documento[] = []

  @Input() nm_Titulo: string = ''


  //Numero = nr, Nome = nm, array = objArray, objeto = obj, Tipo = tp, Data = dt, Data hora = dh, boolean = b, Sim Nao = sn

  constructor() {}

  ngOnInit(): void {

  }

}
