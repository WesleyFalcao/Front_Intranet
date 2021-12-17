import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild, NgZone, Input, EventEmitter, Output} from '@angular/core';
import { filter, map, pairwise, throttleTime } from 'rxjs/operators';
import { CamposListagem } from 'src/app/models/listagem/campos-listagem.model';

@Component({
  selector: 'app-listagem-virtual',
  templateUrl: './listagem-virtual.component.html',
  styleUrls: ['./listagem-virtual.component.scss']
})

export class ListagemVirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) scroller: CdkVirtualScrollViewport;
  @Input() objArrayCampos: CamposListagem[] = []
  @Input() objArrayItems = []
  @Input() nr_Page: number
  @Output() onClickRow = new EventEmitter()
  @Output() onChangePage = new EventEmitter()

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {

    this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset('bottom')),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
      throttleTime(200)
    ).subscribe(() => {
      this.ngZone.run(async() => {
        this.nr_Page++
        this.onChangePage.emit(this.nr_Page);  //sempre que atualizar a lista tem que retornar uma nova instancia da lista
      });
    })
  }

  Get_Card(item: any){
    this.onClickRow.emit(item)
  }

}
