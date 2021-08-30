import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  arrItens=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  constructor() { }

  ngOnInit(): void {
  }

}
