import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/task'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly url = '';
  readonly param = new HttpParams().set('apiKey', '');

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.url, { params: this.param });
  }

  saveTasks(list: Array<Task>) {
    this.http.put(this.url, list, { params: this.param })
      .subscribe(data => {
        console.log(data);
      });
  }
}
