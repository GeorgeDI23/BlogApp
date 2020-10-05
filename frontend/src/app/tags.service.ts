import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, of, throwError, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { Profile } from './profile';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private localBlogUrl = 'http://gjblog-env.eba-gzw7n3uy.us-east-2.elasticbeanstalk.com/blog';

  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPopularTags(): Observable<String[]>{
    return this.http.get<String[]>(this.localBlogUrl + '/popular-tags',this.httpOptions)
    .pipe(retry(2),
    catchError(this.handleError))
  }

  getByTagName(tag: String): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.localBlogUrl}/tag?tag=${tag}`, this.httpOptions)
    .pipe(retry(2),
    catchError(this.handleError))
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  sendData(data: any): any {
    this.change.emit(data);
  }

  sendPostToTagsPage(postsbyTag: Post[]) {
    this.change.emit(postsbyTag);
  }

}

