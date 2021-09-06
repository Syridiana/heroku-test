import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class  AuthenticationService{
userData: Observable<firebase.User | null>;
isLoggedIn : boolean;
email = "";

constructor(private angularFireAuth: AngularFireAuth, private usuarioService: Usuario, private routes: Router,) {
this.userData = angularFireAuth.authState;
this.isLoggedIn = false;
}

/* Sign up */
SignUp(email: string, password: string) {
this.angularFireAuth.createUserWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully signed up!', res);
this.usuarioService.email = email;
this.usuarioService.password = password;
sessionStorage.setItem('loggedUser', email);
this.isLoggedIn = true;
this.email = email;
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
sessionStorage.setItem('loggedUser', email);
this.routes.navigate(['/home']);
this.isLoggedIn = true;
this.email = email;
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
sessionStorage.setItem('loggedUser', '');
this.isLoggedIn = false;
this.email = "";
}
}