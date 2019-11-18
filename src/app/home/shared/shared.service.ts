import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebasePath } from 'src/app/core/shared/firebase-path';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private db: AngularFireDatabase) { }


  getAll() {
    return this.db.list(FirebasePath.PRODUTOS, q => {

      return q.orderByChild('produtosDestaque').equalTo('sim');

    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
      })
    )
  }
}
