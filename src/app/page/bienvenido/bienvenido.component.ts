import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor(private usuarioService:Usuario, public usuarioActual: Usuario) { 
    this.usuarioActual =  new Usuario;
    this.usuarioActual.email = usuarioService.email;
    this.usuarioActual.password = usuarioService.password;
   }


  ngOnInit(): void {
    
  }

}
