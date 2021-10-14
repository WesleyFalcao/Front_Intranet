import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterNamePipe } from './first-letter-name.pipe';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    FirstLetterNamePipe,
    CamelCasePipe
  ],
  imports: [
    CommonModule
  ],
   exports: [
    FirstLetterNamePipe,
    CamelCasePipe
   ]
})
export class PipesModule { }
