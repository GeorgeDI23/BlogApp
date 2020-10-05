import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Pigeonhole Blog';

  constructor(private authService:AuthService, private router: Router) { }

  logout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
