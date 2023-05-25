import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../models/task";
import { HttpService } from "./http.service";

@Injectable()
export class TasksServices {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private http: HttpService) {
    this.http.getTasks().subscribe(list => {
      this.tasksListObs.next(list);
    })
  }

  add(task: Task) {
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
  }

  remove(task : Task) {
    const list = this.tasksListObs.getValue().filter(e => e.name !== task.name);
    this.tasksListObs.next(list);
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

  saveTasksInDb() {
    this.http.saveTasks(this.tasksListObs.getValue());
  }
}