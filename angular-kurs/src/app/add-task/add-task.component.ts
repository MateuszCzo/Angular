import { Component } from '@angular/core';
import { TasksServices } from '../services/tasks.service';

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
    this.taskService.add(this.newTask);
    this.newTask = '';
  }
}