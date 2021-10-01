import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { UserI } from '../clases/UserI';
import { PuntajeI } from '../clases/PuntajeI';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'firebase';


@Injectable({
  providedIn: 'root',
})
export class DBService {
  private puntajesCollection: AngularFirestoreCollection<PuntajeI>;
  private nameCollectionDB = 'puntajes';

  private usuariosCollection: AngularFirestoreCollection<UserI>;
  private nameCollectionDB_2 = 'usuarios';

  public currentUser!: UserI | null;
  public listaPuntajes: PuntajeI[] = [];
  public listaUsuarios: UserI[] = [];
  public usuarioId='';

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.puntajesCollection = afs.collection<PuntajeI>(
      this.nameCollectionDB
    );

    this.usuariosCollection = afs.collection<UserI>(
      this.nameCollectionDB_2
    );

    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }

  loadAllPuntajes() {
    return this.puntajesCollection.valueChanges().pipe(
      map((puntajes: PuntajeI[]) => {
        this.listaPuntajes = [];

        for (const score of puntajes) {
          this.listaPuntajes.unshift(score);
        }

        return this.listaPuntajes;
      })
    );
  }

  async addPuntaje(puntaje: number) {
    try {
      const puntajes: PuntajeI = {
        useruid: this.currentUser?.uid,
        userEmail: this.currentUser?.email,
        puntaje: puntaje,
        createdAt: new Date().getTime(),
        dateString: new Date().toLocaleTimeString()
      };

      return await this.puntajesCollection.add(puntajes);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  loadAllUsuarios() {
    return this.usuariosCollection.valueChanges().pipe(
      map((usuarios: UserI[]) => {
        this.listaUsuarios = [];

        for (const user of usuarios) {
          this.listaUsuarios.unshift(user);
        }

        return this.listaUsuarios;
      })
    );
  }

  async addUserCollection(email: string, username:string, photoURL:string, puntaje: number) {
    try {
      const user: UserI = {
        uid: this.currentUser?.uid,
        displayName: username,
        email: email,
        photoURL: photoURL,
        puntaje: puntaje
      };

      return await this.usuariosCollection.add(user);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }


  async updatePuntaje(puntaje: number) {
    try {

      if(this.currentUser){
        let nuevoPuntaje=0;
        const docs = this.afs.collection<UserI>(
          this.nameCollectionDB_2).ref.where('email', '==', this.currentUser.email).get();
          (await docs).forEach((doc:any)=>{
            console.log(doc.data().puntaje);
            this.usuarioId = doc.id;
            nuevoPuntaje = doc.data().puntaje + puntaje;
          });
          await this.afs.collection<UserI>(
            this.nameCollectionDB_2).doc(`/${this.usuarioId}`).update({puntaje: nuevoPuntaje});
      }

 
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  public obtenerUsuarios() {
    return this.usuariosCollection.valueChanges() as Observable<UserI[]>;
  }
}