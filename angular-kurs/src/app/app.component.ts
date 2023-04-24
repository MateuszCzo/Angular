import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText = 'Pole tekstowe';
  inputText2Way:string = '';
  button = true;
  showClick = '';

  click() {
    this.showClick = 'Przycisk aktywny'
    this.button = false;
  }

}