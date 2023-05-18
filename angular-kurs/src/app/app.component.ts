import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService: HttpService) {
  }

  getPosts() {
    this.httpService.getPosts().subscribe(
      (posts: Array<Post>) => { console.log(posts); },
      (err: HttpErrorResponse) => { console.log(`${ err }: retried 2 times`) }
    );
  }

  getPost() {
    let postId = 1;
    this.httpService.getPost(postId).subscribe(post => {
      console.log(post);
    });
  }

  getPostByUser() {
    let userId = 1;
    this.httpService.getPostByUser(userId).subscribe(posts => {
      console.log(posts);
    });
  }

  addPost() {
    const post: Post = ({
      userId: 1,
      title: "My post",
      body: "First post in angular!",
    })

    this.httpService.addPost(post).subscribe(post => {
      console.log(post);
    });
  }

  updatePost() {
    const post: Post = ({
      userId: 1,
      id: 1,
      title: "My post",
      body: "Update post in angular!",
    })

    this.httpService.updatePost(post).subscribe(post => {
      console.log(post);
    });
  }

  deletePost() {
    this.httpService.deletePost(1).subscribe(post => {
      console.log(post);
    });
  }

  changePost() {
    const post: Post = ({
      id: 1,
      body: "Change post in angular!",
    })

    this.httpService.changePost(post).subscribe(post => {
      console.log(post);
    });
  }
}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}