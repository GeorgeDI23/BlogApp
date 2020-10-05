import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

import { HttpClient } from '@angular/common/http';
import { Inject }  from '@angular/core';
import { Router }  from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { PostService } from '../post.service';
import { PostContent } from '../postcontent';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postContent: PostContent = {
    text:'',
    postContentId:'',
    imageKey:'',
    imageData:'',
  }
  post: Post = { userName: '',
              post_Id: '',
              title:'',
              tag:'',
            postContent: this.postContent
            }
  replyPost: Post;

  constructor(@Inject(DOCUMENT) document, private http: HttpClient,
                private router: Router, public _DomSanitizationService: DomSanitizer, private authService: AuthService ) {
  }

  async ngOnInit() {
  }

  onClickSubmit(){
    if(this.authService.isLoggedIn()){
      const accessToken = sessionStorage.getItem("id_token");
      this.http.post<Post>("http://gjblog-env.eba-gzw7n3uy.us-east-2.elasticbeanstalk.com/blog/authenticatedNew", this.post, {
        headers: {Authorization: 'Bearer ' + accessToken}
      }).subscribe((data: any) => {
        this.replyPost = data
      }, (err) => {
        console.error(err);
      });
      this.router.navigate(['/home']);
    } else {
      this.http.post<Post>("http://gjblog-env.eba-gzw7n3uy.us-east-2.elasticbeanstalk.com/new", this.post
      ).subscribe((data: any) => {
        this.replyPost = data
      }, (err) => {
        console.error(err);
      });
      this.router.navigate(['/home']);
    }
  }

  onFileChanged(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        const b64image: string | ArrayBuffer = reader.result;
        if (typeof b64image === 'string') {
          this.post.postContent.imageData = b64image.slice(23);
        }
        else {
          this.post.postContent.imageData = b64image.toString().slice(23)}
    };
  }
}
