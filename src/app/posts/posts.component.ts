import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any[];
  // private url = 'http://jsonplaceholder.typicode.com/posts';
  // use Http module to send request,
  // "get" request return an Observable, it is like Promise,
  // [we will learn Promise and Observable later]
  // Observable has method subscribe() us to notify when response ready,
  // we want the json response,

  // normal way to create class variable and get assign value from constructor param,
  // short hand is add accessor to constructor param, like public or private
  // http: Http;
  // constructor(http: Http) {
  //   this.http = http;
  //   this.http.get(this.url)
  // constructor(private http: Http) {
  constructor(private service: PostService) {
    // http.get(this.url)
    // .subscribe(response => {
    //   // console.log(response.json());
    //   this.posts = response.json();
    // });
  }

  // add error handling to each request,
  // put Expected error in if block with custom error message,
  // put Unexpected error in else block with standard error message,

  // use for initialization,
  // OnInit interface will be called only once after initial our component / data binding,
  // ngOnInit() method for additional initialization,
  // cut and patse get request from constructor to ngOnInit,
  ngOnInit(){
    // this.http.get(this.url)
    this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response.json();
      }, 
      error => {
        // kind like htlp alert message
        alert('An unexpected error occurred');
        console.log(error);
      }
    );
  }
  // "post" request need to send object to server, like a json form object,
  // post return an Observable,
  // since we are using fake server jsonplaceholder, it only response with ID, real server will response more,
  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    // clear input field
    input.value = '';
    // this.http.post(this.url, JSON.stringify(post))
    this.service.createPost(JSON.stringify(post))
    .subscribe(
      response => {
        // console.log(response.json());
        // add the key ID to our post object, 
        // Typescript will check for type, don't use "post.id", either declare like "let post: any" or add key like post['id']
        // add to front of posts array
        post['id'] = response.json().id;
        this.posts.unshift(post);
      }, 
      (error: Response) => {
        if(error.status === 400){
          alert('This post already exist');
        }else{
          // kind like htlp alert message
          alert('An unexpected error occurred');
          console.log(error);
        }
      }
    );
  }
  // put / patch request, 
  //    put to update whole object, most server allow put, object can be very big,
  //    patch to update object property, not all server allow patch, good for debug seeing only changing properties,
  // to update need to identify which data to update, so use each post's id, append after the url,
  // [need to check server document which to use]
  // again using fake server, inspect, network, name, click on item named '1', headers, request method PATCH, request payload {isRead: true}
  // if use put request Payload will be whole object
  updatePost(post){
    // this.http.put(this.url, JSON.stringify(post));
    // this.http.patch(this.url+'/'+post.id, JSON.stringify({ isRead: true }))
    this.service.updatePost(post)
    .subscribe(
      response => {
        console.log(response.json());
      }, 
      error => {
        // kind like htlp alert message
        alert('An unexpected error occurred');
        console.log(error);
      }
    );
  }
  // delete request
  // to delete need to identify which data to delete, so use each post's id, append after the url,
  // when cast error to type Response, code show hints,
  // handle error of data already been deleted
  deletePost(post){
    // this.http.delete(this.url+'/'+post.id)
    this.service.deletePost(post.id)
    .subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      (error: Response) => {
        if(error.status === 404){
          alert('This post already been deleted');
        }else{
          // kind like htlp alert message
          alert('An unexpected error occurred');
          console.log(error);
        }
      }
    );
  }
}
