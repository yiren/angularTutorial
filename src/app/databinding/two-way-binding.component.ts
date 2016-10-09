import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  person={
    name:"Goo",
    age:33

  }
  constructor() { }

  ngOnInit() {
  }

}
