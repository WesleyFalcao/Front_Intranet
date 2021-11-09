import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/components/button/button.module';
import { ErrorComponent } from './error.component';

@NgModule({
    declarations: [
        ErrorComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
    ],
    providers: [],
})
export class ErrorModule { }
