import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    proffesion = 'programista';
    skill = 'Angular';

    constructor() {
    }

    saveP(event : any) {
      this.proffesion = event.target.value;
    }

    saveS(event : any) {
      this.skill = event.target.value;
    }

}