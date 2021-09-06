import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/servicios/usuario.service';

@Injectable({
    providedIn: 'root'
  })

export class  AuthenticationService{
userData: Observable<firebase.User | null>;

constructor(private angularFireAuth: AngularFireAuth, private usuarioService: Usuario) {
this.userData = angularFireAuth.authState;
}

/* Sign up */
SignUp(email: string, password: string) {
this.angularFireAuth.createUserWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully signed up!', res);
this.usuarioService.email = email;
this.usuarioService.password = password;
console.log(this.usuarioService);
})
.catch(error => {
console.log('Something is wrong:', error.message);
});
}

/* Sign in */
SignIn(email: string, password: string) {
this.angularFireAuth
.signInWithEmailAndPassword(email, password)
.then(res => {
console.log('You are in!');
this.usuarioService.email = email;
this.usuarioService.password = password;
console.log(this.usuarioService);
})
.catch(err => {
console.log('Something went wrong:',err.message);
});
}

/* Sign out */
SignOut() {
this.angularFireAuth
.signOut();
this.usuarioService.email = '';
this.usuarioService.password = '';
console.log(this.usuarioService);
}
}