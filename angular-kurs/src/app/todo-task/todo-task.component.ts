import { Component } from '@angular/core';
import { TasksServices } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  //encapsulation: ViewEncapsulation.None     // css
})
export class TodoTaskComponent {

  tasksList: Array<Task> = [];

  constructor(private taskService: TasksServices) {
    this.taskService.getTasksListObs()
      .subscribe((tasks: Array<Task>) => {
        this.tasksList = tasks.filter(t => !t.isDone);
      });
  }

  remove(task : Task) {
    this.taskService.remove(task);
  }

  done(task : Task) {
    this.taskService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >=5 ? 'red' : 'green';
  }
}