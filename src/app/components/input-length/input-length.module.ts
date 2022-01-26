import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputLengthComponent } from './input-length.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputLengthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    InputLengthComponent,
  ]
})
export class InputLengthModule { }
