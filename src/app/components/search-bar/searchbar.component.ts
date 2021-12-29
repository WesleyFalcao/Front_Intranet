import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'uni-search-bar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})

export class SearchBarComponent {

    @Input() control = new FormControl()
}
