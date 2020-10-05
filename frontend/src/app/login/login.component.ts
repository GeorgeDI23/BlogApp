import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) {
  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onClickSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value.userName, this.loginForm.value.password)
      const idToken = sessionStorage.getItem("id_token");
      this.router.navigate(['/home']);
    }
  }

  get userName(){
    return this.loginForm.get('userName');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
