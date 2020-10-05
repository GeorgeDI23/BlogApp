import { Component, Input, Directive, GetTestability, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post: Post[];

  constructor(private postService: PostService, private http: HttpClient) { }

  public getPosts(): void {
    this.postService.getPosts().subscribe(post => this.post = post);
  }

  async ngOnInit(){
    this.getPosts();
  }

}
