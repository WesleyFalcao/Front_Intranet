import {
    ApplicationRef, ComponentFactory, ComponentFactoryResolver, Injectable, Type
} from '@angular/core';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalRef } from './models/modal-ref.model';
import { OnModal } from './models/modal.interface';


@Injectable({
    providedIn: "root"
})
export class ModalService {

    modals = [];

    private modalContainer: HTMLElement;
    private modalContainerFactory: ComponentFactory<ModalContainerComponent>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef
    ) {
        this.setupModalContainerFactory();
    }

    open<T extends OnModal>(component: Type<T>, inputs: any = {}): ModalRef {
        this.setupModalContainerDiv();

        const modalContainerRef = this.appRef.bootstrap(this.modalContainerFactory, this.modalContainer);

        const modalComponentRef = modalContainerRef.instance.createModal(component);

        if (inputs) {
            modalComponentRef.instance.onInjectInputs(inputs);
        }

        const modalRef = new ModalRef(modalContainerRef, modalComponentRef);

        this.modals.push(modalRef);

        return modalRef;
    }

    public closeAll() {
        try {
            this.modals.forEach(fe => {
                fe.dismiss();
            })
            this.modals = [];
        } catch (error) {

        }
    }

    public hideAll() {
        try {
            this.modals.forEach(fe => {
                fe.modalContainer.show = false;
            })
        } catch (error) {

        }
    }

    public showAll() {
        try {
            this.modals.forEach(fe => {
                fe.modalContainer.show = true;
            })
        } catch (error) {

        }
    }

    private setupModalContainerDiv(): void {
        this.modalContainer = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(this.modalContainer);
    }

    private setupModalContainerFactory(): void {
        this.modalContainerFactory = this.componentFactoryResolver.resolveComponentFactory(ModalContainerComponent);
    }

    private showDialog<T extends OnModal>(component: Type<T>, inputs: any = {}) {
        const modalRef = this.open(component, inputs);
        return modalRef.onResult();
    }

}
