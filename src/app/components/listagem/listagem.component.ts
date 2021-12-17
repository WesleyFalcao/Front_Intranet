import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CamposListagem } from 'src/app/models/listagem/campos-listagem.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Input() objArrayCampos: CamposListagem[] = []
  @Input() objArrayItems = []
  @Input() nr_Page: number = 0
  @Input() nr_Registros: number = 0
  @Input() nr_Page_Length: number = 0
  @Output() onPageChange = new EventEmitter()
  @Output() onClickRow = new EventEmitter()

  Get_Card(item: any){
    this.onClickRow.emit(item)
  }

  /** @description Avança uma pagina */
  Mudar_Pagina(nr_Page: number) {
    this.nr_Page = nr_Page
    this.onPageChange.emit(nr_Page)
  }
}
