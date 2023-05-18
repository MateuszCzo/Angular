import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService  {

  private url: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<HttpResponse<Response>> {
    return this.http.get<Response>(
      this.url + "/posts",
      { observe: 'response' }
    );
  }

  getPost(id: number): Observable<any> {
    return this.http.get(
      this.url + "/posts/" + id,
      { responseType: 'text' }
    );
  }

  getPostByUser(userId: number): Observable<Array<Post>> {
    const param = new HttpParams().set('userId', userId);
    return this.http.get<Array<Post>>(this.url + '/posts', {params: param});
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url + '/posts', post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(this.url + '/posts/' + post.id, post);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(this.url + '/posts/' + id);
  }

  changePost(post: Post): Observable<Post> {
    return this.http.patch<Post>(this.url + '/posts/' + post.id, post);
  }
}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}