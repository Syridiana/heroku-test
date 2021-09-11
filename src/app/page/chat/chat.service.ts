import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { UserI } from '../../clases/UserI';
import { MessageI } from './interfaces/message';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messagesCollection: AngularFirestoreCollection<MessageI>;
  private nameCollectionDB = 'messages';

  public currentUser!: UserI | null;
  public chats: MessageI[] = [];

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.messagesCollection = afs.collection<MessageI>(
      this.nameCollectionDB,
      (ref) => ref.orderBy('createdAt', 'desc').limit(6)
    );

    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }

  loadAllMessages() {
    return this.messagesCollection.valueChanges().pipe(
      map((messages: MessageI[]) => {
        this.chats = [];

        for (const message of messages) {
          this.chats.unshift(message);
        }

        return this.chats;
      })
    );
  }

  async addMessage(textMessage: string) {
    try {
      const message: MessageI = {
        uid: this.currentUser?.uid,
        name: this.currentUser?.email,
        message: textMessage,
        createdAt: new Date().getTime(),
        image: '../../assets/img/logo.svg',
        dateString: new Date().toLocaleTimeString()
      };

      return await this.messagesCollection.add(message);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
}