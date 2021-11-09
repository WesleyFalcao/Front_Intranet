import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FadeAnimationModal } from 'src/app/app.animations';


@Component({
    selector: 'uni-modal-background',
    templateUrl: './modal-background.component.html',
    styleUrls: ['./modal-background.component.scss'],
    animations: [FadeAnimationModal]
})
export class ModalBackgroundComponent implements OnInit {

    @Input() nm_Icone = ""

    @Output() onCloseModal = new EventEmitter()

    /** @description Controla a animacao de fade */
    b_Animation = false

    constructor() {

    }

    ngOnInit() {
        setTimeout(() => {
            this.b_Animation = true
        });
    }

    Voltar() {
        this.b_Animation = false

        setTimeout(() => {
            this.onCloseModal.emit()
        }, 100);
    }
}
