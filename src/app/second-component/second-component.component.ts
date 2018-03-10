import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styles: [`
  p{
    background-color: aquamarine;
    color: yellow;
    border: 1px solid seagreen;
  }
  `]
})
export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
