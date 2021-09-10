import { Component } from '@angular/core';
import { Usuario } from './servicios/usuario.service';


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


  constructor(private usuario: Usuario) {
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
