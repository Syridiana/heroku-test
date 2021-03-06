import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { UserI } from '../clases/UserI';
import { PuntajeI } from '../clases/PuntajeI';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private messagesCollection: AngularFirestoreCollection<UserI>;
  private nameCollectionDB = 'usuarios';
  public isUserLoggedIn = false;
  public currentUser!: UserI | null;
  public chats: UserI[] = [];

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.messagesCollection = afs.collection<UserI>(
      this.nameCollectionDB
    );

    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
      if(user){
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  }

  loadAllMessages() {
    return this.messagesCollection.valueChanges().pipe(
      map((messages: UserI[]) => {
        this.chats = [];

        for (const message of messages) {
          this.chats.unshift(message);
        }

        return this.chats;
      })
    );
  }



}