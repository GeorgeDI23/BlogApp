import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) {
  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password1: ['', Validators.required],
      password2:['', Validators.required],
    }, { validator: checkIfPasswordsEqual });
  }

  onClickSubmit(){
    if(this.loginForm.valid){
      this.authService.createAuthProfile(this.loginForm.value.userName, this.loginForm.value.password1);
      this.router.navigate(['/home']);
    }
  }

  get userName(){
    return this.loginForm.get('userName');
  }

  get password1(){
    return this.loginForm.get('password1');
  }

  get password2(){
    return this.loginForm.get('password2');
  }

}
export function checkIfPasswordsEqual (c: AbstractControl) {
  if (!c.get('password1').value || !c.get('password2').value) {
    return null;
  } else {
    if(c.get('password1').value != c.get('password2').value ){
      return { invalidPasswords: true};
    }
  }
 }
