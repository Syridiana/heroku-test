import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, throwError } from 'rxjs';
import { Usuario } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
import { ErrorMessagesService } from 'src/app/servicios/error-messages.service';
import { SuccessMessageService } from './success-message.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User | null>;
  isLoggedIn: boolean;
  email = "";

  constructor(private angularFireAuth: AngularFireAuth, private usuarioService: Usuario, private routes: Router,
    private errorMessageService: ErrorMessagesService, private successMessageService: SuccessMessageService) {
    this.userData = angularFireAuth.authState;
    this.isLoggedIn = false;
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((res: any) => {
        console.log('You are Successfully signed up!', res);
        this.usuarioService.email = email;
        this.usuarioService.password = password;
        sessionStorage.setItem('loggedUser', email);
        this.isLoggedIn = true;
        this.email = email;
        this.successMessageService.message = 'Successful login! Welcome ' + this.usuarioService.email;
        this.routes.navigate(['/home']);

        setTimeout(() => {
          this.successMessageService.message = "";
        }, 2000);

      })
      .catch((error: any) => {
        this.errorMessageService.message = error.message;

        setTimeout(() => {
          this.errorMessageService.message = '';
        }, 2000);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        console.log('You are in!');
        this.usuarioService.email = email;
        this.usuarioService.password = password;
        sessionStorage.setItem('loggedUser', email);
        this.isLoggedIn = true;
        this.email = email;
        this.successMessageService.message = 'Successful login! Welcome ' + this.usuarioService.email;
        this.routes.navigate(['/home']);

        setTimeout(() => {
          this.successMessageService.message = "";
        }, 2000);
      })
      .catch((error: any) => {
        this.errorMessageService.message = error.message;

        setTimeout(() => {
          this.errorMessageService.message = '';
        }, 2000);
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

    setTimeout(() => {
      this.routes.navigate(['/home']);
    }, 2000);
  }

  
}