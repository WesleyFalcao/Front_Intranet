import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalBackgroundComponent } from './modal-background.component';

@NgModule({
    declarations: [
        ModalBackgroundComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    exports: [
        ModalBackgroundComponent,
    ]
})
export class ModalBackgroundModule { }
