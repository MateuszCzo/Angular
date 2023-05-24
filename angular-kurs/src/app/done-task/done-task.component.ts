import { Component } from '@angular/core';
import { TasksServices } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent {

  tasksDone: Array<Task> = [];
  
  constructor(private tasksService: TasksServices) {
    this.tasksService.getTasksListObs()
      .subscribe((tasks: Array<Task>) => {
        this.tasksDone = tasks.filter(t => t.isDone);
      });
  }
}