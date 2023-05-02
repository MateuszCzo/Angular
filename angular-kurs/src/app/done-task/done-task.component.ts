import { Component } from '@angular/core';
import { TasksServices } from '../services/tasks.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent {

  tasksDone: Array<string> = [];
  
  constructor(private tasksService: TasksServices) {
    this.tasksService.getTasksDoneObs()
      .subscribe((tasks: Array<string>) => {this.tasksDone = tasks});
  }
}