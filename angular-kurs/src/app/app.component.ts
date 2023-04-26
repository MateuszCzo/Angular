import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lorem ipsum...';
  dog = new Dog('Reksio');
  show = true;

  ngOnInit(): void {
  }

  changeTitle() {
    this.title = 'Lorem ipsum 2...';
  }

  changeDog() {
    //this.dog.name = 'Pluto'; // nie zadziala ngOnChanges w komponencie child
    this.dog = new Dog('Pluto');
  }

  nothing() {
  }

  destroy() {
    this.show = !this.show;
  }
}

class Dog {
  constructor(public name: string) {
  }
}