import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalService } from './modal.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalContainerComponent
  ],
  entryComponents: [
    ModalContainerComponent
  ]
})
export class ModalServiceModule {
  static forRoot() {
    return {
      ngModule: ModalServiceModule,
      providers: [
        ModalService
      ]
    }
  }
}
