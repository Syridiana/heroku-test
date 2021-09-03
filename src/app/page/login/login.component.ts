import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routes: Router, private service:UsuarioService) { 

  }

  ngOnInit(): void {
  }

  siguiente(){
    this.service.nombreUsuario="Laala";
    console.log('siguiente');
    /* var modelo = this; */
   /*  this.routes.navigate(['home']); */
    setTimeout(() => {
      this.routes.navigate(['home']);
    }, 2000);
  }
}
