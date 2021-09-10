import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() gameNameRecibido:string;
  @Input() descripcionJuegoRecibida:string;
  @Input() linkJuegoRecibido:string;
  constructor() { 
    this.gameNameRecibido = "";
    this.descripcionJuegoRecibida = "";
    this.linkJuegoRecibido = "";
  }

  ngOnInit(): void {
  }

}
