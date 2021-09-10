import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayoromenor',
  templateUrl: './mayoromenor.component.html',
  styleUrls: ['./mayoromenor.component.css']
})
export class MayoromenorComponent implements OnInit {
  mazoDeCartas = [
    '1 Bastos', '2 Bastos','3 Bastos','4 Bastos','5 Bastos','6 Bastos','7 Bastos','10 Bastos','11 Bastos','12 Bastos', 
    '1 Oros', '2 Oros','3 Oros','4 Oros','5 Oros','6 Oros','7 Oros','10 Oros','11 Oros','12 Oros', 
    '1 Espadas', '2 Espadas','3 Espadas','4 Espadas','5 Espadas','6 Espadas','7 Espadas','10 Espadas','11 Espadas','12 Espadas', 
    '1 Copas', '2 Copas','3 Copas','4 Copas','5 Copas','6 Copas','7 Copas','10 Copas','11 Copas','12 Copas', 
];
  cartaActual:string;
  cartaAnterior:string;
  valorElegido:string;
  contadorVictorias=0;
  constructor() {
    this.cartaActual = "";
    this.cartaAnterior = "";
    this.elegirProximaCarta();
    this.valorElegido = "";
   }

  elegirProximaCarta(){
    this.cartaAnterior = this.cartaActual;
    let random = Math.floor((Math.random()*(this.mazoDeCartas.length-1))); 
    this.cartaActual = this.mazoDeCartas[random];
  }

  elegirValor(valor:number){
    if(valor==0){
      if(parseInt(this.cartaAnterior.substring(0, 2)) > parseInt(this.cartaActual.substring(0, 2))){
        this.contadorVictorias++;
      }
    }else{
      if(parseInt(this.cartaAnterior.substring(0, 2)) < parseInt(this.cartaActual.substring(0, 2))){
        this.contadorVictorias++;
      }
    }
  }

  ngOnInit(): void {
  }

}
