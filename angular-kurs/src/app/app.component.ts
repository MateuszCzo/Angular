import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  days = ['poniedzialek', 'wtorek', 'sroda', 'czwartek', 'piatek', 'sobota', 'niedziela'];

  dogs = new Array<Dog>();

  constructor() {
    this.dogs.push(
      new Dog('asd', 4),
      new Dog('sdf', 5),
      new Dog('dfg', 6)
    )
  }

  addDogs() {
    if(this.dogs.length > 0) return;
    this.dogs.push(
      new Dog('asd', 4),
      new Dog('sdf', 5),
      new Dog('dfg', 6)
    )
  }

  removeDogs() {
    if(this.dogs.length == 0) return;
    this.dogs.splice(0, this.dogs.length);
  }

}

class Dog {
  constructor(public name: string, public age: number) {
  }
}