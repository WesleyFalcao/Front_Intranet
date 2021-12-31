import { Component, ElementRef, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'uni-search-bar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})

export class SearchBarComponent implements OnInit, OnChanges  {

    @ViewChild('search') searchElement: ElementRef
    @Output() onFocus = new EventEmitter()
    @Input() control = new FormControl()
    @Input() b_Focus: boolean = false

    ngOnInit(): void {
        this.b_Focus
        setTimeout(() => {
            this.searchElement.nativeElement.focus()
            console.log(this.searchElement)
        }, 7000);
    }

    ngOnChanges(changes: SimpleChanges){
        if(changes.b_Focus?.currentValue){
            this.searchElement.nativeElement.focus()
        }
    }

}
