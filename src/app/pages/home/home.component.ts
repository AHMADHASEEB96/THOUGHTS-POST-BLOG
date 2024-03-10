import { Component } from '@angular/core';
// services 
import { PostsService } from './../../core/services/posts.service';
// interfaces 
import { Post } from '../../core/interfaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredPosts: Post[];
  latestPosts: Post[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getFeaturedPosts().subscribe({
      next: (featuredPosts) => {
        if (featuredPosts) {
          this.featuredPosts = featuredPosts
          console.log(this.featuredPosts)
        }
      }
    })
  }
}
