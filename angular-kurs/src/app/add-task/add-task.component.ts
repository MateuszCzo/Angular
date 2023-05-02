import { Component } from '@angular/core';
import { TasksServices } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTask: string = '';

  constructor(private taskService: TasksServices) {
  }

  add() {
    const task: Task = {name: this.newTask, created: new Date()};
    this.taskService.add(task);
    this.newTask = '';
  }
}