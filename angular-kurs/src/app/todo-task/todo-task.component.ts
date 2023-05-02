import { Component } from '@angular/core';
import { TasksServices } from '../services/tasks.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  //encapsulation: ViewEncapsulation.None     // css
})
export class TodoTaskComponent {

  tasksList: Array<string> = [];

  constructor(private taskService: TasksServices) {
    this.taskService.getTasksListObs()
      .subscribe((tasks: Array<string>) => {this.tasksList = tasks});
  }

  remove(task : string) {
    this.taskService.remove(task);
  }

  done(task : string) {
    this.taskService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >=5 ? 'red' : 'green';
  }
}