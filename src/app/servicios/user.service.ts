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
export class UserService {
  private messagesCollection: AngularFirestoreCollection<PuntajeI>;
  private nameCollectionDB = 'puntajes';

  public currentUser!: UserI | null;
  public chats: PuntajeI[] = [];

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.messagesCollection = afs.collection<PuntajeI>(
      this.nameCollectionDB,
      (ref) => ref.orderBy('createdAt', 'desc').limit(6)
    );

    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }

  loadAllMessages() {
    return this.messagesCollection.valueChanges().pipe(
      map((messages: PuntajeI[]) => {
        this.chats = [];

        for (const message of messages) {
          this.chats.unshift(message);
        }

        return this.chats;
      })
    );
  }

  async addPuntaje(textMessage: number) {
    try {
      const message: PuntajeI = {
        useruid: this.currentUser?.uid,
        userEmail: this.currentUser?.email,
        puntaje: textMessage,
        createdAt: new Date().getTime(),
        dateString: new Date().toLocaleTimeString()
      };

      return await this.messagesCollection.add(message);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
}