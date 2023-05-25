import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/task'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly url = '';
  readonly param = new HttpParams().set('apiKey', '');

  constructor(private http: HttpClient) {
    this.getTask();
  }

  getTask() {
    this.http.get(this.url, { params: this.param })
      .subscribe(tasks => {
        console.log(tasks);
      })
  }

  saveTasks(list: Array<Task>) {
    this.http.post(this.url, list, { params: this.param })
      .subscribe(data => {
        console.log(data);
      });
  }
}
