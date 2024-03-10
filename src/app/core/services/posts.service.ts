import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs'
// interfaces 
import { Post } from '../interfaces/post.interface'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private firestoreService: AngularFirestore) { }

  getFeaturedPosts() {
    return this.firestoreService.collection('posts', ref => ref.where('isFeatured', '==', true)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const postId = action.payload.doc.id;
          const postData = action.payload.doc.data()
          return { postId, postData } as Post
        })
      })
    )
  }
}
