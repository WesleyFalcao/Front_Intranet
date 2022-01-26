import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-length',
  templateUrl: './input-length.component.html',
  styleUrls: ['./input-length.component.scss']
})
export class InputLengthComponent implements OnInit {
 
  @Input() inputcontrol = new FormControl()

  constructor() { }

  ngOnInit(): void {
  }

}
