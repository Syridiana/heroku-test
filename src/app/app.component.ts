import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  edadUno = 0;
  edadDos = 0;
  promedio = 0;

  constructor(private authService: AuthenticationService, private usuarioService: Usuario, public usuarioActual: Usuario) {
    this.usuarioActual =  new Usuario;
    this.usuarioActual.email = usuarioService.email;
    this.usuarioActual.password = usuarioService.password;
  }

  calcular(){
    this.promedio = (this.edadUno + this.edadDos)/2;
  };

  limpiar(){
    this.edadDos = 0;
    this.edadUno = 0;
    this.promedio = 0;
  };
}
