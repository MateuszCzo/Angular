import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() tasks: Array<string> = [];
  @Output() eventTask = new EventEmitter<string>();

  action(task: string) {
    this.eventTask.emit(task);
  }
}