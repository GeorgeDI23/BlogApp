import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownPipe } from './markdown.pipe';
import { NewPostComponent } from './new-post/new-post.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { TagsComponent } from './tags/tags.component';
import { TagPageComponent } from './tag-page/tag-page.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    ProfileComponent,
    MarkdownPipe,
    NewPostComponent,
    LoginComponent,
    RegisterComponent,
    TagsComponent,
    TagPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
