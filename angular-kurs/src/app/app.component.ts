import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisabled = true;
  colorClass = 'color';
  errorText = '';

  onFocus() {
    this.colorClass = 'color2';
  }

  onClick(event: MouseEvent | KeyboardEvent) {
    console.log(event);
  }

  onMouseMove(event: MouseEvent) {
    console.log(event.clientX + ' ' + event.clientY);
  }

  onPaste(event: ClipboardEvent) {
    console.log(event);
    this.errorText = 'do not paste';
  }

  change() {
    this.isDisabled = !this.isDisabled;
  }
}