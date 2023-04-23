import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular";

  dog = new Dog("Reksio", 4);

  showDog() {
    return ' Mój pies to ' + this.dog.name + ' ma ' + this.dog.age + ' lata.'
  }
}

class Dog {
  constructor(public name: string, public age: number) {
  }
}