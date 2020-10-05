import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private blogUrl = 'http://gjblog-env.eba-gzw7n3uy.us-east-2.elasticbeanstalk.com/blog';

  constructor(private http: HttpClient) { }

  postProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.blogUrl + '/profile', JSON.stringify(profile),
    {headers: new HttpHeaders({'Content-Type': 'application/json',Authorization: 'Bearer ' + sessionStorage.getItem('id_token')})})
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getProfile(username: string): Observable<Profile> {
    return this.http.get<Profile>(this.blogUrl + '/profile/'+username,
    {headers: new HttpHeaders({'Content-Type': 'application/json',Authorization: 'Bearer ' + sessionStorage.getItem('id_token')})})
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
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
}
