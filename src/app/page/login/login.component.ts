import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/servicios/usuario.service';
import { AuthenticationService } from 'src/app/servicios/auth.service';
import { gsap } from "gsap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  pass = '';

  constructor(private routes: Router, private authService: AuthenticationService, private usuarioService:Usuario, private usuarioActual: Usuario) { 
    this.usuarioActual = usuarioService;
  }

  tl = gsap.timeline({paused:true});

  ngOnInit(): void {

  }

  createTl(){
    this.tl.to('#inBtn', {duration: .5, yoyo: true, repeat: 1, y:-5, ease: "back.out(4)"})
  }
  playTlIntn(){
    this.createTl();
    this.tl.play();
  }
  
  siguiente(){
  /*   this.service.nombreUsuario="Laala"; */
    console.log('siguiente');
    /* var modelo = this; */
   /*  this.routes.navigate(['home']); */
    setTimeout(() => {
      this.routes.navigate(['home']);
    }, 2000);
  }

  signUp() {
    this.authService.SignUp(this.email, this.pass);
    }
    
    signIn() {
    this.authService.SignIn(this.email, this.pass);

    }
    
    signOut() {
    this.authService.SignOut();
    }
}
