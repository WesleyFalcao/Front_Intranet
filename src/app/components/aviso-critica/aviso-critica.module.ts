import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { ModalBackgroundModule } from '../modal-service/modal-background/modal-background.module';
import { AvisoCriticaComponent } from './aviso-critica.component';

@NgModule({
    declarations: [
        AvisoCriticaComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        ModalBackgroundModule
    ],
    providers: [],
    exports: [
        AvisoCriticaComponent,
    ]
})
export class AvisoCriticaModule { }
