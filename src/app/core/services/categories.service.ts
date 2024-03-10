import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Category } from './../interfaces/post-categories.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestoreService: AngularFirestore) { }

  getCategories() {
    return this.firestoreService.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const id = action.payload.doc.id;
          const data = action.payload.doc.data()
          return { id, data } as Category // not using this type annotation in here was a reason why the response in the component was not compatible for some reason with the 
          // interface , remove it to see

        })
      })
    )
  }
}
