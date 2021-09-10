import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  palabras = [
      ["R", "A", "D", "I", "O", "L", "O", "G", "I", "A"],
      ["C","A","M","A","S","T","R","O"],
      ["A","U","T","O","M","O","T","O","R"],
      ["E","X","P","E","D","I","C","I","O", "N"],
      ["B","A","L","L","E","S","T","A"],
      ["I","N","T","E","R","V","E", "N", "C", "I", "O", "N"]
    ];
    random:any;
    palabra:any;
    palabraGuiones:any;
    fehler = 0;
    letraIngresada:string;
    letraCorrecta: boolean;
    letrasErroneas:any;

  constructor() {
    this.random = Math.floor((Math.random()*(this.palabras.length-1))); 
    this.palabra = this.palabras[this.random];
    this.palabraGuiones = new Array(this.palabra.length);
    this.formarGuiones();
    this.letraIngresada = "";
    this.letraCorrecta = false;
    this.letrasErroneas = [];
   }

   formarGuiones(){
    for (var i = 0; i < this.palabraGuiones.length; i++){
      this.palabraGuiones[i] = "_ ";
    }
   }

   chequearLetraIngresada(letra: string){
    this.letraCorrecta = false;
    this.letraIngresada = letra;
    for (var i = 0; i < this.palabra.length; i++){
      if(this.palabra[i] === this.letraIngresada){
        this.palabraGuiones[i] = this.letraIngresada + " ";
        this.letraCorrecta = true;
      }
    }

    if(!this.letraCorrecta){
      this.letrasErroneas.push(this.letraIngresada);
    }

    if(this.letrasErroneas.length === 6){
      window.alert("Uh...I guess you're dead now.");
    }

    this.chequearPalabraCompleta();

    this.letraIngresada = "";
  }

  chequearPalabraCompleta(){
    let flag = true;
    
    for (var i = 0; i < this.palabra.length; i++){
      if(this.palabraGuiones[i] === "_ "){
        flag = false;
      }
    }
    if(flag){
      window.alert("You win!");
    }

  }

  juegoNuevo(){
    this.random = Math.floor((Math.random()*(this.palabras.length-1))); 
    this.palabra = this.palabras[this.random];
    this.palabraGuiones = new Array(this.palabra.length);
    this.formarGuiones();
    this.letraIngresada = "";
    this.letraCorrecta = false;
    this.letrasErroneas = [];
  }

  ngOnInit(): void {
  }

}
