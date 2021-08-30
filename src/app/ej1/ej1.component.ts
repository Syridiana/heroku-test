import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.component.html',
  styleUrls: ['./ej1.component.css']
})
export class Ej1Component implements OnInit {
  title = 'ejercicio-1';
  edadUno = 0;
  edadDos = 0;
  promedio = 0;

  constructor() { }

  ngOnInit(): void {
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

