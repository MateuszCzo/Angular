import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  inputText = 'tekst';
  maxLength = 5;
  colorClass = 'color';
  isDisabled = false;

  change() {
    this.inputText = 'Zmiana tekstu i koloru';
    this.maxLength = 10;
    this.colorClass = 'color2';
    this.isDisabled = true;
  }

}