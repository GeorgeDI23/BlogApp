import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-profile',
  inputs: ['model'],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName = '';
  lastName = '';
  userName = '';
  base64Image: string = " ";
  profile: Profile = <any>{};
  isReadOnly: boolean;
  loggedInUserName: string='';


  constructor(private location: Location, private domSanitizer: DomSanitizer,
                private profileService: ProfileService, private http: HttpClient,
                private authService: AuthService, private router: Router) {
  }

  async ngOnInit(){
    if(this.authService.isLoggedOut()){
      this.router.navigate(['/login']);
    }
    this.loggedInUserName = sessionStorage.getItem("username");
    this.getProfile();
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {

        this.base64Image = event.target.result as string;
      }
    }
  }

  public delete(){
    this.base64Image = null;
  }

  onSave(){
    this.postProfile();
    this.isReadOnly = true;
  }

  goBack(): void {
    this.location.back();
  }

  postProfile(): void {
    this.profileService.postProfile({
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.loggedInUserName,
      profileImageData: this.base64Image
    }).subscribe(profile => this.profile = profile);
  }

  getProfile(){
    this.profileService.getProfile(this.loggedInUserName)
      .subscribe(profile => {
        this.firstName = profile.firstName;
        this.lastName = profile.lastName;
        this.base64Image = profile.profileImageData;
      });
      if(this.profile.firstName == ""){
        this.isReadOnly = false;
      }
  }

}
