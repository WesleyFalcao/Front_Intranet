import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

    constructor(private router: Router, private location:Location) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        window.scrollTo(0, 0);
    };

    Voltar() {
        this.location.back()
        
    }
}