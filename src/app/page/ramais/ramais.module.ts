import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RamaisComponent } from './ramais.component';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FirstLetterNamePipe } from 'src/app/pipes/first-letter-name.pipe';
import { SearchBarModule } from 'src/app/components/search-bar/searchbar.module';

@NgModule({
  declarations: [RamaisComponent, ScrollDirective,],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    ScrollingModule,
    SearchBarModule,

  ],
  exports: [
    RamaisComponent
  ]
})
export class RamaisModule{}
