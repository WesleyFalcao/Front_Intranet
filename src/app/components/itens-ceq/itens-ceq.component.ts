import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'itens-ceq',
    templateUrl: './itens-ceq.component.html',
    styleUrls: ['./itens-ceq.component.scss']
})

export class ItemsCEQComponent {

    @Input() subgrupos = []
    open: boolean = false
    @Input() nm_Item: string
    @Output() onClick = new EventEmitter<boolean>();

    Mudar_Estado(): void {
        if (this.subgrupos.length > 0){
            this.open = !this.open
            this.onClick.emit(this.open)
        }
    }
}
