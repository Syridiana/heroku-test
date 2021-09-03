import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
myUsuario: Usuario =  new Usuario();

  ngOnInit(): void {
  }

}
