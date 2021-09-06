import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { LoginComponent } from './page/login/login.component';
import { ErrorComponent } from './page/error/error.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { Ej1Component } from './page/ej1/ej1.component';
import { MenuPrincipalComponent } from './page/menu-principal/menu-principal.component';
import { AuthenticationService } from './servicios/auth.service';

import { environment } from '../environments/environment';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';
import { ToastComponent } from './componentes/toast/toast.component';




@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    QuienSoyComponent,
    Ej1Component,
    MenuPrincipalComponent,
    NavBarComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
