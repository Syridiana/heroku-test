import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 1';
  edadUno = 0;
  edadDos = 0;
  promedio = 0;
  myUsuario:Usuario;

  constructor() {
    this.myUsuario = new Usuario();
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
