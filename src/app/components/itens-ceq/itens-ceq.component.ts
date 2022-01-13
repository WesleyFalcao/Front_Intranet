import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'itens-ceq',
    templateUrl: './itens-ceq.component.html',
    styleUrls: ['./itens-ceq.component.scss']
})

export class ItemsCEQComponent {

    @Input() subgrupos = []
    @Input() b_Open: boolean = false
    @Input() nm_Item: string
    @Output() onClick = new EventEmitter<boolean>()
    @Input() b_Nao_Fecha: boolean = false

    Mudar_Estado(): void {
        if (this.subgrupos?.length >= 0 && !this.b_Nao_Fecha) {
            this.b_Open = !this.b_Open
            this.onClick.emit(this.b_Open)
        }
    }
}
