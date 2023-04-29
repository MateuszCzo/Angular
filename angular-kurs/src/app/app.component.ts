import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasksList = ['task1', 'task2', 'task3'];

  @ViewChild('childRef') childComponent!: ChildComponent;

  @ViewChild('inputText') inputText!: ElementRef;

  selected(task: string): void {
    console.log(task);
  }

  add(task: HTMLInputElement) {
    this.tasksList.push(task.value);
    //this.childComponent
    //this.inputText
  }
}