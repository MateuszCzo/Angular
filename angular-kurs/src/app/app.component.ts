import { Component } from '@angular/core';
import { TasksServices } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private tasksService: TasksServices) {}

  save() {
    this.tasksService.saveTasksInDb();
  }
}