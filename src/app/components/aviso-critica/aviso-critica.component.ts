import { Component, ViewEncapsulation } from '@angular/core';
import { ModalRef } from '../modal-service/models/modal-ref.model';
import { OnModal } from '../modal-service/models/modal.interface';


@Component({
    selector: 'uni-aviso-critica',
    templateUrl: './aviso-critica.component.html',
    styleUrls: ['./aviso-critica.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AvisoCriticaComponent implements OnModal {

    /** @description Motivos de Critica do Erro da API  */
    criticas: string[];
    visible: boolean;
    modalInstance: ModalRef;

    constructor() {
    console.log("123")
    }

    Voltar() {
        this.dismiss()
    }

    onInjectInputs(inputs: any): void {
        this.criticas = inputs
    }
    close(output?: any): void {
        this.modalInstance.close(output)
    }

    dismiss(output?: any): void {
        this.modalInstance.dismiss(null)
    }
}
