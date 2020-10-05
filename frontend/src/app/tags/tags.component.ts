import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { TagsService } from '../tags.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: String[];
  selectedTag: String;
  postsbyTag: Post[];
  base64Image: string = '';
  isHidePosts: boolean;

  constructor(private tagsService : TagsService, private router: Router) { }

  ngOnInit(): void {
    this.getPopularTags();
  }

  getPopularTags(){
    this.tagsService.getPopularTags().subscribe(tag => {
      this.tags = tag;
    })
  }

  onSelect(tag: string): void{
    this.selectedTag = tag;
    this.tagsService.getByTagName(tag).subscribe(post => {
      this.postsbyTag = post;
      this.tagsService.sendPostToTagsPage(this.postsbyTag );
    })
    this.router.navigate(['/tag-page']);
  }
}
