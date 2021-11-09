import { OnInit } from '@angular/core';
import { ModalRef } from './modal-ref.model';
import { Modal } from './modal.model';

export declare interface OnModal extends Modal {
  visible:boolean;
  modalInstance: ModalRef;
  onInjectInputs(inputs: any): void;
  close(output?: any): void;
  dismiss(output?: any): void;
}
