import { Component, Input, SimpleChanges } from '@angular/core';
import { Post } from '../../core/interfaces/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  post: Post
  @Input() postToGetFromParent: Post;

  ngOnInit() {
    // this.posts = this.postsToGetFromParent
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['postToGetFromParent'] && changes['postToGetFromParent'].currentValue) {
      this.post = changes['postToGetFromParent'].currentValue;
    } // !

  }

  toHtml(htmlText: any) {
    return document.createElement(htmlText)
  }
}

/* 
!1 
- In case getting async data from the parent component by content projection, sometimes the data comes after the input variable is being declared so it defaults to undefined
, to make sure this value changes to the received data we use the noOnChanges hook 
*/