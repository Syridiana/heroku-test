import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userDisplayName : any;
  showLogOutMessage = false;

  constructor(public authService: AuthenticationService, private usuarioService: Usuario) {
   }


  ngOnInit(): void {
  }

  signOut() {
    this.authService.SignOut();
    this.showLogOutMessage = true;
    setTimeout(()=>{
      this.showLogOutMessage = false;
    }, 3000)
    }

}
