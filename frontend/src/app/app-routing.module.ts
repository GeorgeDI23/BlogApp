import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NewPostComponent } from './new-post/new-post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TagPageComponent } from './tag-page/tag-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'newpost', component: NewPostComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'tag-page', component: TagPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
