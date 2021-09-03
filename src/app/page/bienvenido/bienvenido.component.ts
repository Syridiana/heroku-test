import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor(private service:UsuarioService) { 
    this.usuarioActual = service.nombreUsuario;
   }

   usuarioActual : string;
  ngOnInit(): void {
    
  }

}
