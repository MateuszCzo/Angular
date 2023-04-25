import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    tasksList: Array<string> = ['task1', 'task2', 'task3'];

    selected(task: string): void {
      console.log(task);
    }
}