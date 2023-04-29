import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  //encapsulation: ViewEncapsulation.None     // css
})
export class TodoTaskComponent {
  @Input() tasksList: Array<string> = [];
  @Output() emitDone = new EventEmitter<string>();
  @Output() emitRemove = new EventEmitter<string>();

  remove(task : string) {
    this.emitRemove.emit(task);
  }

  done(task : string) {
    this.emitDone.emit(task);
  }

  getColor(): string {
    return this.tasksList.length >=5 ? 'red' : 'green';
  }
}