import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsCEQComponent } from './itens-ceq.component';

@NgModule({
    declarations: [
        ItemsCEQComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    exports: [
        ItemsCEQComponent,
    ]
})
export class ItemsCEQModule { }
