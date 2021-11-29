import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
    selector: 'itens-ceq',
    templateUrl: './itens-ceq.component.html',
    styleUrls: ['./itens-ceq.component.scss']
})

export class ItemsCEQComponent {

    @Input() subgrupos = []
    open: boolean
    @Input() nm_Item: string
    @Input() item: string

    Mudar_Estado(item: any): void {
        if (item.subgrupos != 0) {
            item.open = !item.open
        }
    }
}
