import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @ViewChild(PostsComponent) child:PostsComponent

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.child.getPosts();
  }

}
