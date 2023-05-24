import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../models/task";

@Injectable()
export class TasksServices {
  private tasksList: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      {name: 'task1', created: new Date().toLocaleString(), isDone: false},
      {name: 'task2', created: new Date().toLocaleString(), isDone: false},
      {name: 'task3', created: new Date().toLocaleString(), isDone: false},
      {name: 'task4', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true}
    ];
    this.tasksListObs.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task : Task) {
    this.tasksList = this.tasksList.filter(e => e.name !== task.name);
    this.tasksListObs.next(this.tasksList);
  }

  done(task : Task) {
    task.end = new Date().toLocaleDateString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }
}