import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/clases/UserI';
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthenticationService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  public currentUser!: UserI | null;
  public userEmail: any | '';

  constructor(public authService: AuthenticationService,  private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
      if(this.currentUser){
        this.userEmail = this.currentUser.email;
      }
    });
   }



  ngOnInit(): void {
    
  }

}
